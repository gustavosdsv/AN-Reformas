import Header from "../components/header";

import { whatsapp, whatsappLink } from "../lib/whatsapp";

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

const serviceImages = {
  Reformas: "/assets/services/reformas.png",
  Pintura: "/assets/services/pintura.png",
  Elétrica: "/assets/services/eletrica.png",
  Hidráulica: "/assets/services/hidraulica.png",
  Solda: "/assets/services/solda.png",
  Calhas: "/assets/services/calhas.png",
  Rufos: "/assets/services/rufos.png",
  "Construção em geral": "/assets/services/construcao-geral.png",
};

const photos = [
  "/assets/gallery/construcao-1.jpg",
  "/assets/gallery/construcao-2.jpg",
  "/assets/gallery/reformas-1.jpg",
  "/assets/gallery/reformas-2.jpg",
  "/assets/gallery/rufos-1.jpg",
  "/assets/gallery/rufos-2.jpg",
  "/assets/gallery/eletrica-hidraulica-1.jpg",
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-content container">
            <p className="eyebrow">Reformas e construção civil</p>
            <h1>Trabalho bem feito do começo ao fim.</h1>
            <p className="hero-copy">
              Equipe para construção, reforma e acabamento. Serviço organizado,
              compromisso com prazo e cuidado em cada etapa.
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
                src="https://www.jbjblocostelhastijolos.com.br/assets/img/blog/qualidade-dos-materiais-e-produtividade-da-obra.png"
                alt="Equipe trabalhando na construção de uma parede de blocos"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="services" id="servicos">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Serviços</p>
                <h2>O que fazemos</h2>
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
                    alt=""
                    loading="lazy"
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
              <h2>Nosso trabalho</h2>
            </div>
            <div className="gallery">
              {photos.map((src) => (
                <figure key={src}>
                  <img src={src} alt="" loading="lazy" />
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
      </main>
      <footer>
        <div className="container footer-row">
          <span>© {new Date().getFullYear()} AN Reformas e Construções</span>
          <img
            className="footer-flag"
            src="/assets/bandeira-brasil.svg"
            alt="Bandeira do Brasil"
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
              src="/assets/otarek-branco.png"
              alt="Otarek"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
