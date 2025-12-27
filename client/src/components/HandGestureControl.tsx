import { useEffect } from "react";
import { useHandGestureControl } from "@/hooks/useHandGestureControl";

interface HandGestureControlProps {
  onToggle?: (isActive: boolean) => void;
}

export default function HandGestureControl({
  onToggle,
}: HandGestureControlProps) {
  const { videoRef, gestureState, isLoading, toggleGestureControl } =
    useHandGestureControl();

  useEffect(() => {
    onToggle?.(gestureState.isActive);
  }, [gestureState.isActive, onToggle]);

  return (
    <>
      <video
        ref={videoRef}
        className="hidden"
        width={640}
        height={480}
        muted
        playsInline
      />

      <button
        onClick={toggleGestureControl}
        disabled={isLoading}
        className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg border text-[10px] font-bold tracking-widest uppercase transition-all duration-200 flex items-center gap-2 ${
          gestureState.isActive
            ? "bg-black text-white border-black shadow-sm"
            : "bg-white text-gray-500 border-gray-200 hover:text-black hover:border-black"
        } ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        title={
          gestureState.isActive
            ? "Hand gesture control is active. Move your mouse to deactivate."
            : "Click to activate hand gesture control"
        }
      >
        {isLoading ? "Loading..." : gestureState.isActive ? "Hand Mode" : "Enable Hand"}
      </button>

      {gestureState.isActive && (
        <div
          id="hand-cursor"
          className="fixed pointer-events-none z-40 transition-opacity duration-200"
          style={{
            left: "0px",
            top: "0px",
            width: "34px",
            height: "34px",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            lineHeight: "1",
            opacity: gestureState.handPosition ? 1 : 0.5,
          }}
        >
          {gestureState.isPalmClosed ? "✊" : "🖐️"}
        </div>
      )}

      {gestureState.error && (
        <div className="fixed bottom-4 left-4 z-50 bg-white text-black px-4 py-3 rounded-lg shadow-sm border border-gray-200 max-w-sm">
          <p className="font-semibold">Error</p>
          <p className="text-sm mt-1">{gestureState.error}</p>
        </div>
      )}

      {gestureState.isActive && (
        <div className="fixed top-16 right-4 z-40 bg-white rounded-md shadow-sm p-2 w-48 border border-gray-200">
          <h3 className="text-[8px] font-bold tracking-widest uppercase text-gray-500 mb-2">
            Gesture Controls
          </h3>
          <ul className="text-[10px] text-gray-700 space-y-1">
            <li className="whitespace-nowrap">
              <span className="font-semibold text-black">Hand Movement</span> = Move cursor
            </li>
            <li className="whitespace-nowrap">
              <span className="font-semibold text-black">Palm Closed</span> = Click
            </li>
            <li className="whitespace-nowrap">
              <span className="font-semibold text-black">Top/Bottom Edge</span> = Scroll
            </li>
            <li className="text-[9px] text-gray-500 mt-2 whitespace-nowrap">
              Move your mouse to exit hand mode
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
