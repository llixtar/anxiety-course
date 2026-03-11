import type { Metadata } from "next";
import { Sofia_Sans_Extra_Condensed, Sofia_Sans_Condensed, Cinzel_Decorative } from "next/font/google";
import "./globals.scss";
import Header from "../components/Header/Header";
import Script from 'next/script';

// Динамічно отримуємо домен із налаштувань Vercel
const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || 'https://anxiety-course-zeta.vercel.app';

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
  metadataBase: new URL(baseUrl),
  title: {
    default: "Anxiety Course — Курс по роботі з тривожністю від психолога Марії",
    template: "%s | Anxiety Course"
  },
  description: "Позбудьтеся тривоги та внутрішнього хаосу за допомогою авторського курсу «лагідної терапії». Практичні вправи, візуалізації та психологічна підтримка.",
  keywords: ['курс від тривожності', 'психолог Марія', 'як подолати тривогу', 'лагідна терапія', 'самодопомога психологія'],
  
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Anxiety Course — Твій шлях до внутрішнього спокою',
    description: 'Авторський курс Марії про те, як приборкати тривогу та знайти опору в собі.',
    url: '/',
    siteName: 'Anxiety Course',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Прев’ю курсу Anxiety Course',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  }
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