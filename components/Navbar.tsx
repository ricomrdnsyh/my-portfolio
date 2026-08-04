"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface text-primary font-body-lg text-body-lg uppercase font-bold w-full sticky top-0 z-50 border-b-4 border-on-surface shadow-[8px_8px_0px_0px_#1a1c1c]">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-[1440px] mx-auto bg-surface relative z-10">
        <div className="font-headline-md text-headline-md font-black tracking-tighter text-on-surface">
          RCMRDNSYH
        </div>
        <div className="hidden md:flex gap-gutter items-center md:justify-end ml-auto">
          <Link
            className="text-on-surface inline-block neo-hover neo-active transition-all duration-100"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-on-surface inline-block neo-hover neo-active transition-all duration-100"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="text-on-surface inline-block neo-hover neo-active transition-all duration-100"
            href="#project"
          >
            Projects
          </Link>
          <Link
            className="text-on-surface inline-block neo-hover neo-active transition-all duration-100"
            href="#contact"
          >
            Contact
          </Link>
        </div>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-center text-on-surface neo-border neo-shadow neo-hover neo-active bg-primary-container px-6 py-2 font-bold uppercase transition-all duration-100 ml-8"
        >
          RESUME
        </a>
        <button
          className="md:hidden text-on-surface neo-border p-2 bg-primary-container shadow-[4px_4px_0px_0px_#1a1c1c] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" strokeWidth={3} />
          ) : (
            <Menu className="w-6 h-6" strokeWidth={3} />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col w-full bg-surface border-t-4 border-on-surface absolute left-0 top-full shadow-[8px_8px_0px_0px_#1a1c1c] z-0">
          <div className="flex flex-col p-6 gap-6">
            <Link
              onClick={() => setIsOpen(false)}
              className="text-on-surface w-fit neo-hover neo-active transition-all duration-100"
              href="#about"
            >
              About
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-on-surface w-fit neo-hover neo-active transition-all duration-100"
              href="#experience"
            >
              Experience
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-on-surface w-fit neo-hover neo-active transition-all duration-100"
              href="#project"
            >
              Projects
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-on-surface w-fit neo-hover neo-active transition-all duration-100"
              href="#contact"
            >
              Contact
            </Link>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center text-on-surface neo-border shadow-[4px_4px_0px_0px_#1a1c1c] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none bg-primary-container px-6 py-4 font-bold uppercase transition-all duration-100 mt-4"
            >
              RESUME
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
