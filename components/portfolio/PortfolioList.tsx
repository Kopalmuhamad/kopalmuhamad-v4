import React, { useEffect, useRef, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import { useVisible } from "@/hooks/useVisible";
import { motion } from "framer-motion";

const PortfolioList = () => {
  const [portfolio, setPortfolio] = useState<[]>([]);
  const container = useRef<HTMLDivElement | null>(null);
  const { controls } = useVisible(container);

  const slideFromButtonAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const response = await fetch("/portfolio/portfolioData.json");
        const respJson = await response.json();
        setPortfolio(respJson || []);
      } catch (error) {
        console.error(error);
      }
    };

    getPortfolio();
  }, []);

  return (
    <motion.div
      ref={container}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6"
    >
      {portfolio.map((portfol, index) => (
        <motion.div
          initial="hidden"
          animate={controls}
          transition={{
            delayChildren: index * 0.25,
            staggerChildren: 0.25,
          }}
          key={index}
          className="h-full"
        >
          <motion.div
            variants={slideFromButtonAnimation}
            className="w-full h-full flex items-stretch"
          >
            <PortfolioCard portfolio={portfol} />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PortfolioList;
