"use client";

import { useState } from "react";

const whatsapp =
  "https://wa.me/5547988028970?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navegação principal">
        <a
          className="brand"
          href="#inicio"
          aria-label="AN Reformas e Construções — início"
          onClick={close}
        >
          <img
            className="brand-logo"
            src="/assets/logo-an-transparente.png"
            alt="AN Reformas Manutenções"
          />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
        </button>
        <div className={`nav-links${open ? " open" : ""}`} id="nav-links">
          <a href="#inicio" onClick={close}>
            Início
          </a>
          <a href="#sobre" onClick={close}>
            Sobre nós
          </a>
          <a href="#servicos" onClick={close}>
            Serviços
          </a>
          <a href="#fotos" onClick={close}>
            Fotos
          </a>
          <a
            className="button button--gold"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Entre em contato
          </a>
        </div>
      </nav>
    </header>
  );
}
