import { ReactNode } from "react";

export type LinkData = {
  name: string;
  hash: string;
};

export type ScrollAwareProps = {
  links: LinkData[];
};

export type ActiveSectionContextProviderProps = {
  children: ReactNode;
  initialActiveSection: string;
  links: LinkData[];
};
