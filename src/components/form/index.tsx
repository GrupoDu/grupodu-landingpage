import React from "react";
import styles from "./styles.module.scss";
import Button from "../button";
import { Send } from "lucide-react";

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <h1>Envie sua Mensagem</h1>
      <form>
        <label htmlFor="nome" className={styles.nome}>
          <span>Nome completo</span>
          <input
            type="text"
            name="nome-completo"
            placeholder="Seu nome completo"
          />
        </label>
        <label htmlFor="email" className={styles.email}>
          <span>Email</span>
          <input type="email" name="email" placeholder="seu@email.com" />
        </label>
        <label htmlFor="telefone" className={styles.telefone}>
          <span>Telefone</span>
          <input type="text" name="telefone" placeholder="(81) 99999-9999" />
        </label>
        <label htmlFor="empresa" className={styles.empresa}>
          <span>Empresa</span>
          <input type="text" name="empresa" placeholder="Nome da sua empresa" />
        </label>
        <label htmlFor="assunto" className={styles.assunto}>
          <span>Assunto</span>
          <input
            type="text"
            name="assunto"
            placeholder="Sobre o que você gostaria de falar"
          />
        </label>
        <label htmlFor="mensagem" className={styles.mensagem}>
          <span>Mensagem</span>
          <textarea name="mensage"></textarea>
        </label>
        <Button type="submit" width="--full-width" bgColor="--blue-light" color="white">
          Enviar Mensagem <Send color="white" />
        </Button>
      </form>
    </div>
  );
};

export default Form;
