import { textsCategory } from "@/data/types";
import {
  ChevronUp,
  Headset,
  Shield,
  Smile,
  TrendingUp,
  UsersRound,
} from "lucide-react";

// imagens
import CarroDeMao from "@/assets/produtos/Carro de mao.png";
import CarroJerica160 from "@/assets/produtos/Carro jerica 160L.png";

export const domMetal = {
  nome: "Dom Metal",
  subtitulo: "Soluções e Carrinhos",
  descricao:
    "Desenvolve e fabrica soluções inovadoras em carrinhos industriais e equipamentos de  trassporte, atendendo  diversos setores da economia",
  especialidades: [
    "Carrinhos Industriais",
    "Equipamento de Transportes",
    "Soluções Logísticas",
    "Projeto Sob Medida",
  ],
};

export const duFerro = {
  nome: "DuFerro",
  subtitulo: "Soluções em Estruturas Metálicas",
  descricao:
    "Desenvolve e fabrica soluções inovadoras em móveis planejados em metalon, unindo design e resistência para atender a residências, escritórios e espaços comerciais.",
  especialidades: [
    "Móveis Planejados",
    "Estruturas em Metalon",
    "Design Funcional",
    "Projetos Sob Medida",
  ],
};

export const carbuilt = {
  nome: "Carbuilt",
  subtitulo: "Equipando sua evolução.",
  descricao:
    "Desenvolve e fabrica soluções inovadoras em equipamentos de musculação, garantindo desempenho, durabilidade e ergonomia para academias e centros de treinamento.",
  especialidades: [
    "Máquinas de Musculação",
    "Equipamentos Funcionais",
    "Soluções para Treinamento",
    "Projetos Sob Medida",
  ],
};

export const cards = [
  {
    title: "Qualidade Garantida",
    description:
      "Todos os nossos serviços seguem rigorosos padrões de qualidade e contam com garantia.",
    icon: Shield,
  },
  {
    title: "Agilidade",
    description:
      "Processos otimizados para entregar resultados no menor tempo possível sem comprometer a qualidade.",
    icon: ChevronUp,
  },
  {
    title: "Equipe Especializada",
    description:
      "Profissionais altamente qualificados e em constante atualização técnica.",
    icon: UsersRound,
  },
  {
    title: "Suport Completo",
    description:
      "Atendimento personalizado e suporte contínuo para todas as necessidades dos clientes.",
    icon: Headset,
  },
  {
    title: "Experiência Comprovada",
    description:
      "Mais de uma década de experiência atendendo clientes com excelência.",
    icon: Smile,
  },
  {
    title: "Soluções Inovadoras",
    description:
      "Sempre em busca de novas tecnologias e metodologias para oferecer o melhor.",
    icon: TrendingUp,
  },
];

export const diferencas = [
  "Mais de 10 anos de experiência consolidada no mercado",
  "Equipe técnica especializada e certificada",
  "Atendimento personalizado para cada cliente",
  "Tecnologia de ponta em todos os processos",
  "Garantia de qualidade em todos os serviços",
  "Suporte contínuo e relacionamento duradouro",
  "Soluções customizadas para cada necessidade",
  "Transparência total nos processos e custos",
];

export const textProductType: textsCategory[] = [
  {
    category: "carro-de-mao",
    title: "Carro de mão",
    description:
      "O carrinho de mão que une resistência e praticidade para o dia a dia da sua obra. Fabricado com materiais de alta qualidade, ele garante durabilidade mesmo nas tarefas mais pesadas, oferecendo conforto no manuseio e eficiência no transporte de cargas.",
    images: [CarroDeMao, CarroJerica160],
  },
  {
    category: "masseiras",
    title: "Masseiras",
    description: "",
    images: [],
  },
  {
    category: "plataformas",
    title: "Plataformas",
    description: "",
    images: [],
  },
];
