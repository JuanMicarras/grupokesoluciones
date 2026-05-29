import {
  CLIENTS,
  COMPLEMENTARY_SERVICES,
  CONSULTING_SERVICES,
  CONTACTS_LINKS,
  SERVICES,
} from "@/constants";
import BrandsMarquee from "../components/BrandsMarquee";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header id="top" className="hero">
        <div className="container heroInner">
          <div className="heroText">
            <p className="kicker">Grupo KESoluciones</p>
            <h1>
              Mantenimiento de plantas eléctricas 24/7 para empresas y propiedad
              horizontal
            </h1>

            <p className="lead">
              Mantenimiento preventivo y correctivo, diagnóstico y reparación de
              plantas eléctricas. Venta de repuestos y soporte técnico
              especializado.
            </p>

            <p className="seoText">
              Ejecutamos rutinas programadas, contratos de mantenimiento,
              montaje y puesta en marcha, Transferencias automáticas (ATS),
              subestaciones y sincronismo para sistemas de respaldo y grupos
              electrógenos. Cobertura en la Costa Caribe: Barranquilla,
              Cartagena, Santa Marta y otras ciudades de la región.
            </p>

            <div className="ctaRow">
              {/* Ideal: que abra WhatsApp utilizando nuestra constante */}
              <Link
                className="btnPrimary"
                href={CONTACTS_LINKS.whatsapp.url}
                target="_blank"
                rel="noreferrer"
              >
                Cotiza por WhatsApp
              </Link>

              <Link className="btnGhost" href="#servicios">
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="heroCard" aria-label="Marca">
            <Image
              className="logoImg"
              src="/img/Logo_principal.png"
              alt="Grupo KeSoluciones"
              width={20}
              height={20}
            />
            <p className="heroCardText">
              Continuidad operativa, atención técnica confiable y soluciones a
              la medida.
            </p>
          </div>
        </div>
      </header>

      <main>
        <section id="servicios" className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2>Servicios</h2>
              <p>
                Soluciones integrales para plantas eléctricas, instalación y
                soporte.
              </p>
            </div>

            {/* ✅ Servicios principales */}
            <div className="grid3">
              {SERVICES.map((servicio) => (
                <article key={servicio.id} className="card">
                  <div className="cardImg">
                    <Image
                      src={servicio.image}
                      alt={servicio.title}
                      width={800}
                      height={500}
                    />
                  </div>
                  <h3>{servicio.title}</h3>
                  <p>{servicio.description}</p>
                </article>
              ))}
            </div>

            {/* Servicios Complementarios */}
            <div className="subSection">
              <h3 className="subTitle">Servicios Complementarios</h3>
              <div className="grid3">
                {COMPLEMENTARY_SERVICES.map((service) => (
                  <article className="card" key={service.id}>
                    <div className="cardImg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={500}
                      />
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Servicios de Consultoría */}
            <div className="subSection">
              <h3 className="subTitle">Servicios de Consultoría</h3>
              <div className="grid3">
                {CONSULTING_SERVICES.map((service) => (
                  <article className="card" key={service.id}>
                    <div className="cardImg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={500}
                      />
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="marcas" className="section sectionAlt">
          <div className="container">
            <div className="sectionHeader">
              <h2>Marcas que atendemos</h2>
              <p>
                Contamos con experiencia técnica para atender equipos y
                componentes de las principales marcas del mercado.
              </p>
            </div>

            <BrandsMarquee />
          </div>
        </section>

        <section id="porque" className="section sectionDark">
          <div className="container">
            <div className="sectionHeader darkHeader">
              <h2>¿Por qué elegir Grupo KESoluciones?</h2>
              <p>
                Entendemos la importancia de la continuidad operativa y
                ofrecemos soluciones técnicas confiables, adaptadas a cada
                necesidad.
              </p>
            </div>

            <div className="grid4">
              <div className="miniCard">
                <h4>Atención técnica especializada</h4>
                <p>
                  Personal capacitado para atender cada proyecto con criterio
                  técnico y precisión.
                </p>
              </div>
              <div className="miniCard">
                <h4>Respuesta rápida y confiable</h4>
                <p>
                  Actuamos de forma oportuna para minimizar tiempos de
                  inactividad.
                </p>
              </div>
              <div className="miniCard">
                <h4>Planes a la medida</h4>
                <p>
                  Diseñamos soluciones adaptadas a las necesidades de cada
                  cliente.
                </p>
              </div>
              <div className="miniCard">
                <h4>Enfoque en continuidad operativa</h4>
                <p>
                  Trabajamos para garantizar el funcionamiento constante de sus
                  equipos.
                </p>
              </div>
            </div>

            <div className="centerRow">
              <a className="btnPrimary" href="#contacto">
                Habla con un asesor
              </a>
            </div>
          </div>
        </section>

        <section id="clientes" className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2>Clientes que confían en nosotros</h2>
              <p>
                Hemos acompañado a empresas de distintos sectores con soluciones
                confiables y a la medida.
              </p>
            </div>

            <BrandsMarquee images={CLIENTS} options="clients" />
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2>Contacto</h2>
              <p>
                Estamos listos para asesorarte y brindarte la solución que mejor
                se adapte a tus necesidades.
              </p>
            </div>

            <div className="grid3">
              <div className="infoCard">
                <p className="label">Teléfono</p>
                {/* Usamos el value (tel:...) para el href y el label para la vista */}
                <a href={CONTACTS_LINKS.phone.value}>
                  {CONTACTS_LINKS.phone.label}
                </a>
              </div>

              <div className="infoCard">
                <p className="label">WhatsApp</p>
                <p className="value">{CONTACTS_LINKS.whatsapp.value}</p>
              </div>

              <div className="infoCard">
                <p className="label">Correo</p>
                {/* Convertimos el correo en un enlace cliqueable para mejor UX */}
                <a className="value" href={CONTACTS_LINKS.email.value}>
                  {CONTACTS_LINKS.email.label}
                </a>
              </div>
            </div>

            <div className="centerRow">
              <Link
                className="btnDark"
                href={CONTACTS_LINKS.whatsapp.url}
                target="_blank"
                rel="noreferrer"
              >
                Escríbenos por WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
