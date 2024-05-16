"use client";

import React from "react";
import AboutMe from "@/components/about/about";
import KeySkills from "@/components/about/key-skills";
import OtherSkills from "@/components/about/other-skills";

export default function About() {
  return (
    <main>
      <AboutMe />
      <KeySkills />
      <OtherSkills />
    </main>
  );
}
