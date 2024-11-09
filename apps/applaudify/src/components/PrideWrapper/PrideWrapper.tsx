import { lazy, Suspense } from "react";
import { TPresetInstanceProps } from "react-canvas-confetti/dist/types";

// Lazy load the Pride component and specify the props type
const Pride = lazy(async () => {
  const module = await import('react-canvas-confetti/dist/presets/pride');
  return { default: module.default };
});

export const PrideWrapper = (props: TPresetInstanceProps) => {
  return (
    <Suspense fallback={<div></div>}>
      <Pride {...props} />
    </Suspense>
  );
};
