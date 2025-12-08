import { IContactInfos } from "@/components/formsComponents/types";
import { IResponseAPI } from "./types";

export async function sendEmailContact(
  userInfos: IContactInfos
): Promise<IResponseAPI> {
  try {
    const postContactResponse: Response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(userInfos),
    });

    return postContactResponse.json();
  } catch (err) {
    const responseError = Response.json({
      message: (err as Error).message,
      status: 500,
    });

    return responseError.json();
  }
}
