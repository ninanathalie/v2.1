"use client";

import React, { useRef } from "react";
import SectionHeading from "@/components/shared/heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function DevelopmentProjects() {
  return (
    <section>
      <div className="container pt-20 px-8 md:px-16 lg:px-14 xl:px-30 3xl:px-52 4xl:px-72">
        <div className="py-10 sm:py-16">
          <div className="grid grid-rows-1">
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}>
              <h1 className="sm:text-2xl text-xl font-medium pb-4 md:pb-6">
                <SectionHeading>Currently, I work full-time on Aether's ROAS Agency's internal projects</SectionHeading>
              </h1>
            </motion.div>
          </div>

          <div className="md:gap-4 4xl:gap-6 pb-5">
            <div className="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 gap-6">
              {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                  <motion.div variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }} custom={index}>
                    <Project {...project} />
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
      <section className="relative flex justify-center items-center md:justify-start md:items-start bg-white/40 max-w-[42rem] border border-black/5 overflow-hidden md:pr-8 h-[26rem] md:h-[20rem] hover:bg-white/80 transition dark:bg-white/20 dark:hover:bg-white/20 dark:text-white">
        <div className="flex flex-col items-center text-center md:text-left md:items-start pt-4 pb-8 px-5 md:pl-10 md:pr-2 md:pt-10 md:max-w-[50%] h-full">
          <motion.h3 className="text-lg font-bold" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.345 }}>
            {title}
          </motion.h3>
          <motion.p className="mt-2 text-sm text-slate-700 dark:text-white/70" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.375 }}>
            {description}
          </motion.p>
          <motion.ul className="flex flex-wrap justify-center md:justify-start gap-1 mt-4 md:mt-auto" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            {tags.map((tag, index) => (
              <li className="bg-black/40 px-3 pt-[0.2rem] text-[0.7rem] uppercase tracking-wider text-white rounded-full font-bold dark:text-white/70" key={index}>
                {tag}
              </li>
            ))}
          </motion.ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute top-56 sm:top-44 md:top-10 px-4 md:px-0 md:-right-40 w-[40rem] md:w-[28.25rem] rounded-lg shadow-2xl transition 
          md:group-hover:-translate-x-3 md:group-hover:translate-y-3 md:group-hover:-rotate-2 md:group-hover:scale-105"
        />
      </section>
    </div>
  );
}
