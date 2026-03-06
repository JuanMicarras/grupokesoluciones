import { CLIENTS, CONTACTS_LINKS } from "@/constants";
import BrandsMarquee from "./components/BrandsMarquee";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header id="top" className="hero">
        <div className="container heroInner">
          <div className="heroText">
            <p className="kicker">Grupo KeSoluciones</p>
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
              {/* ideal: que abra WhatsApp */}
              <a
                className="btnPrimary"
                href="https://wa.me/573177788997?text=Hola,%20quisiera%20cotizar%20servicios/repuestos."
                target="_blank"
                rel="noreferrer"
              >
                Cotiza por WhatsApp
              </a>

              <a className="btnGhost" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>

          <div className="heroCard" aria-label="Marca">
            <img
              className="logoImg"
              src="/img/Logo_principal.png"
              alt="Grupo KeSoluciones"
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
              <article className="card">
                <div className="cardImg">
                  <Image
                    src="/img/servicios/planta.jpeg"
                    alt="Venta de plantas eléctricas"
                    width={800}
                    height={500}
                  />
                </div>
                <h3>Venta de plantas eléctricas</h3>
                <p>Suministro de equipos según su necesidad y presupuesto.</p>
              </article>

              <article className="card">
                <div className="cardImg">
                  <Image
                    src="/img/servicios/montaje_planta.jpeg"
                    alt="Montaje y puesta en marcha"
                    width={800}
                    height={500}
                  />
                </div>
                <h3>Montaje y puesta en marcha</h3>
                <p>
                  Instalación, pruebas y arranque seguro de su planta eléctrica.
                </p>
              </article>

              <article className="card">
                <div className="cardImg">
                  <Image
                    src="/img/servicios/preventivo.jpeg"
                    alt="Mantenimiento preventivo"
                    width={800}
                    height={500}
                  />
                </div>
                <h3>Mantenimiento preventivo</h3>
                <p>
                  Rutinas programadas para evitar fallas y prolongar vida útil.
                </p>
              </article>

              <article className="card">
                <div className="cardImg">
                  <Image
                    src="/img/servicios/mantenimiento correctivo.png"
                    alt="Mantenimiento correctivo"
                    width={800}
                    height={500}
                  />
                </div>
                <h3>Mantenimiento correctivo</h3>
                <p>
                  Diagnóstico y reparación para restablecer operación confiable.
                </p>
              </article>

              <article className="card">
                <div className="cardImg">
                  <Image
                    src="/img/servicios/mantenimiento.jpeg"
                    alt="Contratos de mantenimiento"
                    width={800}
                    height={500}
                  />
                </div>
                <h3>Contratos de mantenimiento</h3>
                <p>
                  Planes con visitas mensuales, bimestrales con atención
                  prioritaria.
                </p>
              </article>
              <article className="card">
                <div className="cardImg">
                  <Image
                    src="/img/servicios/filtros.jpeg"
                    alt="Venta de insumos"
                    width={800}
                    height={500}
                  />
                </div>
                <h3>Venta de insumos </h3>
                <p>
                  Suministro de aceites y filtros compatibles con la marca y
                  modelo del equipo.
                </p>
              </article>

              <article className="card">
                <div className="cardImg">
                  <Image
                    src="/img/servicios/repuestos.jpeg"
                    alt="Venta de repuestos "
                    width={800}
                    height={500}
                  />
                </div>
                <h3>Venta de repuestos</h3>
                <p>
                  Repuestos confiables para mantener el desempeño del equipo.
                </p>
              </article>

              <article className="card">
                <div className="cardImg">
                  <Image
                    src="/img/servicios/transferencia.jpg"
                    alt="Transferencias automáticas (ATS)"
                    width={800}
                    height={500}
                  />
                </div>
                <h3>Transferencias automáticas (ATS)</h3>
                <p>Automatización para respaldo eléctrico rápido y seguro.</p>
              </article>

              <article className="card">
                <div className="cardImg">
                  <Image
                    src="/img/servicios/acometida.jpeg"
                    alt="Acometidas eléctricas: suministro e instalación segura"
                    width={800}
                    height={500}
                  />
                </div>
                <h3>Acometidas eléctricas</h3>
                <p>
                  Seguras y normativas, cumpliendo RETIE y estándares exigidos
                  en Colombia.
                </p>
              </article>

              <article className="card">
                <div className="cardImg">
                  <Image
                    src="/img/servicios/subestacion.jpeg"
                    alt="Mantenimiento de subestaciones eléctricas"
                    width={800}
                    height={500}
                  />
                </div>
                <h3>Mantenimiento de subestaciones eléctricas</h3>
                <p>
                  Inspección, pruebas y mantenimiento para operación estable.
                </p>
              </article>

              <article className="card">
                <div className="cardImg">
                  <Image
                    src="/img/servicios/sincronismo.png"
                    alt="Sistemas de sincronismo para múltiples generadores"
                    width={800}
                    height={500}
                  />
                </div>
                <h3>Sistemas de sincronismo</h3>
                <p>
                  Sincronización de múltiples generadores para cargas mayores.
                </p>
              </article>
            </div>

            {/* ✅ Sub-sección: Servicios Complementarios */}
            <div className="subSection">
              <h3 className="subTitle">Servicios Complementarios</h3>

              <div className="grid3">
                <article className="card">
                  <div className="cardImg">
                    <Image
                      src="/img/servicios/insonorizacion.jpeg"
                      alt="Insonorización de plantas y cuartos eléctricos"
                      width={800}
                      height={500}
                    />
                  </div>
                  <h4>Insonorización de plantas y cuartos eléctricos</h4>
                  <p>Reducción de ruido con soluciones profesionales.</p>
                </article>

                <article className="card">
                  <div className="cardImg">
                    <Image
                      src="/img/servicios/tuberia_escape.jpeg"
                      alt="Suministro e instalación de ductos y tuberías de escape"
                      width={800}
                      height={500}
                    />
                  </div>
                  <h4>
                    Suministro e instalación de ductos y tuberías de escape
                  </h4>
                  <p>
                    Sistemas diseñados para cumplir normas ambientales y de
                    seguridad.
                  </p>
                </article>

                <article className="card">
                  <div className="cardImg">
                    <Image
                      src="/img/servicios/tanque1.png"
                      alt="Tanques y sistemas de combustible"
                      width={800}
                      height={500}
                    />
                  </div>
                  <h4>Tanques y sistemas de combustible</h4>
                  <p>
                    Instalación de tanques, tuberías de llenado y spill
                    containers.
                  </p>
                </article>
              </div>
            </div>

            {/* ✅ Sub-sección: Servicios de Consultoría */}
            <div className="subSection">
              <h3 className="subTitle">Servicios de Consultoría</h3>

              <div className="grid3">
                <article className="card">
                  <div className="cardImg">
                    <Image
                      src="/img/servicios/asesoria_tecnica.png"
                      alt="Asesoría técnica especializada"
                      width={800}
                      height={500}
                    />
                  </div>
                  <h4>Asesoría técnica especializada</h4>
                  <p>
                    Definimos la capacidad adecuada de su planta y la óptima
                    ubicación del equipo.
                  </p>
                </article>

                <article className="card">
                  <div className="cardImg">
                    <Image
                      src="/img/servicios/capacitacion.png"
                      alt="Capacitación a su personal"
                      width={800}
                      height={500}
                    />
                  </div>
                  <h4>Capacitación a su personal</h4>
                  <p>
                    Entrenamos a su equipo en operación básica, seguridad y
                    primeros diagnósticos, asegurando un uso correcto y
                    confiable de las plantas eléctricas.
                  </p>
                </article>
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
              <h2>¿Por qué elegir Grupo KeSoluciones?</h2>
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
                {/* <p className="value">+57 300 644 7179</p> */}
                <a href="tel:+573006447179">300 644 7179</a>
              </div>
              <div className="infoCard">
                <p className="label">WhatsApp</p>
                <p className="value">+57 317 778 8997</p>
              </div>
              <div className="infoCard">
                <p className="label">Correo</p>
                <a href="mailto:info@grupokesoluciones.com">info@grupokesoluciones.com</a>
                {/* <p className="value">info@grupokesoluciones.com</p> */}
              </div>
            </div>

            <div className="centerRow">
              <a
                className="btnDark"
                href={CONTACTS_LINKS.whatsapp.url}
                target="_blank"
                rel="noreferrer"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
