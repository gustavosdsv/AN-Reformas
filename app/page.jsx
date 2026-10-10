import Header from "../components/header";

const whatsapp =
  "https://wa.me/5547988028970?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.";

const services = [
  [
    "Reformas",
    "Melhorias e ajustes em casas, apartamentos e espaços comerciais.",
  ],
  [
    "Pintura",
    "Pintura interna e externa para renovar e proteger cada ambiente.",
  ],
  [
    "Elétrica",
    "Instalações, ajustes e manutenção da parte elétrica do imóvel.",
  ],
  [
    "Hidráulica",
    "Instalações e reparos em tubulações, torneiras e pontos de água.",
  ],
  ["Solda", "Serviços de solda para estruturas, portões e peças metálicas."],
  [
    "Calhas",
    "Instalação e manutenção para conduzir corretamente a água da chuva.",
  ],
  ["Rufos", "Instalação para proteger paredes, telhados e encontros da obra."],
  [
    "Construção em geral",
    "Mão de obra para diferentes etapas de construções residenciais e comerciais.",
  ],
];

const photos = [
  [
    "https://www.mapadaobra.com.br/wp-content/uploads/2024/07/A-alvenaria-e-o-sistema-construtivo-mais-utilizado-no-Brasil-scaled.jpg",
    "Profissionais executando serviço de alvenaria",
    "Alvenaria",
  ],
  [
    "https://www.jbjblocostelhastijolos.com.br/assets/img/blog/qualidade-dos-materiais-e-produtividade-da-obra.png",
    "Construção de parede de blocos",
    "Construção",
  ],
  [
    "https://www.iw8.com.br/imagens/noticias/original/construcao-civil-na-bahia-23032013185630.jpg",
    "Equipe trabalhando em uma obra",
    "Equipe em ação",
  ],
  [
    "https://cdn.agenciacidades.com.br/upload/dn_arquivo/2025/03/00059566-curitiba-2009-cesar-brustolin-smcs-1.jpg",
    "Trabalho de construção civil em andamento",
    "Obra em andamento",
  ],
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
              {services.map(([title, description], index) => (
                <article className="service-card" key={title}>
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
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
              {photos.map(([src, alt, caption]) => (
                <figure key={caption}>
                  <img src={src} alt={alt} loading="lazy" />
                  <figcaption>{caption}</figcaption>
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
          <span>Construção, reforma e acabamento</span>
        </div>
      </footer>
    </>
  );
}
