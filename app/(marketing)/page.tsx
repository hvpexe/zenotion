import Heroes from "@/app/(marketing)/_components/heroes";
import Heading from "./_components/heading";
import { Button } from "@/components/ui/button";
import React from "react";
import Footer from "@/app/(marketing)/_components/footer";

function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1f1f1f]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}

export default MarketingPage;
