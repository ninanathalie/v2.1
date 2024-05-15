"use client";

import React, { useEffect, useState } from "react";
import ThemeSwitch from "@/components/ui/theme-switch";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { headerLinks } from "@/lib/data";
import Logo from "@/components/ui/logo";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowPosition = window.scrollY > 0;
      setIsScrolling(windowPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`top-nav fixed inset-x-0 z-10 ${isScrolling ? "bg-white transition-none shadow-lg shadow-slate-200/20 dark:bg-slate-900/90 dark:shadow-slate-600/10" : ""}`}>
      <div className="top-nav flex justify-center">
        <motion.nav className={`container bg-transparent px-8 md:px-16 lg:px-14 xl:px-30 3xl:px-52 4xl:px-72 origin-top ${isNavOpen ? "bg-white dark:bg-slate-900" : ""}`} initial={{ y: -100, x: "0%", opacity: 0 }} animate={{ y: 0, x: "0%", opacity: 1 }}>
          <div className={`flex items-center md:justify-between flex-wrap py-4 ${isScrolling ? "border-none" : "border-b-2 border-white"} ${isNavOpen ? "border-none" : ""} `}>
            <a href="/" className="nn-logo infline-flex md:hidden">
              <Logo height={40} />
            </a>

            <div className={`top-navbar w-full md:inline-flex md:flex-grow md:w-auto ${isNavOpen ? "h-[100vh] flex flex-col justify-center" : "hidden"}`} id="navigation">
              <div className="flex flex-col md:inline-flex md:flex-row items-center uppercase md:gap-12 text-xl md:text-xs">
                {headerLinks.slice(0, 3).map((headerLinks, index) => (
                  <a key={index} href={headerLinks.href} className="min-w-full md:min-w-0 text-center md:inline-flex md:w-auto hover:text-secondary-color ">
                    <span className="block align-middle font-semibold md:font-normal py-4 md:py-2">{headerLinks.text}</span>
                  </a>
                ))}
              </div>
              <motion.a href="/" className="hidden md:block hover:animate-pulse nn-logo mx-auto" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}>
                <Logo height={50} />
              </motion.a>
              <div className="flex flex-col md:inline-flex md:flex-row items-center uppercase md:gap-12 text-xl md:text-xs">
                {headerLinks.slice(3).map((headerLinks, index) => (
                  <a key={index} href={headerLinks.href} className="min-w-full md:min-w-0 text-center md:inline-flex md:w-auto hover:text-secondary-color ">
                    <span className="block align-middle font-semibold md:font-normal py-4 md:py-2">{headerLinks.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <ThemeSwitch />

            <button className="text-md md:hidden nav-toggler flex items-center justify-center bg-transparent dark:text-white hover:text-secondary-color" data-target="#navigation" onClick={toggleNav}>
              {isNavOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
