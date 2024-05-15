import React from "react";

export default function Marquee() {
  return (
    <section className="flex justify-center">
      <div className="container px-8 md:px-16 lg:px-14 xl:px-30 3xl:px-52 4xl:px-72 mb-6 flex">
        <div className="marquee">
          <div className="marquee-inner stroke stroke-1 stroke-current font-extrabold text-primary-color dark:text-white">
            <span>6+ YEARS IN THE GAME</span>
            <span>6+ YEARS IN THE GAME</span>
            <span>6+ YEARS IN THE GAME</span>
            <span>6+ YEARS IN THE GAME</span>
          </div>
        </div>
      </div>
    </section>
  );
}
