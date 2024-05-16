import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function MarketingPages() {
  const [scale, setScale] = useState(1.15);

  return (
    <section>
      <div className="container px-8 md:px-16 lg:px-14 xl:px-30 3xl:px-52 4xl:px-72 mb-6">
        <div className="nn-title grid grid-rows-1">
          <h2 className="font-thin text-lg md:text-xl mb-2">My previous experience in the E-commerce industry also allowed me to cultivate my design skills and challenge my creative capabilities by designing impactful promotional landing pages</h2>
        </div>
        <div data-aos="fade-in">
          <div className="grid grid-flow-col xl:grid-cols-3 grid-rows-2 overflow-x-auto xl:overflow-visible gap-2 md:gap-4 4xl:gap-6 pb-5">
            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="https://www.figma.com/proto/FnLrBcTRxWyxkg8KN2ppGp/Brand-Landing-Pages?page-id=1%3A3&node-id=202%3A2&viewport=317%2C506%2C0.13&scaling=scale-down-width&starting-point-node-id=202%3A2&hide-ui=1" target="_blank">
                  <img src="/projects/muy-mucho.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>

            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="https://www.brandsforless.com/en-ae/homes-for-less/" target="_blank">
                  <img src="/projects/homes-for-less.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>

            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="/mumuso/" target="_blank">
                  <img src="/projects/mumuso.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>

            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="https://www.figma.com/proto/VfTP2BM164xBsybMKhKNR0/03---Promotional-Campaigns?node-id=101%3A89058&scaling=scale-down-width&page-id=1%3A5&hide-ui=1" target="_blank">
                  <img src="/projects/sports-campaign.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>

            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="https://www.figma.com/proto/VfTP2BM164xBsybMKhKNR0/03---Promotional-Campaigns?node-id=101%3A6401&scaling=scale-down-width&page-id=1%3A4&hide-ui=1" target="_blank">
                  <img src="/projects/mothers-day.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>

            <div className="w-72 md:w-full">
              <Tilt scale={scale} transitionSpeed={2500}>
                <a href="/gift-guide-2020/" target="_blank">
                  <img src="/projects/gift-guide.jpg" alt="" className="w-full" />
                </a>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
