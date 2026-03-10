import type { Metadata } from "next";
import { Montserrat, Sofia_Sans_Extra_Condensed, Sofia_Sans_Condensed, Cinzel_Decorative } from "next/font/google";
import "./globals.scss";
import Header from "../components/Header/Header";
import Script from 'next/script';

const fontBody = Sofia_Sans_Condensed({ 
  subsets: ["cyrillic", "latin"], 
  variable: "--font-body" 
});

const fontHeader = Cinzel_Decorative({ 
  subsets: ["latin"], 
  variable: "--font-header",
  weight: ["400", "700"]
});

const fontLogo = Sofia_Sans_Extra_Condensed({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "400", "700"], 
  variable: "--font-logo",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Прощавай, тривожність",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className={`${fontBody.variable} ${fontLogo.variable} ${fontHeader.variable}`}>
        <Header />
        {children}

        <Script 
          src="https://secure.wayforpay.com/server/pay-widget.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}