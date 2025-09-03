import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  images: StaticImageData[];
  imagesAlt: string[];
}

export interface textsCategory {
  category: string;
  title: string;
  description: string;
}
