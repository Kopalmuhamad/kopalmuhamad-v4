"use client";

import React, { useEffect, useState } from "react";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import ButtonToTop from "../moleculs/ButtonToTop";

interface ScrollProgressBarType {
    type?: "circle" | "bar";
    position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
    color?: string;
    strokeSize?: number;
}

export default function ScrollProgressBar({
    type = "circle",
    position = "bottom-right",
    color = "hsl(var(--primary))",
    strokeSize = 2,
}: ScrollProgressBarType) {
    const { scrollYProgress } = useScroll();

    const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const [percentage, setPercentage] = React.useState(0);

    useMotionValueEvent(scrollPercentage, "change", (latest) => {
        setPercentage(Math.round(latest));
    });

    const { scrollY } = useScroll()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    }, [scrollY])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (type === "bar") {
        return (
            <div
                className="fixed start-0 end-0 top-0 pointer-events-none"
                style={{ height: `${strokeSize + 2}px` }}
            >
                <span
                    className="bg-primary h-full w-full block"
                    style={{
                        backgroundColor: color,
                        width: `${percentage}%`,
                    }}
                ></span>
            </div>
        );
    }

    return (
        <div
            onClick={scrollToTop}
            className={cn("fixed z-50 flex items-center justify-center backdrop-blur-sm bg-secondary/20 rounded-full shadow-2xl cursor-pointer", {
                "top-0 end-0": position === "top-right",
                "bottom-20 end-5": position === "bottom-right",
                "top-0 start-0": position === "top-left",
                "bottom-0 start-0": position === "bottom-left",
            })}
        >
            {percentage > 0 && (
                <>
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="30"
                            fill="none"
                            strokeWidth={strokeSize}
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            stroke={color}
                            fill="none"
                            strokeDashoffset="0"
                            strokeWidth={strokeSize}
                            style={{ pathLength: scrollYProgress }}
                        />
                    </svg>
                    <ButtonToTop isVisible={isVisible} />
                </>
            )}
        </div>
    );
}
