# Documento Maestro de Contexto: Grupo KE Soluciones
Este documento contiene la estructura base, estilos y componentes principales del proyecto frontend (Next.js con App Router, TypeScript y CSS) de la empresa Grupo KE Soluciones. Utiliza este contexto para mantener la coherencia en el diseño, las importaciones y la arquitectura al generar nuevo código.

---

## Archivo: `constants/index.ts`
Propósito: Almacena los datos estáticos reutilizables en toda la página (clientes, marcas y enlaces de contacto).

\`\`\`typescript
export const CLIENTS = [
  "juliao", "country", "clinica", "green", "jimenez", 
  "porto rosso", "bruxxel", "torredecadiz", "clubtower2",
];

export const BRANDS = [
  "cummins", "perkins", "cat", "doosan", "jhondeere", 
  "generac", "kohler", "leroy", "stamford", "marathon", 
  "deepsea", "comap", "smartgen",
];

export const CONTACTS_LINKS = {
  whatsapp: {
    label: "WhatsApp",
    value: "+57 300 644 7179",
    url: "https://api.whatsapp.com/send?phone=573006447179&text=Vengo%20desde%20el%20website",
  },
  email: {
    label: "info@grupokes.com",
    value: "mailto:info@grupokes.com",
  },
  phone: {
    label: "300 644 7179",
    value: "tel:+573006447179",
  },
} as const;
\`\`\`

---

## Archivo: `components/CTA.tsx`
Propósito: Componente reutilizable para llamados a la acción (Call to Action). Soporta enlaces internos y externos (como WhatsApp).

\`\`\`tsx
import Link from "next/link";

type CTAProps = {
  title?: string;
  text?: string;
  buttonText?: string;
  href?: string;
  variant?: "primary" | "ghost";
};

export default function CTA({
  title = "¿Necesitas ayuda con tu planta eléctrica?",
  text = "Cotiza mantenimiento, repuestos o una solución a la medida con nuestro equipo técnico.",
  buttonText = "Cotiza por WhatsApp",
  href = "https://wa.me/573006447179?text=Hola,%20quisiera%20cotizar%20servicios%20para%20plantas%20eléctricas.",
  variant = "primary",
}: CTAProps) {
  const btnClass = variant === "primary" ? "btnPrimary" : "btnGhost";
  const isExternal = href.startsWith("http");

  return (
    <aside className="ctaBox" role="complementary" aria-label="Llamado a la acción">
      <div className="ctaBoxInner">
        <div>
          <h3 className="ctaTitle">{title}</h3>
          <p className="ctaText">{text}</p>
        </div>

        {isExternal ? (
          <a className={btnClass} href={href} target="_blank" rel="noreferrer">
            {buttonText}
          </a>
        ) : (
          <Link className={btnClass} href={href}>
            {buttonText}
          </Link>
        )}
      </div>
    </aside>
  );
}
\`\`\`

---

## Archivo: `app/layout.tsx`
Propósito: Layout principal de Next.js. Contiene la configuración de fuentes, metadatos SEO, Schema de LocalBusiness y envuelve la aplicación con el Navbar y el Footer.

\`\`\`tsx
import Footer from "../components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WaFloatButton from "../components/WaFloatButton";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Grupo KeSoluciones | Plantas eléctricas, mantenimiento y consultoría",
  description: "Especialistas en venta, instalación, mantenimiento y consultoría de plantas eléctricas. Servicios industriales, comerciales y residenciales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={\`\${geistSans.variable} \${geistMono.variable} antialiased\`}>
        <Navbar />
        {children}
        <Footer />
        <WaFloatButton />
      </body>
    </html>
  );
}
\`\`\`

---

## Archivo: `app/globals.css` (Extracto de Variables)
Propósito: Define la paleta de colores corporativos y las variables principales de la interfaz.

\`\`\`css
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@600;700&display=swap");

:root {
  --dark: #0c1f31;
  --blue: #67acdb;
  --accent-dark: #3795d3;
  --tan: #f1efe7;
  --text: #0c1f31;
  --white: #ffffff;
  --muted: rgba(12, 31, 49, 0.72);
  --radius: 18px;
  --nav-h: 68px;
  --bg: #f5f4f2;
  --ink: #1a1f2e;
  --surface: rgba(241, 239, 231, 0.72);
  --surface-scrolled: rgba(241, 239, 231, 0.82);
  --border: rgba(26, 31, 46, 0.1);
  --shadow: 0 1px 0 var(--border), 0 6px 32px rgba(0, 0, 0, 0.06);
}

.btnPrimary {
  background: var(--blue);
  color: var(--white);
}

.btnDark {
  background: var(--dark);
  color: var(--white);
}
\`\`\`

---

## Archivo: `components/Navbar/index.tsx`
Propósito: Barra de navegación principal. Incluye manejo de estado para el scroll y el menú hamburguesa, además de usar la constante de contactos.

\`\`\`tsx
"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "../icons";
import { CONTACTS_LINKS } from "@/constants";

const navLinks = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Blog", href: "/blog" },
  { label: "Por qué elegirnos", href: "/#porque" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={[styles.navbar, scrolled ? styles.scrolled : styles.blurred].join(" ")}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Grupo KeSoluciones</span>
            <span className={styles.logoTagline}>Mantenimiento</span>
          </div>
        </Link>
        <nav>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
\`\`\`