import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  images: StaticImageData[];
  imagesAlt: string[];
}

export interface ProdutoType {
  id: number;
  nome: string;
  descricao: string;
  tipo_produto: string;
  imagem: StaticImageData;
}

export interface textsCategory {
  category: string;
  title: string;
  description: string;
  images: StaticImageData[];
}
