import React, { useEffect } from "react";
import SectionHeading from "@/components/ui/heading";

export default function OtherSkills() {
  useEffect(() => {
    const rows = document.querySelectorAll(".tilt-box-wrap, .nn-hover");

    const handleMouseEnter = (event: Event) => {
      const target = event.target as HTMLElement;
      rows.forEach((row) => {
        if (row !== target) {
          row.classList.add("other");
        }
      });
    };

    const handleMouseLeave = () => {
      const hovers = document.getElementsByClassName("other");
      while (hovers.length > 0) {
        (hovers[0] as HTMLElement).classList.remove("other");
      }
    };

    rows.forEach((row) => {
      row.addEventListener("mouseenter", handleMouseEnter);
      row.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      rows.forEach((row) => {
        row.removeEventListener("mouseenter", handleMouseEnter);
        row.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <section>
      <div className="container px-8 md:px-16 lg:px-14 xl:px-30 2xl:px-32 3xl:px-52 4xl:px-72 mb-6">
        <div className="py-10 sm:py-16">
          <div className="nn-title grid grid-rows-1 mb-10">
            <div>
              <h2 className="font-extralight text-lg md:text-xl mb-2">
                My interest in art is not limited to just designing a seamless user experience, <br className="break-web" />
                I've also got a couple of other tricks up my sleeve.
              </h2>
            </div>
          </div>
          <div className="grid grid-rows-1">
            <div>
              <h1 className="sm:text-4xl text-3xl font-medium pb-6 md:pb-8">
                <SectionHeading>On some days, I transform my designs into codes</SectionHeading>
              </h1>
            </div>
          </div>

          <div className="grid grid-flow-col xl:grid-cols-3 grid-rows-2 overflow-x-auto xl:overflow-visible gap-2 md:gap-4 4xl:gap-6 pb-5">
            <div className="w-72">
              <div className="w-full">
                <a href="/bfl-welcome-email/" target="_blank">
                  <div className="tilt-box-wrap">
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <div className="tilt-box" style={{ backgroundImage: "url(/about/bfl-welcome-email.jpg)", backgroundSize: "cover" }}></div>
                  </div>

                  <img src="/about/bfl-welcome-email.jpg" alt="" className="nn-hover" />
                </a>
              </div>
            </div>

            <div className="w-72">
              <div className="w-full">
                <a href="#" target="_blank">
                  <div className="tilt-box-wrap">
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <div className="tilt-box" style={{ backgroundImage: "url(/about/senor-grooming.jpg)", backgroundSize: "cover" }}></div>
                  </div>

                  <img src="/about/senor-grooming.jpg" alt="" className="nn-hover" />
                </a>
              </div>
            </div>

            <div className="w-72">
              <div className="w-full">
                <a href="https://www.figma.com/proto/FnLrBcTRxWyxkg8KN2ppGp/Brand-Landing-Pages?page-id=1%3A3&node-id=202%3A2&viewport=317%2C506%2C0.13&scaling=scale-down-width&starting-point-node-id=202%3A2&hide-ui=1" target="_blank">
                  <div className="tilt-box-wrap">
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <div className="tilt-box" style={{ backgroundImage: "url(/about/muy-mucho.jpg)", backgroundSize: "cover" }}></div>
                  </div>

                  <img src="/about/muy-mucho.jpg" alt="" className="nn-hover" />
                </a>
              </div>
            </div>

            <div className="w-72">
              <div className="w-full">
                <a href="https://www.figma.com/proto/FnLrBcTRxWyxkg8KN2ppGp/Brand-Landing-Pages?page-id=1%3A2&node-id=408%3A453&viewport=1218%2C858%2C0.29&scaling=min-zoom&hide-ui=1" target="_blank">
                  <div className="tilt-box-wrap">
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <div className="tilt-box" style={{ backgroundImage: "url(/about/tabby.jpg)", backgroundSize: "cover" }}></div>
                  </div>

                  <img src="/about/tabby.jpg" alt="" className="nn-hover" />
                </a>
              </div>
            </div>

            <div className="w-72">
              <div className="w-full">
                <a href="/" target="_blank">
                  <div className="tilt-box-wrap">
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <div className="tilt-box" style={{ backgroundImage: "url(/about/bfl-voucher-email.jpg)", backgroundSize: "cover" }}></div>
                  </div>

                  <img src="/about/bfl-voucher-email.jpg" alt="" className="nn-hover" />
                </a>
              </div>
            </div>

            <div className="w-72">
              <div className="w-full">
                <a href="/ryt-partners/" target="_blank">
                  <div className="tilt-box-wrap">
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <span className="tilt-over"></span>
                    <div className="tilt-box" style={{ backgroundImage: "url(/about/ryt-partners.jpg)", backgroundSize: "cover" }}></div>
                  </div>

                  <img src="/about/ryt-partners.jpg" alt="" className="nn-hover" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
