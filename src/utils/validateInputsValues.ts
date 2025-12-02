import { IContactInfos } from "@/components/form/types";

export function validateInputsValues(inputsValues: IContactInfos) {
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