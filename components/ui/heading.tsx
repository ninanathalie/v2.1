"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

type SectionHeadingProps = {
  children: ReactNode;
};

/**
 * SectionHeading component is used to create a styled section heading.
 * It splits the heading text into individual letters and wraps each letter in a span element.
 * This allows for styling each letter individually.
 *
 * @param {ReactNode} children - The text content of the section heading.
 * @returns {JSX.Element} - A JSX element representing the styled section heading.
 */
export default function SectionHeading({ children }: SectionHeadingProps): JSX.Element {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const makeSpans = () => {
      const text = (headingRef.current as HTMLHeadingElement)?.innerText?.split("");
      const spans = text.map((letter) => `<span>${letter}</span>`).join("");
      headingRef.current!.innerHTML = spans;
    };

    makeSpans();

    return () => {
      if (headingRef.current) {
        headingRef.current.textContent = headingRef.current.textContent;
      }
    };
  }, []);

  return (
    <span ref={headingRef} className={`${syne.className} heading font-bold !important`}>
      {children}
    </span>
  );
}
