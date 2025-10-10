import styles from "./page.module.scss";
import FormProduto from "@/components/formProduto";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";
import Main from "@/components/main";
import HeroProdutos from "@/components/heroProdutos";
import Loading from "@/components/loading";
import { Suspense } from "react";
import { Metadata } from "next";
import { contatos } from "@/constants/contatos";
import { IconType } from "react-icons";
import Button from "@/components/newButton";
import { MdKeyboardArrowDown } from "react-icons/md";
import ButtonBorder from "@/components/buttonBorder";

export const metadata: Metadata = {
  title: "Carro de Mão para Obras - Dom Metal",
  description:
    "Compre carros de mão duráveis e eficientes para sua obra. Entre em contato com a Dom Metal e garanta o melhor para sua construção.",
  // ADICIONAR MARKUP AQUI
};

const Contatos = ({ Icon, contato }: { Icon: IconType; contato: string }) => {
  return (
    <div className={styles.contatosContainer}>
      <Icon className={styles.icon} />
      <span>{contato}</span>
    </div>
  );
};

export default function ProdutoPge() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<Loading />}>
        <HeroProdutos />
      </Suspense>
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
            <Contatos
              key={index}
              Icon={contato.icon}
              contato={contato.contato}
            />
          ))}
          <div className={styles.buttons}>
            <span>Ainda não conhece nossos produtos?</span>
            <ButtonBorder
              type="link"
              href="#"
              borda="#201750"
              theme="#201750"
              color="white"
              borderRadius="4px"
            >
              Catálogo completo
            </ButtonBorder>
            <Button href="#produtos" theme="#201750" color="white">
              Ver Linha Completa de Carros de Mão <MdKeyboardArrowDown />
            </Button>
          </div>
        </div>
        <FormProduto />
      </div>
      <hr className={styles.hr} />
      <div className={styles.tituloProdutos}>
        <MdKeyboardArrowDown className={styles.arrow} />
        <h2>Nossa linha completa de Carros de Mão</h2>
      </div>
      <Suspense fallback={<Loading />}>
        <Main id="produtos"/>
      </Suspense>
    </div>
  );
}
