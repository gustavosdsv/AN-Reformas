import Header from "../components/header";

import { whatsapp, whatsappLink } from "../lib/whatsapp";

const services = [
  [
    "Reformas",
    "Melhorias e ajustes em casas, apartamentos e espaços comerciais.",
    "Gostaria de solicitar um orçamento para uma reforma no meu imóvel. Posso enviar fotos dos ambientes e explicar as melhorias que pretendo realizar para vocês avaliarem o serviço e a necessidade de uma visita?",
  ],
  [
    "Pintura",
    "Pintura interna e externa para renovar e proteger cada ambiente.",
    "Gostaria de solicitar um orçamento para pintura. Posso enviar fotos e informações sobre os ambientes, as superfícies e o acabamento desejado? Gostaria de saber também sobre a preparação das paredes e o prazo de execução.",
  ],
  [
    "Elétrica",
    "Instalações, ajustes e manutenção da parte elétrica do imóvel.",
    "Gostaria de solicitar um orçamento para serviços de elétrica no meu imóvel. Posso detalhar as instalações, os ajustes ou os reparos necessários para vocês orientarem a avaliação e a possibilidade de uma visita técnica?",
  ],
  [
    "Hidráulica",
    "Instalações e reparos em tubulações, torneiras e pontos de água.",
    "Gostaria de solicitar um orçamento para serviços de hidráulica. Posso explicar o que preciso e enviar fotos das tubulações, dos pontos de água ou dos locais que necessitam de reparo para vocês avaliarem o atendimento?",
  ],
  [
    "Solda",
    "Serviços de solda para estruturas, portões e peças metálicas.",
    "Gostaria de solicitar um orçamento para um serviço de solda. Posso enviar fotos, medidas e detalhes da estrutura, do portão ou da peça metálica para vocês avaliarem o trabalho e o prazo de execução?",
  ],
  [
    "Calhas",
    "Instalação e manutenção para conduzir corretamente a água da chuva.",
    "Gostaria de solicitar um orçamento para instalação ou manutenção de calhas. Posso enviar fotos do telhado e informar as medidas disponíveis e o que precisa ser feito? Gostaria de combinar uma avaliação para definir a solução adequada.",
  ],
  [
    "Rufos",
    "Instalação para proteger paredes, telhados e encontros da obra.",
    "Gostaria de solicitar um orçamento para instalação ou reparo de rufos. Posso enviar fotos dos encontros entre o telhado e as paredes e explicar se há infiltrações? Gostaria de saber como podemos agendar uma avaliação do local.",
  ],
  [
    "Construção em geral",
    "Mão de obra para diferentes etapas de construções residenciais e comerciais.",
    "Gostaria de solicitar um orçamento para construção. Posso compartilhar o projeto, a localização do imóvel e as etapas para as quais preciso de mão de obra? Gostaria de conversar sobre o escopo do trabalho e a disponibilidade da equipe.",
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
                        `Olá, equipe da AN Reformas e Construções! Vim pelo site de vocês. ${message} Obrigado!`,
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
