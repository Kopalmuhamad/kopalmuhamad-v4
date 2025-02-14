import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { footerLinks, links } from "./navbarData";
import { perspective, slideIn } from "./mobileNavbarAnim";

export const MobileNavbarMenu = React.memo(() => {
    return (
        <nav
            className={cn(
                "flex flex-col justify-between pt-[70px] pr-[40px] pb-[50px] pl-[40px] h-full box-border"
            )}
            aria-label="Mobile navigation menu"
        >
            <motion.ul
                className={cn("flex gap-[10px] flex-col list-none p-0")}
                initial="initial"
                animate="enter"
                exit="exit"
            >
                {links.map(({ title, href }, i) => (
                    <motion.li
                        key={`b_${i}`}
                        className="[perspective:120px] [perspective-origin:bottom] overflow-hidden"
                        custom={i}
                        variants={perspective}
                    >
                        <Link
                            href={href}
                            className="no-underline text-primary-foreground text-2xl md:text-4xl block"
                        >
                            {title}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.footer
                className={cn("flex flex-wrap")}
                initial="initial"
                animate="enter"
                exit="exit"
            >
                {footerLinks.map(({ title, href }, i) => (
                    <motion.div
                        key={`f_${i}`}
                        variants={slideIn}
                        custom={i}
                        className="w-1/2 mt-[5px]"
                    >
                        <Link
                            href={href}
                            className="text-primary-foreground block"
                            target="_blank"
                        >
                            {title}
                        </Link>
                    </motion.div>
                ))}
            </motion.footer>
        </nav>
    );
});

MobileNavbarMenu.displayName = "MobileNavbarMenu";
