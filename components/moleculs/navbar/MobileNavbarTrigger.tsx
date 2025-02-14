import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MobileNavbarTriggerProps {
    isActive: boolean;
    toggleMenu: () => void;
}

export const MobileNavbarTrigger = React.memo(({ isActive, toggleMenu }: MobileNavbarTriggerProps) => {
    return (
        <div
            className={cn(
                "absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden shadow-2xl"
            )}
            aria-haspopup="menu"
            onClick={toggleMenu}
        >
            <motion.div
                className={cn("relative w-full h-full")}
                initial={false}
                animate={{ top: isActive ? "-100%" : "0%" }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            >
                <NavbarButton
                    label="Menu"
                    className="bg-first-accent text-first-accent-foreground"
                    isVisible={!isActive}
                />
                <NavbarButton
                    label="Close"
                    className="bg-secondary text-secondary-foreground"
                    isVisible={isActive}
                />
            </motion.div>
        </div>
    );
});

MobileNavbarTrigger.displayName = "MobileNavbarTrigger";

interface NavbarButtonProps {
    label: string;
    className: string;
    isVisible: boolean;
}

const NavbarButton = React.memo(({ label, className, isVisible }: NavbarButtonProps) => {
    return (
        <div
            aria-label={label}
            className={cn(
                "w-full h-full group",
                className,
                isVisible ? "pointer-events-auto" : "pointer-events-none"
            )}
        >
            <PerspectiveText label={label} />
        </div>
    );
});

NavbarButton.displayName = "NavbarButton";

interface PerspectiveTextProps {
    label: string;
}

const PerspectiveText = React.memo(({ label }: PerspectiveTextProps) => {
    return (
        <div className={cn("w-full h-full flex items-center justify-center")}>
            <p className="group-hover:opacity-100 text-center font-medium">{label}</p>
        </div>
    );
});

PerspectiveText.displayName = "PerspectiveText";
