"use client";

import { caseStudiesData } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";

export default function CaseStudies() {
  return (
    <section>
      <div className="container px-8 md:px-16 lg:px-14 xl:px-30 3xl:px-52 4xl:px-72 mb-6 text-primary-color dark:text-primary-color">
        <div className="nn-title grid grid-rows-1 mb-6">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="font-extralight text-lg md:text-xl mb-2">Documentation plays an integral part in product design. So here's a selection of some of my recently completed product design case studies covering a wide range of design disciplines.</h2>
          </motion.div>
        </div>
        <motion.div className="pb-10 sm:pb-8" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.425 }}>
          <div className="grid lg:grid-cols-2 grid-rows-1 gap-4 xl:gap-6">
            {caseStudiesData.map(({ href, imgSrc, title, description }, index) => (
              <div key={index}>
                <a href={href} className="dark:text-slate-950 dark:hover:text-white">
                  <div className="case-img">
                    <picture>
                      <source media="(min-width: 900px)" srcSet={imgSrc.desktop} />
                      <source media="(min-width: 0)" srcSet={imgSrc.mobile} />
                      <img width="2560" height="716" src={imgSrc.desktop} alt={title} />
                    </picture>
                    <div className="top-left">
                      <p className="font-bold mb-1">{title}</p>
                      <p className="text-xs">
                        {description.map((desc, i) => (
                          <span key={i}>
                            {desc}
                            {i < description.length - 1 && <span className="px-3">|</span>}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
