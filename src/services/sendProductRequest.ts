import { IProductRequest } from "@/components/formsComponents/types";
import { IResponseAPI } from "./types";

export async function sendProductRequest(
  productRequestInfos: IProductRequest
): Promise<IResponseAPI> {
  try {
    const productRequestResponse = await fetch("/api/emailPedido", {
      method: "POST",
      body: JSON.stringify(productRequestInfos),
    });

    return productRequestResponse.json();
  } catch (err) {
    const responseError = Response.json({ message: (err as Error).message, status: 500 });
    return responseError.json();
  }
}
