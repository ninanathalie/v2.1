import React from "react";
import csVisualSearch from "@/public/home/visual-search.png";
import csDesignSystem from "@/public/home/design-system.png";
import csCheckoutRedesign from "@/public/home/checkout-redesign.png";

export const headerLinks = [
  { text: "Home", href: "/" },
  { text: "About Me", href: "/about/" },
  { text: "Works", href: "/projects/" },
  { text: "Resume", href: "#" },
  { text: "Contact", href: "mailto:mninanathalie@gmail.com" },
];

export const showcaseItems = [
  {
    title: "Brands For Less + Syte's Visual Search & Product Discovery",
    sub: "Revolutionizing e-commerce with visual AI",
    description: "Brands For Less sought to deliver a next-generation search and discovery experience with bespoke solutions.",
    tags: ["UX DESIGN", "RESEARCH", "PROTOTYPING"],
    imageUrl: csVisualSearch,
    link: "/projects/case-studies/visual-search/",
  },
  {
    title: "Developing the Edenred Payroll+ Design System",
    sub: "A design system for a Fintech",
    description: "Brands For Less sought to deliver a next-generation search and discovery experience with bespoke solutions.",
    tags: ["UI DESIGN", "DESIGN SYSTEMS"],
    imageUrl: csDesignSystem,
    link: "/projects/case-studies/edenred-design-system/",
  },
  {
    title: "Brands For Less Checkout Redesign & Optimization",
    sub: "",
    description: "Due to its fast pace development and complicated checkout process, Brands For Less aims to simplify its complex delivery and payment method.",
    tags: ["UX DESIGN", "PROTOTYPING"],
    imageUrl: csCheckoutRedesign,
    link: "/projects/case-studies/checkout-redesign/",
  },
];
