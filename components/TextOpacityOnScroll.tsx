"use client";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";

interface ITextOpacityOnScroll {
  paragraph: string;
}

export default function TextOpacityOnScroll({
  paragraph,
}: ITextOpacityOnScroll) {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <p ref={container} className={cn("flex flex-wrap")}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  progress: MotionValue;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span
      className={cn(
        "relative mr-[4px] sm:mr-[12px] mt-[8px] font-medium text-base"
      )}
    >
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

interface CharProps {
  children: string;
  progress: MotionValue;
  range: [number, number];
}

const Char = ({ children, progress, range }: CharProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={cn("absolute opacity-[20%]")}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
