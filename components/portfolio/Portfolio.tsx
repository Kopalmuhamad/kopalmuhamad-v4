"use client";
import React from "react";
import TextSlideFromLeft from "../TextSlideFromLeft";
import PortfolioGlobeAnimate from "./PortfolioGlobeAnimate";
import PortfolioList from "./PortfolioList";

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full relative z-20 bg-background">
      <div className="container mx-auto py-10">
        <header className="relative flex items-center justify-between">
          <TextSlideFromLeft
            text="Portfolio"
            textStyle="text-4xl md:text-6xl font-extrabold uppercase"
          />
          <PortfolioGlobeAnimate />
        </header>
        <PortfolioList />
      </div>
    </section>
  );
};

export default Portfolio;
