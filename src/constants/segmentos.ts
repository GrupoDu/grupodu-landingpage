import DomMetal from "../../public/Logo dom metal.png";
import DuFerro from "../../public/DuFerro.png";
import Carbuilt from "../../public/Carbuilt.png";
import { carbuilt, domMetal, duFerro } from "@/constants/textos";

export const infoSegmentos = [
  {
    title: domMetal.nome,
    subtitle: domMetal.subtitulo,
    description: domMetal.descricao,
    img: {
      src: DomMetal,
      alt: "dom-metal",
    },
    especialidades: domMetal.especialidades,
    variantClass: "dom-metal",
    corButton: "#4347FF",
    page: "/dom-metal",
  },
  {
    title: duFerro.nome,
    subtitle: duFerro.subtitulo,
    description: duFerro.descricao,
    img: {
      src: DuFerro,
      alt: "du-ferro",
    },
    especialidades: duFerro.especialidades,
    variantClass: "duferro",
    corButton: "#FF5943",
    page: "/duferro",
  },
  {
    title: carbuilt.nome,
    subtitle: carbuilt.subtitulo,
    description: carbuilt.descricao,
    img: {
      src: Carbuilt,
      alt: "carbuilt",
    },
    especialidades: carbuilt.especialidades,
    variantClass: "carbuilt",
    corButton: "#1E78C2",
    page: "/carbuilt",
  },
];
