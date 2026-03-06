"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  // Cierra el menú si cambias el tamaño (ej: giras el cel o pasas a desktop)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="nav">
      <div className="container navInner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          Grupo KeSoluciones
        </Link>

        <button
          className="burger"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <div className={`navLinks ${open ? "open" : ""}`}>
          <a href="/#servicios" onClick={handleClose}>
            Servicios
          </a>
          <Link className="navLink" href="/blog">
            Blog
          </Link>
          <a href="/#porque" onClick={handleClose}>
            Por qué elegirnos
          </a>
          <Link href="/#contacto" onClick={handleClose}>
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
