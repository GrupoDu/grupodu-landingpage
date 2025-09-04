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
    description: `Modelo clássico com capacidade de 65L (até 250kg). Oferece versões com espessura de chapa variável (14" a 22") para diferentes necessidades. Pneu 3.25/8 (2 lonas ou maciço). Ideal para serviços gerais.`,
    category: "carro de mao",
    images: [CarroDeMao],
    imagesAlt: ["carro de mao"],
  },
  {
    id: 2,
    title: "Carro Jerica 80L",
    description:
      "Estrutura tubular leve e resistente, com capacidade de 80L. Caçamba reta em aço carbono, pneu 3.25/8 (2 lonas ou maciço). Perfeito para transporte moderado.",
    category: "carro de mao",
    images: [CarroJerica80],
    imagesAlt: ["carro jerica 80L"],
  },
  {
    id: 3,
    title: "Carro Jerica 100L",
    description:
      "Capacidade de 100L com caçamba oval para melhor estabilidade. Inclui jante de rolete e mantém o pneu 3.25/8 (2 lonas ou maciço). Para cargas maiores.",
    category: "carro de mao",
    images: [CarroJerica100],
    imagesAlt: ["carro jerica 100L"],
  },
  {
    id: 4,
    title: "Carro Jerica 140L",
    description:
      "Alta capacidade (140L) com caçamba oval e estrutura reforçada. Jante de rolete e pneu 3.25/8 (2 lonas ou maciço). Para transporte volumoso.",
    category: "carro de mao",
    images: [CarroJerica140],
    imagesAlt: ["carro jerica 140L"],
  },
  {
    id: 5,
    title: "Carro Jerica 160L",
    description:
      "Modelo premium com 160L de capacidade. Reforçado com pneu 4 lonas (ou maciço) e jante de rolamento. Projetado para cargas extremas e uso intensivo.",
    category: "carro de mao",
    images: [CarroJerica160],
    imagesAlt: ["carro jerica 160L"],
  },
  {
    id: 6,
    title: "Carro Transporte Bloco",
    description:
      "Projetado para movimentar blocos e materiais pesados com segurança. Estrutura tubular curvada e reforçada, suporta até 350kg. Pneu 4 lonas (ou maciço) 3.50/8 para terrenos acidentados. Ideal para construção civil.",
    category: "carro de mao",
    images: [CarroTransporteBloco],
    imagesAlt: ["carro transporte bloco"],
  },
  {
    id: 7,
    title: "Carro Transporte Material",
    description: `Versátil e robusto, disponível em capacidades de 100kg a 350kg. Estrutura em tubo de aço e barra chata de 3". Pneus 4 lonas (ou maciços) 3.25/8 ou 3.50/8. Perfeito para indústria e canteiros de obras`,
    category: "carro de mao",
    images: [CarroTransporteMaterial],
    imagesAlt: ["carro transporte material"],
  },
  {
    id: 8,
    title: "Carro Gaiola",
    description:
      "Estrutura gradeada em Metalon 30x30 e Perfil U para transporte seguro de materiais soltos. Suporta até 350kg. Ideal para organização e movimentação eficiente em obras.",
    category: "carro de mao",
    images: [CarroGaiola],
    imagesAlt: ["carro gaiola"],
  },
  {
    id: 9,
    title: "Carro Transporte Tambor",
    description:
      "Solução especializada para movimentar tambores de óleo, produtos químicos ou água de maneira estável e eficiente. Elimina os riscos de acidentes no manuseio de cargas cilíndricas e pesadas.",
    category: "carro de mao",
    images: [CarroTransporteTambor],
    imagesAlt: ["carro transporte tambor"],
  },
  {
    id: 10,
    title: "Carro de Içamento",
    description:
      "Multifuncional: combina transporte manual e sistema de içamento por guincho. Fabricado em chapa de aço 2.00mm. Pneus 3.25/8 com jante de rolete. Elimina esforço no levantamento de cargas pesadas.",
    category: "carro de mao",
    images: [CarroIcamento],
    imagesAlt: ["carro icamento"],
  },
];
