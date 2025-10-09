import { StaticImageData } from "next/image";

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  tipo_produto: string;
  imagem: StaticImageData;
}