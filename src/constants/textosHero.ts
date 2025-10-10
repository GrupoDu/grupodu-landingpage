import { CategoriaProduto } from "@/@types/categoriaProduto";
import CarroDeMao from "@/assets/produtos/Carro de mao.png";
import CarroJerica160 from "@/assets/produtos/Carro jerica 160L.png";
import MasseiraMetalica from "@/assets/produtos/masseira-metalica.png";
import MasseiraMetalica100 from "@/assets/produtos/masseira-metalica-100.png";
import CarroPlataforma from "@/assets/produtos/carro-plataforma.png";
import PlataformaBasculante from "@/assets/produtos/carro-plataforma-basculante.png";

export const textosHero: CategoriaProduto[] = [
  {
    titulo: "Carro de Mão – Robustez e eficiência para obras e jardins",
    descricao:
      "O carrinho de mão que une resistência e praticidade para o dia a dia da sua obra. Fabricado com materiais de alta qualidade, ele garante durabilidade mesmo nas tarefas mais pesadas, oferecendo conforto no manuseio e eficiência no transporte de cargas.",
    imagens: [CarroDeMao, CarroJerica160],
    bullets: [
      "Construção Reforçada: Estrutura em aço galvanizado com soldas reforçadas para máxima durabilidade",
      "Alta Capacidade: Suportam até 150kg, ideais para transporte de entulho, areia, cimento e materiais diversos",
      "Ergonomia Profissional: Alças anatômicas e distribuição de peso otimizada para reduzir fadiga",
      "Caçamba Otimizada: Design aerodinâmico facilita carregamento, transporte e descarga de materiais",
    ],
    categoria: "Carro de mão",
  },
  {
    titulo: "Masseiras para Obra e Argamassa",
    descricao:
      "Para misturas eficientes e sem complicações, nossas masseiras são a solução ideal. Unindo alta resistência e praticidade, são fabricadas em materiais de primeira qualidade como plástico virgem reforçado ou aço carbono com proteção anticorrosiva. Disponíveis em múltiplas capacidades (de 40L a 400L), garantem durabilidade mesmo em uso intensivo e oferecem conforto no manuseio para otimizar o trabalho no canteiro de obras ou na indústria.",
    imagens: [MasseiraMetalica, MasseiraMetalica100],
    bullets: [],
    categoria: "Masseiras",
  },
  {
    titulo: "Carro Plataforma – Plataforma de Trabalho Segura e Eficiente",
    descricao:
      "Desenvolvidas para oferecer suporte onde você precisa, nossas plataformas de trabalho e carros transportadores são sinônimo de robustez e confiabilidade. Com estruturas em aço carbono, metalon e chapas espessas, suportam desde cargas médias até pesos intensos (até 1000kg nos modelos basculantes). Seja para acesso elevado com segurança, transporte interno ou descarga prática de materiais, oferecem estabilidade, mobilidade e a resistência que sua operação exige.",
    imagens: [CarroPlataforma, PlataformaBasculante],
    bullets: [],
    categoria: "Plataformas",
  },
];
