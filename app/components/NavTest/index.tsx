"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

const NAV_LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/ventas", label: "Ventas" },
  { href: "/blog", label: "Blog" },
  { href: "/#porque", label: "Por qué elegirnos" },
  { href: "/#marcas", label: "Marcas" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea scroll cuando el menú está abierto
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => (document.body.style.overflow = "");
//   }, [open]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegación principal">
        <Link href="/" className={styles.brand} aria-label="Ir al inicio">
          <span className={styles.brandMark} />
          <span className={styles.brandText}>TuMarca</span>
        </Link>

        <div className={styles.desktopLinks}>
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${active ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className={styles.actions}>
          <Link href="/cotizar" className={styles.cta}>
            Cotizar
          </Link>

          <button
            type="button"
            className={styles.burger}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`${styles.burgerLine} ${open ? styles.l1 : ""}`} />
            <span className={`${styles.burgerLine} ${open ? styles.l2 : ""}`} />
            <span className={`${styles.burgerLine} ${open ? styles.l3 : ""}`} />
          </button>
        </div>
      </nav>

      {/* Overlay + Menú Mobile */}
      <div className={`${styles.overlay} ${open ? styles.show : ""}`}>
        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${open ? styles.showMenu : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Menú móvil"
        >
          <div className={styles.mobileHeader}>
            <span className={styles.mobileTitle}>Menú</span>
            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          <div className={styles.mobileLinks}>
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileLink} ${
                    active ? styles.mobileActive : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link href="/cotizar" className={styles.mobileCta}>
            Cotizar
          </Link>
        </div>

        {/* Clic fuera cierra */}
        <button
          className={styles.backdrop}
          aria-label="Cerrar menú (fondo)"
          onClick={() => setOpen(false)}
          type="button"
        />
      </div>
    </header>
  );
}
