import LogoGrupo from "../../../public/grupodu_new_logo.png";

export function checkNavbarOptions(pathname: string): string {
  if (
    pathname.includes("carro-de-mao") ||
    pathname.includes("masseira") ||
    pathname.includes("plataforma") ||
    pathname.includes("produtos")
  ) {
    return "produtos";
  } else if (pathname.includes("sobre")) {
    return "sobre";
  } else if (pathname.includes("contato")) {
    return "contatos";
  } else {
    return "inicio";
  }
}
