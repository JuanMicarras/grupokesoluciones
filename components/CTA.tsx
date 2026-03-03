// components/CTA.tsx
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
