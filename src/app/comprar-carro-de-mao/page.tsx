import styles from "./page.module.scss";
import FormProduto from "@/components/formProduto";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";
import ConhecendoProdutos from "@/components/conhecerProdutos";
import Main from "@/components/main";
import HeroProdutos from "@/components/heroProdutos";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carro de Mão para Obras - Dom Metal",
  description: "Compre carros de mão duráveis e eficientes para sua obra. Entre em contato com a Dom Metal e garanta o melhor para sua construção.",
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
          <div className={styles.contatosIcons}>
            <FaWhatsapp color="white" className={styles.icon} />
            <span>(81) 99904-0919</span>
          </div>
          <div className={styles.contatosIcons}>
            <LuPhone color="white" className={styles.icon} />
            <span>(81) 2011-4432</span>
          </div>
          <div className={styles.contatosIcons}>
            <LuMail color="white" className={styles.icon} />
            <span>dommetalind@gmail.com</span>
          </div>
        </div>
        <FormProduto />
      </div>
      <ConhecendoProdutos />
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    </div>
  );
}
