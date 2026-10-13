import "./globals.css";

export const metadata = {
  title: "AN Reformas em Balneário Camboriú | Construção e Reformas",
  description:
    "Reformas, construção civil, pintura, elétrica, hidráulica, calhas e rufos em Balneário Camboriú, SC. Fale com a AN Reformas e solicite seu orçamento.",
  keywords: [
    "reformas em Balneário Camboriú",
    "construção civil em Balneário Camboriú",
    "reforma residencial",
    "reforma comercial",
    "pintura",
    "elétrica",
    "hidráulica",
    "calhas e rufos",
  ],
  openGraph: {
    title: "AN Reformas em Balneário Camboriú | Construção e Reformas",
    description:
      "Reformas, construção civil e serviços para sua obra em Balneário Camboriú, SC. Solicite um orçamento à AN Reformas.",
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
