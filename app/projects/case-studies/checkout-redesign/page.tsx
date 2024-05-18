import React from "react";
import SectionHeading from "@/components/shared/heading";
import ScrollAware from "@/components/shared/scoll-aware";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function VisualSearch() {
  const links = [
    { name: "intro", hash: "#intro" },
    { name: "overview", hash: "#overview" },
    { name: "why-redesign", hash: "#why-redesign" },
    { name: "competitive-studies", hash: "#competitive-studies" },
    { name: "design-exploration", hash: "#design-exploration" },
    { name: "solution", hash: "#solution" },
  ];
  const initialActiveSection = "1";

  return (
    <ActiveSectionContextProvider initialActiveSection={initialActiveSection} links={links}>
      <ScrollAware links={links} />

      <section>
        <div id="intro">
          <div className="container pt-20 px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72 project-title">
            <div className="py-10 sm:py-16">
              <div className="grid xl:grid-cols-2 xl:mx-0 4xl:mx-20 md:gap-10 lg:gap-8 3xl:gap-20 gap-4 grid-rows-1">
                <div className="nn-title">
                  <h1 className="sm:text-4xl text-3xl font-medium pb-3">
                    <SectionHeading>Checkout Process Redesign & Optimization</SectionHeading>
                  </h1>
                  <p className="leading-relaxed xl:leading-7 text-xs md:text-sm pb-2 md:pb-5">
                    UX DESIGN <span className="px-3">|</span>
                    COMPETITIVE STUDIES
                    <span className="px-3">|</span> PROTOTYPING
                  </p>
                  <div>
                    <button type="submit" className="flex nn-btn nn-btn-primary h-12 md:h-14 hover:text-white dark:text-white hover:bg-slate-800 dark:hover:bg-slate-900/20 border border-slate-800 dark:border-white py-3 px-8 md:py-4 md:px-10">
                      <svg className="mr-3" width="24" height="24" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.998 72.9881C38.5169 72.9881 42.996 68.509 42.996 62.99V52.9919H32.998C27.4791 52.9919 23 57.4711 23 62.99C23 68.509 27.4791 72.9881 32.998 72.9881Z" fill="#0ACF83" />
                        <path d="M23 42.9938C23 37.4749 27.4791 32.9958 32.998 32.9958H42.996V52.9918H32.998C27.4791 52.9918 23 48.5127 23 42.9938Z" fill="#A259FF" />
                        <path d="M23.0007 22.998C23.0007 17.4791 27.4798 13 32.9987 13H42.9967V32.996H32.9987C27.4798 32.996 23.0007 28.5169 23.0007 22.998Z" fill="#F24E1E" />
                        <path d="M42.9946 13H52.9927C58.5116 13 62.9907 17.4791 62.9907 22.998C62.9907 28.5169 58.5116 32.996 52.9927 32.996H42.9946V13Z" fill="#FF7262" />
                        <path d="M62.9907 42.9938C62.9907 48.5127 58.5116 52.9918 52.9927 52.9918C47.4737 52.9918 42.9946 48.5127 42.9946 42.9938C42.9946 37.4749 47.4737 32.9958 52.9927 32.9958C58.5116 32.9958 62.9907 37.4749 62.9907 42.9938Z" fill="#1ABCFE" />
                      </svg>
                      Figma Prototype
                    </button>
                  </div>
                </div>

                <div>
                  <p className="leading-relaxed xl:leading-7 text-justify">
                    BFL Group is one of the world’s leading off-price retailers of fashion that is based in the United Arab Emirates and serves over three markets across the Middle East and Europe. Known for its unique “Treasure Hunt” model, Brands for Less ensures that there is
                    always something new to explore, desire, and discover.
                  </p>
                  <div className="grid grid-cols-1 my-3 md:mt-4">
                    <div className="grid grid-cols-8 gap-1 md:gap-2 grid-rows-1">
                      <div className="col-span-2 py-1 text-xs md:text-sm">
                        <div className="font-thin uppercase">ROLE</div>
                        <div className="font-thin uppercase">TOOLS</div>
                      </div>
                      <div className="col-span-6 py-1 text-xs md:text-sm">
                        <div>PRODUCT DESIGNER</div>
                        <div>FIGMA, ADOBE CREATIVE SUITE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="px-0 mx-0 md:mx-8 xl:mb-4 bg-brown-secondary-color flex justify-center">
            <picture>
              <source media="(min-width: 1920px)" srcSet="/projects/case-studies/checkout-redesign/lg/img_1.jpg" />
              <source media="(min-width: 769px)" srcSet="/projects/case-studies/checkout-redesign/img_1.jpg" />
              <source media="(min-width: 0)" srcSet="/projects/case-studies/checkout-redesign/mob/img_1.jpg" />
              <img width="2560" height="716" />
            </picture>
          </div>
        </div>

        <div id="overview">
          <div className="container px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72">
            <div className="py-6 sm:py-10">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h1 className="font-medium sm:text-4xl text-3xl mb-3">Overview</h1>
                <p className="leading-relaxed xl:leading-7 text-justify">
                  Brands For Less is one of the biggest retail stores in the United Arab Emirates and has operations in 6 countries for its physical store and caters in 12 countries from its e-commerce platform, including the United Arab Emirates, United States of America, Malta,
                  Philippines, Oman, Kuwait, Lebanon, Saudi Arabia, India, Jordan and many more. Working at Brands For Less, I spend most of my time day in and out designing new features. And due to its fast pace of development and complicated checkout process, the design is not
                  consistent and still has a lot of usability issues.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="why-redesign">
          <div className="container px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72 py-6 sm:py-10">
            <div className="mb-3 md:mb-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                  <SectionHeading>The Problem Statement</SectionHeading>
                </h1>
                <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Why Redesign?</h2>
                <p className="leading-relaxed xl:leading-7 text-justify">Let's have a look at the current checkout process. Here is what an unregistered user goes through to place an order:</p>
              </div>
            </div>
            <div className="mb-3 md:mb-6">
              <div className="text-center bg-[#C1CEFB] px-0 mx-0 md:mx-8 mb-2 xl:mb-3 bg-brown-secondary-color flex justify-center">
                <picture>
                  <source media="(min-width: 1920px)" srcSet="/projects/case-studies/checkout-redesign/img_2.png" />
                  <source media="(min-width: 769px)" srcSet="/projects/case-studies/checkout-redesign/img_2.png" />
                  <source media="(min-width: 0)" srcSet="/projects/case-studies/checkout-redesign/img_2.png" />
                  <img width="2560" height="716" />
                </picture>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-400">Brands For Less Mobile App: Unregistered Checkout Process</p>
              </div>
            </div>
            <div className="mb-3 md:mb-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <p className="leading-relaxed xl:leading-7 text-justify">Overall this looks like a typical checkout process. However, we can spot the obvious issues here.</p>

                <ul className="list-decimal list-outside ml-6">
                  <li>We have complex delivery and payment methods divided into multiple options that appear to be congested as it also displays the order summary and other payment options on each screen.</li>
                  <li>The header does not change to represent each step. Thus, you are unable to identify your progress.</li>
                  <li>Navigating through the checkout process is a one-way road: you cannot go back to the previous screen.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72 py-6 sm:py-10">
            <div className="mb-3 md:mb-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                  <SectionHeading>The Goal</SectionHeading>
                </h1>
                <p className="leading-relaxed xl:leading-7 text-justify">
                  Thousands of orders are processed every day by Brands For Less. And so, based on the problems previously outlined and information I will collect from further research, we aim to streamline and simplify the checkout process without completely changing the
                  structure of information.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="competitive-studies">
          <div className="px-0 mx-0 bg-[#FCFFEF] dark:bg-primary-color">
            <div className="container px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72">
              <div className="py-6 sm:py-12 mb-6 md:mb-10">
                <div className="mb-3 md:mb-6">
                  <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                    <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                      <SectionHeading>Research</SectionHeading>
                    </h1>
                    <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Competitive Studies</h2>
                    <p className="leading-relaxed xl:leading-7 text-justify">
                      The initial step in my research was to identify successful patterns in current products and determine where their unique value is lacking. Our research uncovered seven e-commerce platforms similar to Brands For Less in functionality and narrowed them down to
                      three top competitors.
                    </p>
                    <p className="leading-relaxed xl:leading-7 text-justify">
                      I analyzed their existing features and compared them to Brands For Less to help me understand industry standards and identify opportunities — focusing on their app checkout function and hierarchical customer journey.
                    </p>
                  </div>
                </div>
                <div className="mb-3 md:mb-6">
                  <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                    <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Summarizing Key Insights from the Research</h2>
                    <ul className="list-decimal list-outside ml-6">
                      <li>Customers want a seamless purchase experience through flexible delivery and payment options.</li>
                      <li>In a hierarchical customer journey, a step-based process plays a significant role.</li>
                      <li>Fast and seamless transaction/customer experience increases retention and average order value.</li>
                      <li>It is valuable for shoppers to review their orders before they place them.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="design-exploration">
          <div className="container px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72">
            <div className="pt-6 sm:pt-12 mb-6 md:mb-10">
              <div className="mb-3 md:mb-6">
                <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                  <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                    <SectionHeading>Ideation</SectionHeading>
                  </h1>
                  <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Crazy 8s — Design Exploration</h2>
                  <p className="leading-relaxed xl:leading-7 text-justify">
                    Crazy 8s is an ideation technique that produces several possible solutions to solving a problem. It is a helpful technique for UI design exploration, and it is a widely used technique since it allows you to make many designs in a short period, and anyone can
                    take part. The same principles apply to brainstorming: you trade quality for freedom and speed of generating solutions.
                  </p>
                  <p className="leading-relaxed xl:leading-7 text-justify">There are countless ideas in navigation that boil down to either of two approaches:</p>
                </div>
              </div>
              <div className="mb-3 md:mb-6">
                <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-2 xl:mb-3">
                  <picture>
                    <source media="(min-width: 768px)" srcSet="/projects/case-studies/checkout-redesign/img_4.svg" />
                    <source media="(min-width: 0)" srcSet="/projects/case-studies/checkout-redesign/mob/img_4.svg" />
                    <img width="2560" height="716" />
                  </picture>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-400">Two (2) Approaches For Design Exploration</p>
                </div>
              </div>
              <div className="mb-3 md:mb-6">
                <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                  <p className="leading-relaxed xl:leading-7 text-justify">However, after countless discussions and a few iterations, we have decided to redesign the whole structure and move forward with the first option to streamline the process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="solution">
          <div className="container px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72 py-6 sm:py-10">
            <div className="mb-3 md:mb-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                  <SectionHeading>Redesign Process & How We Addressed The Problem</SectionHeading>
                </h1>
                <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Login / Register</h2>
                <p className="leading-relaxed xl:leading-7 text-justify">The first step was to redesign the checkout page after an unregistered user clicked on the login button, highlighting their option to sign up using social accounts.</p>
              </div>
            </div>
            <div className="mb-3 md:mb-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-2 xl:mb-3">
                <video autoPlay muted loop playsInline preload="metadata">
                  <source src="/projects/case-studies/checkout-redesign/img_5.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72 py-6 sm:py-10">
            <div className="mb-3 md:mb-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Delivery Type</h2>
                <p className="leading-relaxed xl:leading-7 text-justify">
                  As soon as the user logs in or registers, shoppers will be able to choose the delivery option shown as an accordion rather than a radio button, allowing us to display important information like the saved delivery address. We have also removed unnecessary
                  elements from each screen to make it less congested and only display essential information.
                </p>
                <p className="leading-relaxed xl:leading-7 text-justify">
                  Brands For Less offers three delivery options and there are two cases in each scenario, return customer and new customer. If they are a new customer, they will be required to enter the address where their items will be delivered or the location of the store
                  where they want to pick up or collect their items. After the user has logged in, this will show the option to choose their delivery type.
                </p>
              </div>
            </div>
            <div className="mb-3 md:mb-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <video autoPlay muted loop playsInline preload="metadata">
                  <source src="/projects/case-studies/checkout-redesign/img_6.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="mb-3 md:mb-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <p className="leading-relaxed xl:leading-7 text-justify">
                  However, if they are returning customers, the address is already saved. The app also allows you to save multiple delivery addresses. Shoppers who already have an account can select or change their default delivery address if they have previously registered.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72">
            <div className="mb-3 md:mb-6 py-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Payment Method</h2>
                <p className="leading-relaxed xl:leading-7 text-justify">
                  Recently, we have added Tabby payment to give our shoppers a more flexible way to shop. Due to fast development and the need to implement it as quickly as possible, we have only added this new feature in the payment section, but the layout and other features
                  remain the same. So as we have outlined our goal for this redesign, we have decided to create separate pages for each important step like delivery and payment method.
                </p>
              </div>
            </div>
          </div>
          <div className="px-0 mx-0 bg-[#E8EBFB]">
            <div className="mb-6 md:mb-10">
              <div className="mb-3 md:mb-6">
                <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                  <img src="/projects/case-studies/checkout-redesign/img_7.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72 py-6 sm:py-10">
            <div className="mb-3 md:mb-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Review Order</h2>
              </div>
            </div>
            <div className="mb-3 md:mb-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <video autoPlay muted loop playsInline preload="metadata">
                  <source src="/projects/case-studies/checkout-redesign/img_8.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="mb-3 md:mb-6">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <p className="leading-relaxed xl:leading-7 text-justify">Overall, in the previous version of the app, the user didn't have the option to return to the previous screen when they wanted to make changes or select a different delivery type.</p>
                <p className="leading-relaxed xl:leading-7 text-justify">To address this problem, instead of showing a close button in each step, we replaced it with a back button and only showed a close button if it is a separate page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ActiveSectionContextProvider>
  );
}
