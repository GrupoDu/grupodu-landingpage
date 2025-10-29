import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Toast from "@/components/toast";
import WsIcon from "@/components/wsicon";
import ArrowUp from "@/components/arrowUp";
import Script from "next/script";
import Image from "next/image";

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
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1528143071557219');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height="1"
            width="1"
            alt="meta pixel"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1528143071557219&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
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
