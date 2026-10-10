"use client";
import Link from "next/link";
import { CONTACTS_LINKS } from "@/constants";
import TrackedWhatsAppLink from "./TrackedWhatsAppLink";

type CTAProps = {
  title?: string;
  text?: string;
  buttonText?: string;
  href?: string;
  variant?: "primary" | "ghost" | "dark" | "green";
};

export default function CTA({
  title = "¿Necesitas ayuda con tu planta eléctrica?",
  text = "Cotiza mantenimiento, repuestos o una solución a la medida con nuestro equipo técnico.",
  buttonText = "Cotiza por WhatsApp",
  href = CONTACTS_LINKS.whatsapp.url,
  variant = "primary",
}: CTAProps) {
  
  const isWhatsApp = href.includes("wa.me") || href.includes("whatsapp.com") || href.includes("api.whatsapp.com");
  const isExternal = href.startsWith("http");
  const variantClasses = {
    primary: "btnPrimary",
    ghost: "btnGhost",
    dark: "btnDark", // Llama a tu variable --dark definida en globals.css
    green: "btnGreen", // Llama a tu variable --green definida en globals.css
  };
  const btnClass = variantClasses[variant] || "btnPrimary";

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
      
      <div className="ctaBoxInner flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="ctaTitle">{title}</h3>
          <p className="ctaText">{text}</p>
        </div>

        {isWhatsApp ? (
          /* Botón con el rastreo de Google Ads */
          <TrackedWhatsAppLink className={btnClass} href={href}>
            {buttonText}
          </TrackedWhatsAppLink>
        ) : isExternal ? (
          /* Botón externo genérico (sin rastreo) */
          <a className={btnClass} href={href} target="_blank" rel="noreferrer">
            {buttonText}
          </a>
        ) : (
          /* Botón interno normal */
          <Link className={btnClass} href={href}>
            {buttonText}
          </Link>
        )}
      </div>
    </aside>
  );
}