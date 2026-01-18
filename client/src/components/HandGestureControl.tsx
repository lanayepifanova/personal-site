import { useEffect } from "react";
import { useHandGestureControl } from "@/hooks/useHandGestureControl";

interface HandGestureControlProps {
  onToggle?: (isActive: boolean) => void;
  variant?: "floating" | "inline";
}

export default function HandGestureControl({
  onToggle,
  variant = "floating",
}: HandGestureControlProps) {
  const { videoRef, gestureState, isLoading, toggleGestureControl } =
    useHandGestureControl();
  const isInline = variant === "inline";

  useEffect(() => {
    onToggle?.(gestureState.isActive);
  }, [gestureState.isActive, onToggle]);

  return (
    <>
      <video
        ref={videoRef}
        className="fixed -left-[10000px] top-0 w-px h-px opacity-0 pointer-events-none"
        width={640}
        height={480}
        muted
        playsInline
        autoPlay
        aria-hidden="true"
      />

      <div className={isInline ? "relative" : undefined}>
        <button
          onClick={toggleGestureControl}
          disabled={isLoading}
          className={`${
            isInline
              ? "px-4 py-2 rounded-lg border text-sm font-semibold tracking-wide font-sans transition-all duration-200 flex items-center gap-2"
              : "fixed top-4 right-4 z-50 px-4 py-2 rounded-lg border text-sm font-semibold tracking-wide font-sans transition-all duration-200 flex items-center gap-2"
          } ${
            gestureState.isActive
              ? "bg-black text-white border-black shadow-sm"
              : "bg-white text-gray-500 border-gray-200 hover:text-black hover:border-black"
          } ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          title={
            gestureState.isActive
              ? "Hand gesture control is active. Move your mouse or tap Hand Mode to deactivate."
              : "Click to activate hand gesture control"
          }
        >
          {isLoading ? "Loading..." : gestureState.isActive ? "Hand Mode" : "Enable Hand"}
        </button>

        {gestureState.isActive && isInline && (
          <div className="absolute right-0 mt-2 z-40 bg-white rounded-md shadow-sm p-3 w-56 border border-gray-200">
            <ul className="text-xs text-gray-700 space-y-1 font-sans">
              <li className="whitespace-nowrap">
                <span className="font-semibold text-black">Hand Movement</span> = Move cursor
              </li>
              <li className="whitespace-nowrap">
                <span className="font-semibold text-black">Palm Closed</span> = Click
              </li>
              <li className="whitespace-nowrap">
                <span className="font-semibold text-black">Top/Bottom Edge</span> = Scroll
              </li>
            </ul>
          </div>
        )}
      </div>

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

      {gestureState.isActive && !isInline && (
        <div className="fixed top-16 right-4 z-40 bg-white rounded-md shadow-sm p-3 w-56 border border-gray-200">
          <ul className="text-xs text-gray-700 space-y-1 font-sans">
            <li className="whitespace-nowrap">
              <span className="font-semibold text-black">Hand Movement</span> = Move cursor
            </li>
            <li className="whitespace-nowrap">
              <span className="font-semibold text-black">Palm Closed</span> = Click
            </li>
            <li className="whitespace-nowrap">
              <span className="font-semibold text-black">Top/Bottom Edge</span> = Scroll
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
