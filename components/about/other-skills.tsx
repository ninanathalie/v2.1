"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/shared/heading";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function OtherSkills() {
  const [scale, setScale] = useState(1.15);

  return (
    <section>
      <div className="container px-8 md:px-16 lg:px-14 xl:px-30 3xl:px-52 4xl:px-72 mb-6">
        <div className="py-10 sm:py-16">
          <div className="nn-title grid grid-rows-1 mb-10">
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}>
              <h2 className="font-extralight text-lg md:text-xl mb-2">
                My interest in art is not limited to just designing a seamless user experience, <br className="break-web" />
                I've also got a couple of other tricks up my sleeve.
              </h2>
            </motion.div>
          </div>
          <motion.div className="grid grid-rows-1" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.225 }}>
            <h1 className="sm:text-4xl text-3xl font-medium pb-6 md:pb-8">
              <SectionHeading>On some days, I transform my designs into codes</SectionHeading>
            </h1>
          </motion.div>

          <motion.div className="grid grid-flow-col xl:grid-cols-3 grid-rows-2 overflow-x-auto xl:overflow-visible gap-2 md:gap-4 4xl:gap-6 pb-5" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.275 }}>
            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="/bfl-welcome-email/" target="_blank">
                  <img src="/about/bfl-welcome-email.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>

            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="#" target="_blank">
                  <img src="/about/senor-grooming.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>

            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="https://www.figma.com/proto/FnLrBcTRxWyxkg8KN2ppGp/Brand-Landing-Pages?page-id=1%3A3&node-id=202%3A2&viewport=317%2C506%2C0.13&scaling=scale-down-width&starting-point-node-id=202%3A2&hide-ui=1" target="_blank">
                  <img src="/about/muy-mucho.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>

            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="https://www.figma.com/proto/FnLrBcTRxWyxkg8KN2ppGp/Brand-Landing-Pages?page-id=1%3A2&node-id=408%3A453&viewport=1218%2C858%2C0.29&scaling=min-zoom&hide-ui=1" target="_blank">
                  <img src="/about/tabby.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>

            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="/" target="_blank">
                  <img src="/about/bfl-voucher-email.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>

            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="/ryt-partners/" target="_blank">
                  <img src="/about/ryt-partners.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
