"use client";
import React, { useRef } from "react";
import TextStack from "../TextStack";
import { motion } from "framer-motion";
import { useVisible } from "@/hooks/useVisible";

const HeroText = () => {
  const imageContainer = useRef<HTMLDivElement | null>(null);
  const { controls } = useVisible(imageContainer);

  return (
    <motion.div
      ref={imageContainer}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none flex items-center justify-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <TextStack
          text="Muhamad Kopal Aljamili"
          textStyle="leading-none text-[16.5vw] xs:text-[14vw] sm:text-[12vw] font-extrabold uppercase text-secondary [text-shadow:4px_4px_5px_rgba(0,0,0,1)]"
        />
      </div>
      <motion.figure
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1,
              delay: 2,
            },
          },
        }}
        className="relative z-50 bg-[url(/images/profile_image_1.jpg)] bg-cover bg-center rounded-2xl aspect-square  w-[38vw] xs:w-[30vw] sm:w-[28vw] cursor-pointer select-none grayscale hover:grayscale-0"
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.2}
      ></motion.figure>
    </motion.div>
  );
};

export default HeroText;
