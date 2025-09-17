import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Memory = {
  title: string;
  date: string;
  image: string;
};

export type Memories = Memory[];

export type Gallery = {
  src: string;
  caption: string;
  quote: string;
};

export type Galleries = Gallery[];
