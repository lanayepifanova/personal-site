import React, { useEffect } from 'react';
import { useHandGestureControl } from './useHandGestureControl';

interface HandGestureControlProps {
  onToggle?: (isActive: boolean) => void;
}

export const HandGestureControl: React.FC<HandGestureControlProps> = ({
  onToggle,
}) => {
  const {
    videoRef,
    gestureState,
    isLoading,
    toggleGestureControl,
  } = useHandGestureControl();

  useEffect(() => {
    onToggle?.(gestureState.isActive);
  }, [gestureState.isActive, onToggle]);

  return (
    <>
      {/* Hidden video element for camera feed */}
      <video
        ref={videoRef}
        className="hidden"
        width={640}
        height={480}
      />

      {/* Toggle Button - Top Right Corner */}
      <button
        onClick={toggleGestureControl}
        disabled={isLoading}
        className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
          gestureState.isActive
            ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
        } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        title={
          gestureState.isActive
            ? 'Hand gesture control is active. Move your mouse to deactivate.'
            : 'Click to activate hand gesture control'
        }
      >
        {isLoading ? (
          <>
            <span className="animate-spin">⏳</span>
            Loading...
          </>
        ) : (
          <>
            <span className="text-lg">
              {gestureState.isActive ? '🖐️' : '👆'}
            </span>
            {gestureState.isActive ? 'Hand Mode' : 'Enable Hand'}
          </>
        )}
      </button>

      {/* Floating Hand Cursor Indicator */}
      {gestureState.isActive && (
        <div
          id="hand-cursor"
          className="fixed pointer-events-none z-40 transition-opacity duration-200"
          style={{
            left: '0px',
            top: '0px',
            fontSize: '32px',
            opacity: gestureState.handPosition ? 1 : 0.5,
          }}
        >
          👋
        </div>
      )}

      {/* Error Message Display */}
      {gestureState.error && (
        <div className="fixed bottom-4 left-4 z-50 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg max-w-sm">
          <p className="font-semibold">Error</p>
          <p className="text-sm mt-1">{gestureState.error}</p>
        </div>
      )}

      {/* Status Indicator */}
      {gestureState.isActive && (
        <div className="fixed bottom-4 right-4 z-50 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <div>
              <p className="font-semibold">Hand Gesture Active</p>
              <p className="text-xs mt-1">
                {gestureState.isPalmClosed && '✋ Palm Closed (Click)'}
                {gestureState.isIndexPointing && '☝️ Index Pointing (Scroll)'}
                {!gestureState.isPalmClosed &&
                  !gestureState.isIndexPointing &&
                  '👋 Ready to detect gestures'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Gesture Instructions Modal */}
      {gestureState.isActive && (
        <div className="fixed top-20 left-4 z-40 bg-white rounded-lg shadow-lg p-4 max-w-xs border-l-4 border-blue-500">
          <h3 className="font-bold text-gray-800 mb-2">Gesture Controls</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>👋 <span className="font-semibold">Hand Movement</span> = Move cursor</li>
            <li>✋ <span className="font-semibold">Palm Closed</span> = Click</li>
            <li>☝️ <span className="font-semibold">Index Pointing</span> = Scroll</li>
            <li className="text-xs text-gray-500 mt-2">Move your mouse to exit hand mode</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HandGestureControl;
