// # A gente tava tentando resolver o problema do useToast
// ## Problema: não sei como chamar o useToast aqui

import { useToast } from "./useToast";

interface IBodyData extends IContactInfos {
  subject: string;
  message: string;
}

export const usePostContactRequest = async ({
  bodyValues,
  endpoint,
}: {
  bodyValues: IBodyData;
  endpoint: string;
}) => {
  if (!validateInputsValues(bodyValues)) return useToast({ toastType: "error", message: "Todos os campos devem ser preenchidos!" });

  try {
    const contactRequestResponse = await fetch(`/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyValues),
    });

    const contactRequestResponseJson = await contactRequestResponse.json();
    return [contactRequestResponseJson];
  } catch (err) {
    console.log(`Erro na tentativa de contato: ${(err as Error).message}`);
  }
};

function validateInputsValues(inputsValues: IUserInfos) {
  const { email, name, phone, company, message, subject } = inputsValues;
  let toastMessage = "";

  if (!email || !name || !phone || !company || !message || !subject) {
    toastMessage = "Todos os campos devem ser preenchidos!";
    return [false, toastMessage];
  } else {
    toastMessage = `Mensagem enviada para ${email}`;
    return [true, toastMessage];
  }
}
