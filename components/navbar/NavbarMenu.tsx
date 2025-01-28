import { motion } from "framer-motion";
import { links, footerLinks } from "./navbarData";
import { perspective, slideIn } from "./navbarAnim";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MagneticEffect from "@/providers/MagneticEffect";

export const NavbarMenu = () => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between pt-[70px] pr-[40px] pb-[50px] pl-[40px] h-full box-border"
      )}
    >
      <div className={cn("flex gap-[10px] flex-col")}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div
              key={`b_${i}`}
              className={
                "[perspective:120px] [perspective-origin:bottom] overflow-hidden w-fit px-4 py-1"
              }
            >
              <MagneticEffect>
                <motion.div
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Link
                    href={href}
                    className="no-underline text-primary-foreground text-2xl md:text-4xl"
                  >
                    {title}
                  </Link>
                </motion.div>
              </MagneticEffect>
            </div>
          );
        })}
      </div>
      <motion.div className={cn("grid grid-cols-2")}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              href={href}
              target="_blank"
              className=" mt-[5px] text-primary-foreground w-fit px-2 py-1"
            >
              <MagneticEffect>{title}</MagneticEffect>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
};
