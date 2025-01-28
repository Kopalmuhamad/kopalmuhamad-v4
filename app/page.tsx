"use client";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Preload from "@/components/preload/Preload";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const Home = () => {
  const [loadingPreloader, setLoadingPreloader] = useState<boolean>(true);
  const [endedLoading, setEndedLoading] = useState<boolean>(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (loadingPreloader) {
      body?.classList.add("overflow-hidden");
      setTimeout(() => {
        setLoadingPreloader(false);
      }, 4000);
      setTimeout(() => {
        setEndedLoading(true);
      }, 3000);
    } else {
      body?.classList.remove("overflow-hidden");
    }
  }, [loadingPreloader]);

  if (loadingPreloader) {
    return (
      <>
        <AnimatePresence mode="wait" initial={true}>
          {loadingPreloader && <Preload endedLoading={endedLoading} />}
        </AnimatePresence>
      </>
    );
  }

  return (
    <div data-scroll-container className="flex flex-col">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
