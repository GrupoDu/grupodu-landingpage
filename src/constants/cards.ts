import { CheckCheck, Target, Truck, UsersRound } from "lucide-react";

export const textosCardProdutos = {
  segmentos: {
    "dom-metal": [
      {
        titulo: "Carro de Mão para Construção Civil",
        bullets: [
          "Estrutura reforçada para uso em obras e reformas",
          "Fácil de manusear mesmo com carga pesada",
          "Disponível em diferentes modelos e pronta entrega",
        ],
        imagens: [],
        href: "comprar-carro-de-mao",
        buttonTxt: "Catalogo Completo de Carros de Mão",
      },
      {
        titulo: "Masseiras para Obra e Argamassa",
        bullets: [
          "Estrutura reforçada para uso em obras e reformas",
          "Fácil de manusear mesmo com carga pesada",
          "Disponível em diferentes modelos e pronta entrega",
        ],
        imagens: [],
        href: "comprar-masseira-para-obras",
        buttonTxt: "Catalogo Completo de Masseiras",
      },
      {
        titulo: "Plataforma de Trabalho para Construção",
        bullets: [
          "Estrutura reforçada para uso em obras e reformas",
          "Fácil de manusear mesmo com carga pesada",
          "Disponível em diferentes modelos e pronta entrega",
        ],
        imagens: [],
        href: "comprar-plataforma-de-trabalho",
        buttonTxt: "Catalogo Completo de Plataformas de Trabalho",
      },
    ],
    duferro: [{ titulos: ["", "", ""], bullets: ["", "", ""], imagens: [] }],
    carbuilt: [{ titulos: ["", "", ""], bullets: ["", "", ""], imagens: [] }],
  },
};

export const textosCardDiferenciais = {
  segmentos: {
    "dom-metal": [
      {
        titulo: " Variedade e Especialização",
        descricao:
          "Linha completa de ferragens, metais e acabamentos para construção civil. Tudo que sua obra precisa em um único fornecedor, otimizando tempo e logística.",
        icon: Target,
      },
      {
        titulo: "Qualidade Garantida",
        descricao:
          "Produtos certificados de fabricantes reconhecidos nacionalmente. Qualidade garantida com conformidade às normas técnicas brasileiras para sua total segurança.",
        icon: CheckCheck,
      },
      {
        titulo: "Experiência que Faz Diferença",
        descricao:
          "Equipe técnica experiente para auxiliar na especificação correta dos materiais, indicando as melhores soluções para cada tipo de projeto.",
        icon: UsersRound,
      },
      {
        titulo: "Logística Ágil",
        descricao:
          "Entregas pontuais em toda a região com agendamento flexível. Estoque próprio garante disponibilidade imediata dos produtos mais demandados.",
        icon: Truck,
      },
    ],
    duferro: [],
    carbuilt: [],
  },
};
