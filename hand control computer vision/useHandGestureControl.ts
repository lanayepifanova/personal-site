import { useEffect, useRef, useState, useCallback } from 'react';

interface HandLandmark {
  x: number;
  y: number;
  z: number;
}

interface GestureResult {
  gestures: Array<{
    categoryName: string;
    categoryIndex: number;
    score: number;
    displayName: string;
  }>;
  landmarks: HandLandmark[][];
  worldLandmarks: HandLandmark[][];
  handedness: Array<{ categoryName: string; score: number }>;
}

interface HandPosition {
  x: number;
  y: number;
}

export interface GestureState {
  isActive: boolean;
  handPosition: HandPosition | null;
  isPalmClosed: boolean;
  isIndexPointing: boolean;
  error: string | null;
}

export const useHandGestureControl = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gestureRecognizerRef = useRef<any>(null);
  const animationFrameRef = useRef<number>();
  const [gestureState, setGestureState] = useState<GestureState>({
    isActive: false,
    handPosition: null,
    isPalmClosed: false,
    isIndexPointing: false,
    error: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const lastClickTimeRef = useRef<number>(0);
  const lastScrollTimeRef = useRef<number>(0);
  const cursorSmoothingRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseActivityTimeoutRef = useRef<NodeJS.Timeout>();

  // Initialize MediaPipe
  const initializeMediaPipe = useCallback(async () => {
    try {
      setIsLoading(true);

      // Dynamically import MediaPipe
      const { GestureRecognizer, FilesetResolver } = await import(
        '@mediapipe/tasks-vision'
      );

      const vision = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.8/wasm'
      );

      const recognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            'https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task',
        },
        runningMode: 'VIDEO',
        numHands: 1,
      });

      gestureRecognizerRef.current = recognizer;
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Failed to initialize MediaPipe:', error);
      setGestureState((prev) => ({
        ...prev,
        error: 'Failed to load gesture recognition model',
      }));
      setIsLoading(false);
      return false;
    }
  }, []);

  // Request camera access
  const requestCameraAccess = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
        };
      }

      return true;
    } catch (error) {
      console.error('Camera access denied:', error);
      setGestureState((prev) => ({
        ...prev,
        error: 'Camera access denied. Please enable webcam permissions.',
      }));
      return false;
    }
  }, []);

  // Detect palm closed gesture
  const isPalmClosedGesture = (landmarks: HandLandmark[]): boolean => {
    if (!landmarks || landmarks.length < 21) return false;

    // Thumb tip (4), Index tip (8), Middle tip (12), Ring tip (16), Pinky tip (20)
    const thumbTip = landmarks[4];
    const indexTip = landmarks[8];
    const middleTip = landmarks[12];
    const ringTip = landmarks[16];
    const pinkyTip = landmarks[20];

    // Palm center (9)
    const palmCenter = landmarks[9];

    // Calculate distances from fingertips to palm center
    const thumbDist = Math.sqrt(
      Math.pow(thumbTip.x - palmCenter.x, 2) +
        Math.pow(thumbTip.y - palmCenter.y, 2)
    );
    const indexDist = Math.sqrt(
      Math.pow(indexTip.x - palmCenter.x, 2) +
        Math.pow(indexTip.y - palmCenter.y, 2)
    );
    const middleDist = Math.sqrt(
      Math.pow(middleTip.x - palmCenter.x, 2) +
        Math.pow(middleTip.y - palmCenter.y, 2)
    );
    const ringDist = Math.sqrt(
      Math.pow(ringTip.x - palmCenter.x, 2) +
        Math.pow(ringTip.y - palmCenter.y, 2)
    );
    const pinkyDist = Math.sqrt(
      Math.pow(pinkyTip.x - palmCenter.x, 2) +
        Math.pow(pinkyTip.y - palmCenter.y, 2)
    );

    // If all fingertips are close to palm center, palm is closed
    const threshold = 0.08;
    return (
      thumbDist < threshold &&
      indexDist < threshold &&
      middleDist < threshold &&
      ringDist < threshold &&
      pinkyDist < threshold
    );
  };

  // Detect index finger pointing
  const isIndexPointingGesture = (landmarks: HandLandmark[]): boolean => {
    if (!landmarks || landmarks.length < 21) return false;

    // Index tip (8), Index PIP (6), Index MCP (5)
    const indexTip = landmarks[8];
    const indexPIP = landmarks[6];
    const indexMCP = landmarks[5];

    // Other fingertips
    const middleTip = landmarks[12];
    const ringTip = landmarks[16];
    const pinkyTip = landmarks[20];
    const thumbTip = landmarks[4];

    // Palm center
    const palmCenter = landmarks[9];

    // Index should be extended (far from palm)
    const indexDist = Math.sqrt(
      Math.pow(indexTip.x - palmCenter.x, 2) +
        Math.pow(indexTip.y - palmCenter.y, 2)
    );

    // Other fingers should be curled (close to palm)
    const middleDist = Math.sqrt(
      Math.pow(middleTip.x - palmCenter.x, 2) +
        Math.pow(middleTip.y - palmCenter.y, 2)
    );
    const ringDist = Math.sqrt(
      Math.pow(ringTip.x - palmCenter.x, 2) +
        Math.pow(ringTip.y - palmCenter.y, 2)
    );
    const pinkyDist = Math.sqrt(
      Math.pow(pinkyTip.x - palmCenter.x, 2) +
        Math.pow(pinkyTip.y - palmCenter.y, 2)
    );
    const thumbDist = Math.sqrt(
      Math.pow(thumbTip.x - palmCenter.x, 2) +
        Math.pow(thumbTip.y - palmCenter.y, 2)
    );

    // Index should be extended, others curled
    return (
      indexDist > 0.12 &&
      middleDist < 0.08 &&
      ringDist < 0.08 &&
      pinkyDist < 0.08 &&
      thumbDist < 0.1
    );
  };

  // Simulate mouse click
  const simulateClick = useCallback((x: number, y: number) => {
    const now = Date.now();
    if (now - lastClickTimeRef.current < 300) return; // Debounce clicks
    lastClickTimeRef.current = now;

    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: x,
      clientY: y,
    });

    const element = document.elementFromPoint(x, y);
    element?.dispatchEvent(event);
  }, []);

  // Simulate scroll
  const simulateScroll = useCallback((direction: 'up' | 'down') => {
    const now = Date.now();
    if (now - lastScrollTimeRef.current < 200) return; // Debounce scrolls
    lastScrollTimeRef.current = now;

    const scrollAmount = direction === 'up' ? -50 : 50;
    window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  }, []);

  // Process video frame
  const processFrame = useCallback(() => {
    if (
      !videoRef.current ||
      !gestureRecognizerRef.current ||
      !gestureState.isActive
    ) {
      animationFrameRef.current = requestAnimationFrame(processFrame);
      return;
    }

    try {
      const results = gestureRecognizerRef.current.recognizeForVideo(
        videoRef.current,
        performance.now()
      );

      if (results.landmarks && results.landmarks.length > 0) {
        const landmarks = results.landmarks[0];

        // Get hand position (middle of palm)
        const palmCenter = landmarks[9];
        const x = palmCenter.x * window.innerWidth;
        const y = palmCenter.y * window.innerHeight;

        // Smooth cursor movement
        cursorSmoothingRef.current.x +=
          (x - cursorSmoothingRef.current.x) * 0.3;
        cursorSmoothingRef.current.y +=
          (y - cursorSmoothingRef.current.y) * 0.3;

        // Update cursor position
        const cursor = document.getElementById('hand-cursor');
        if (cursor) {
          cursor.style.left = `${cursorSmoothingRef.current.x}px`;
          cursor.style.top = `${cursorSmoothingRef.current.y}px`;
        }

        // Check gestures
        const isPalmClosed = isPalmClosedGesture(landmarks);
        const isIndexPointing = isIndexPointingGesture(landmarks);

        setGestureState((prev) => ({
          ...prev,
          handPosition: { x: cursorSmoothingRef.current.x, y: cursorSmoothingRef.current.y },
          isPalmClosed,
          isIndexPointing,
        }));

        // Perform actions
        if (isPalmClosed) {
          simulateClick(cursorSmoothingRef.current.x, cursorSmoothingRef.current.y);
        }

        if (isIndexPointing) {
          // Check if pointing up or down based on previous position
          // For now, we'll use a simple heuristic: if hand is moving up, scroll up
          const prevY = cursorSmoothingRef.current.y;
          simulateScroll(y < prevY ? 'up' : 'down');
        }
      }
    } catch (error) {
      console.error('Error processing frame:', error);
    }

    animationFrameRef.current = requestAnimationFrame(processFrame);
  }, [gestureState.isActive, simulateClick, simulateScroll]);

  // Start gesture control
  const startGestureControl = useCallback(async () => {
    if (gestureState.isActive) return;

    setIsLoading(true);

    // Initialize MediaPipe if not already done
    if (!gestureRecognizerRef.current) {
      const initialized = await initializeMediaPipe();
      if (!initialized) {
        setIsLoading(false);
        return;
      }
    }

    // Request camera access
    const cameraGranted = await requestCameraAccess();
    if (!cameraGranted) {
      setIsLoading(false);
      return;
    }

    setGestureState((prev) => ({
      ...prev,
      isActive: true,
      error: null,
    }));

    setIsLoading(false);

    // Start processing frames
    animationFrameRef.current = requestAnimationFrame(processFrame);
  }, [gestureState.isActive, initializeMediaPipe, requestCameraAccess, processFrame]);

  // Stop gesture control
  const stopGestureControl = useCallback(() => {
    setGestureState((prev) => ({
      ...prev,
      isActive: false,
      handPosition: null,
      isPalmClosed: false,
      isIndexPointing: false,
    }));

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }

    const cursor = document.getElementById('hand-cursor');
    if (cursor) {
      cursor.style.display = 'none';
    }
  }, []);

  // Toggle gesture control
  const toggleGestureControl = useCallback(async () => {
    if (gestureState.isActive) {
      stopGestureControl();
    } else {
      await startGestureControl();
    }
  }, [gestureState.isActive, startGestureControl, stopGestureControl]);

  // Detect mouse activity to auto-deactivate
  useEffect(() => {
    const handleMouseMove = () => {
      if (gestureState.isActive) {
        stopGestureControl();
      }

      // Clear existing timeout
      if (mouseActivityTimeoutRef.current) {
        clearTimeout(mouseActivityTimeoutRef.current);
      }

      // Set new timeout to re-enable after inactivity
      mouseActivityTimeoutRef.current = setTimeout(() => {
        // Could re-enable here if desired
      }, 5000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseActivityTimeoutRef.current) {
        clearTimeout(mouseActivityTimeoutRef.current);
      }
    };
  }, [gestureState.isActive, stopGestureControl]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopGestureControl();
      if (gestureRecognizerRef.current) {
        gestureRecognizerRef.current.close();
      }
    };
  }, [stopGestureControl]);

  return {
    videoRef,
    canvasRef,
    gestureState,
    isLoading,
    toggleGestureControl,
    startGestureControl,
    stopGestureControl,
  };
};
