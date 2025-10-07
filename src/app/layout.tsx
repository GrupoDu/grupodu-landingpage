import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Toast from "@/components/toast";
import WsIcon from "@/components/wsicon";
import ArrowUp from "@/components/arrowUp";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Grupo Du Car",
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
        <ArrowUp />
        <WsIcon />
        {children}
        <Footer />
      </body>
    </html>
  );
}
