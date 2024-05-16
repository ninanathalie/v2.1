import Image from "next/image";
import SectionHeading from "@/components/ui/heading";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function AboutMe() {
  return (
    <section className="flex justify-center">
      <div className="container pt-20 px-8 md:px-16 lg:px-14 xl:px-30 3xl:px-52 4xl:px-72">
        <div className="py-10 sm:py-16">
          <div className="float-right">
            <div className="flex items-center justify-center p-4">
              <div className="relative">
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
                  <Image src="/about/natsu.jpg" alt="Intro Image" width="162" height="162" quality="95" priority={true} className="w-24 h-24 xl:w-32 xl:h-32 rounded-full object-cover border-[0.45rem] border-white shadow-xl" />
                </motion.div>
                <motion.span
                  className="absolute bottom-0 right-0 text-md xl:text-2xl pt-1 bg-white h-8 w-8 xl:h-12 xl:w-12 flex items-center justify-center rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
                >
                  👋🏼
                </motion.span>
              </div>
            </div>
          </div>
          <h1 className="sm:text-4xl text-3xl font-medium pb-2 md:pb-5">
            <SectionHeading>About Me</SectionHeading>
          </h1>
          <h2 className="font-thin text-justify text-base md:text-lg mb-2">Hello, I'm Nathalie 👋🏼 - A product designer and a front-end developer who's passionate about designing and developing a seamless user experience.</h2>
          <p className="font-normal text-justify leading-relaxed xl:leading-7 mb-2">
            I recently transitioned to full-time coding and loving every minute of it! I have experience with Shopify Liquid, Javascript, Bootstrap and Tailwind CSS. I am also currently learning React, Next.js, and TypeScript.
          </p>
          <p className="font-normal text-justify leading-relaxed xl:leading-7 mb-2">
            Previously, I worked as a Product Designer at Edenred for their B2B Payroll Portal, a FinTech company with a presence in 45 countries. I also worked as a Web Designer at BFL Group, mainly responsible for designing and improving the user experience of Brands For Less
            shoppers. I worked on various projects, from creating experiences for e-marketing opportunities or solving the end-to-end workflow of the Brands for Less' mobile app and many more.
          </p>
          <p className="font-normal text-justify leading-relaxed xl:leading-7 mb-2">
            When I'm not coding, I enjoy reading articles on Medium, writing on my personal blog, or going to the gym. I also love learning new things, although that often means being in front of my computer once again ^.^
          </p>
        </div>
        <div style={{ minWidth: "100%", maxWidth: "max-content" }}>
          <Marquee pauseOnHover loop={0} speed={110}>
            <div className="marquee-inner stroke stroke-1 stroke-current font-extrabold text-primary-color dark:text-white">
              <span>6+ YEARS IN THE GAME</span>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
