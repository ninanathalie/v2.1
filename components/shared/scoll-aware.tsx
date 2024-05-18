"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { ScrollAwareProps } from "@/lib/type";

/**
 * @description A React component that updates the active section based on scroll position.
 * @param {LinkData[]} links - An array of objects containing the name and hash of each section.
 * @returns {JSX.Element} - A JSX element representing the rendered component.
 */
export default function ScrollAware({ links }: ScrollAwareProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.hash));
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = links.find((link) => link.hash === `#${entry.target.id}`);
          if (section) {
            setActiveSection(section.name);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) {
        observerRef.current?.observe(section);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [links, setActiveSection]);

  return (
    <div className="z-[999] relative">
      <nav className="case-study">
        <ol>
          {links.map((link) => (
            <motion.li key={link.hash} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span>{link.name}</span>
              </Link>
            </motion.li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
