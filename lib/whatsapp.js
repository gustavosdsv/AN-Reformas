const phone = "554788028970";

export function whatsappLink(message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = whatsappLink(
  "Olá! Vim pelo site de vocês e gostaria de solicitar um orçamento. Podemos conversar sobre o serviço que preciso e a disponibilidade de atendimento?",
);
