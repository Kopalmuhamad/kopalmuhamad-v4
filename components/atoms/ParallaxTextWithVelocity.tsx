'use client'
import { useEffect, useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    useInView,
    useAnimation,
} from "framer-motion";
import { cn } from "@/lib/utils";

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
    children: string;
    containerClassName?: string
    textClassName?: string
    duration?: number
    delay?: number
}

export function ParallaxTextWithVelocity({ children, containerClassName, textClassName, duration = 1, delay = 0.5 }: ParallaxProps) {

    const container = useRef<HTMLDivElement>(null)
    const isInView = useInView(container)
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [isInView, controls])

    const animation = {
        hidden: {
            opacity: 0,
            y: 200
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
                delay: delay
            }
        }
    }
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 300,
    });
    const skewVelocity = useSpring(scrollVelocity, {
        stiffness: 100,
        damping: 30,
    });

    const skewVelocityFactor = useTransform(
        skewVelocity,
        [-1000, 1000],
        [-30, 30]
    );

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });
    const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * -5 * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        if (velocityFactor.get() !== 0) {
            moveBy += directionFactor.current * moveBy * velocityFactor.get();
            baseX.set(baseX.get() + moveBy);
        }
    });

    return (
        <motion.div ref={container} initial="hidden" animate={controls} className={cn(containerClassName, "overflow-hidden tracking-[-2px] whitespace-nowrap flex flex-nowrap")}>
            <motion.div variants={animation} className={cn(textClassName, "font-semibold uppercase text-[64px] flex whitespace-nowrap flex-nowrap space-x-10")} style={{ x }}>
                <motion.span className="flex items-center justify-center" style={{ skew: skewVelocityFactor }}>
                    {children}
                </motion.span>
                <motion.span className="flex items-center justify-center" style={{ skew: skewVelocityFactor }}>
                    {children}
                </motion.span>
                <motion.span className="flex items-center justify-center" style={{ skew: skewVelocityFactor }}>
                    {children}
                </motion.span>
                <motion.span className="flex items-center justify-center" style={{ skew: skewVelocityFactor }}>
                    {children}
                </motion.span>
            </motion.div>
        </motion.div>
    );
}
