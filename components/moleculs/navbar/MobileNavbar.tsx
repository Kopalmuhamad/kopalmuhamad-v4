"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { MobileNavbarMenu } from "./MobileNavbarMenu";
import { MobileNavbarTrigger } from "./MobileNavbarTrigger";

export const MobileNavbar = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const [isActive, setIsActive] = useState(false);
    const isMobile = useIsMobile();

    const menu = {
        open: {
            width: isMobile ? "300px" : "480px",
            height: "650px",
            top: "-25px",
            right: "-25px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
        },
        closed: {
            width: "100px",
            height: "40px",
            top: "0px",
            right: "0px",
            transition: {
                duration: 0.75,
                delay: 0.35,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    const handleClickOutside = () => setIsActive(false);
    useOnClickOutside(container, handleClickOutside);

    const toggleMenu = () => setIsActive((prev) => !prev);

    return (
        <div ref={container} className={cn("fixed right-8 top-8 z-50")}>
            <motion.div
                className={cn(
                    "bg-first-accent text-first-accent-foreground rounded-[25px] relative shadow-2xl"
                )}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <MobileNavbarMenu />}
                </AnimatePresence>
            </motion.div>
            <MobileNavbarTrigger
                isActive={isActive}
                toggleMenu={toggleMenu}
            />
        </div>
    );
};
