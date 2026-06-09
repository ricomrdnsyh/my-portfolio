"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="w-full bg-stripe-pattern py-stack-gap border-t-4 border-on-surface" id="contact">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none">
            LET'S<br />
            <span className="bg-primary-container px-4 py-2 inline-block neo-border neo-shadow my-2">BUILD</span>
            <br />TOGETHER
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md bg-surface-container-lowest p-6 neo-border">
            Tertarik untuk kolaborasi atau memiliki proyek yang butuh sentuhan developer? Silakan hubungi saya melalui form di samping.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-surface-container-lowest p-8 neo-border neo-shadow flex flex-col gap-6 w-full"
        >
          <div className="flex flex-col gap-2">
            <label className="font-label-code text-label-code font-bold uppercase" htmlFor="name">NAMA LENGKAP</label>
            <input 
              className="w-full bg-surface neo-border p-4 font-body-md text-body-md focus:bg-primary-container focus:ring-0 focus:outline-none transition-colors" 
              id="name" 
              placeholder="John Doe" 
              type="text" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-code text-label-code font-bold uppercase" htmlFor="email">EMAIL</label>
            <input 
              className="w-full bg-surface neo-border p-4 font-body-md text-body-md focus:bg-primary-container focus:ring-0 focus:outline-none transition-colors" 
              id="email" 
              placeholder="john@example.com" 
              type="email" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-code text-label-code font-bold uppercase" htmlFor="message">PESAN</label>
            <textarea 
              className="w-full bg-surface neo-border p-4 font-body-md text-body-md focus:bg-primary-container focus:ring-0 focus:outline-none transition-colors resize-none" 
              id="message" 
              placeholder="Ceritakan tentang proyek Anda..." 
              rows={5}
            ></textarea>
          </div>
          <button 
            className="w-full bg-on-surface text-surface neo-border neo-shadow neo-hover neo-active p-4 font-headline-md text-headline-md uppercase tracking-wider mt-4" 
            type="button"
          >
            KIRIM
          </button>
        </motion.form>

      </div>
    </section>
  );
}
