import { Product } from "./types";

// Imagens
import CarroDeMao from "@/assets/produtos/Carro de mão.png";
import CarroJerica160 from "@/assets/produtos/Carro jerica 160L.png";
import CarroJerica80 from "@/assets/produtos/carro-jerica-80.png";
import CarroJerica140 from "@/assets/produtos/carro-jerica-140.png";
import CarroJerica100 from "@/assets/produtos/carro-jerica-100.png";
import CarroTransporteBloco from "@/assets/produtos/carro-transporte-bloco.png";
import CarroTransporteMaterial from "@/assets/produtos/carro-transporte-materiais.png";
import CarroGaiola from "@/assets/produtos/carro-gaiola.png";
import CarroTransporteTambor from "@/assets/produtos/carro-transporte-tambor.png";
import CarroIcamento from "@/assets/produtos/carro-icamento.png";

export const products: Product[] = [
  {
    id: 1,
    title: "Carro de mão",
    description: "Descrição do produto 1",
    category: "Carro de mão",
    images: [CarroDeMao],
    imagesAlt: ["carro de mao"],
  },
  {
    id: 2,
    title: "Carro Jerica 160L",
    description: "Descrição do produto 2",
    category: "Carro de mão",
    images: [CarroJerica160],
    imagesAlt: ["carro jerica 160L"],
  },
  {
    id: 3,
    title: "Carro Jerica 80L",
    description: "Descrição do produto 3",
    category: "Carro de mão",
    images: [CarroJerica80],
    imagesAlt: ["carro jerica 80L"],
  },
  {
    id: 4,
    title: "Carro Jerica 140L",
    description: "Descrição do produto 4",
    category: "Carro de mão",
    images: [CarroJerica140],
    imagesAlt: ["carro jerica 140L"],
  },
  {
    id: 5,
    title: "Carro Jerica 100L",
    description: "Descrição do produto 5",
    category: "Carro de mão",
    images: [CarroJerica100],
    imagesAlt: ["carro jerica 100L"],
  },
  {
    id: 6,
    title: "Carro Transporte Bloco",
    description: "Descrição do produto 6",
    category: "Carro de mão",
    images: [CarroTransporteBloco],
    imagesAlt: ["carro transporte bloco"],
  },
  {
    id: 7,
    title: "Carro Transporte Material",
    description: "Descrição do produto 7",
    category: "Carro de mão",
    images: [CarroTransporteMaterial],
    imagesAlt: ["carro transporte material"],
  },
  {
    id: 8,
    title: "Carro Gaiola",
    description: "Descrição do produto 8",
    category: "Carro de mão",
    images: [CarroGaiola],
    imagesAlt: ["carro gaiola"],
  },
  {
    id: 9,
    title: "Carro Transporte Tambor",
    description: "Descrição do produto 9",
    category: "Carro de mão",
    images: [CarroTransporteTambor],
    imagesAlt: ["carro transporte tambor"],
  },
  {
    id: 10,
    title: "Carro Icamento",
    description: "Descrição do produto 10",
    category: "Carro de mão",
    images: [CarroIcamento],
    imagesAlt: ["carro icamento"],
  },
];
