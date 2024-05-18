import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

/**
 * @useSectionInView is a custom hook that listens for a section to come into view
 * Utilized `react-intersection-observer` library to detect when a section enters the viewport
 *
 * @param sectionName The name of the section to listen for.
 * @param threshold The threshold for when a section is considered in view. Defaults to 0.75.
 * @returns An object containing the ref for the section.
 */
export function useSectionInView(sectionName: string, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection]);

  return {
    ref,
  };
}
