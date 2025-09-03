import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Toast from "@/components/toast";
import WsIcon from "@/components/wsicon";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Grupo Du Car",
  description:
    "O Grupo Du Car é formado por três empresas que atuam em diferentes setores, mas compartilham um mesmo compromisso: qualidade, inovação e solidez.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable}`}>
        <Toast />
        <Navbar />
        <WsIcon />
        {children}
        <Footer />
      </body>
    </html>
  );
}
