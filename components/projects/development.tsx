import React, { useRef } from "react";

import SectionHeading from "@/components/ui/heading";
import { otherProjectsData, projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";

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
            <div>
              <h1 className="sm:text-2xl text-xl font-medium pb-4 md:pb-6">
                <SectionHeading>Currently, I work full-time on Aether's ROAS Agency's internal projects</SectionHeading>
              </h1>
            </div>
          </div>

          <div className="nn-title grid grid-rows-1 mb-4">
            <div>
              <h2 className="font-thin text-lg md:text-xl mb-2">
                I devise design solutions, maintain Shopify and Wordpress websites, and contribute to improving our internal Shopify theme and Web Apps, with all collaborative efforts with my two <span>masters</span>. 🐣
              </h2>
            </div>
          </div>

          <div className="md:gap-4 4xl:gap-6 pb-5">
            <div className="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 gap-6">
              {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                  <Project {...project} />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="nn-title grid grid-rows-1 mb-4 overflow-hidden">
            <div>
              <p className="font-thin text-md md:text-lg mb-2 text-slate-500">Here's a selection of front-end projects that I've also worked on in the past:</p>
            </div>
            <div className="marquee-projects gap-2" style={{ minWidth: "100%", maxWidth: "max-content" }}>
              <ul className="flex gap-2 text-md text-slate-600">
                {otherProjectsData.map((links, index) => (
                  <li className="bg-white rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:border dark:border-black/[0.1] " key={index}>
                    <a href="#" className="group transition flex items-center font-bold underline underline-offset-4 hover:no-underline">
                      {links} <RiArrowRightUpLine className="opactity-70 group-hover:translate-x-1 transition" />
                    </a>
                  </li>
                ))}
              </ul>
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
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-1 mt-4 md:mt-auto">
            {tags.map((tag, index) => (
              <li className="bg-black/40 px-3 pt-[0.2rem] text-[0.7rem] uppercase tracking-wider text-white rounded-full font-bold dark:text-white/70" key={index}>
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
          md:group-hover:-translate-x-3 md:group-hover:translate-y-3 md:group-hover:-rotate-2 md:group-hover:scale-105"
        />
      </section>
    </div>
  );
}
