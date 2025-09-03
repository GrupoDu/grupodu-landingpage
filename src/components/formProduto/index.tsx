"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import ButtonAlt from "../buttonAlt";
import toast from "react-hot-toast";
import { products } from "@/data/products";

const FormProduto = () => {
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [empresa, setEmpresa] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");
  const [quantidade, setQuantidade] = useState<number>(0);

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/emailPedido", {
        method: "POST",
        body: JSON.stringify({
          nome,
          email,
          telefone,
          empresa,
          modelo,
          quantidade,
          mensagem,
        }),
      });

      if (res.status === 400)
        return toast.error(
          "Algo deu errado, lembre-se de preencher todos os campos!"
        );

      toast.success("Recebemos seu pedido com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado, tente novamente!");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Formulário para contato</h2>
      <form className={styles.formulario} onSubmit={handleEmail}>
        <label className={`${styles.inputContainer} ${styles.inputNome}`}>
          <span>Nome Completo</span>
          <input
            type="text"
            placeholder="Seu nome"
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputEmail}`}>
          <span>Email</span>
          <input
            type="email"
            placeholder="Seu email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputNumero}`}>
          <span>Número de celular</span>
          <input
            type="text"
            placeholder="Seu celular"
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputModelo}`}>
          <span>Modelo do produto</span>
          <select
            onChange={(e) => setModelo(e.target.value)}
            defaultValue=""
            required
          >
            <option value="" disabled>
              Escolha o modelo
            </option>
            {products.map((product) => (
              <option key={product.title} value={product.title}>
                {product.title}
              </option>
            ))}
          </select>
        </label>
        <label className={`${styles.inputContainer} ${styles.inputQuantidade}`}>
          <span>Quantidade</span>
          <input
            type="number"
            placeholder="Quantidade"
            onChange={(e) => setQuantidade(Number(e.target.value))}
            required
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputEmpresa}`}>
          <span>Empresa</span>
          <input
            type="text"
            placeholder="Sua empresa"
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputMensagem}`}>
          <span>Mensagem</span>
          <textarea
            className={styles.textarea}
            placeholder="Sua mensagem"
            onChange={(e) => setMensagem(e.target.value)}
          />
        </label>
        <ButtonAlt type="submit" gradient={true}>
          Solicitar produto
        </ButtonAlt>
      </form>
    </div>
  );
};

export default FormProduto;
