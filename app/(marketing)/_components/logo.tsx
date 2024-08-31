import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });
export default function Logo() {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={"/logo.svg"}
        height={40}
        width={40}
        alt="logo"
        className="dark:hidden w-10 h-10"
      />
      <Image
        src={"/logo-dark.svg"}
        height={40}
        width={40}
        alt="logo"
        className="hidden dark:block w-10 h-10"
      />
      <p className={cn("font-semibold", font.className)}>Zenotion</p>
    </div>
  );
}
