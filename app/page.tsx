import { CLIENTS, CONTACTS_LINKS } from "@/constants";
import BrandsMarquee from "../components/BrandsMarquee";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import StatsBar from "../components/StatsBar";
import { AnimatedHero } from "@/components/ui/animated-hero";
import {
  IconBolt,
  IconWrench,
  IconFactory,
  IconStar,
  IconHandshake,
  IconPhoneCall,
  IconShield,
  IconTarget,
  IconClipboard,
  IconRefresh,
} from "../components/icons/SectionIcons";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <AnimatedHero />

      <main>
        {/* ─── Clientes & Marcas (Reubicados debajo del hero) ─── */}
        <section className="border-b border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-[#070b18]">
          <div className="container">
            <ScrollReveal>
              <div className="mb-6 text-center">
                <p className="font-medium text-gray-500 text-sm uppercase tracking-wider dark:text-gray-400">
                  <IconHandshake size={14} className="mr-2 inline-block -translate-y-[2px]" />
                  Clientes que confían en nosotros
                </p>
              </div>
              <BrandsMarquee images={CLIENTS} options="clients" />
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SERVICIOS PRINCIPALES
            ═══════════════════════════════════════════ */}
        <section id="servicios" className="section">
          <div className="container">
            <ScrollReveal>
              <div className="sectionHeader">
                <span className="sectionBadge">
                  <IconWrench size={14} />
                  Nuestros servicios
                </span>
                <h2>Soluciones integrales para plantas eléctricas</h2>
                <p>
                  Desde mantenimiento preventivo hasta instalación completa,
                  cubrimos todas las necesidades de su sistema de respaldo
                  eléctrico.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid3">
              {[
                {
                  img: "/img/servicios/planta.jpeg",
                  alt: "Venta de plantas eléctricas",
                  title: "Venta de plantas eléctricas",
                  desc: "Suministro de equipos según su necesidad y presupuesto.",
                },
                {
                  img: "/img/servicios/montaje_planta.jpeg",
                  alt: "Montaje y puesta en marcha",
                  title: "Montaje y puesta en marcha",
                  desc: "Instalación, pruebas y arranque seguro de su planta eléctrica.",
                },
                {
                  img: "/img/servicios/preventivo.jpeg",
                  alt: "Mantenimiento preventivo",
                  title: "Mantenimiento preventivo",
                  desc: "Rutinas programadas para evitar fallas y prolongar vida útil.",
                },
                {
                  img: "/img/servicios/mantenimiento correctivo.jpg",
                  alt: "Mantenimiento correctivo",
                  title: "Mantenimiento correctivo",
                  desc: "Diagnóstico y reparación para restablecer operación confiable.",
                },
                {
                  img: "/img/servicios/mantenimiento.jpeg",
                  alt: "Contratos de mantenimiento",
                  title: "Contratos de mantenimiento",
                  desc: "Planes con visitas mensuales o bimestrales con atención prioritaria.",
                },
                {
                  img: "/img/servicios/filtros.jpeg",
                  alt: "Venta de insumos",
                  title: "Venta de insumos",
                  desc: "Aceites y filtros compatibles con la marca y modelo del equipo.",
                },
                {
                  img: "/img/servicios/repuestos.jpeg",
                  alt: "Venta de repuestos",
                  title: "Venta de repuestos",
                  desc: "Repuestos confiables para mantener el desempeño del equipo.",
                },
                {
                  img: "/img/servicios/transferencia.jpg",
                  alt: "Transferencias automáticas (ATS)",
                  title: "Transferencias automáticas (ATS)",
                  desc: "Automatización para respaldo eléctrico rápido y seguro.",
                },
                {
                  img: "/img/servicios/acometida.jpeg",
                  alt: "Acometidas eléctricas",
                  title: "Acometidas eléctricas",
                  desc: "Seguras y normativas, cumpliendo RETIE y estándares exigidos.",
                },
                {
                  img: "/img/servicios/subestacion.jpeg",
                  alt: "Mantenimiento de subestaciones",
                  title: "Mantenimiento de subestaciones",
                  desc: "Inspección, pruebas y mantenimiento para operación estable.",
                },
                {
                  img: "/img/servicios/sincronismo.png",
                  alt: "Sistemas de sincronismo",
                  title: "Sistemas de sincronismo",
                  desc: "Sincronización de múltiples generadores para cargas mayores.",
                },
              ].map((service, i) => (
                <ScrollReveal key={service.title} delay={i % 3 * 100}>
                  <article className="card">
                    <div className="cardImg">
                      <Image
                        src={service.img}
                        alt={service.alt}
                        width={800}
                        height={500}
                        loading="lazy"
                      />
                    </div>
                    <div className="cardBody">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {/* ─── Servicios Complementarios ─── */}
            <div className="subSection">
              <ScrollReveal>
                <h3 className="subTitle">Servicios Complementarios</h3>
              </ScrollReveal>

              <div className="grid3">
                {[
                  {
                    img: "/img/servicios/insonorizacion.jpeg",
                    alt: "Insonorización",
                    title: "Insonorización de plantas y cuartos eléctricos",
                    desc: "Reducción de ruido con soluciones profesionales.",
                  },
                  {
                    img: "/img/servicios/tuberia_escape.jpeg",
                    alt: "Ductos y tuberías de escape",
                    title: "Ductos y tuberías de escape",
                    desc: "Sistemas diseñados para cumplir normas ambientales y de seguridad.",
                  },
                  {
                    img: "/img/servicios/tanque1.png",
                    alt: "Tanques y sistemas de combustible",
                    title: "Tanques y sistemas de combustible",
                    desc: "Instalación de tanques, tuberías de llenado y spill containers.",
                  },
                ].map((service, i) => (
                  <ScrollReveal key={service.title} delay={i * 100}>
                    <article className="card">
                      <div className="cardImg">
                        <Image
                          src={service.img}
                          alt={service.alt}
                          width={800}
                          height={500}
                          loading="lazy"
                        />
                      </div>
                      <div className="cardBody">
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* ─── Servicios de Consultoría ─── */}
            <div className="subSection">
              <ScrollReveal>
                <h3 className="subTitle">Servicios de Consultoría</h3>
              </ScrollReveal>

              <div className="grid3">
                {[
                  {
                    img: "/img/servicios/asesoria_tecnica.jpg",
                    alt: "Asesoría técnica",
                    title: "Asesoría técnica especializada",
                    desc: "Definimos la capacidad adecuada de su planta y la óptima ubicación del equipo.",
                  },
                  {
                    img: "/img/servicios/capacitacion.jpg",
                    alt: "Capacitación",
                    title: "Capacitación a su personal",
                    desc: "Entrenamos a su equipo en operación, seguridad y primeros diagnósticos.",
                  },
                ].map((service, i) => (
                  <ScrollReveal key={service.title} delay={i * 100}>
                    <article className="card">
                      <div className="cardImg">
                        <Image
                          src={service.img}
                          alt={service.alt}
                          width={800}
                          height={500}
                          loading="lazy"
                        />
                      </div>
                      <div className="cardBody">
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* (Marcas reubicadas al hero) */}
        {/* ═══════════════════════════════════════════
            POR QUÉ ELEGIRNOS
            ═══════════════════════════════════════════ */}
        <section id="porque" className="section sectionDark">
          <div className="container">
            <ScrollReveal>
              <div className="sectionHeader darkHeader">
                <span className="sectionBadge">
                  <IconStar size={14} />
                  Ventajas competitivas
                </span>
                <h2>¿Por qué elegir Grupo KeSoluciones?</h2>
                <p>
                  Entendemos la importancia de la continuidad operativa y
                  ofrecemos soluciones técnicas confiables, adaptadas a cada
                  necesidad.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid4">
              {[
                {
                  icon: <IconWrench size={22} />,
                  title: "Atención técnica especializada",
                  desc: "Personal capacitado para atender cada proyecto con criterio técnico y precisión.",
                },
                {
                  icon: <IconBolt size={22} />,
                  title: "Respuesta rápida y confiable",
                  desc: "Actuamos de forma oportuna para minimizar tiempos de inactividad.",
                },
                {
                  icon: <IconClipboard size={22} />,
                  title: "Planes a la medida",
                  desc: "Diseñamos soluciones adaptadas a las necesidades de cada cliente.",
                },
                {
                  icon: <IconRefresh size={22} />,
                  title: "Enfoque en continuidad operativa",
                  desc: "Trabajamos para garantizar el funcionamiento constante de sus equipos.",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 120}>
                  <div className="miniCard">
                    <div className="miniCardIcon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200}>
              <div className="centerRow">
                <a className="btnPrimary" href="#contacto">
                  Habla con un asesor
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── Marcas que soportamos ─── */}
        <section className="border-b border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-[#070b18]">
          <div className="container">
            <ScrollReveal>
              <div className="mb-6 text-center">
                <p className="font-medium text-gray-500 text-sm uppercase tracking-wider dark:text-gray-400">
                  <IconFactory size={14} className="mr-2 inline-block -translate-y-[2px]" />
                  Marcas que soportamos
                </p>
              </div>
              <BrandsMarquee />
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ENLACE AL BLOG
            ═══════════════════════════════════════════ */}
        <section className="section bg-gray-50 dark:bg-[#0a0f1e] border-y border-gray-200 dark:border-gray-800">
          <div className="container text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-light text-gray-900 md:text-4xl dark:text-white">
                Mantente al día con nuestro <span className="font-semibold text-blue-600 dark:text-blue-400">Blog</span>
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-gray-600 dark:text-gray-400">
                Descubre artículos, guías y consejos expertos sobre el mantenimiento, diagnóstico y reparación de plantas eléctricas.
              </p>
              <div className="flex w-full justify-center mt-6">
                <Link className="btnPrimary" href="/blog">
                  Visita nuestro Blog
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CONTACTO
            ═══════════════════════════════════════════ */}
        <section id="contacto" className="section sectionAlt">
          <div className="container">
            <ScrollReveal>
              <div className="sectionHeader">
                <span className="sectionBadge">
                  <IconPhoneCall size={14} />
                  Contáctanos
                </span>
                <h2>Estamos listos para ayudarte</h2>
                <p>
                  Asesórate con nuestro equipo técnico y encuentra la solución
                  que mejor se adapte a tus necesidades.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid3">
              {[
                { label: "Teléfono", value: "+57 300 644 7179" },
                { label: "WhatsApp", value: "+57 300 644 7179" },
                { label: "Correo", value: "info@grupokes.com" },
              ].map((info, i) => (
                <ScrollReveal key={info.label} delay={i * 100}>
                  <div className="infoCard">
                    <p className="label">{info.label}</p>
                    <p className="value">{info.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={300}>
              <div className="centerRow">
                <Link
                  className="btnPrimary"
                  href={CONTACTS_LINKS.whatsapp.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Escríbenos por WhatsApp
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
