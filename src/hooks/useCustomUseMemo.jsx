import { useEffect, useRef } from "react";

const areEqual = (prevDeps, nextDeps) => {
  if (prevDeps === null) return false;
  if (prevDeps?.length !== nextDeps?.length) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) {
      return false;
    }
  }

  return true;
};

export const useCustomUseMemo = (cb, deps) => {

  //variable or state --> cached value
  const memoisedRef = useRef(null);

  //changes in deps
  if (!memoisedRef || !areEqual(memoisedRef?.current?.deps, deps)) {
    memoisedRef.current = {
      value: cb(),
      deps,
    };
  }

  //cleanup logic
  useEffect(() => {
    return () => {
      memoisedRef.current = null;
    };
  }, []);

  return memoisedRef.current.value;
};
