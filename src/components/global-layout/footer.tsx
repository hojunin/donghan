import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-h-fit bg-slate-600 px-5 py-32 sm:px-5 md:px-8 lg:px-24 xl:px-40">
      <div className="grid grid-cols-2">
        <section className="flex flex-col gap-y-2">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Links
          </h3>
          <Link href="https://www.youtube.com/@Gil-DongHan" target="_blank">
            유튜브
          </Link>
          <Link href="https://www.instagram.com/donghan_s/" target="_blank">
            인스타그램
          </Link>
        </section>

        <section className="flex flex-col gap-y-2">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Contact
          </h3>
          <Link href="mailto:dlsghwns12@gmail.com" target="_blank">
            Email
          </Link>
        </section>
      </div>

      <h4 className="mt-10 scroll-m-20 text-xl font-semibold tracking-tight">
        Copyright © HOJUN IN. All rights reserved
      </h4>
    </footer>
  );
};

export default Footer;
