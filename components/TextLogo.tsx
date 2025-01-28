import Link from "next/link";
import React from "react";

const TextLogo = () => {
  return (
    <Link href={"/"} className="text-base font-bold capitalize leading-none text-accent">
      Write With Me
    </Link>
  );
};

export default TextLogo;
