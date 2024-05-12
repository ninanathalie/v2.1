import React from "react";

export default function Background() {
  return (
    <>
      <svg className="absolute left-0 top-0 h-full w-full md:left-[max(50%,25rem)] md:-translate-x-1/2 stroke-slate-200 dark:stroke-slate-400/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"></rect>
      </svg>
      <div className="bg-[#fbe2e3] absolute -z-10 top-[6rem] right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#30132e]"></div>
      <div className="bg-[#dbd7fb] absolute -z-10 top-[-18rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <div className="bg-[#f3fbe2] absolute -z-10 top-[46rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[50rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#273013]/30"></div>
      <div className="bg-[#fbe2e3] absolute -z-10 top-[66rem] right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#30132e]"></div>
      <div className="bg-[#dbd7fb] absolute -z-10 top-[78rem] left-[-45rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#312d55]"></div>
    </>
  );
}
