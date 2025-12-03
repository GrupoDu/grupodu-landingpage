import { IContactInfos } from "@/components/form/types";
import { showToast } from "../utils/showToast";
import { validateInputsValues } from "../utils/validateInputsValues";

export async function postContactRequest(
  props: IContactInfos,
  endpoint: string
) {
  try {
    const contactRequestResponse = await fetch(`/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });

    const contactRequestResponseJson = await contactRequestResponse.json();

    return {contactRequestResponse, contactRequestResponseJson};
  } catch (err) {
    console.log(`Erro na tentativa de contato: ${(err as Error).message}`);
    return null;
  }
}
