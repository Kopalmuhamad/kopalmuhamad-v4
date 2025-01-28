"use client";
import React from "react";
import dynamic from "next/dynamic";
import HeroText from "./HeroText";
import DigitalGlobe from "../DigitalGlobe";
import { motion } from "framer-motion";

const Scene3D = dynamic(() => import("@/components/scene/Scene"), {
  ssr: false,
});

const Hero = () => {
  return (
    <section className="h-[70vh] md:h-screen flex sticky top-0">
      <Scene3D />
      <HeroText />
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute left-0 top-[50%] hidden h-[121px] w-[350px] flex-col items-start justify-center rounded-br-full rounded-tr-full bg-secondary px-5 lg:flex"
      >
        <p className="text-md font-medium">Locate</p>
        <p className="text-md font-medium">in Bogor</p>
        <p className="text-md font-medium">West Java, Indonesia</p>
        <DigitalGlobe className="absolute right-3 top-[10%]" />
      </motion.div>
    </section>
  );
};

export default Hero;
