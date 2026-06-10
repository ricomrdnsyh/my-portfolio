"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLocationDot, FaEnvelope } from "react-icons/fa6";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);
    const k1 = "4fd480bc-09a6";
    const k2 = "-43bb-a900-86e5e29cd609";
    formData.append("access_key", k1 + k2);

    try {
      const targetUrl = atob("aHR0cHM6Ly9hcGkud2ViM2Zvcm1zLmNvbS9zdWJtaXQ=");
      const response = await fetch(targetUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        setErrorMessage("Terjadi kesalahan saat mengirim pesan.");
      }
    } catch (error) {
      setErrorMessage("Gagal terhubung ke server.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            LET'S{" "}
            <span className="bg-primary-container px-4 py-2 inline-block neo-border neo-shadow my-2">BUILD</span>
            <br />TOGETHER
          </h2>
          <div className="flex flex-col gap-4 max-w-md mt-4">
            <div className="flex items-center gap-4 bg-surface-container-lowest p-4 neo-border">
              <FaLocationDot className="w-6 h-6 text-on-surface flex-shrink-0" />
              <span className="font-body-lg text-body-lg text-on-surface-variant font-bold uppercase">Jawa Timur, Indonesia</span>
            </div>
            
            <a
              href="https://wa.me/6285182520135"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-primary-container text-on-surface p-4 neo-border neo-shadow neo-hover neo-active transition-all duration-100"
            >
              <FaWhatsapp className="w-6 h-6 flex-shrink-0" />
              <span className="font-body-lg text-body-lg font-bold uppercase tracking-wide">0851 8252 0135</span>
            </a>

            <a
              href="mailto:ricomardiansyah27@gmail.com"
              className="flex items-center gap-4 bg-secondary-container text-on-surface p-4 neo-border neo-shadow neo-hover neo-active transition-all duration-100"
            >
              <FaEnvelope className="w-6 h-6 flex-shrink-0" />
              <span className="font-body-lg text-body-lg font-bold uppercase tracking-wide">ricomardiansyah27@gmail</span>
            </a>
          </div>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-surface-container-lowest p-8 neo-border neo-shadow flex flex-col gap-6 w-full"
        >
          {isSuccess && (
            <div className="bg-[#A7F3D0] text-[#064E3B] p-4 font-bold text-center border-2 border-[#064E3B] shadow-[4px_4px_0px_0px_#064E3B] mb-4">
              ✅ Pesan berhasil terkirim!
            </div>
          )}

          {errorMessage && (
            <div className="bg-[#FECACA] text-[#7F1D1D] p-4 font-bold text-center border-2 border-[#7F1D1D] shadow-[4px_4px_0px_0px_#7F1D1D] mb-4">
              ❌ {errorMessage}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="font-label-code text-label-code font-bold uppercase" htmlFor="name">NAMA LENGKAP</label>
            <input 
              className="w-full bg-surface neo-border p-4 font-body-md text-body-md focus:bg-primary-container focus:ring-0 focus:outline-none transition-colors" 
              id="name" 
              name="name"
              placeholder="John Doe" 
              type="text" 
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-code text-label-code font-bold uppercase" htmlFor="email">EMAIL</label>
            <input 
              className="w-full bg-surface neo-border p-4 font-body-md text-body-md focus:bg-primary-container focus:ring-0 focus:outline-none transition-colors" 
              id="email" 
              name="email"
              placeholder="john@example.com" 
              type="email" 
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-code text-label-code font-bold uppercase" htmlFor="message">PESAN</label>
            <textarea 
              className="w-full bg-surface neo-border p-4 font-body-md text-body-md focus:bg-primary-container focus:ring-0 focus:outline-none transition-colors resize-none" 
              id="message" 
              name="message"
              placeholder="Ceritakan tentang proyek Anda..." 
              rows={5}
              required
            ></textarea>
          </div>
          <button 
            className="w-full bg-on-surface text-surface neo-border neo-shadow neo-hover neo-active p-4 font-headline-md text-headline-md uppercase tracking-wider mt-4 disabled:opacity-50" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "MENGIRIM..." : "KIRIM"}
          </button>
        </motion.form>

      </div>
    </section>
  );
}
