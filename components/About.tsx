"use client";

import { motion } from "framer-motion";
import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

export function About() {
  const skills = [
    {
      name: "PHP",
      icon: <SiPhp className="w-6 h-6" />,
      bg: "#777BB4",
      color: "white",
    },
    {
      name: "Laravel",
      icon: <SiLaravel className="w-6 h-6" />,
      bg: "#FF2D20",
      color: "white",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="w-6 h-6" />,
      bg: "#4479A1",
      color: "white",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-6 h-6" />,
      bg: "#F7DF1E",
      color: "black",
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="w-6 h-6" />,
      bg: "#7952B3",
      color: "white",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-6 h-6" />,
      bg: "#06B6D4",
      color: "white",
    },
    {
      name: "Git",
      icon: <SiGit className="w-6 h-6" />,
      bg: "#F05032",
      color: "white",
    },
  ];

  return (
    <section
      className="w-full py-24 border-b-[8px] border-black bg-neon-cyan"
      id="about"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-7 order-2 flex flex-col gap-6"
        >
          <h2 className="font-headline-lg text-[40px] md:text-[60px] font-black uppercase text-black mb-4">
            <span className="bg-white px-4 py-1 neo-border">SKILLS</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -6, scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 neo-border neo-shadow cursor-default border-black"
                style={{ backgroundColor: skill.bg, color: skill.color }}
              >
                {skill.icon}
                <span className="font-label-code text-label-code uppercase font-bold">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-5 order-1"
        >
          <h2 className="font-headline-lg text-[40px] md:text-[60px] font-black uppercase text-black mb-6">
            <span className="bg-neon-yellow px-4 py-1 neo-border">ABOUT</span> ME
          </h2>
          <div className="bg-white p-8 neo-border neo-shadow text-lg font-bold text-black leading-relaxed">
            I'm a full-stack developer with a strong focus on backend
            architecture and interactive frontend design. Building systems that
            not only function but also provide a solid user experience.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
