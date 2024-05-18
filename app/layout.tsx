import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/header";
import ThemeContextProvider from "@/context/theme-context";
import { fontNexa } from "@/lib/local-font";
import { motion } from "framer-motion";
import Background from "@/components/shared/background";
import Footer from "@/components/shared/footer";

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
      <body className={`${fontNexa.className} bg-slate-50 text-slate-950 relative dark:bg-slate-900 dark:text-slate-50 dark:text-opacity-90 overflow-x-hidden`}>
        <div className="fixed hidden md:block left-0 top-0 w-[calc(100%-0px)] h-[calc(100%-0px)] pointer-events-none z-20 bg-transparent border-[18px] border-solid border-[#C1CEFB]"></div>
        <Background showBlobTopLeft={true} />

        <ThemeContextProvider>
          <div className="md:my-4 overflow-x-hidden overflow-y-clip">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
