import csVisualSearch from "@/public/home/visual-search.png";
import csDesignSystem from "@/public/home/design-system.png";
import csCheckoutRedesign from "@/public/home/checkout-redesign.png";
import roasAppImg from "@/public/projects/roas-app.png";
import roasThemeImg from "@/public/projects/roas-shopify-theme.png";

export const headerLinks = [
  { text: "Home", href: "/" },
  { text: "About Me", href: "/about/" },
  { text: "Works", href: "/projects/" },
  { text: "Resume", href: "/shared/docs/nina-nathalie-resume.pdf", target: "_blank" },
  { text: "Contact", href: "/contact/" },
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

export const projectsData = [
  {
    title: "ROAS Shopify Theme",
    description: "We built, improve and maintain our internal Shopify theme, tailored specifically for ROAS Agency featuring custom design elements and functionalities",
    tags: ["Shopify Liquid", "Javascript", "CSS", "Bootstrap"],
    imageUrl: roasThemeImg,
  },
  {
    title: "ROAS App",
    description: "We also built a Web App, I contributed to designing the MVP, crafted with ShadCN Design System and library to build the UI. We also utilized Cypress for test automation",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "ShadCN", "Cypress"],
    imageUrl: roasAppImg,
  },
] as const;

export const otherProjectsData = ["www.spikespree.com", "www.gleechoices.com", "www.dailysnags.com", "www.saywegood.com", "www.pnosailingacademy.com", "www.transgulf.ae"];

export const caseStudiesData = [
  {
    href: "/projects/case-studies/edenred-design-system/",
    imgSrc: {
      desktop: "/projects/design-system.jpg",
      mobile: "/projects/mob/design-system.jpg",
    },
    title: "Edenred Payroll+ Design System",
    description: ["UI DESIGN", "DESIGN SYSTEM"],
  },
  {
    href: "/projects/case-studies/visual-search/",
    imgSrc: {
      desktop: "/projects/visual-search.jpg",
      mobile: "/projects/mob/visual-search.jpg",
    },
    title: "BFL + Syte’s Visual Search & Product Discovery",
    description: ["UX DESIGN", "RESEARCH", "PROTOTYPING"],
  },
  {
    href: "/projects/case-studies/easy-filter/",
    imgSrc: {
      desktop: "/projects/quick-filter.jpg",
      mobile: "/projects/mob/quick-filter.jpg",
    },
    title: "Quick & Easy Filter for Shoppers",
    description: ["UX DESIGN", "RESEARCH", "PROTOTYPING"],
  },
  {
    href: "/projects/case-studies/checkout-redesign/",
    imgSrc: {
      desktop: "/projects/checkout-process.jpg",
      mobile: "/projects/mob/checkout-process.jpg",
    },
    title: "Checkout Process Redesign & Optimization",
    description: ["UX DESIGN", "RESEARCH", "PROTOTYPING"],
  },
];
