import { BrevoClient } from "@getbrevo/brevo";

const API_KEY = process.env["BREVO_API_KEY"];

if (!API_KEY) throw new Error("API_KEY do brevo não definida.");

export const brevoClient = new BrevoClient({
  apiKey: API_KEY,
});
