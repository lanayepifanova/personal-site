# Hand Gesture Control for React Portfolios

This guide explains how to integrate a real-time hand gesture control system into your existing React + TypeScript + Tailwind CSS portfolio. The feature uses TensorFlow.js and MediaPipe to track hand movements via webcam, allowing users to navigate the page with hand gestures.

## Features

- **Real-Time Hand Tracking**: Uses MediaPipe for high-fidelity hand landmark detection.
- **Gesture Recognition**: 
  - **Cursor Movement**: Wave your hand to move a cursor on the screen.
  - **Left Click**: Close your palm to simulate a left-click.
  - **Scroll**: Point with your index finger to scroll up or down.
- **Seamless Activation/Deactivation**:
  - A toggle button in the top-right corner to manually enable/disable the feature.
  - Automatically deactivates when the user moves their mouse.
- **Visual Feedback**:
  - A floating hand emoji (👋) acts as a cursor.
  - A status indicator shows when hand gesture mode is active and which gesture is being detected.
  - Clear instructions are displayed when the mode is active.
- **Permissions Handling**: Prompts the user for webcam access on activation.

## Prerequisites

Your project should be set up with:
- React 17+ 
- TypeScript
- Tailwind CSS
- Vite (or another modern bundler)

## Installation

First, you need to add the MediaPipe Tasks Vision library to your project. Open your terminal in the project root and run:

```bash
npm install @mediapipe/tasks-vision
```

Or if you are using Yarn:

```bash
yarn add @mediapipe/tasks-vision
```

## File Setup

Place the following two files into your project's `src` directory. You can place them in a `components` or `hooks` subfolder as you see fit.

1.  `useHandGestureControl.ts`: The core React hook that manages the MediaPipe instance, camera feed, gesture detection logic, and state.
2.  `HandGestureControl.tsx`: The React component that provides the UI (toggle button, cursor, indicators) and integrates the `useHandGestureControl` hook.

## Integration

To add the hand gesture control feature to your portfolio, import and render the `HandGestureControl` component in your main application layout file (e.g., `App.tsx` or a layout component).

Here is an example of how to add it to your `App.tsx`:

```typescript
import React from 'react';
import HandGestureControl from './HandGestureControl'; // Adjust the import path

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Your existing portfolio content */}
      <header>...
      </header>
      <main>...
      </main>
      <footer>...
      </footer>

      {/* Add the Hand Gesture Control component here */}
      <HandGestureControl />
    </div>
  );
}

export default App;

```

That's it! The `HandGestureControl` component is self-contained and will overlay the toggle button and other UI elements on top of your existing application content.

## How It Works

The component works as follows:

1.  **Initialization**: When the user clicks the "Enable Hand" button for the first time, the `useHandGestureControl` hook initializes MediaPipe's `GestureRecognizer` and requests webcam permission.
2.  **Activation**: Once permissions are granted and the model is loaded, the video feed starts, and the hand tracking loop begins.
3.  **Gesture Detection**: On each video frame, MediaPipe detects hand landmarks. The hook analyzes these landmarks to recognize the defined gestures (palm closed, index pointing).
4.  **DOM Interaction**: Based on the detected gestures, the hook simulates DOM events like `click` and `scroll`.
5.  **Deactivation**: The feature can be turned off by clicking the toggle button again or by simply moving the mouse.

## Customization

The provided code is a great starting point. You can customize it further:

- **New Gestures**: You can add more gesture detection logic within the `useHandGestureControl.ts` file by analyzing the `landmarks` data provided by MediaPipe.
- **UI Styling**: The `HandGestureControl.tsx` component uses Tailwind CSS for styling. You can easily modify the class names to match your portfolio's design system.
- **Cursor Appearance**: Change the emoji or use a custom SVG for the cursor by modifying the `hand-cursor` element in `HandGestureControl.tsx`.
