"use client";
import Link from "next/link";
import { CONTACTS_LINKS } from "@/constants";
import { sendGAEvent } from '@next/third-parties/google';

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
  href = CONTACTS_LINKS.whatsapp.url,
  variant = "primary",
}: CTAProps) {
  const btnClass = variant === "primary" ? "btnPrimary" : "btnGhost";
  const isExternal = href.startsWith("http");

  // Función que avisa a Google Ads de la conversión con los datos exactos que te dieron
  const registrarConversion = () => {
    // Invocación nativa a gtag para asegurar compatibilidad 100% con Google Ads
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18465905677/kEPKCNeUp5gdEI24neVE',
        'value': 1.0,
        'currency': 'COP'
      });
    }
  };

  return (
    <aside className="ctaBox" role="complementary" aria-label="Llamado a la acción">
      {/* 
        1. flex-col: En móvil apila los elementos verticalmente.
        2. md:flex-row: En escritorio los pone uno al lado del otro.
        3. gap-6: Espacio entre el texto y el botón.
      */}
      <div className="ctaBoxInner flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        {/* Contenedor del texto: Centrado en móvil, izquierda en escritorio */}
        <div className="text-center md:text-left">
          <h3 className="ctaTitle">{title}</h3>
          <p className="ctaText">{text}</p>
        </div>

        {/* 
          Contenedor del botón: 
          - w-full: Toma todo el ancho en móvil para permitir el centrado.
          - justify-center: Centra el botón en móvil.
          - md:justify-end: Empuja el botón a la derecha en escritorio.
          - shrink-0: Evita que el botón se aplaste si el texto es muy largo.
        */}
        <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0">
          {isExternal ? (
            <a className={btnClass} href={href} target="_blank" rel="noreferrer" onClick={registrarConversion}>
              {buttonText}
            </a>
          ) : (
            <Link className={btnClass} href={href} onClick={registrarConversion}>
              {buttonText}
            </Link>
          )}
        </div>
        
      </div>
    </aside>
  );
}