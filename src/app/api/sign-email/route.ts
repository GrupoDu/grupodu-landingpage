import { NextResponse } from "next/server";
import { brevoClient } from "@/services/brevo";

export async function POST(req: Request) {
  try {
    const { listId, email } = await req.json();

    await brevoClient.contacts.createContact({
      listIds: listId,
      email,
    });

    return NextResponse.json({ message: "Email enviado!" }, { status: 200 });
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
}
