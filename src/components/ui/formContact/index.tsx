"use client";

import React from "react";
import styles from "./styles.module.scss";
import Button from "../button";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import toast from "react-hot-toast";

const FormContact = () => {
  const [nome, setNome] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [empresa, setEmpresa] = useState<string>("");
  const [assunto, setAssunto] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      if (!nome || !email || !telefone || !empresa || !assunto || !mensagem) {
        toast.error("Por favor, preencha todos os campos.");
        return;
      }

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

      if (res.ok) {
        toast.success("Email recebido com sucesso!");
      } else if (res.status == 400) {
        toast.error("Ocorreu um erro ao enviar o email.");
      } else {
        toast.error("Ocorreu um erro ao enviar o email.");
      }
    } catch (err) {
      toast.error("Erro de conexão. Tenta novamente mais tarde.");
      console.log(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3>Envie sua Mensagem</h3>
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          ></textarea>
        </label>
        <Button type="submit" className={styles.button}>
          Enviar Mensagem <LuSend color="white" width={16} />
        </Button>
      </form>
    </div>
  );
};

export default FormContact;
