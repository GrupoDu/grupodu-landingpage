"use client";

import React from "react";
import styles from "./styles.module.scss";
import Button from "../button";
import { Send } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [empresa, setEmpresa] = useState<string>("");
  const [assunto, setAssunto] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          empresa,
          assunto,
          mensagem,
        }),
      });

      if (!res.ok) throw new Error("Falha ao enviar o email");

      const content = await res.json();

      console.log(content);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Envie sua Mensagem</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome" className={styles.nome}>
          <span>Nome completo</span>
          <input
            type="text"
            name="nome-completo"
            placeholder="Seu nome completo"
            value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
          />
        </label>
        <label htmlFor="email" className={styles.email}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </label>
        <label htmlFor="telefone" className={styles.telefone}>
          <span>Telefone</span>
          <input
            type="text"
            name="telefone"
            placeholder="(81) 99999-9999"
            value={telefone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTelefone(e.target.value)
            }
          />
        </label>
        <label htmlFor="empresa" className={styles.empresa}>
          <span>Empresa</span>
          <input
            type="text"
            name="empresa"
            placeholder="Nome da sua empresa"
            value={empresa}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmpresa(e.target.value)
            }
          />
        </label>
        <label htmlFor="assunto" className={styles.assunto}>
          <span>Assunto</span>
          <input
            type="text"
            name="assunto"
            placeholder="Sobre o que você gostaria de falar"
            value={assunto}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAssunto(e.target.value)
            }
          />
        </label>
        <label htmlFor="mensagem" className={styles.mensagem}>
          <span>Mensagem</span>
          <textarea
            name="mensage"
            placeholder="Digite sua mensagem aqui"
            value={mensagem}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMensagem(e.target.value)
            }
          ></textarea>
        </label>
        <Button
          type="submit"
          width="--full-width"
          bgColor="--blue-light"
          color="white"
        >
          Enviar Mensagem <Send color="white" />
        </Button>
      </form>
    </div>
  );
};

export default Form;
