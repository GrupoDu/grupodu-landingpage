"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import Button from "../../ui/buttons/button";
import { IProductRequest } from "../types";
import { showToast } from "@/utils/showToast";
import { useFetchProductsData } from "@/hooks/fetchProductsData";

const FormProduto = () => {
  const [productRequestInfos, setProductRequestInfos] =
    useState<IProductRequest>({
      name: "",
      email: "",
      phone: "",
      company: "",
      quantity: 0,
      model: "",
    });
  const pathname = usePathname();
  const [products, setProducts] = useState<Produto[]>([]);
  const [isSending, setIsSending] = useState<boolean>(false);
  const endpoint = getEndpoint();
  const productsData = useFetchProductsData(endpoint);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData);
    }

  }, [productsData, products]);

  function getEndpoint() {
    if (pathname.includes("carro-de-mao")) {
      return "carro-de-mao";
    } else if (pathname.includes("masseira")) {
      return "masseira";
    } else if (pathname.includes("plataforma")) {
      return "plataforma";
    } else {
      return "";
    }
  }

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch("/api/emailPedido", {
        method: "POST",
        body: JSON.stringify(productRequestInfos),
      });

      if (res.status === 400)
        showToast({
          toastType: "error",
          message: "Por favor, preencha todos os campos.",
        });

      showToast({
        toastType: "success",
        message: "Recebemos seu pedido com sucesso!",
      });
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado, tente novamente!");
    } finally {
      setIsSending(false);
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProductRequestInfos((prevProductRequestInfos) => ({
                ...prevProductRequestInfos,
                name: e.target.value,
              }))
            }
            required
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputEmail}`}>
          <span>Email</span>
          <input
            type="email"
            placeholder="Seu email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProductRequestInfos((prevProductRequestInfos) => ({
                ...prevProductRequestInfos,
                email: e.target.value,
              }))
            }
            required
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputNumero}`}>
          <span>Número de celular</span>
          <input
            type="text"
            placeholder="Seu celular"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProductRequestInfos((prevProductRequestInfos) => ({
                ...prevProductRequestInfos,
                phone: e.target.value,
              }))
            }
            required
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputModelo}`}>
          <span>Modelo do produto</span>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setProductRequestInfos((prevProductRequestInfos) => ({
                ...prevProductRequestInfos,
                model: e.target.value,
              }))
            }
            defaultValue=""
            required
          >
            <option value="" disabled>
              Escolha o modelo
            </option>
            {products.map((product) => (
              <option key={product.name} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
        <label className={`${styles.inputContainer} ${styles.inputQuantidade}`}>
          <span>Quantidade</span>
          <input
            type="number"
            placeholder="Quantidade"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProductRequestInfos((prevProductRequestInfos) => ({
                ...prevProductRequestInfos,
                quantity: Number(e.target.value),
              }))
            }
            required
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputEmpresa}`}>
          <span>Empresa</span>
          <input
            type="text"
            placeholder="Sua empresa"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProductRequestInfos((prevProductRequestInfos) => ({
                ...prevProductRequestInfos,
                company: e.target.value,
              }))
            }
          />
        </label>
        <Button type="submit" desativado={isSending}>
          Solicitar produto
        </Button>
      </form>
    </div>
  );
};

export default FormProduto;
