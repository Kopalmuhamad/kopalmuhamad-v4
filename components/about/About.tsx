"use client";
import React from "react";
import TextSlideFromLeft from "../TextSlideFromLeft";
import DigitalGlobe from "../DigitalGlobe";
import TextOpacityOnScroll from "../TextOpacityOnScroll";
import GithubGraphs from "./GithubGraphs";
import { motion } from "framer-motion";
import Skill from "./Skill";

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen relative bg-background">
      <div className="container mx-auto py-10">
        <header className="relative flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                delay: 0.8,
              },
            }}
            className="text-4xl md:text-6xl font-extrabold uppercase"
          >
            About
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                delay: 0.8,
              },
            }}
          >
            <DigitalGlobe />
          </motion.div>
        </header>
        <div>
          <TextOpacityOnScroll paragraph="As a frontend engineer who completed a bootcamp at AlterraAcademy, I am responsible for creating and optimizing user interfaces. Utilizing ReactJS and Tailwind CSS, I develop responsive and interactive web features, integrating them with APIs provided by the backend. My responsibilities include implementing designs, ensuring cross-browser compatibility, and achieving high code quality with a focus on performance and maintainability. I also use testing frameworks like Jest to ensure robust and reliable code. My goal is to advance to a senior frontend engineer role, specifically in the website development industry." />
        </div>
        <div className="mt-4 space-y-4">
          <Skill />
        </div>
        <div className="mt-4 space-y-4">
          <GithubGraphs />
          <TextSlideFromLeft
            text="My contribute in Github"
            textStyle="font-semibold"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
