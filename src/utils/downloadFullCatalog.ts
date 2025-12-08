export function downloadFullCatalog() {
    const baseUrl = window.location.origin;
    const link = document.createElement("a");
    link.href = `${baseUrl}/catalogo.pdf`;
    link.download = "Catálogo Grupo Du.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}