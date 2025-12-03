"use client";
import React from "react";
import styles from "./styles.module.scss";
import Button from "../../ui/buttons/button";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import toast from "react-hot-toast";
import { postContactRequest } from "@/services/postContactRequest";
import { IContactInfos } from "../types";

const FormContact = () => {
  const [userInfos, setUserInfos] = useState<IContactInfos>({
    email: "",
    name: "",
    phone: "",
    company: "",
    message: "",
    subject: "",
  });
  const [sending, setSending] = useState<boolean>(false);

  const handleEmailContactSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setSending(true);
    const contactResponse = await postContactRequest(userInfos, "email");

    try {
      const contactRequestResponse = contactResponse?.contactRequestResponse;
      const emailRequestResponseJson = contactResponse?.contactRequestResponseJson;
      if (contactRequestResponse?.ok) {
        toast.success(emailRequestResponseJson.message);
      } else {
        toast.error(emailRequestResponseJson.error);
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
      <form onSubmit={handleEmailContactSubmit}>
        <label htmlFor="nome" className={styles.nome}>
          <span>Nome completo</span>
          <input
            type="text"
            name="nome-completo"
            placeholder="Seu nome completo"
            value={userInfos.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfos((prevUserInfos) => ({
                ...prevUserInfos,
                name: e.target.value,
              }))
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
            value={userInfos.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfos((prevUserInfos) => ({
                ...prevUserInfos,
                email: e.target.value,
              }))
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
            value={userInfos.phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfos((prevUserInfos) => ({
                ...prevUserInfos,
                phone: e.target.value,
              }))
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
            value={userInfos.company}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfos((prevUserInfos) => ({
                ...prevUserInfos,
                company: e.target.value,
              }))
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
            value={userInfos.subject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfos((prevUserInfos) => ({
                ...prevUserInfos,
                subject: e.target.value,
              }))
            }
            required
          />
        </label>
        <label htmlFor="mensagem" className={styles.mensagem}>
          <span>Mensagem</span>
          <textarea
            name="mensage"
            placeholder="Digite sua mensagem aqui"
            value={userInfos.message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setUserInfos((prevUserInfos) => ({
                ...prevUserInfos,
                message: e.target.value,
              }))
            }
            required
          ></textarea>
        </label>
        <Button type="submit" className={styles.button} desativado={sending}>
          Enviar Mensagem <LuSend color="white" width={16} />
        </Button>
      </form>
    </div>
  );
};

export default FormContact;
