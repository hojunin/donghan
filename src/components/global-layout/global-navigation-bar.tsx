"use client";
import React from "react";

import Link from "next/link";

const MENU_LINKS = [
  { label: "Content", link: "/contents" },
  {
    label: "About",
    link: "/about",
  },
];

const GlobalNavigationBar = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-border/40 bg-background/95 p-6 backdrop-blur ">
      <Link href="/" className="text-2xl font-bold tracking-tight lg:text-3xl">
        DONG HAN
      </Link>

      <div className="flex gap-x-4">
        {MENU_LINKS.map(({ label, link }) => (
          <Link
            href={link}
            key={`${label}-${link}`}
            className="text-xl hover:text-primary transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default GlobalNavigationBar;
