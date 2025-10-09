import { StaticImageData } from "next/image";

export interface CategoriaProduto {
  category: string;
  title: string;
  description: string;
  images: StaticImageData[];
}
