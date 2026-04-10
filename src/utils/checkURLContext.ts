/**
 * Checa o pathname e retorna o nome da pagina
 *
 * @param {string} pathname - URL da página
 */
export function checkURLContext(pathname: string): string {
  const isAboutPage = pathname.includes("sobre");
  const isContactPage = pathname.includes("contato");

  if (isAboutPage) {
    return "sobre";
  } else if (isContactPage) {
    return "contatos";
  } else if (pathname === "/") {
    return "inicio";
  } else {
    return "produtos";
  }
}
