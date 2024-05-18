"use client";

import React from "react";
import SectionHeading from "@/components/shared/heading";
import ScrollAware from "@/components/shared/scoll-aware";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function VisualSearch() {
  const links = [
    { name: "intro", hash: "#intro" },
    { name: "overview", hash: "#overview" },
    { name: "why-redesign", hash: "#why-redesign" },
    { name: "Competitive Studies", hash: "#competitive-studies" },
    { name: "Design Exploration", hash: "#design-exploration" },
    { name: "Solution", hash: "#solution" },
  ];
  const initialActiveSection = "intro";

  return (
    <ActiveSectionContextProvider initialActiveSection={initialActiveSection} links={links}>
      <ScrollAware links={links} />

      <section>
        <div id="intro">
          <div className="container pt-20 px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72 project-title">
            <div className="py-10 sm:py-16">
              <div className="grid xl:grid-cols-2 xl:mx-0 4xl:mx-20 md:gap-10 lg:gap-8 3xl:gap-20 gap-4 grid-rows-1">
                <div className="nn-title">
                  <h1 className="sm:text-4xl text-3xl font-medium pb-3">
                    <SectionHeading>Brands For Less + Syte's Visual Search & Product Discovery</SectionHeading>
                  </h1>
                  <p className="leading-relaxed xl:leading-7 text-xs md:text-sm pb-2 md:pb-5">
                    UX DESIGN <span className="px-3">|</span> RESEARCH <span className="px-3">|</span> PROTOTYPING
                  </p>
                  <h2 className="font-thin text-lg md:text-xl mb-3 md:mb-7">Revolutionizing e-commerce with visual AI solution</h2>
                  <div>
                    <div className="dropdown inline-block relative">
                      <button className="flex nn-btn nn-btn-primary h-12 md:h-14 hover:text-white dark:text-white hover:bg-slate-800 dark:hover:bg-slate-900/20 border border-slate-800 dark:border-white py-3 px-8 md:py-4 md:px-10">
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
                        <div>FIGMA</div>
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
              <source media="(min-width: 1920px)" srcSet="/projects/case-studies/visual-search/lg/img_1.jpg" />
              <source media="(min-width: 769px)" srcSet="/projects/case-studies/visual-search/img_1.jpg" />
              <source media="(min-width: 0)" srcSet="/projects/case-studies/visual-search/mob/img_1.jpg" />
              <img width="1920" height="716" src="/projects/case-studies/visual-search/img_1.jpg" />
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
                <p className="leading-relaxed xl:leading-7 text-justify">
                  Retailers, marketplaces, and brands are already aware that most consumers jumpstart their product searches on the Internet. People are now taking advantage of the convenience of online shopping, saving time and money by avoiding the hassle of making trips to
                  stores, browsing, and selecting items from the comfort of their homes.
                </p>
                <p className="leading-relaxed xl:leading-7 text-justify">
                  With visual search, users can find products by taking pictures or uploading an image from their smartphones. The customers' desire to discover new brands and products fuels the rise of visual search in online stores.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
            <div className="py-6 sm:py-10">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                  <SectionHeading>The Shift from Brick-and-Mortar to Online</SectionHeading>
                </h1>
                <p className="leading-relaxed xl:leading-7 text-justify">
                  Increasing technological advancements have paved the way for the shift from retail to online. The deterioration of brick and mortar stores has been evident for over a decade but experienced a steep drop in the last year alone due to the COVID-19 pandemic.
                  Governments around the world have enacted new measures. Over 100 countries worldwide had instituted either a full or partial lockdown by the end of March 2020, affecting billions of people and businesses. Consequently, this led to a shift towards online
                  shopping, which meant businesses had to put all their efforts into e-commerce and their online presence to remain profitable and cut losses. Hence, companies and brands invest in improving online customer experiences to stay competitive and market their
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="why-redesign">
          <div className="px-0 mx-0 bg-white dark:bg-white/5">
            <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
              <div className="py-10 sm:py-16">
                <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                  <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                    <SectionHeading>The Challenge: Creating a Seamless Omnichannel Customer Experience</SectionHeading>
                  </h1>
                  <p className="text-justify">Knowing that flexibility and dependability are important factors to create a seamless omnichannel experience, we sought to deliver the same level of service and personalization online as it does in stores.</p>
                  <p className="text-justify mb-6">In order to provide a better customer experience, meet user expectations, and ensure the website adheres to the company's core values of beauty, functionality, and sustainability, how can we utilize design thinking?</p>

                  <h3 className="font-bold mb-2">Thus, we sought to deliver the following:</h3>
                  <ol className="list-decimal ml-6 leading-relaxed xl:leading-7 mb-6">
                    <li>Transform product search and discovery into an engaging and captivating experience</li>
                    <li>Enhance online presence to increase brand awareness and cultivate loyalty</li>
                    <li>Capture the momentum of its already-strong traffic</li>
                    <li>Expand product search and discovery capabilities with visual AI</li>
                  </ol>

                  <p className="text-justify">Bringing the core value of functionality to the forefront of the design process makes it possible to meet business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="competitive-studies">
          <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
            <div className="py-10 sm:py-16">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-6 md:mb-8">
                <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                  <SectionHeading>Research Process</SectionHeading>
                </h1>
                <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Competitive Studies</h2>
                <p className="text-justify leading-relaxed xl:leading-7">In order to analyze similar products on the market, we conducted competitive research and analyzed their UVP (Unique Value Proposition), features, and common customer complaints.</p>
              </div>
              <div className="grid grid-rows-1 overflow-x-auto xl:overflow-x-hidden">
                <div className="cs-container mx-auto">
                  <picture>
                    <source media="(min-width: 769px)" srcSet="/projects/case-studies/visual-search/img_2.svg" />
                    <source media="(min-width: 0)" srcSet="/projects/case-studies/visual-search/mob/img_2.svg" />
                    <img width="1920" height="716" src="/projects/case-studies/visual-search/img_2.svg" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
            <div className="pb-10 sm:pb-16">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">User Testing</h2>
                <h3 className="font-bold mb-2">I conducted a usability test with five users with the aim of learning:</h3>
                <ul className="list-disc list-outside ml-6 leading-relaxed xl:leading-7">
                  <li>What are people struggling with while searching for products they like?</li>
                  <li>How can we introduce shoppers to the right items and innovate product discovery more effectively?</li>
                  <li>How can we leverage visual search on our online platform?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="px-0 mx-0 bg-white dark:bg-white/5">
            <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
              <div className="py-10 sm:py-16">
                <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                  <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Synthesis & Analysis</h2>
                  <p className="text-justify mb-6">
                    Throughout the analysis of my findings, I recognized some pain points that users experience when looking for similar products on our current mobile application. Knowing how people shop online has helped me understand how we can help improve the shopping
                    experience when they are looking for the styles they want. As they browsed through the app, I asked them to think-out-loud and observed their behaviors when browsing through categories and using the search bar.
                  </p>

                  <h3 className="font-bold mb-2">The main pain points identified from the findings were:</h3>
                  <ul className="list-disc list-outside ml-6 leading-relaxed xl:leading-7">
                    <li>It is frustrating to go through a long list of categories when using navigation;</li>
                    <li>Many shoppers fail to take advantage of filter options;</li>
                    <li>Most shoppers already have an idea or inspiration of the style they want to buy, hence search is a go-to function for them;</li>
                    <li>Text search has failed to connect shoppers with the items they are looking for because describing the images they so desperately want to see is much harder than it seems.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
            <div className="py-10 sm:py-16">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-6 md:mb-8">
                <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Generation of Insights</h2>
                <p className="leading-relaxed xl:leading-7 text-justify">
                  Given the tight timeline for this project, I needed to understand what to focus on and how to leverage the visual AI's potential. I organized the user findings on an affinity map to determine their priorities and outlined three key categories in a typical
                  e-commerce product search and discovery: 1. navigation menu; 2. search bar; 3. product filter.
                </p>
              </div>
              <div className="grid grid-rows-1">
                <div className="cs-container mx-auto">
                  <picture>
                    <source media="(min-width: 769px)" srcSet="/projects/case-studies/visual-search/img_3.svg" />
                    <source media="(min-width: 0)" srcSet="/projects/case-studies/visual-search/img_3.svg" />
                    <img width="1920" height="716" src="/projects/case-studies/visual-search/img_3.svg" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="design-exploration">
          <div className="px-0 mx-0 pt-6 sm:pt-10 mb-4 md:mb-8">
            <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Task Flow</h2>
                <p className="text-justify leading-relaxed xl:leading-7">
                  Syte’s visual AI algorithm identifies items within an image, breaks them down to precise visual attributes, and suggests similar products. To help convey the structure and concept of the information, I created a task flow under three categories where we decided
                  to implement the visual AI.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="px-0 mx-0 md:mx-8 bg-[#FCFFEF] dark:bg-white/10 mb-8 md:mb-14">
            <div className="py-6 sm:py-10 border-b-4 border-white dark:border-slate-900/80">
              <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
                <div className="grid grid-rows-1 dark:text-primary-color">
                  <h2 className="font-metro-semibold text-lg md:text-xl mb-4 lg:mb-10">Homepage</h2>
                </div>
              </div>
              <div className="flex justify-center img-1440">
                <picture>
                  <source media="(min-width: 769px)" srcSet="/projects/case-studies/visual-search/img_4.svg" />
                  <source media="(min-width: 0)" srcSet="/projects/case-studies/visual-search/img_4.svg" />
                  <img width="1920" height="716" src="/projects/case-studies/visual-search/img_4.svg" />
                </picture>
              </div>
            </div>
            <div className="py-6 sm:py-10 border-b-4 border-white dark:border-slate-900/80">
              <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
                <div className="grid grid-rows-1 dark:text-primary-color">
                  <h2 className="font-metro-semibold text-lg md:text-xl mb-4 lg:mb-10">Product Listing Page</h2>
                </div>
              </div>
              <div className="flex justify-center img-1440">
                <picture>
                  <source media="(min-width: 769px)" srcSet="/projects/case-studies/visual-search/img_5.svg" />
                  <source media="(min-width: 0)" srcSet="/projects/case-studies/visual-search/img_5.svg" />
                  <img width="1920" height="716" src="/projects/case-studies/visual-search/img_5.svg" />
                </picture>
              </div>
            </div>
            <div className="py-6 sm:py-10">
              <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
                <div className="grid grid-rows-1 dark:text-primary-color">
                  <h2 className="font-metro-semibold text-lg md:text-xl mb-4 lg:mb-10">Product Details Page</h2>
                </div>
              </div>
              <div className="flex justify-center img-1440">
                <picture>
                  <source media="(min-width: 769px)" srcSet="/projects/case-studies/visual-search/img_6.svg" />
                  <source media="(min-width: 0)" srcSet="/projects/case-studies/visual-search/img_6.svg" />
                  <img width="1920" height="716" src="/projects/case-studies/visual-search/img_6.svg" />
                </picture>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="px-0 mx-0 mb-4 md:mb-8">
            <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20">
                <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Ideation</h2>
                <p className="text-justify leading-relaxed xl:leading-7">
                  After mapping out the task flows, I came up with sketch ideas based on the sampling work from Syte. In order to solve the challenges that were identified and avoid creating new ones inadvertently, it was essential for me to keep the research results I had
                  collected in mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="solution">
          <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72 mb-8 md:mb-14">
            <div className="py-10 sm:py-16">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-6 md:mb-8">
                <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                  <SectionHeading>Solution</SectionHeading>
                </h1>
                <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Lo-Fi Wireframe</h2>
                <p className="leading-relaxed xl:leading-7 text-justify">
                  I created three wireframes with different layouts. After careful consideration, we've decided to go with the last one because it provided more convenience to shoppers and performed better. I then developed a clickable prototype for validation testing. Focusing
                  on how the camera search feature would allow shoppers to use augmented reality (AR) to preview a product or style around them creates opportunities to drive a higher conversion rate.
                </p>
              </div>
              <div className="grid grid-rows-1">
                <div className="cs-container mx-auto">
                  <picture>
                    <source media="(min-width: 769px)" srcSet="/projects/case-studies/visual-search/img_7.svg" />
                    <source media="(min-width: 0)" srcSet="/projects/case-studies/visual-search/img_7.svg" />
                    <img width="1920" height="716" src="/projects/case-studies/visual-search/img_7.svg" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72 mb-8 md:mb-14">
            <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-6 md:mb-8">
              <h2 className="font-thin text-lg md:text-xl xl:text-2xl mb-3">Hi-Fi Prototype</h2>
              <p className="text-justify leading-relaxed xl:leading-7">
                After a few iterations, we evaluated our Lo-Fi prototype and moved into the Hi-Fi phase. Understanding the essential features, I started the responsive design with mobile that has the most limitations, then translated it into larger devices.
              </p>
            </div>
          </div>

          <div className="px-0 mx-0 md:mx-8 bg-[#FCFFEF] dark:bg-white/10 mb-4 md:mb-14">
            <div className="py-6 sm:py-10 border-b-4 border-white dark:border-slate-900/80">
              <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
                <div className="grid grid-rows-1 dark:text-primary-color">
                  <h2 className="font-metro-semibold text-lg md:text-xl mb-4 lg:mb-10">Homepage</h2>
                </div>
              </div>
              <div className="flex justify-center img-1440">
                <picture>
                  <source media="(min-width: 769px)" srcSet="/projects/case-studies/visual-search/img_8.svg" />
                  <source media="(min-width: 0)" srcSet="/projects/case-studies/visual-search/img_8.svg" />
                  <img width="1920" height="716" src="/projects/case-studies/visual-search/img_8.svg" />
                </picture>
              </div>
            </div>
            <div className="py-6 sm:py-10 border-b-4 border-white dark:border-slate-900/80">
              <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
                <div className="grid grid-rows-1 dark:text-primary-color">
                  <h2 className="font-metro-semibold text-lg md:text-xl mb-4 lg:mb-10">Product Listing Page</h2>
                </div>
              </div>
              <div className="flex justify-center img-1440">
                <picture>
                  <source media="(min-width: 769px)" srcSet="/projects/case-studies/visual-search/img_9.svg" />
                  <source media="(min-width: 0)" srcSet="/projects/case-studies/visual-search/img_9.svg" />
                  <img width="1920" height="716" src="/projects/case-studies/visual-search/img_9.svg" />
                </picture>
              </div>
            </div>
            <div className="py-6 sm:py-10">
              <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
                <div className="grid grid-rows-1 dark:text-primary-color">
                  <h2 className="font-metro-semibold text-lg md:text-xl mb-4 lg:mb-10">Product Details Page</h2>
                </div>
              </div>
              <div className="flex justify-center img-1440">
                <picture>
                  <source media="(min-width: 769px)" srcSet="/projects/case-studies/visual-search/img_10.svg" />
                  <source media="(min-width: 0)" srcSet="/projects/case-studies/visual-search/img_10.svg" />
                  <img width="1920" height="716" src="/projects/case-studies/visual-search/img_10.svg" />
                </picture>
              </div>
            </div>
          </div>
        </div>

        <div id="7">
          <div className="px-0 mx-0 py-10 sm:py-16">
            <div className="container px-8 md:px-16 lg:px-14 xl:px-16 2xl:px-32 3xl:px-52 4xl:px-72">
              <div className="grid grid-rows-1 xl:mx-14 3xl:mx-20 mb-6 lg:mb-10">
                <h1 className="font-medium sm:text-4xl text-3xl mb-3">
                  <SectionHeading>Conclusion</SectionHeading>
                </h1>
                <p className="text-justify mb-4 leading-relaxed xl:leading-7">Through these AI-powered solutions, presented a lot of e-commerce marketing opportunities.</p>
                <p className="text-justify mb-2 leading-relaxed xl:leading-7">Below is a summary of the findings:</p>
                <ul className="list-decimal list-outside ml-6 leading-relaxed xl:leading-7">
                  <li>Increased conversions and AOV by serving related and complementary products through visual AI-powered solutions</li>
                  <li>Allow shoppers to discover items by uploading any image or browsing curated inspiration galleries instead of using keywords.</li>
                  <li>Encourages user to interact with more product pages and ultimately drive a higher conversion rate.</li>
                  <li>Allows shoppers to easily search for multiple objects or products in a single image with multi-object detection, resulting in a more dynamic discovery journey and increased AOV.</li>
                </ul>
              </div>
              <div className="grid grid-rows-1 bg-white dark:bg-white/5">
                <div className="py-6 md:py-10 mx-6 xl:mx-14 3xl:mx-20">
                  <p className="leading-relaxed xl:leading-7 italic text-justify">I have omitted confidential information in this case study. The information presented here is my own and does not necessarily reflect the views of the company.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ActiveSectionContextProvider>
  );
}
