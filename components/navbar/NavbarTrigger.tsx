import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const NavbarTrigger = ({
  isActive,
  toggleMenu,
}: {
  isActive: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div
      className={cn(
        "absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden shadow-2xl"
      )}
    >
      <motion.div
        className={cn("relative w-full h-full")}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{
          duration: 0.5,
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div
          className={cn("w-full h-full bg-accent text-white group")}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className={cn(
            "w-full h-full bg-secondary text-secondary-foreground group"
          )}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className={cn("w-full h-full flex items-center justify-center")}>
      <p className="group-hover:opacity-100 text-center font-medium">{label}</p>
    </div>
  );
}
