import { useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

export const useVisible = (
  targetRef: React.RefObject<HTMLDivElement | null>
) => {
  const controls = useAnimation();

  if (!targetRef) {
    return { controls, inView: false };
  }

  const inView = useInView(targetRef);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return { controls };
};
