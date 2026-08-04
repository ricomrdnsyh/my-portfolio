"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Code } from "lucide-react";
import { useRef } from "react";

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const { current } = scrollRef;
      const child = current.children[0] as HTMLElement;
      const scrollAmount = child.offsetWidth + 32;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
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
      bg: "bg-neon-cyan",
      tech: ["Laravel", "MySQL", "Tailwind", "Bootstrap", "Rest API"],
    },
    {
      title: "E-LAPOR",
      subtitle: "Kanal Resmi Pengaduan & Aspirasi Civitas Akademika",
      desc: "Sistem informasi manajemen pengaduan dan aspirasi digital untuk civitas akademika Universitas Nurul Jadid.",
      image: "/images/lapor.png",
      demoUrl: "https://lapor.unuja.ac.id",
      sourceUrl: "#",
      bg: "bg-neon-yellow",
      tech: ["Laravel", "MySQL", "Bootstrap", "Rest API"],
    },
    {
      title: "SIPERSA",
      subtitle: "Sistem Informasi Manajemen & Peminjaman Sarana Perpustakaan",
      desc: "Platform digital terpusat untuk mengelola inventaris dan peminjaman sarana & prasarana perpustakaan.",
      image: "/images/perpus.png",
      demoUrl: "#",
      sourceUrl:
        "https://github.com/ricomrdnsyh/Aplikasi-Sarana-Perpus-Laravel10",
      bg: "bg-neon-green",
      tech: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
      title: "UMKM Grow Website",
      subtitle: "UMKM Grow – Capstone Project",
      desc: "Platform web interaktif yang dirancang untuk mendukung eskalasi bisnis dan memfasilitasi digitalisasi pelaku UMKM.",
      image: "/images/umkm.png",
      demoUrl: "https://frontend-capstone-umkmgrow.vercel.app/",
      sourceUrl: "https://github.com/orgs/FS-9-SkilvulTech4Impact/repositories",
      bg: "bg-neon-purple",
      tech: ["React", "Node.js", "Express"],
    },
  ];

  return (
    <section
      className="w-full bg-neon-pink py-24 border-b-[8px] border-black text-black"
      id="project"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-8">
        <h2 className="font-headline-lg text-[40px] md:text-[60px] font-black uppercase text-center w-full">
          FEATURED{" "}
          <span className="bg-white px-4 py-2 neo-border neo-shadow inline-block transform -rotate-2">
            PROJECTS
          </span>
        </h2>

        <div className="flex items-center gap-4 md:gap-6 w-full mt-8">
          <button
            onClick={() => scroll("left")}
            className="flex-shrink-0 bg-white text-black neo-border p-2 md:p-3 shadow-[8px_8px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100 hidden md:block"
            aria-label="Scroll Left"
          >
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
          </button>

          <div
            ref={scrollRef}
            className="flex-1 flex overflow-x-auto gap-8 pb-8 scroll-smooth snap-x snap-mandatory px-4 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group mt-8 md:mt-0 w-[85vw] md:w-[600px] flex-shrink-0 snap-center"
              >
                <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
                <div
                  className={`relative ${project.bg} border-[6px] border-black flex flex-col h-full transform transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2 w-full`}
                >
                  <div className="w-full border-b-[6px] border-black overflow-hidden bg-white relative flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-all duration-[3s] ease-in-out group-hover:object-bottom absolute inset-0"
                    />
                    <div className="relative w-full aspect-video"></div>{" "}
                  </div>

                  <div className="w-full p-5 md:p-6 flex flex-col flex-1 justify-between">
                    <div className="flex flex-col gap-3 w-full">
                      <div>
                        <h3 className="font-headline-md text-headline-md mb-2">
                          {project.title}
                        </h3>
                        <h4 className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                          {project.subtitle}
                        </h4>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {project.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 w-full mt-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-white border-[3px] border-black font-label-code text-label-code font-bold uppercase shadow-[3px_3px_0px_0px_#000]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full mt-6">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 bg-black text-white neo-border neo-shadow neo-hover neo-active px-4 py-3 font-bold uppercase transition-all duration-100"
                      >
                        <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
                        DEMO
                      </a>
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 bg-white text-black neo-border neo-shadow neo-hover neo-active px-4 py-3 font-bold uppercase transition-all duration-100"
                      >
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
            onClick={() => scroll("right")}
            className="flex-shrink-0 bg-white text-black neo-border p-2 md:p-3 shadow-[8px_8px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100 hidden md:block"
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
}
