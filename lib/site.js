// Domínio público do site. Usado em canonical, Open Graph, sitemap e robots.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.anreformas.com.br"
).replace(/\/$/, "");

export const siteName = "AN Reformas e Construções";

export const phone = "+55 47 98802-8970";

export const socials = [
  "https://www.instagram.com/anreformasbrasil/",
  "https://www.facebook.com/anreformasbrasil/",
];

export const serviceImages = {
  Reformas: "/assets/services/reformas.webp",
  Pintura: "/assets/services/pintura.webp",
  Elétrica: "/assets/services/eletrica.webp",
  Hidráulica: "/assets/services/hidraulica.webp",
  Solda: "/assets/services/solda.webp",
  Calhas: "/assets/services/calhas.webp",
  Rufos: "/assets/services/rufos.webp",
  "Construção em geral": "/assets/services/construcao-geral.webp",
};

export const photos = [
  ["/assets/gallery/construcao-1.webp", "Obra de construção civil da AN Reformas em Balneário Camboriú"],
  ["/assets/gallery/construcao-2.webp", "Etapa de construção executada pela equipe da AN Reformas"],
  ["/assets/gallery/reformas-1.webp", "Reforma de imóvel em Balneário Camboriú"],
  ["/assets/gallery/reformas-2.webp", "Acabamento de reforma feito pela AN Reformas"],
  ["/assets/gallery/rufos-1.webp", "Instalação de rufos em telhado"],
  ["/assets/gallery/rufos-2.webp", "Rufo metálico instalado para proteger parede e telhado"],
  ["/assets/gallery/eletrica-hidraulica-1.webp", "Serviço de elétrica e hidráulica em obra"],
];

export const faq = [
  [
    "Quais serviços a AN Reformas faz em Balneário Camboriú?",
    "Fazemos reformas, construção em geral, pintura interna e externa, elétrica, hidráulica, solda, instalação e manutenção de calhas e rufos, para imóveis residenciais e comerciais em Balneário Camboriú.",
  ],
  [
    "Como peço um orçamento?",
    "Chame a AN Reformas pelo WhatsApp (47) 98802-8970 e conte o que precisa, de preferência com fotos ou medidas do local. Com essas informações, combinamos a visita ou enviamos o orçamento.",
  ],
  [
    "Vocês atendem obras residenciais e comerciais?",
    "Sim. Atendemos casas, apartamentos, salas e lojas, tanto em obras novas quanto em reformas de imóveis já ocupados.",
  ],
  [
    "Fazem pequenos reparos ou só obras grandes?",
    "Atendemos os dois. Fazemos desde reparos e manutenções, como torneiras, pontos elétricos, calhas e pintura de um ambiente, até reformas completas e construção.",
  ],
  [
    "Qual é o prazo de uma reforma?",
    "O prazo depende do tamanho e do tipo de serviço. Ele é definido no orçamento, e a equipe trabalha de forma organizada para cumprir o que foi combinado.",
  ],
  [
    "Para que servem calhas e rufos?",
    "As calhas recolhem e conduzem a água da chuva do telhado. Os rufos protegem os encontros entre telhado e parede, evitando infiltrações, umidade e manchas na construção.",
  ],
  [
    "Quais regiões vocês atendem?",
    "Atendemos Balneário Camboriú, SC. Se a sua obra fica em uma cidade vizinha, fale com a gente pelo WhatsApp para verificar a disponibilidade.",
  ],
];
