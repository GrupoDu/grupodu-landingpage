import { StaticImageData } from "next/image";

export interface CategoriaProduto {
  categoria: string;
  titulo: string;
  descricao: string;
  imagens: StaticImageData[];
}
