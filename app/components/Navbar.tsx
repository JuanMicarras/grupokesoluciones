"use client";

import { useState } from "react";
import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/573177788997"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="container navInner">
        <a className="brand" href="#top" onClick={close}>
          Grupo KeSoluciones
        </a>

        <button
          className="burger"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navLinks ${open ? "open" : ""}`}>
          <a href="#servicios" onClick={close}>Servicios</a>
          <Link className="navLink" href="/blog">Blog</Link>
          <a href="#porque" onClick={close}>Por qué elegirnos</a>
          <a href="#contacto" onClick={close}>Contacto</a>
          <a className="navCta" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={close}>
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
