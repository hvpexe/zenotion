import Navbar from "@/app/(marketing)/_components/navbar";
import React from "react";

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full dark:bg-[#1f1f1f]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}

export default MarketingLayout;
