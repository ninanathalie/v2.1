"use client";

import React, { useState, createContext, useContext, ReactNode } from "react";
import { ActiveSectionContextProviderProps } from "@/lib/type";

export const ActiveSectionContext = createContext<any>(null);

/**
 * This component is a provider for the `ActiveSectionContext`. It manages the active section, the time of the last click, and the links.
 * @param {ReactNode} children - The children components that will be wrapped by the provider.
 * @param {string} initialActiveSection - The initial active section.
 * @param {Link[]} links - An array of links with `name` and `hash` properties.
 * @returns {JSX.Element} - The provider component that wraps the children components and provides the context values.
 */
export default function ActiveSectionContextProvider({ children, initialActiveSection, links }: ActiveSectionContextProviderProps): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>(initialActiveSection);
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        links,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("useActiveSectionContext must be used within ActiveSectionContextProvider");
  }

  return context;
}
