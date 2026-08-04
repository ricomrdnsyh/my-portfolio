"use client";

import { motion } from "framer-motion";
import { Siren } from "lucide-react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-neon-yellow border-b-[8px] border-black overflow-hidden flex flex-col justify-center items-center pt-24 pb-12">
      {/* Marquee Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block font-display-lg text-[20vw] font-black uppercase text-black">
           FULLSTACK WEB DEVELOPER • PROBLEM SOLVER • CREATIVE CODER • FULLSTACK WEB DEVELOPER • PROBLEM SOLVER • CREATIVE CODER • 
        </div>
      </div>
      
      {/* Giant Typography */}
      <div className="relative z-10 text-center w-full max-w-[1440px] px-4 pointer-events-none mt-8">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-display-lg text-[15vw] md:text-[160px] leading-[0.85] uppercase font-black text-black drop-shadow-[8px_8px_0px_#fff]"
        >
          RICO<br/>MARDIANSYAH
        </motion.h1>
      </div>

      {/* Centerpiece Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-20 mt-[-8vw] md:mt-[-100px] w-full max-w-[280px] md:max-w-[360px] aspect-[4/5]"
      >
        <div className="w-full h-full neo-border neo-shadow bg-white p-3 rotate-3 hover:rotate-0 transition-transform duration-300">
           <img
            alt="Ahmad Rico Mardiansyah Portrait"
            className="w-full h-full object-cover border-[4px] border-black"
            src="/images/profile.jpg"
          />
        </div>
        <Siren
          className="absolute -top-10 -right-10 text-black w-24 h-24 z-20 rotate-12 drop-shadow-[4px_4px_0px_#fff]"
          strokeWidth={2}
        />
      </motion.div>

      {/* Intro Box & Socials */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-20 mt-16 bg-white neo-border neo-shadow p-6 md:p-8 max-w-2xl text-center mx-4"
      >
        <div className="inline-block px-4 py-2 bg-black text-white font-label-code text-sm uppercase tracking-widest font-bold mb-4 -rotate-2">
          Based in Indonesia
        </div>
        <p className="font-body-lg text-lg text-black mb-8 font-bold">
          Building robust, scalable backends and engaging, dynamic frontends.
          I engineer digital experiences that hit hard and run fast.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
            <a className="bg-neon-pink text-black neo-border neo-shadow neo-hover neo-active p-4 flex items-center justify-center transition-all" href="https://instagram.com/ricomrdnsyh/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a className="bg-neon-cyan text-black neo-border neo-shadow neo-hover neo-active p-4 flex items-center justify-center transition-all" href="https://x.com/ricomrdnsyh/" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a className="bg-neon-green text-black neo-border neo-shadow neo-hover neo-active p-4 flex items-center justify-center transition-all" href="https://linkedin.com/in/ricomardiansyah/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a className="bg-white text-black neo-border neo-shadow neo-hover neo-active p-4 flex items-center justify-center transition-all" href="https://github.com/ricomrdnsyh/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub className="w-6 h-6" />
            </a>
        </div>
      </motion.div>
    </section>
  );
}
