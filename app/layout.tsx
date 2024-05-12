import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header";
import ThemeContextProvider from "@/context/theme-context";
import { fontNexa } from "@/lib/local-font";

export const metadata: Metadata = {
  title: "Nathalie",
  description: "Hello! I'm Nathalie, a Digital Product Designer and a Front-end Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${fontNexa.className} bg-slate-50 text-slate-950 relative dark:bg-slate-900 dark:text-slate-50 dark:text-opacity-90`}>
        <div className="fixed hidden md:block left-0 top-0 w-[calc(100%-0px)] h-[calc(100%-0px)] pointer-events-none z-20 bg-transparent border-[18px] border-solid border-[#C1CEFB]"></div>

        <svg className="absolute left-0 top-0 h-64 w-full md:left-[max(50%,25rem)] md:-translate-x-1/2 stroke-slate-200 dark:stroke-slate-400/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"></rect>
        </svg>

        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <div className="md:my-4">
            <Header />
            {children}
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
