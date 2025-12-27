import { useCallback, useEffect, useRef, useState } from "react";

interface HandLandmark {
  x: number;
  y: number;
  z: number;
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
  const gestureRecognizerRef = useRef<any>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [gestureState, setGestureState] = useState<GestureState>({
    isActive: false,
    handPosition: null,
    isPalmClosed: false,
    isIndexPointing: false,
    error: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const isActiveRef = useRef(false);
  const lastClickTimeRef = useRef<number>(0);
  const lastScrollTimeRef = useRef<number>(0);
  const cursorSmoothingRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const activationTimestampRef = useRef<number>(0);
  const mouseMoveDistanceRef = useRef<number>(0);
  const lastMousePositionRef = useRef<{ x: number; y: number } | null>(null);
  const mouseActivityTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const initializeMediaPipe = useCallback(async () => {
    try {
      setIsLoading(true);

      const { GestureRecognizer, FilesetResolver } = await import(
        "@mediapipe/tasks-vision"
      );

      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.8/wasm"
      );

      const recognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
        },
        runningMode: "VIDEO",
        numHands: 1,
      });

      gestureRecognizerRef.current = recognizer;
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error("Failed to initialize MediaPipe:", error);
      setGestureState((prev) => ({
        ...prev,
        error: "Failed to load gesture recognition model",
      }));
      setIsLoading(false);
      return false;
    }
  }, []);

  const requestCameraAccess = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });

      const video = videoRef.current;
      if (video) {
        video.onloadedmetadata = () => {
          const playPromise = video.play();
          if (playPromise?.catch) {
            playPromise.catch((error) => {
              console.error("Failed to play webcam stream:", error);
              setGestureState((prev) => ({
                ...prev,
                error: "Webcam stream could not start. Please try again.",
              }));
            });
          }
        };
        video.srcObject = stream;
      }

      return true;
    } catch (error) {
      console.error("Camera access denied:", error);
      setGestureState((prev) => ({
        ...prev,
        error: "Camera access denied. Please enable webcam permissions.",
      }));
      return false;
    }
  }, []);

  const isPalmClosedGesture = (landmarks: HandLandmark[]): boolean => {
    if (!landmarks || landmarks.length < 21) return false;

    const thumbTip = landmarks[4];
    const indexTip = landmarks[8];
    const middleTip = landmarks[12];
    const ringTip = landmarks[16];
    const pinkyTip = landmarks[20];
    const palmCenter = landmarks[9];

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

    const threshold = 0.08;
    return (
      thumbDist < threshold &&
      indexDist < threshold &&
      middleDist < threshold &&
      ringDist < threshold &&
      pinkyDist < threshold
    );
  };

  const isIndexPointingGesture = (landmarks: HandLandmark[]): boolean => {
    if (!landmarks || landmarks.length < 21) return false;

    const indexTip = landmarks[8];
    const middleTip = landmarks[12];
    const ringTip = landmarks[16];
    const pinkyTip = landmarks[20];
    const thumbTip = landmarks[4];
    const palmCenter = landmarks[9];

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
    const thumbDist = Math.sqrt(
      Math.pow(thumbTip.x - palmCenter.x, 2) +
        Math.pow(thumbTip.y - palmCenter.y, 2)
    );

    return (
      indexDist > 0.12 &&
      middleDist < 0.08 &&
      ringDist < 0.08 &&
      pinkyDist < 0.08 &&
      thumbDist < 0.1
    );
  };

  const simulateClick = useCallback((x: number, y: number) => {
    const now = Date.now();
    if (now - lastClickTimeRef.current < 300) return;
    lastClickTimeRef.current = now;

    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: x,
      clientY: y,
    });

    const element = document.elementFromPoint(x, y);
    element?.dispatchEvent(event);
  }, []);

  const simulateScroll = useCallback((direction: "up" | "down") => {
    const now = Date.now();
    if (now - lastScrollTimeRef.current < 200) return;
    lastScrollTimeRef.current = now;

    const scrollAmount = direction === "up" ? -50 : 50;
    window.scrollBy({ top: scrollAmount, behavior: "smooth" });
  }, []);

  const processFrame = useCallback(() => {
    if (
      !videoRef.current ||
      !gestureRecognizerRef.current ||
      !isActiveRef.current
    ) {
      animationFrameRef.current = requestAnimationFrame(processFrame);
      return;
    }

    try {
      if (videoRef.current.readyState < 2) {
        animationFrameRef.current = requestAnimationFrame(processFrame);
        return;
      }

      const results = gestureRecognizerRef.current.recognizeForVideo(
        videoRef.current,
        performance.now()
      );

      if (results.landmarks && results.landmarks.length > 0) {
        const landmarks = results.landmarks[0];

        const palmCenter = landmarks[9];
        const x = palmCenter.x * window.innerWidth;
        const y = palmCenter.y * window.innerHeight;
        const prevX = cursorSmoothingRef.current.x;
        const prevY = cursorSmoothingRef.current.y;

        cursorSmoothingRef.current.x += (x - prevX) * 0.3;
        cursorSmoothingRef.current.y += (y - prevY) * 0.3;

        const cursor = document.getElementById("hand-cursor");
        if (cursor) {
          cursor.style.left = `${cursorSmoothingRef.current.x}px`;
          cursor.style.top = `${cursorSmoothingRef.current.y}px`;
        }

        const isPalmClosed = isPalmClosedGesture(landmarks);
        const isIndexPointing = isIndexPointingGesture(landmarks);

        setGestureState((prev) => ({
          ...prev,
          handPosition: {
            x: cursorSmoothingRef.current.x,
            y: cursorSmoothingRef.current.y,
          },
          isPalmClosed,
          isIndexPointing,
        }));

        if (isPalmClosed) {
          simulateClick(
            cursorSmoothingRef.current.x,
            cursorSmoothingRef.current.y
          );
        }

        if (isIndexPointing) {
          simulateScroll(y < prevY ? "up" : "down");
        }
      }
    } catch (error) {
      console.error("Error processing frame:", error);
    }

    animationFrameRef.current = requestAnimationFrame(processFrame);
  }, [simulateClick, simulateScroll]);

  const startGestureControl = useCallback(async () => {
    if (gestureState.isActive) return;

    setIsLoading(true);

    if (!gestureRecognizerRef.current) {
      const initialized = await initializeMediaPipe();
      if (!initialized) {
        setIsLoading(false);
        return;
      }
    }

    const cameraGranted = await requestCameraAccess();
    if (!cameraGranted) {
      setIsLoading(false);
      return;
    }

    activationTimestampRef.current = Date.now();
    isActiveRef.current = true;
    setGestureState((prev) => ({
      ...prev,
      isActive: true,
      error: null,
    }));

    setIsLoading(false);
    animationFrameRef.current = requestAnimationFrame(processFrame);
  }, [
    gestureState.isActive,
    initializeMediaPipe,
    requestCameraAccess,
    processFrame,
  ]);

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
      animationFrameRef.current = null;
    }

    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }

    const cursor = document.getElementById("hand-cursor");
    if (cursor) {
      cursor.style.display = "none";
    }

    cursorSmoothingRef.current = { x: 0, y: 0 };
  }, []);

  const toggleGestureControl = useCallback(async () => {
    if (gestureState.isActive) {
      stopGestureControl();
    } else {
      await startGestureControl();
    }
  }, [gestureState.isActive, startGestureControl, stopGestureControl]);

  useEffect(() => {
    isActiveRef.current = gestureState.isActive;
  }, [gestureState.isActive]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const shouldIgnore =
        Date.now() - activationTimestampRef.current < 700;

      if (gestureState.isActive && !shouldIgnore) {
        const { clientX, clientY } = event;
        const lastPos = lastMousePositionRef.current;
        if (lastPos) {
          const dx = clientX - lastPos.x;
          const dy = clientY - lastPos.y;
          mouseMoveDistanceRef.current += Math.hypot(dx, dy);
        }
        lastMousePositionRef.current = { x: clientX, y: clientY };

        if (mouseMoveDistanceRef.current > 220) {
          stopGestureControl();
          mouseMoveDistanceRef.current = 0;
          lastMousePositionRef.current = null;
        }
      }

      if (mouseActivityTimeoutRef.current) {
        clearTimeout(mouseActivityTimeoutRef.current);
      }

      mouseActivityTimeoutRef.current = setTimeout(() => {
        mouseMoveDistanceRef.current = 0;
        lastMousePositionRef.current = null;
      }, 5000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseActivityTimeoutRef.current) {
        clearTimeout(mouseActivityTimeoutRef.current);
      }
    };
  }, [gestureState.isActive, stopGestureControl]);

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
    gestureState,
    isLoading,
    toggleGestureControl,
    startGestureControl,
    stopGestureControl,
  };
};
