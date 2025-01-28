"use client";
import { useVisible } from "@/hooks/useVisible";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IProps {
  text: string;
  containerStyle?: string;
  textStyle?: string;
}

const TextSlideFromLeft = ({ text, containerStyle, textStyle }: IProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { controls } = useVisible(container);

  const slideFromLeftAnimation = {
    hidden: {
      x: "-100%",
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
    <motion.h1
      ref={container}
      className={cn("overflow-hidden", containerStyle)}
    >
      <motion.span
        initial="hidden"
        animate={controls}
        variants={slideFromLeftAnimation}
        className={cn("flex", textStyle)}
      >
        {text}
      </motion.span>
    </motion.h1>
  );
};

export default TextSlideFromLeft;
