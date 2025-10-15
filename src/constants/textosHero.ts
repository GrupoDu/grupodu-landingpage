import { CategoriaProduto } from "@/@types/categoriaProduto";
import CarroDeMao from "@/assets/produtos/Carro de mao.png";
import CarroJerica160 from "@/assets/produtos/Carro jerica 160L.png";
import MasseiraMetalica from "@/assets/produtos/masseira-metalica.png";
import MasseiraMetalica100 from "@/assets/produtos/masseira-metalica-100.png";
import CarroPlataforma from "@/assets/produtos/carro-plataforma.png";
import PlataformaBasculante from "@/assets/produtos/carro-plataforma-basculante.png";

export const textosHero: CategoriaProduto[] = [
  {
    titulo: "Carro de Mão – Robustez e eficiência para suas obras",
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
      "Masseiras para obra e indústria com alta resistência e praticidade. Fabricadas em plástico virgem reforçado ou aço carbono anticorrosivo, disponíveis de 40L a 400L. Garantem durabilidade em uso intensivo com conforto operacional otimizado para canteiro de obras e produção industrial.",
    imagens: [MasseiraMetalica, MasseiraMetalica100],
    bullets: [
      "Masseiras para obra e indústria - De 40L a 400L em plástico reforçado e aço carbono anticorrosivo.",
      "Alta resistência e praticidade - Materiais premium para uso intensivo em canteiro e produção.",
      "Misturas eficientes e duráveis - Design ergonômico que otimiza o trabalho sem complicações.",
      "Conforto operacional garantido - Manuseio prático com máxima estabilidade em operações intensivas.",
    ],
    categoria: "Masseiras",
  },
  {
    titulo: "Carro Plataforma – Plataforma de Trabalho Segura e Eficiente",
    descricao:
      "Plataformas de trabalho e carros transportadores em aço carbono, metalon e chapas espessas com capacidade até 1000kg. Robustos e confiáveis para acesso elevado, transporte interno e descarga de materiais. Garantem estabilidade, mobilidade e resistência em operações de canteiro e indústria.",
    imagens: [CarroPlataforma, PlataformaBasculante],
    bullets: [
      "Plataformas e carros transportadores - Estrutura em aço carbono com capacidade até 1000kg.",
      "Robustez e confiabilidade - Metalon e chapas espessas para cargas médias e intensas.",
      "Acesso seguro e mobilidade - Plataformas elevadas com estabilidade para canteiro e indústria.",
      "Transporte e descarga prática - Modelos basculantes para movimentação eficiente de materiais.",
    ],
    categoria: "Plataformas",
  },
];

export const bulletsHero = [
  "+800 obras atendidas",
  "+10 Anos de experiência",
  "Cobertura em todo o Nordeste brasileiro",
  " Produtos de qualidade profissional com garantia",
];
