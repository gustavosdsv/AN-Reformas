const phone = "554788028970";

export function whatsappLink(message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappLink(
  "Olá, equipe da AN Reformas e Construções! Vim pelo site de vocês e gostaria de solicitar um orçamento. Podemos conversar sobre o serviço que preciso, os detalhes do imóvel e a disponibilidade de atendimento? Obrigado!",
);
