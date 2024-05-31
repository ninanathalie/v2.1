"use client";

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
            <div>
              <a href="/projects/case-studies/edenred-design-system/" className=" dark:text-slate-950 dark:hover:text-white">
                <div className="case-img">
                  <picture>
                    <source media="(min-width: 900px)" srcSet="/projects/design-system.jpg" />
                    <source media="(min-width: 0)" srcSet="/projects/mob/design-system.jpg" />
                    <img width="2560" height="716" src="/projects/design-system.jpg" />
                  </picture>

                  <div className="top-left">
                    <p className="font-bold mb-1">Edenred Payroll+ Design System</p>
                    <p className="text-xs">
                      UI DESIGN <span className="px-3">|</span> DESIGN SYSTEM
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a href="/projects/case-studies/visual-search/" className=" dark:text-slate-950 dark:hover:text-white">
                <div className="case-img">
                  <picture>
                    <source media="(min-width: 900px)" srcSet="/projects/visual-search.jpg" />
                    <source media="(min-width: 0)" srcSet="/projects/mob/visual-search.jpg" />
                    <img width="2560" height="716" src="/projects/visual-search.jpg" />
                  </picture>

                  <div className="top-left">
                    <p className="font-bold mb-1">BFL + Syte’s Visual Search & Product Discovery</p>
                    <p className="text-xs">
                      UX DESIGN <span className="px-3">|</span> RESEARCH <span className="px-3">|</span> PROTOTYPING
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a href="/projects/case-studies/easy-filter/" className=" dark:text-slate-950 dark:hover:text-white">
                <div className="case-img">
                  <picture>
                    <source media="(min-width: 900px)" srcSet="/projects/quick-filter.jpg" />
                    <source media="(min-width: 0)" srcSet="/projects/mob/quick-filter.jpg" />
                    <img width="2560" height="716" src="/projects/quick-filter.jpg" />
                  </picture>

                  <div className="top-left">
                    <p className="font-bold mb-1">Quick & Easy Filter for Shoppers</p>
                    <p className="text-xs">
                      UX DESIGN <span className="px-3">|</span> RESEARCH <span className="px-3">|</span> PROTOTYPING
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a href="/projects/case-studies/checkout-redesign/" target="_blank" className=" dark:text-slate-950 dark:hover:text-white">
                <div className="case-img">
                  <picture>
                    <source media="(min-width: 900px)" srcSet="/projects/checkout-process.jpg" />
                    <source media="(min-width: 0)" srcSet="/projects/mob/checkout-process.jpg" />
                    <img width="2560" height="716" src="/projects/checkout-process.jpg" />
                  </picture>

                  <div className="top-left">
                    <p className="font-bold mb-1">Checkout Process Redesign & Optimization</p>
                    <p className="text-xs">
                      UX DESIGN <span className="px-3">|</span> RESEARCH <span className="px-3">|</span> PROTOTYPING
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
