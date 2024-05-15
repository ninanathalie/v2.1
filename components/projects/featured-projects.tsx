"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/heading";
import { RiArrowRightUpLine } from "react-icons/ri";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center scroll-mt-28 mb-32">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      <a href="/" className="group transition flex items-center font-semibold underline underline-offset-4 hover:no-underline cursor-cell mt-8">
        View Full Project Archive <RiArrowRightUpLine className="opactity-70 group-hover:translate-x-1 transition" />
      </a>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className="group mb-3 sm:mb-8 last:mb-0">
      <section className="relative flex justify-center items-center md:justify-start md:items-start bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden md:pr-8 h-[26rem] md:h-[20rem] md:group-even:pl-8 hover:bg-gray-200 transition rounded-lg dark:bg-white/20 dark:hover:bg-white/20 dark:text-white">
        <div className="flex flex-col items-center text-center md:text-left md:items-start pt-4 pb-8 px-5 md:pl-10 md:pr-2 md:pt-10 md:max-w-[50%] h-full md:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2 mt-4 md:mt-auto">
            {tags.map((tag, index) => (
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full font-semibold dark:text-white/70" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute top-56 sm:top-44 md:top-10 px-4 md:px-0 md:-right-40 w-[40rem] md:w-[28.25rem] rounded-lg shadow-2xl transition 
            md:group-hover:-translate-x-3 md:group-hover:translate-y-3 md:group-hover:-rotate-2 md:group-hover:scale-105
            md:group-even:group-hover:translate-x-3 md:group-even:group-hover:translate-y-3 md:group-even:group-hover:rotate-2
            md:group-even:right-[initial] md:group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
