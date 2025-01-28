"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useVisible } from "@/hooks/useVisible";

interface IProps {
  text: string;
  containerStyle?: string;
  boxStyle?: string;
  textStyle?: string;
}

const textAnimation = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};

const TextStack = ({ text, containerStyle, boxStyle, textStyle }: IProps) => {
  const textArray = text.split(" ");
  const container = useRef<HTMLDivElement | null>(null);
  const { controls } = useVisible(container);

  return (
    <motion.h1
      ref={container}
      className={cn(
        "flex flex-col items-center justify-center text-center",
        containerStyle
      )}
    >
      {textArray.map((word, index) => (
        <motion.div
          initial="hidden"
          animate={controls}
          transition={{
            delayChildren: index * 0.5,
            ease: "easeInOut",
          }}
          key={index}
          className={cn("overflow-hidden", boxStyle)}
        >
          <motion.span
            variants={textAnimation}
            className={cn("flex", textStyle)}
          >
            {word}
          </motion.span>
        </motion.div>
      ))}
    </motion.h1>
  );
};

export default TextStack;
