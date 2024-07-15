"use client";

import React from "react";
import Image from "next/image";
import { showcaseItems } from "@/lib/data";
import SectionHeading from "../shared/heading";
import { motion } from "framer-motion";

type ShowcaseProps = (typeof showcaseItems)[number];
export default function HomepageShowcase() {
  return (
    <section>
      <div className="pt-10 md:pt-16">
        <motion.div className="flex justify-center" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}>
          <div className="container px-8 md:px-16 lg:px-14 xl:px-30 3xl:px-52 4xl:px-72 mb-12 xl:mb-16 3xl:mb-24">
            <h3 className="font-semibold tracking-tight lg:tracking-normal">Here’s some of the latest and greatest of my previous works:</h3>
          </div>
        </motion.div>

        {showcaseItems.map((showcase, index) => (
          <React.Fragment key={index}>
            <Showcase {...showcase} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function Showcase({ title, sub, description, tags, imageUrl, link }: ShowcaseProps) {
  return (
    <motion.div className="nn-featured" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}>
      <a href={link}>
        <div className="xl:bg-featured-container px-0 flex w-full items-center justify-center mb-10 xl:mb-32 2xl:mb-42 4xl:mb-48 xl:h-[340px] 3xl:h-[380px] overflow-visible">
          <div className="container xl:flex items-center xl:-space-x-32 px-8 md:px-16 lg:px-14 xl:px-30 3xl:px-52 4xl:px-72">
            <div className="bg-featured-img flex items-center justify-center xl:w-5/6 w-full 4xl:h-[525px] 3xl:h-[445px] lg:h-[435px] md:h-[320px] h-[250px] overflow-hidden">
              <motion.div className="relative w-full h-full" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.3 }}>
                <Image src={imageUrl} alt={title} quality={95} className="mx-auto xl:mx-0 object-cover" />
              </motion.div>
            </div>
            <div className="nn-featured-content xl:w-3/6 w-full xl:h-[340px] 3xl:h-[380px] xl:bg-white dark:xl:bg-slate-900 py-5 xl:py-10 xl:px-10 flex flex-wrap content-center">
              <h1 className="relative font-medium text-2xl md:text-3xl mb-2 xl:leading-8">
                <SectionHeading> {title} </SectionHeading>
              </h1>
              <h2 className="font-extralight text-base md:text-lg mb-2">{sub}</h2>
              <p className="mb-6 leading-relaxed xl:leading-7 text-justify">{description}</p>
              <p className="text-xs">
                {tags.map((tag) => (
                  <span key={tag} className="pr-6">
                    {tag}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
