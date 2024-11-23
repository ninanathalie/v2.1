"use client";

import React, { FormEvent, ReactNode, useRef, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { BiLogoCodepen, BiLogoDribbble, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import SectionHeading from "@/components/shared/heading";
import Background from "@/components/shared/background";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [input, setInput] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = input;
    const button = buttonRef.current;

    if (!email || !button) return;

    const res = await fetch("/api/add-subscription", {
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const data = await res.json();

    if (data.error) {
      toast.error("Hey, you are already subscribed!");
      return;
    }

    toast.success(`We've added ${email} to our waitlist. We'll let you know when we launch!`);
  };

  return (
    <footer className="flex justify-center relative">
      <Background showBlobBottom={true} />

      <div className="container px-8 md:px-16 lg:px-14 xl:px-30 3xl:px-52 4xl:px-72">
        <motion.div className="nn-footer pt-20 sm:pt-16 pb-2 sm:pb-6 border-t-2 border-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="md:flex items-center lg:-space-x-32 justify-center text-center">
            <div className="md:w-5/6 lg:w-4/6 3xl:w-3/6 4xl:w-3/6">
              <motion.h1 className="pb-1 md:pb-5 sm:text-4xl text-3xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.235 }}>
                <SectionHeading>Subscribe to my Newsletter</SectionHeading>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.285 }}>
                Be the first to know about the latest projects that I’m working on and get updates on the curated selection of my best content.
              </motion.p>
              <motion.div className="flex items-center justify-center py-4 sm:py-6" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.325 }}>
                <div className="w-full lg:w-5/6">
                  <div className="relative text-gray-700">
                    <form onSubmit={handleSubmit}>
                      <input value={input} onChange={(e) => setInput(e.target.value)} type="email" className="input-subscribe required email md:h-14 w-full h-13" placeholder="username@email.com" required />
                      <button ref={buttonRef} disabled={!input} type="submit" defaultValue="Subscribe" name="subscribe" className="md:h-14 h-13 btn-subscribe">
                        Stay Up To Date
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
              <motion.div className="flex nn-container justify-between items-center" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.385 }}>
                <ul className="nn-icons pb-16 flex flex-1 justify-center items-center gap-2 md:gap-4 uppercase text-xs">
                  <a href="https://dribbble.com/pseudonath/" target="_blank" className="">
                    <li className="footer-social text-lg">
                      <BiLogoDribbble />
                    </li>
                  </a>
                  <a href="https://www.linkedin.com/in/ninanathalie/" target="_blank" className="">
                    <li className="footer-social text-lg">
                      <BiLogoLinkedin />
                    </li>
                  </a>
                  <a href="https://instagram.com/design.nathalie/" target="_blank" className="">
                    <li className="footer-social text-lg">
                      <BiLogoInstagram />
                    </li>
                  </a>
                  <a href="https://github.com/pseudonath/" target="_blank" className="">
                    <li className="footer-social text-lg">
                      <BiLogoGithub />
                    </li>
                  </a>
                  <a href="https://codepen.io/pseudonath/pens/public" target="_blank" className="">
                    <li className="footer-social text-lg">
                      <BiLogoCodepen />
                    </li>
                  </a>
                </ul>
              </motion.div>
              <motion.div className="nn-copyright" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <small className="mb-2 text-xs">
                  Designed & Built by{" "}
                  <a href="/about/" className="underline underline-offset-2">
                    Nathalie
                  </a>{" "}
                  | All Rights Reserved &copy; {currentYear}
                </small>{" "}
                <br />
                <small className="text-xs text-slate-500 dark:text-slate-400">Crafted with React & Next.js, Typescript, Tailwind CSS, Framer Motion, React Email, Resend API, and Vercel Hosting</small>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
