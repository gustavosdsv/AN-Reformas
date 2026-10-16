import { Barlow_Condensed, Inter } from "next/font/google";

import "./globals.css";

import { phone, siteName, siteUrl, socials } from "../lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const title = "AN Reformas em Balneário Camboriú | Construção e Reformas";
const description =
  "Reformas, construção civil, pintura, elétrica, hidráulica, solda, calhas e rufos em Balneário Camboriú, SC. Fale com a AN Reformas e solicite seu orçamento pelo WhatsApp.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  keywords: [
    "reformas em Balneário Camboriú",
    "construção civil em Balneário Camboriú",
    "empresa de reformas Balneário Camboriú",
    "reforma de apartamento Balneário Camboriú",
    "reforma residencial",
    "reforma comercial",
    "pintor em Balneário Camboriú",
    "eletricista em Balneário Camboriú",
    "encanador em Balneário Camboriú",
    "solda",
    "calhas e rufos Balneário Camboriú",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/logo-an.jpeg",
        alt: "Logo da AN Reformas e Construções",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/logo-an.jpeg"],
  },
  formatDetection: { telephone: false },
  verification: { google: "RuM4sGqdFKiTPXrJlF_qykjUYrJEP6GCuwLh8rjB51M" },
  other: {
    "geo.region": "BR-SC",
    "geo.placename": "Balneário Camboriú",
  },
  icons: { icon: "/favicon.svg" },
};

const services = [
  "Reformas",
  "Pintura",
  "Elétrica",
  "Hidráulica",
  "Solda",
  "Calhas",
  "Rufos",
  "Construção em geral",
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${siteUrl}/#empresa`,
  name: siteName,
  alternateName: "AN Reformas",
  description,
  url: `${siteUrl}/`,
  logo: `${siteUrl}/assets/logo-an.jpeg`,
  image: `${siteUrl}/assets/logo-an.jpeg`,
  telephone: phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Balneário Camboriú",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Balneário Camboriú",
    containedInPlace: { "@type": "State", name: "Santa Catarina" },
  },
  sameAs: socials,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de reforma e construção",
    itemListElement: services.map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${name} em Balneário Camboriú`,
        areaServed: "Balneário Camboriú, SC",
      },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${barlow.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
