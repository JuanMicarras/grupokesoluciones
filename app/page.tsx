import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar />


      <header id="top" className="hero">
        <div className="container heroInner">
          <div className="heroText">
            <p className="kicker">Grupo KeSoluciones</p>
            <h1>Mantenimiento y soluciones para plantas eléctricas</h1>
            <p className="lead">
              Especialistas en mantenimiento, montaje y venta de repuestos para sistemas de
              generación eléctrica en Colombia.
            </p>

            <div className="ctaRow">
              <a className="btnPrimary" href="#contacto">Cotiza por WhatsApp</a>
              <a className="btnGhost" href="#servicios">Ver servicios</a>
            </div>
          </div>

          <div className="heroCard" aria-label="Marca">
            <img className="logoImg" src="/img/Logo_principal.png" alt="Grupo KeSoluciones" />

            <p className="heroCardText">
              Continuidad operativa, atención técnica confiable y soluciones a la medida.
            </p>
          </div>
        </div>
      </header>

      <main>
        <section id="servicios" className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2>Nuestros servicios</h2>
              <p>
                Soluciones integrales para garantizar continuidad y confiabilidad en sus equipos.
              </p>
            </div>

            <div className="grid2">
              <article className="card">
                <h3>Servicios de Plantas Eléctricas</h3>
                <ul>
                  <li>Venta e instalación de plantas eléctricas</li>
                  <li>Montaje y puesta en marcha</li>
                  <li>Mantenimiento preventivo y correctivo</li>
                  <li>Contratos de mantenimiento a la medida</li>
                  <li>Venta de insumos y repuestos originales</li>
                </ul>
              </article>

              <article className="card">
                <h3>Servicios Eléctricos Especializados</h3>
                <ul>
                  <li>Sistemas de sincronismo para múltiples generadores</li>
                  <li>Transferencias automáticas (ATS)</li>
                  <li>Acometidas eléctricas: suministro e instalación segura</li>
                  <li>Mantenimiento de subestaciones eléctricas</li>
                </ul>
              </article>
            </div>

            <div className="centerRow">
              <a className="btnDark" href="#contacto">Solicitar cotización</a>
            </div>
          </div>
        </section>

        <section id="porque" className="section sectionDark">
          <div className="container">
            <div className="sectionHeader darkHeader">
              <h2>¿Por qué elegir Grupo KeSoluciones?</h2>
              <p>
                Entendemos la importancia de la continuidad operativa y ofrecemos soluciones
                técnicas confiables, adaptadas a cada necesidad.
              </p>
            </div>

            <div className="grid4">
              <div className="miniCard">
                <h4>Atención técnica especializada</h4>
                <p>Personal capacitado para atender cada proyecto con criterio técnico y precisión.</p>
              </div>
              <div className="miniCard">
                <h4>Respuesta rápida y confiable</h4>
                <p>Actuamos de forma oportuna para minimizar tiempos de inactividad.</p>
              </div>
              <div className="miniCard">
                <h4>Planes a la medida</h4>
                <p>Diseñamos soluciones adaptadas a las necesidades de cada cliente.</p>
              </div>
              <div className="miniCard">
                <h4>Enfoque en continuidad operativa</h4>
                <p>Trabajamos para garantizar el funcionamiento constante de sus equipos.</p>
              </div>
            </div>

            <div className="centerRow">
              <a className="btnPrimary" href="#contacto">Habla con un asesor</a>
            </div>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2>Contacto</h2>
              <p>
                Estamos listos para asesorarte y brindarte la solución que mejor se adapte a tus
                necesidades.
              </p>
            </div>

            <div className="grid3">
              <div className="infoCard">
                <p className="label">Teléfono</p>
                <p className="value">+57 300 644 7179</p>
              </div>
              <div className="infoCard">
                <p className="label">WhatsApp</p>
                <p className="value">+57 300 644 7179</p>
              </div>
              <div className="infoCard">
                <p className="label">Correo</p>
                <p className="value">info@grupokesoluciones.com</p>
              </div>
            </div>

            <div className="centerRow">
              {/* Cambia el número: 57 + número sin espacios */}
              <a className="btnDark" href="https://wa.me/573006447179" target="_blank" rel="noreferrer">
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <p>© {new Date().getFullYear()} Grupo KeSoluciones. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
