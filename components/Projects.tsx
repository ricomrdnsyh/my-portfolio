"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Code } from "lucide-react";
import { useRef } from "react";

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const { current } = scrollRef;
      const child = current.children[0] as HTMLElement;
      // offsetWidth of the card + gap-8 (32px)
      const scrollAmount = child.offsetWidth + 32; 
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };
  
  const projects = [
    {
      title: "SiPermata",
      subtitle: "Sistem Informasi Pengajuan Surat Mahasiswa",
      desc: "Aplikasi layanan surat menyurat mahasiswa Universitas Nurul Jadid yang terintegrasi secara digital untuk kemudahan layanan akademik.",
      image: "/images/sipermata.png",
      demoUrl: "https://sipermata.unuja.ac.id",
      sourceUrl: "#",
      bg: "bg-secondary-container",
      tech: ["Laravel", "MySQL", "Tailwind", "Bootstrap", "Rest API"]
    },
    {
      title: "E_LAPOR",
      subtitle: "Kanal resmi pengaduan & aspirasi civitas akademika",
      desc: "Aplikasi layanan pengaduan dan aspirasi mahasiswa Universitas Nurul Jadid yang terintegrasi secara digital untuk kemudahan layanan akademik.",
      image: "/images/lapor.png",
      demoUrl: "https://lapor.unuja.ac.id",
      sourceUrl: "#",
      bg: "bg-primary-container",
      tech: ["PHP", "Bootstrap"]
    }
  ];

  return (
    <section className="w-full bg-surface-container-low py-stack-gap border-t-4 border-on-surface" id="project">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-8">
        
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg uppercase text-center w-full">
          FEATURED <span className="bg-primary-container px-4 py-2 neo-border neo-shadow inline-block transform -rotate-2">WORK</span>
        </h2>
        
        <div className="flex items-center gap-4 md:gap-6 w-full mt-8">
          <button 
            onClick={() => scroll('left')}
            className="flex-shrink-0 bg-surface-container-lowest text-on-surface neo-border p-2 md:p-3 shadow-[4px_4px_0px_0px_#1a1c1c] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100 hidden md:block"
            aria-label="Scroll Left"
          >
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
          </button>

          <div 
            ref={scrollRef}
            className="flex-1 flex overflow-x-auto gap-8 pb-8 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {projects.map((project, index) => (
              <motion.article 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group mt-8 md:mt-0 min-w-full flex-shrink-0 snap-center"
            >
              <div className="absolute inset-0 bg-on-surface translate-x-4 translate-y-4"></div>
              <div className={`relative ${project.bg} border-[4px] border-on-surface flex flex-col lg:flex-row transform transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2 w-full`}>
                
                {/* Image Section - Left on Desktop, Top on Mobile */}
                <div className="w-full lg:w-[55%] border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-on-surface overflow-hidden bg-surface-container-lowest relative flex-shrink-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-all duration-[3s] ease-in-out group-hover:object-bottom absolute inset-0" />
                  <div className="relative w-full aspect-video"></div> {/* Maintain aspect ratio 16:9 to prevent it from stretching to text height */}
                </div>
                
                {/* Content Section - Right on Desktop, Bottom on Mobile */}
                <div className="w-full lg:w-[45%] p-5 md:p-6 flex flex-col justify-center">
                  <div className="flex flex-col gap-3 w-full">
                    <div>
                      <h3 className="font-headline-lg text-headline-lg mb-2">{project.title}</h3>
                      <h4 className="font-headline-md text-headline-md text-on-surface-variant mb-4">{project.subtitle}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{project.desc}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 w-full mt-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-surface-container-lowest border-[2px] border-on-surface font-label-code text-label-code font-bold uppercase shadow-[2px_2px_0px_0px_#1a1c1c]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full mt-6">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 bg-primary text-on-primary neo-border neo-shadow neo-hover neo-active px-4 py-3 font-bold uppercase transition-all duration-100">
                      <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
                      DEMO
                    </a>
                    <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 bg-surface-container-lowest text-on-surface neo-border neo-shadow neo-hover neo-active px-4 py-3 font-bold uppercase transition-all duration-100">
                      <Code className="w-5 h-5" strokeWidth={2.5} />
                      CODE
                    </a>
                  </div>
                </div>

              </div>
            </motion.article>
          ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="flex-shrink-0 bg-surface-container-lowest text-on-surface neo-border p-2 md:p-3 shadow-[4px_4px_0px_0px_#1a1c1c] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100 hidden md:block"
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
          </button>
        </div>

      </div>
    </section>
  );
}
