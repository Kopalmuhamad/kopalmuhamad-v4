import React, { useRef } from "react";
import { motion } from "framer-motion";
import DigitalGlobe from "../DigitalGlobe";
import { useVisible } from "@/hooks/useVisible";

const PortfolioGlobeAnimate = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { controls } = useVisible(container);

  const globeFromRightAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.8,
      },
    },
  };

  return (
    <motion.div ref={container} className="overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={globeFromRightAnimation}
      >
        <DigitalGlobe />
      </motion.div>
    </motion.div>
  );
};

export default PortfolioGlobeAnimate;
