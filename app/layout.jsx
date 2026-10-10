import "./globals.css";

export const metadata = {
  title: "AN Reformas e Construções | Serviço completo para sua obra",
  description:
    "AN Reformas e Construções: mão de obra, estrutura, calhas e rufos.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
