import Link from "next/link";
import { CONTACTS_LINKS } from "@/constants";

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
            <a className={btnClass} href={href} target="_blank" rel="noreferrer">
              {buttonText}
            </a>
          ) : (
            <Link className={btnClass} href={href}>
              {buttonText}
            </Link>
          )}
        </div>
        
      </div>
    </aside>
  );
}