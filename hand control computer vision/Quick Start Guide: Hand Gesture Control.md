# Quick Start Guide: Hand Gesture Control

## Step 1: Install Dependencies

```bash
npm install @mediapipe/tasks-vision
```

## Step 2: Copy Files to Your Project

Copy these two files to your `src` directory (or appropriate subdirectory):

- `useHandGestureControl.ts` → `src/hooks/useHandGestureControl.ts`
- `HandGestureControl.tsx` → `src/components/HandGestureControl.tsx`

Adjust the import paths in `HandGestureControl.tsx` if needed:

```typescript
import { useHandGestureControl } from '../hooks/useHandGestureControl';
```

## Step 3: Add Component to Your App

In your main `App.tsx` or layout component:

```typescript
import HandGestureControl from './components/HandGestureControl';

export default function App() {
  return (
    <div>
      {/* Your existing content */}
      <HandGestureControl />
    </div>
  );
}
```

## Step 4: Test It Out

1. Start your development server: `npm run dev`
2. Look for the "Enable Hand" button in the top-right corner
3. Click it and grant webcam permissions when prompted
4. Wave your hand to move the cursor
5. Close your palm to click
6. Point your index finger to scroll
7. Move your mouse to exit hand gesture mode

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Camera access denied" | Check browser permissions for webcam access |
| Model loading fails | Ensure you have internet connection for CDN resources |
| Gestures not detected | Ensure good lighting and clear hand visibility |
| Cursor lag | This is normal; the smoothing algorithm prevents jitter |

## Performance Notes

- The hand tracking runs at ~30 FPS on modern browsers
- The feature uses minimal CPU when not active
- The webcam stream stops completely when deactivated

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14.1+
- Edge 90+

All modern browsers with WebGL support and MediaStream API.
