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
      className="w-full py-stack-gap border-t-4 border-on-surface bg-surface-container"
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
          <h2 className="font-headline-lg text-headline-lg uppercase">
            <span className="bg-secondary-container px-2">SKILLS</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 neo-border neo-shadow cursor-default"
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
          <h2 className="font-headline-lg text-headline-lg uppercase mb-6">
            <span className="bg-tertiary-container px-2">ABOUT</span> ME
          </h2>
          <div className="bg-surface-container-lowest p-8 neo-border neo-shadow text-body-lg font-body-lg">
            I'm a full-stack developer with a strong focus on backend
            architecture and interactive frontend design. Building systems that
            not only function but also provide a solid user experience.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
