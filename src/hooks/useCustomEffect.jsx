import { useRef } from "react";

export const useCustomEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  // for first render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();

    if (cleanup && typeof cleanup === "function") {
      cleanup();
    }
  }

  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  //for deps
  if (depsChanged) {
    const cleanup = effect();
    if (cleanup && typeof cleanup === "function") {
      console.log("Here");
      cleanup();
    }
  }

  prevDeps.current = deps || [];
};
