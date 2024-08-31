import Image from "next/image";
import React from "react";

function Heroes() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            className="object-contain dark:hidden"
            src={"/empty.svg"}
            fill
            alt="Documents"
          />
          <Image
            className="object-contain hidden dark:block"
            src={"/empty-dark.svg"}
            fill
            alt="Documents"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            className="object-contain dark:hidden"
            src={"/team.svg"}
            fill
            alt="Reading"
          />
          <Image
            className="object-contain hiddne dark:block"
            src={"/team-dark.svg"}
            fill
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
}

export default Heroes;
