"use client";

import { motion } from "framer-motion";

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      className="w-full bg-primary-container py-stack-gap border-t-4 border-b-8 border-on-surface"
      id="experience"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-headline-lg text-headline-lg uppercase bg-primary-container inline-block px-4 w-fit neo-border neo-shadow mb-4">
            EDUCATION
          </h2>
          <div className="relative border-l-4 border-on-surface pl-8 ml-4 flex flex-col gap-12">
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-[42px] top-0 w-6 h-6 bg-primary-container neo-border rounded-full"></div>
              <div className="bg-surface-container-lowest p-6 neo-border neo-shadow neo-hover transition-all duration-100">
                <h3 className="font-headline-md text-headline-md">
                  Nurul Jadid University
                </h3>
                <p className="font-label-code text-label-code text-on-surface-variant mb-2">
                  2021 - 2025
                </p>
                <p className="font-body-md text-body-md">
                  Bachelor's Degree - Informatics Engineering
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-[42px] top-0 w-6 h-6 bg-secondary-container neo-border rounded-full"></div>
              <div className="bg-surface-container-lowest p-6 neo-border neo-shadow neo-hover transition-all duration-100">
                <h3 className="font-headline-md text-headline-md">
                  SMK Negeri 2 Kraksaan
                </h3>
                <p className="font-label-code text-label-code text-on-surface-variant mb-2">
                  2018 - 2021
                </p>
                <p className="font-body-md text-body-md">
                  High School - Software Engineering
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-headline-lg text-headline-lg uppercase bg-tertiary-container inline-block px-4 w-fit neo-border neo-shadow mb-4 md:self-end">
            EXPERIENCE
          </h2>
          <div className="flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <div className="bg-surface-container-lowest p-6 neo-border neo-shadow neo-hover transition-all duration-100 border-t-[8px] border-t-primary-container">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-2">
                  <h3 className="font-headline-md text-headline-md">
                    Software Engineer
                  </h3>
                  <span className="font-label-code text-label-code bg-surface-container px-3 py-1 neo-border whitespace-nowrap w-fit">
                    Nurul Jadid University
                  </span>
                </div>
                <p className="font-label-code text-label-code text-on-surface-variant mb-2">
                  Sep 2025 - Present
                </p>
                <p className="font-body-md text-body-md">
                  Design, build, and manage end-to-end applications that support
                  and elevate internal operational processes.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-surface-container-lowest p-6 neo-border neo-shadow neo-hover transition-all duration-100 border-t-[8px] border-t-tertiary-container">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-2">
                  <h3 className="font-headline-md text-headline-md">
                    Customer Services PMB
                  </h3>
                  <span className="font-label-code text-label-code bg-surface-container px-3 py-1 neo-border whitespace-nowrap w-fit">
                    Nurul Jadid University
                  </span>
                </div>
                <p className="font-label-code text-label-code text-on-surface-variant mb-2">
                  Mar 2022 - Jun 2025
                </p>
                <p className="font-body-md text-body-md">
                  Providing information and the new student registration
                  process, both digitally and in-person.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-surface-container-lowest p-6 neo-border neo-shadow neo-hover transition-all duration-100 border-t-[8px] border-t-secondary-container">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-2">
                  <h3 className="font-headline-md text-headline-md">
                    Fullstack Web Development
                  </h3>
                  <span className="font-label-code text-label-code bg-surface-container px-3 py-1 neo-border whitespace-nowrap w-fit">
                    MSIB Batch 5 - Skilvul
                  </span>
                </div>
                <p className="font-label-code text-label-code text-on-surface-variant mb-2">
                  Aug 2023 - Dec 2023
                </p>
                <p className="font-body-md text-body-md">
                  Completed an end-to-end application project that included
                  UI/UX design (Figma), frontend development (React.js), and
                  backend (Express.js) stages.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-surface-container-lowest p-6 neo-border neo-shadow neo-hover transition-all duration-100 border-t-[8px] border-t-primary-container">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2 mb-2">
                  <h3 className="font-headline-md text-headline-md">
                    Admin &amp; Technician
                  </h3>
                  <span className="font-label-code text-label-code bg-surface-container px-3 py-1 neo-border whitespace-nowrap w-fit">
                    Swirty Computer
                  </span>
                </div>
                <p className="font-label-code text-label-code text-on-surface-variant mb-2">
                  Jan 2020 - Jun 2020
                </p>
                <p className="font-body-md text-body-md">
                  Data administration and computer hardware/software repair.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
