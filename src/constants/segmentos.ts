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
    gradient: "linear-gradient(90deg, #6D91DF 0%, #4B50A9 66%, #42358C 100%)",
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
    gradient: "linear-gradient(90deg, #F9A0A0 0%, #FFD4D4 66%, #EF6262 100%)",
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
    gradient: "linear-gradient(90deg, #A0DBF9 0%, #D4FCFF 66%, #2C9DA1 100%)",
    page: "/carbuilt",
  },
];
