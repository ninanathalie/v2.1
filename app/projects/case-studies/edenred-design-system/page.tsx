import React from "react";
import SectionHeading from "@/components/shared/heading";
import ScrollAware from "@/components/shared/scoll-aware";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function EdenredDesignSystem() {
  const links = [
    { name: "Intro", hash: "#intro" },
    { name: "Overview", hash: "#overview" },
    { name: "Goals", hash: "#goals" },
    { name: "The Process", hash: "#the-process" },
    { name: "Solution", hash: "#solution" },
    { name: "Results", hash: "#results" },
  ];
  const initialActiveSection = "1";

  return (
    <ActiveSectionContextProvider initialActiveSection={initialActiveSection} links={links}>
      <ScrollAware links={links} />

      <div id="intro">
        <div className="container pt-20 px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72 project-title">
          <div className="py-10 sm:py-16">
            <div className="grid xl:grid-cols-2 xl:mx-0 4xl:mx-20 md:gap-10 lg:gap-8 3xl:gap-20 gap-4 grid-rows-1">
              <div className="nn-title">
                <h1 className="sm:text-4xl text-3xl font-medium pb-3 md:pb-8">
                  <SectionHeading>Edenred Design System</SectionHeading>
                </h1>
                <p className="leading-relaxed xl:leading-7 text-xs md:text-sm pb-2 md:pb-5">
                  UI DESIGN <span className="px-3">|</span> DESIGN SYSTEM
                </p>
                <h2 className="font-thin text-lg md:text-xl mb-3 md:mb-12">A design system for a Fintech</h2>
                <div>
                  <div className="grid grid-cols-1 mt-3 md:mt-4 mb-3 md:mb-12">
                    <div className="grid grid-cols-8 gap-1 md:gap-2 grid-rows-1">
                      <div className="col-span-2 py-1 text-xs md:text-sm">
                        <div className="font-thin uppercase">ROLE</div>
                        <div className="font-thin uppercase">TOOLS</div>
                      </div>
                      <div className="col-span-6 py-1 text-xs md:text-sm">
                        <div>PRODUCT DESIGNER</div>
                        <div>FIGMA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="leading-relaxed xl:leading-7 text-justify">
                  The Wages Protection System is a mandatory legal requirement in the UAE for businesses registered under the MoHRE. Their guidelines prevent companies from making WPS payments in cash or by cheque. Such registered companies must adhere to this system as their
                  mode of salary payment.
                </p>
                <p className="leading-relaxed xl:leading-7 text-justify">
                  However, unbanked migrants face various challenges in the UAE, such as the difficulties of sending money abroad. Despite having a large unbanked population, the United Arab Emirates became the world's third-largest sender of international remittances in 2020,
                  transferring $35 billion abroad, according to the World Bank.
                </p>
              </div>
            </div>
            <p className="leading-relaxed xl:leading-7 text-justify">This vast sum of international money transfers is carried out by workers from South and Southeast Asia, who constitute more than 88% of the UAE’s population.</p>
            <p className="leading-relaxed xl:leading-7 text-justify">
              In contrast, since they often earn less than the threshold set by traditional banks, these workers do not have the luxury of digital money transfer options. Instead, they rely on physical exchange houses to send money overseas. Along with frequent trips to exchange
              houses, these individuals are often locked into a system where they are charged high fees and forced to wait in long queues every month to send money to their families in their home country.
            </p>
            <p className="leading-relaxed xl:leading-7 text-justify">This is just one of the many recurring challenges that unbanked or underbanked workers face living and working in the UAE.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="px-0 mx-0 md:mx-8 xl:mb-4 bg-brown-secondary-color flex justify-center">
          <picture>
            <source media="(min-width: 1920px)" srcSet="/projects/case-studies/edenred-design-system/img_1.svg" />
            <source media="(min-width: 769px)" srcSet="/projects/case-studies/edenred-design-system/img_1.svg" />
            <source media="(min-width: 0)" srcSet="/projects/case-studies/edenred-design-system/img_1.svg" />
            <img width="1920" height="716" src="/projects/case-studies/edenred-design-system/img_1.svg" />
          </picture>
        </div>
      </div>

      <div id="overview">
        <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
          <div className="py-6 sm:py-10">
            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
              <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                <SectionHeading>Overview</SectionHeading>
              </h1>
              <p className="leading-relaxed xl:leading-7 text-justify mb-3">
                In the first quarter of this year, I was offered a position at a Fintech company, Edenred - and my first task was to overhaul the Edenred Portal. Edenred is a fintech company in Dubai that drives financial inclusion in the United Arab Emirates. It is one of the
                largest salary processing provider in the country, offering Edenred Payroll for businesses and C3Pay for its employees. Through Edenred's Payroll portal, employers can now process employee salaries via the C3Pay card for unbanked migrants in the UAE rather than
                receiving their salaries through exchange houses. The app gives employees access to their finances, allows them to transfer funds easily, recharge their phones, and many more.
              </p>
              <p className="leading-relaxed xl:leading-7 text-justify">
                With the continuous growth of the Edenred Payroll portal, the product accumulated a great deal of design debt. It became evident that many of the pages, products, features, and components were not in sync with the UI and UX. No standard components of the design
                system exist, and each part of the portal was designed at a different time by different designers with different contexts. There was no unified design philosophy or principle to guide them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="goals">
        <div className="px-0 mx-0 bg-white dark:bg-white/5">
          <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
            <div className="py-10 sm:py-16">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                  <SectionHeading>Goals</SectionHeading>
                </h1>
                <p className="text-justify">The lack of underlying principles led to a lot of time spent debating and implementing design decisions. There was also a lack of predictability and consistency, which impacted the user experience.</p>
                <p className="text-justify mb-6">
                  The launch of a brand-new MVP model was a tipping point. Therefore, we decided to recreate the Edenred Payroll+ Design System so it can grow and scale organically over time with new products. This business goal trickled down to the rest of the team in the way of
                  a complete overhaul of the product’s design language.
                </p>

                <h3 className="font-semibold mb-2">Thus, we sought to deliver the following:</h3>
                <ol className="list-decimal ml-6 leading-relaxed xl:leading-7 mb-6">
                  <li>Drive consistency across all our products, platforms and businesses</li>
                  <li>Make the portal look more modern while aligning with the brand's core values</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="the-process">
        <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
          <div className="py-10 sm:py-16">
            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-6 md:mb-8">
              <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                <SectionHeading>The Process</SectionHeading>
              </h1>
              <p className="text-justify leading-relaxed xl:leading-7">How do we build a design system without knowing how the interface will turn out? But also, how do we design the interface when we don't even have a defined design system?</p>
              <p className="text-justify leading-relaxed xl:leading-7 mb-6">To define a component, we utilized the Atomic Design methodology by Brad Frost. His quote appears at the beginning of an article discussing atomic design principles.</p>

              <h2 className="text-center italic text-lg md:text-xl xl:text-2xl mb-6">
                <span className="font-bold">
                  “We’re not designing pages, <br />
                  we’re designing systems of components”
                </span>
                <br />
                <span className="text-justify text-sm leading-relaxed xl:leading-7">— Stephen Hay</span>
              </h2>

              <p className="text-justify leading-relaxed xl:leading-7">
                So I began by listing down all the essential components in the portal and where and how they were used. With the comprehensive library at our disposal, we were able to develop a more systematic design system.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="px-0 mx-0 bg-[#F6F8FF] dark:bg-white/5">
          <div className="container px-8 md:px-16 lg:px-14 xl:px-16 3xl:px-52 4xl:px-72">
            <div className="py-10 sm:py-16">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <picture>
                  <source media="(min-width: 1920px)" srcSet="/projects/case-studies/edenred-design-system/img_3.svg" />
                  <source media="(min-width: 769px)" srcSet="/projects/case-studies/edenred-design-system/img_3.svg" />
                  <source media="(min-width: 0)" srcSet="/projects/case-studies/edenred-design-system/img_3.svg" />
                  <img width="1920" height="716" src="/projects/case-studies/edenred-design-system/img_3.svg" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="solution">
        <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
          <div className="pt-10 sm:pt-16 pb-8 sm:pb-12">
            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-6 md:mb-8">
              <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                <SectionHeading>Building the Design System: our Figma Library</SectionHeading>
              </h1>
              <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-6">Atoms</h2>
              <p className="text-justify leading-relaxed xl:leading-7">The entire system is based on simple elements such as typography, spacing, and color.</p>
            </div>
            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
              <picture>
                <source media="(min-width: 1920px)" srcSet="/projects/case-studies/edenred-design-system/img_4.svg" />
                <source media="(min-width: 769px)" srcSet="/projects/case-studies/edenred-design-system/img_4.svg" />
                <source media="(min-width: 0)" srcSet="/projects/case-studies/edenred-design-system/img_4.svg" />
                <img width="1920" height="716" src="/projects/case-studies/edenred-design-system/img_4.svg" />
              </picture>
            </div>
            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
              <picture>
                <source media="(min-width: 1920px)" srcSet="/projects/case-studies/edenred-design-system/img_5.svg" />
                <source media="(min-width: 769px)" srcSet="/projects/case-studies/edenred-design-system/img_5.svg" />
                <source media="(min-width: 0)" srcSet="/projects/case-studies/edenred-design-system/img_5.svg" />
                <img width="1920" height="716" src="/projects/case-studies/edenred-design-system/img_5.svg" />
              </picture>
            </div>
            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-8 md:mb-16">
              <picture>
                <source media="(min-width: 1920px)" srcSet="/projects/case-studies/edenred-design-system/img_6.svg" />
                <source media="(min-width: 769px)" srcSet="/projects/case-studies/edenred-design-system/img_6.svg" />
                <source media="(min-width: 0)" srcSet="/projects/case-studies/edenred-design-system/img_6.svg" />
                <img width="1920" height="716" src="/projects/case-studies/edenred-design-system/img_6.svg" />
              </picture>
            </div>

            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-6 md:mb-8">
              <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-6">Molecules</h2>
              <p className="text-justify leading-relaxed xl:leading-7">
                As we combined these atoms to form molecules, things became more interesting and tangible. These molecules are simple systems created by the essential elements. Those elements can take many forms like buttons, inputs, table cells, etc.
              </p>
            </div>
            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
              <picture>
                <source media="(min-width: 1920px)" srcSet="/projects/case-studies/edenred-design-system/img_7.svg" />
                <source media="(min-width: 769px)" srcSet="/projects/case-studies/edenred-design-system/img_7.svg" />
                <source media="(min-width: 0)" srcSet="/projects/case-studies/edenred-design-system/img_7.svg" />
                <img width="1920" height="716" src="/projects/case-studies/edenred-design-system/img_7.svg" />
              </picture>
            </div>
            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-6 md:mb-8">
              <picture>
                <source media="(min-width: 1920px)" srcSet="/projects/case-studies/edenred-design-system/img_8.svg" />
                <source media="(min-width: 769px)" srcSet="/projects/case-studies/edenred-design-system/img_8.svg" />
                <source media="(min-width: 0)" srcSet="/projects/case-studies/edenred-design-system/img_8.svg" />
                <img width="1920" height="716" src="/projects/case-studies/edenred-design-system/img_8.svg" />
              </picture>
            </div>

            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-6 md:mb-8">
              <p className="text-justify leading-relaxed xl:leading-7">Molecules provided us with building blocks, which we combined to form organisms — the interface began to take shape.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="results">
        <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
          <div className="py-6 sm:py-12">
            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-6 md:mb-8">
              <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                <SectionHeading>How did this help the company and its stakeholders? What was the impact of this on our products?</SectionHeading>
              </h1>
              <p className="mb-2">
                <span className="font-bold">🖍 Company -</span> The consistency of our product helped us build trust
              </p>
              <p className="mb-2">
                <span className="font-bold">🖥 Product -</span> We are able to build and ship things faster, as well as the quality of the shipped products.
              </p>
              <p className="mb-2">
                <span className="font-bold">👩🏻‍🎨 Designers -</span> It's now much easier to create, share, and synchronize quite a few components at a much faster rate
              </p>
              <p className="mb-2">
                <span className="font-bold">🧑🏻‍💻 Developers -</span> We are now able to collaborate effectively by communicating the designs
              </p>
              through design tokens
            </div>

            <div className="grid grid-rows-1 bg-white dark:bg-white/5">
              <div className="py-6 md:py-10 mx-6 xl:mx-14 3xl:mx-20">
                <p className="leading-relaxed xl:leading-7 italic text-justify">I have omitted confidential information in this case study. The information presented here is my own and does not necessarily reflect the views of the company.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ActiveSectionContextProvider>
  );
}
