import Header from "../components/header";

import { faq, photos, serviceImages } from "../lib/site";
import { whatsapp, whatsappLink } from "../lib/whatsapp";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const services = [
  [
    "Reformas",
    "Melhorias e ajustes em casas, apartamentos e espaços comerciais.",
    "Gostaria de solicitar um orçamento para uma reforma no meu imóvel. Podemos conversar sobre o que preciso e a disponibilidade de vocês?",
  ],
  [
    "Pintura",
    "Pintura interna e externa para renovar e proteger cada ambiente.",
    "Gostaria de solicitar um orçamento para pintura no meu imóvel. Podemos conversar sobre o serviço e os prazos de atendimento?",
  ],
  [
    "Elétrica",
    "Instalações, ajustes e manutenção da parte elétrica do imóvel.",
    "Gostaria de solicitar um orçamento para serviços de elétrica no meu imóvel. Podemos conversar sobre o que precisa ser feito e a disponibilidade de atendimento?",
  ],
  [
    "Hidráulica",
    "Instalações e reparos em tubulações, torneiras e pontos de água.",
    "Gostaria de solicitar um orçamento para serviços de hidráulica no meu imóvel. Podemos conversar sobre o que preciso e como funciona o atendimento?",
  ],
  [
    "Solda",
    "Serviços de solda para estruturas, portões e peças metálicas.",
    "Gostaria de solicitar um orçamento para um serviço de solda. Podemos conversar sobre o trabalho e o prazo para realização?",
  ],
  [
    "Calhas",
    "Instalação e manutenção para conduzir corretamente a água da chuva.",
    "Gostaria de solicitar um orçamento para instalação ou manutenção de calhas. Podemos conversar sobre o serviço e a disponibilidade de vocês?",
  ],
  [
    "Rufos",
    "Instalação para proteger paredes, telhados e encontros da obra.",
    "Gostaria de solicitar um orçamento para instalação ou reparo de rufos. Podemos conversar sobre o que preciso e como funciona o atendimento?",
  ],
  [
    "Construção em geral",
    "Mão de obra para diferentes etapas de construções residenciais e comerciais.",
    "Gostaria de solicitar um orçamento para uma obra. Podemos conversar sobre as etapas da construção e a disponibilidade da equipe?",
  ],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio">
          <img
            className="hero-bg"
            src="/assets/hero-1920.webp"
            srcSet="/assets/hero-960.webp 960w, /assets/hero-1920.webp 1920w"
            sizes="100vw"
            alt=""
            width="1920"
            height="1280"
            fetchPriority="high"
          />
          <div className="hero-content container">
            <p className="eyebrow">
              Reformas e construção civil em Balneário Camboriú
            </p>
            <h1>Trabalho bem feito do começo ao fim.</h1>
            <p className="hero-copy">
              Equipe para construção, reforma e acabamento em Balneário
              Camboriú. Serviço organizado, compromisso com prazo e cuidado em
              cada etapa.
            </p>
            <div className="hero-actions">
              <a
                className="button button--gold"
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir orçamento
              </a>
              <a className="button button--silver" href="#servicos">
                Ver serviços
              </a>
            </div>
          </div>
        </section>

        <section id="sobre">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="eyebrow">Sobre nós</p>
              <h2>Gente que entende de obra.</h2>
              <p>
                A AN Reformas e Construções atende obras residenciais e
                comerciais. Trabalhamos com atenção, organização e respeito à
                sua obra.
              </p>
              <div className="about-points">
                {[
                  "Equipe responsável",
                  "Serviço organizado",
                  "Cuidado com o prazo",
                  "Orçamento direto",
                ].map((point) => (
                  <div className="point" key={point}>
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="about-image">
              <img
                src="/assets/sobre-nos.webp"
                alt="Equipe trabalhando na construção de uma parede de blocos"
                width="1000"
                height="750"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="services" id="servicos">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Serviços</p>
                <h2>Serviços de reforma e construção</h2>
              </div>
              <p>
                Mão de obra para diferentes fases da sua construção ou reforma.
              </p>
            </div>
            <div className="service-grid">
              {services.map(([title, description, message], index) => (
                <article className="service-card" key={title}>
                  <img
                    className="service-image"
                    src={serviceImages[title]}
                    alt={`Serviço de ${title.toLowerCase()} em Balneário Camboriú`}
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="service-card-content">
                    <span className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                    <a
                      className="button button--gold service-quote"
                      href={whatsappLink(
                        `Olá! Vim pelo site de vocês. ${message}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Solicitar orçamento: ${title}`}
                    >
                      Solicitar orçamento
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fotos">
          <div className="container">
            <div className="gallery-head">
              <p className="eyebrow">Fotos</p>
              <h2>Obras em Balneário Camboriú</h2>
            </div>
            <div className="gallery">
              {photos.map(([src, alt]) => (
                <figure key={src}>
                  <img
                    src={src}
                    alt={alt}
                    width="720"
                    height="1280"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Entre em contato</p>
              <h2>Vamos falar sobre sua obra?</h2>
              <p>
                Envie uma mensagem pelo WhatsApp. Conte o que precisa e peça seu
                orçamento.
              </p>
            </div>
            <a
              className="button button--gold"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </section>

        <section className="faq" id="duvidas">
          <div className="container faq-grid">
            <div className="faq-head">
              <p className="eyebrow">Perguntas frequentes</p>
              <h2>Dúvidas sobre reformas em Balneário Camboriú</h2>
              <p>
                Não encontrou sua resposta?{" "}
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  Fale com a gente no WhatsApp
                </a>
                .
              </p>
            </div>
            <div className="faq-list">
              {faq.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    <h3>{question}</h3>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
            }}
          />
        </section>
      </main>
      <footer>
        <div className="container footer-row">
          <span>© {new Date().getFullYear()} AN Reformas e Construções</span>
          <div className="footer-socials">
            <span>Siga a AN Reformas:</span>
            <a
              href="https://www.instagram.com/anreformasbrasil/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga a AN Reformas no Instagram"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/anreformasbrasil/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga a AN Reformas no Facebook"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.167 10.125 24v-8.437H7.078V12.07h3.047V9.429c0-3.02 1.792-4.689 4.533-4.689 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.955.93-1.955 1.885v2.26h3.328l-.532 3.492h-2.796V24C19.612 23.167 24 18.1 24 12.073z" />
              </svg>
            </a>
          </div>
          <img
            className="footer-flag"
            src="/assets/bandeira-brasil.svg"
            alt="Bandeira do Brasil"
            width="28"
            height="20"
            loading="lazy"
          />
          <a
            className="footer-credit"
            href="https://www.instagram.com/we.otarek"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Otarek"
          >
            <span>Desenvolvido por</span>
            <img
              className="otarek-logo"
              src="/assets/otarek-branco.webp"
              alt="Otarek"
              width="224"
              height="36"
              loading="lazy"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
