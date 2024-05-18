import React from "react";

export default function Background({ showBlobTopLeft = false, showBlobXY = false, showBlobBottom = false }) {
  return (
    <>
      <svg className="absolute -z-[5] left-0 top-0 h-full w-full md:left-[max(50%,25rem)] md:-translate-x-1/2 stroke-slate-200 dark:stroke-slate-400/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"></rect>
      </svg>

      {showBlobTopLeft && (
        <div className="blob-top">
          <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#30132e]"></div>
          <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        </div>
      )}

      {showBlobXY && (
        <div className="blob-top-and-bottom">
          <div className="bg-[#efecff] absolute -z-10 top-[-1rem] right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#4e4b76]"></div>
          <div className="bg-[#f9eaeb] absolute -z-10 bottom-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#434069]"></div>
        </div>
      )}

      {showBlobBottom && (
        <div className="blob-bottom">
          <div className="bg-[#fbe2e3] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#4c1f49]"></div>
          <div className="bg-[#e0dcfb] absolute -z-10 bottom-[-1rem] right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#4e4b76]"></div>
        </div>
      )}
    </>
  );
}
