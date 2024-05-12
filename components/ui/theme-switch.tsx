"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="ml-auto infline-flex flex items-center hover:text-secondary-color mr-4 md:mr-0 md:ml-10">
      {theme === "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
}
