"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-neon-yellow border-b-[8px] border-black overflow-hidden flex flex-col justify-center items-center pt-12 md:pt-24 pb-12">
      <div className="relative w-full max-w-[1440px] mt-2 md:mt-8 flex flex-col items-center">
        <div className="absolute top-[60%] md:top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen flex items-center justify-center opacity-20 pointer-events-none z-0">
          <div className="animate-marquee inline-block font-display-lg text-[25vw] md:text-[20vw] xl:text-[200px] font-black uppercase text-black leading-none whitespace-nowrap">
            {Array(4).fill("FULLSTACK WEB DEVELOPER • BUILD • CODE • DEPLOY • REPEAT • ").join("")}
          </div>
        </div>
        <div className="relative z-10 text-center w-full px-4 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display-lg text-[11.5vw] lg:text-[130px] xl:text-[160px] leading-[0.85] uppercase font-black text-black drop-shadow-[4px_4px_0px_#fff] md:drop-shadow-[8px_8px_0px_#fff]"
          >
            RICO
            <br />
            MARDIANSYAH
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-20 mt-[-10vw] md:mt-[-8vw] lg:mt-[-100px] w-[80%] max-w-[240px] md:max-w-[280px] lg:max-w-[360px] aspect-[4/5] mx-auto"
        >
          <div
            tabIndex={0}
            className="w-full h-full border-[6px] border-black shadow-[10px_10px_0px_0px_#000] bg-white p-3 rotate-3 hover:rotate-0 focus:rotate-0 active:rotate-0 transition-transform duration-300 cursor-pointer outline-none"
          >
            <img
              alt="Ahmad Rico Mardiansyah Portrait"
              className="w-full h-full object-cover border-[4px] border-black"
              src="/images/profile.jpg"
            />
          </div>
        </motion.div>

        <div className="absolute top-0 left-0 z-30 text-center w-full px-4 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display-lg text-[11.5vw] lg:text-[130px] xl:text-[160px] leading-[0.85] uppercase font-black text-transparent [-webkit-text-stroke:2px_black] md:[-webkit-text-stroke:4px_black]"
          >
            RICO
            <br />
            MARDIANSYAH
          </motion.h1>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-20 mt-12 md:mt-16 bg-white border-[4px] md:border-[6px] border-black shadow-[6px_6px_0px_0px_#000] md:shadow-[10px_10px_0px_0px_#000] p-5 md:p-8 w-[calc(100%-2rem)] max-w-2xl text-center mx-auto"
      >
        <div className="inline-block px-4 py-2 bg-black text-white font-label-code text-sm uppercase tracking-widest font-bold mb-4 -rotate-2">
          Fullstack Web Developer
        </div>
        <p className="font-body-lg text-lg text-black mb-8 font-bold">
          I build fast, secure, and responsive web applications using Laravel,
          PHP, JavaScript, Bootstrap or Tailwind, and MySQL.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          <a
            className="bg-neon-pink text-black border-[4px] md:border-[6px] border-black shadow-[6px_6px_0px_0px_#000] md:shadow-[10px_10px_0px_0px_#000] hover:translate-x-[4px] md:hover:translate-x-[6px] hover:translate-y-[4px] md:hover:translate-y-[6px] hover:shadow-[2px_2px_0px_0px_#000] md:hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[6px] md:active:translate-x-[10px] active:translate-y-[6px] md:active:translate-y-[10px] active:shadow-none p-3 md:p-4 flex items-center justify-center transition-all"
            href="https://instagram.com/ricomrdnsyh/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            className="bg-neon-cyan text-black border-[4px] md:border-[6px] border-black shadow-[6px_6px_0px_0px_#000] md:shadow-[10px_10px_0px_0px_#000] hover:translate-x-[4px] md:hover:translate-x-[6px] hover:translate-y-[4px] md:hover:translate-y-[6px] hover:shadow-[2px_2px_0px_0px_#000] md:hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[6px] md:active:translate-x-[10px] active:translate-y-[6px] md:active:translate-y-[10px] active:shadow-none p-3 md:p-4 flex items-center justify-center transition-all"
            href="https://x.com/ricomrdnsyh/"
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
          >
            <FaXTwitter className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            className="bg-neon-green text-black border-[4px] md:border-[6px] border-black shadow-[6px_6px_0px_0px_#000] md:shadow-[10px_10px_0px_0px_#000] hover:translate-x-[4px] md:hover:translate-x-[6px] hover:translate-y-[4px] md:hover:translate-y-[6px] hover:shadow-[2px_2px_0px_0px_#000] md:hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[6px] md:active:translate-x-[10px] active:translate-y-[6px] md:active:translate-y-[10px] active:shadow-none p-3 md:p-4 flex items-center justify-center transition-all"
            href="https://linkedin.com/in/ricomardiansyah/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            className="bg-white text-black border-[4px] md:border-[6px] border-black shadow-[6px_6px_0px_0px_#000] md:shadow-[10px_10px_0px_0px_#000] hover:translate-x-[4px] md:hover:translate-x-[6px] hover:translate-y-[4px] md:hover:translate-y-[6px] hover:shadow-[2px_2px_0px_0px_#000] md:hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[6px] md:active:translate-x-[10px] active:translate-y-[6px] md:active:translate-y-[10px] active:shadow-none p-3 md:p-4 flex items-center justify-center transition-all"
            href="https://github.com/ricomrdnsyh/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
