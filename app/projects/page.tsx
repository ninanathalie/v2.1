import React from "react";
import DevelopmentProjects from "@/components/projects/development";
import CaseStudies from "@/components/projects/case-studies";
import MarketingPages from "@/components/projects/marketing-pages";

export default function Projects() {
  return (
    <main>
      <DevelopmentProjects />
      <CaseStudies />
      <MarketingPages />
    </main>
  );
}
