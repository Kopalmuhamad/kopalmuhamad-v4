import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactSocial = () => {
  return (
    <div className="container flex items-center justify-between py-10 fixed bottom-0 left-1/2 -translate-x-1/2">
      <div>
        <Link href="https://github.com/Kopalmuhamad" target="_blank">
          <GithubIcon className="text-primary-foreground" />
        </Link>
      </div>
      <div className="flex items-center justify-end gap-4">
        <Link href="https://www.instagram.com/kopallmuhamad" target="_blank">
          <InstagramIcon className="text-primary-foreground" />
        </Link>
        <Link href="https://www.linkedin.com/in/muhamad-kopal" target="_blank">
          <LinkedinIcon className="text-primary-foreground" />
        </Link>
      </div>
    </div>
  );
};

export default ContactSocial;
