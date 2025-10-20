"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import { Produto } from "@/@types/produto";
import Button from "../button";

const FormProduto = () => {
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [empresa, setEmpresa] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");
  const [quantidade, setQuantidade] = useState<number>(0);
  const pathname = usePathname();
  const [products, setProducts] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let produtos: Produto[] = [];

      if (pathname.includes("carro-de-mao")) {
        const response = await fetch("/api/database?produto=carro-de-mao");
        const data = await response.json();
        produtos = data;
      } else if (pathname.includes("masseira")) {
        const response = await fetch("/api/database?produto=masseira");
        const data = await response.json();
        produtos = data;
      } else if (pathname.includes("plataforma")) {
        const response = await fetch("/api/database?produto=plataforma");
        const data = await response.json();
        produtos = data;
      } else {
        produtos = [];
      }

      setProducts(produtos);
    };

    fetchData();
  }, [pathname]);

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
      <h3>Formulário para contato</h3>
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
              <option key={product.nome} value={product.nome}>
                {product.nome}
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
        <Button type="submit" theme="#37349aff" color="white">
          Solicitar produto
        </Button>
      </form>
    </div>
  );
};

export default FormProduto;
