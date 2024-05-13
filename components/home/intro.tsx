"use client";

import React from "react";
import SectionHeading from "@/components/ui/heading";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Intro() {
  const [typewriter] = useTypewriter({
    words: ["building a better future."],
    loop: true,
  });

  return (
    <section className="flex justify-center">
      <div className="container pt-20 px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72">
        <div className="nn-title border-b-2 border-white py-10 sm:py-16">
          <div className="grid md:grid-cols-3 grid-rows-1">
            <div className="md:col-span-2">
              <motion.div className="featured-text relative sm:text-4xl text-3xl font-bold pb-2 md:pb-5" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                <SectionHeading>Hello, I'm Niña Nathalie 👋🏼 </SectionHeading> <br />
                <SectionHeading>I’m a Digital Product Designer and a</SectionHeading> <br />
                <SectionHeading> Front-end Developer</SectionHeading>
              </motion.div>

              <motion.p className="text-justify md:text-left leading-relaxed xl:leading-7" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                As a designer with over 6+ years of experience, I wear many hats. <br className="break-web" />
                However, front-end design and development piqued my interest.{" "}
                <span>
                  Building a seamless experience for the user and much more is like <span className="text-[#9DA0F4] font-semibold dark:border-white">{typewriter}</span> <Cursor />
                </span>
              </motion.p>

              <motion.div className="mt-5" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <a className="nn-btn nn-btn-primary btn-arrow flex items-center" href="/about/">
                  Tell Me More{" "}
                  <span className="arrow-icon">
                    <HiOutlineArrowNarrowRight />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
