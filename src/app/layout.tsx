import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import HeaderNav from "@/components/header-nav";
import Footer from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Grupo Du Car",
  description:
    "O Grupo Du Car é formado por três empresas que atuam em diferentes setores, mas compartilham um mesmo compromisso: qualidade, inovação e solidez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable}`}>
        <HeaderNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
