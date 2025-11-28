"use client";

import styles from "./styles.module.scss";
import { contatos } from "@/constants/contatos";
import { Contato } from "@/components/contatos";
import ButtonDecoration from "@/components/buttonDecoration";
import Button from "@/components/button";
import FormProduto from "@/components/formProduto";
import { MdKeyboardArrowUp } from "react-icons/md";

const ContatosSection = () => {
  const downloadCatalogo = () => {
    const baseUrl = window.location.origin;
    const link = document.createElement("a");
    link.href = `${baseUrl}/catalogo.pdf`;
    link.download = "Catálogo Grupo Du.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.formularioContato}>
      <div className={styles.contatos}>
        <h2>Solicite seu Produto</h2>
        <p>
          Preencha seus dados e nossa equipe entrará em contato para garantir
          que você receba exatamente o que procura.
        </p>
        <hr />
        <h3>Outras formas de contato</h3>
        {contatos.map((contato, index) => (
          <Contato key={index} Icon={contato.icon} contato={contato.contato} />
        ))}
        <div className={styles.buttons}>
          <span>Ainda não conhece nossos produtos?</span>
          <ButtonDecoration
            type="button"
            href="#"
            border="#201750"
            theme="#201750"
            color="white"
            borderRadius="4px"
            click={downloadCatalogo}
          >
            Catálogo completo
          </ButtonDecoration>
          <Button type="link" href="#produtos">
            Ver Linha Completa de Carros de Mão <MdKeyboardArrowUp />
          </Button>
        </div>
      </div>
      <FormProduto />
    </div>
  );
};

export default ContatosSection;
