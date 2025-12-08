"use client";

import styles from "./styles.module.scss";
import { contatos } from "@/constants/contatos";
import { Contato } from "@/components/contatos";
import ButtonDecoration from "@/components/ui/buttons/buttonDecoration";
import Button from "@/components/ui/buttons/button";
import FormProduto from "@/components/form/formProduto";
import { MdKeyboardArrowUp } from "react-icons/md";
import { downloadFullCatalog } from "@/utils/downloadFullCatalog";

const ContatosSection = () => {
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
            click={downloadFullCatalog}
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
