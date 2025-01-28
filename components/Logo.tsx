import React from "react";
import IconLogo from "./IconLogo";
import TextLogo from "./TextLogo";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-start gap-3 group",
        className
      )}
    >
      <IconLogo />
      <TextLogo />
    </div>
  );
};

export default Logo;
