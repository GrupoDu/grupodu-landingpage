import { NextResponse } from "next/server";
import Mailgun from "mailgun.js";
import FormData from "form-data";

export const POST = async (req: Request, res: NextResponse) => {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.API_KEY || "API_KEY",
  });
  try {
    const body = await req.json();
    const { nome, email, telefone, empresa, assunto, mensagem } = body;

    const data = await mg.messages.create(
      "sandboxc2b3e1bf05eb40ac91f6e9632d35512f.mailgun.org",
      {
        from: "Mailgun Sandbox <postmaster@sandboxc2b3e1bf05eb40ac91f6e9632d35512f.mailgun.org>",
        to: ["Joao Lucas Bivar de Franca <joao.lubf@gmail.com>"],
        subject: "Entrando em contato pelo site",
        text: `teste de envio`,
        html: `<h1>Informações do contato</h1>
        <h3>Nome completo</h3>
        <p>${nome}</p>
        <hr />
        <h3>Email</h3>
        <p>${email}</p>
        <hr />
        <h3>Telefon</h3>
        <p>${telefone}</p>
        <hr />
        <h3>Empresa</h3>
        <p>${empresa}</p>
        <hr />
        <h2>Assunto</h2>
        <p>${assunto}</p>
        <hr />
        <h3>Mensagem</h3>
        <p>${mensagem}</p>
        <hr />
        <br />
        <h4>Contato enviado pelo site.</h4>
        `,
      }
    );

    console.log(data);

    return NextResponse.json(
      { message: "Enviado com sucesso" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
  }
};
