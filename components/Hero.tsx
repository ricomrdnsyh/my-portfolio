"use client";

import { motion } from "framer-motion";
import { Siren } from "lucide-react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-surface py-8 md:py-12 lg:py-stack-gap border-b-8 border-on-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-12 lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-fit lg:min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="col-span-1 lg:col-span-7 flex flex-col gap-6 items-start"
        >
          <div className="inline-block px-4 py-2 bg-primary-container text-on-primary-container neo-border font-label-code text-label-code uppercase tracking-widest font-bold -rotate-2">
            FULLSTACK WEB DEVELOPER
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg uppercase text-on-surface">
            HI, I'M <span className="bg-primary-container px-2">RICO</span>
            <br />
            MARDIANSYAH
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl bg-surface-container-lowest p-6 neo-border neo-shadow">
            Building robust, scalable backends and engaging, dynamic frontends.
            I engineer digital experiences that hit hard and run fast.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              className="bg-primary-container text-on-surface neo-border neo-shadow neo-hover neo-active p-3 transition-all duration-100 flex items-center justify-center"
              href="https://instagram.com/ricomrdnsyh/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              className="bg-secondary-container text-on-surface neo-border neo-shadow neo-hover neo-active p-3 transition-all duration-100 flex items-center justify-center"
              href="https://x.com/ricomrdnsyh/"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              className="bg-tertiary-container text-on-surface neo-border neo-shadow neo-hover neo-active p-3 transition-all duration-100 flex items-center justify-center"
              href="https://linkedin.com/in/ricomardiansyah/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              className="bg-surface-container-lowest text-on-surface neo-border neo-shadow neo-hover neo-active p-3 transition-all duration-100 flex items-center justify-center"
              href="https://github.com/ricomrdnsyh/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0 relative"
        >
          <div className="relative w-full max-w-[400px] aspect-[4/5] md:aspect-square mx-auto group">
            <div className="absolute inset-0 bg-primary-container border-[4px] border-on-surface translate-x-6 translate-y-6 md:translate-x-8 md:translate-y-8 transition-transform group-hover:translate-x-10 group-hover:translate-y-10"></div>
            <div className="relative z-10 w-full h-full border-[4px] border-on-surface bg-surface-container-lowest p-3">
              <img
                alt="Ahmad Rico Mardiansyah Portrait"
                className="w-full h-full object-contain border-[4px] border-on-surface transition-all duration-300"
                src="/images/profile.jpg"
              />
            </div>
            <Siren
              className="absolute -top-10 -left-10 text-on-surface w-24 h-24 z-20 hidden lg:block rotate-12 drop-shadow-[4px_4px_0px_#ffe174]"
              strokeWidth={1.5}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
