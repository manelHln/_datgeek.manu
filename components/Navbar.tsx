import React from "react";
import Link from "next/link";
import { SiGithub, SiX, SiReddit, SiGmail } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed inset-x-0 top-0 isolate z-[5] flex px-4 print:hidden">
      <div className="mx-auto mt-2 hidden w-full max-w-7xl items-center justify-between space-x-10 rounded-lg border border-slate-200/40 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl backdrop-saturate-150 lg:flex dark:border-slate-800/60 dark:bg-slate-950/40">
        <nav className="flex gap-2 items-center">
          <Link href="#" className="nav-link">Docs</Link>
          <Link href="#" className="nav-link">Blog</Link>
          <Link href="#" className="nav-link">Solutions</Link>
          <Link href="#" className="nav-link">Resources</Link>
          <Link href="#" className="nav-link">Ai</Link>
          <Link href="#" className="nav-link">Nx Cloud</Link>
          <Link href="#" className="nav-link">Nx Enterprise</Link>
        </nav>
        <div className="flex">
          <Link href="https://example.com" className="inline-flex items-center p-2 opacity-60 hover:opacity-90">
            <SiX size={18} />
          </Link>
          <Link href="https://example.com" className="inline-flex items-center p-2 opacity-60 hover:opacity-90">
            <SiReddit size={18} />
          </Link>
          <Link href="https://example.com" className="inline-flex items-center p-2 opacity-60 hover:opacity-90">
            <SiGithub size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
