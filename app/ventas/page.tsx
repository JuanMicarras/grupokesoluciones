import React from "react";
import "./ventas.css";
import CTA from "@/components/CTA";
import { MOTORS_VENTAS, ALTERNATORS_VENTAS } from "@/constants";
import Image from "next/image";

export default function VentasPage() {
  return (
    <main className="ventas-page">
     
      {/* HERO */}
      <header className="ventas-hero">
        <div className="hero-content">
          <h1>Venta de Plantas Eléctricas en Barranquilla</h1>
          <p>
            En Grupo KESoluciones ofrecemos suministro e instalación de
            plantas eléctricas diesel para garantizar respaldo energético
            confiable en empresas, edificios, hoteles e industrias en
            Barranquilla y la región Caribe.
          </p>
          
        </div>
        <div className="heroCard" aria-label="Marca">
                    <Image
                      className="logoImg"
                      src="/img/Logo_principal.png"
                      alt="Grupo KESoluciones"
                      width={20}
                      height={20}
                    />
                    <p className="heroCardText">
                      Continuidad operativa, atención técnica confiable y soluciones a
                      la medida.
                    </p>
                  </div>
      </header>

      {/* INTRO */}
      <section className="ventas-content">
        <div className="ventas-info">
          <h2>Suministro de Plantas Eléctricas</h2>
          <p>
            Ofrecemos soluciones completas de generación eléctrica diseñadas
            para garantizar la continuidad del servicio ante cortes de energía.
            Suministramos plantas eléctricas diesel de alto desempeño utilizadas
            en aplicaciones comerciales e industriales.
          </p>

          <ul className="ventas-benefits">
            <li>✅ Plantas eléctricas desde <strong>25 kW hasta 3500 kW</strong></li>
            <li>✅ Equipos abiertos o insonorizados</li>
            <li>✅ Sistemas de operación <strong>Standby o Prime</strong></li>
            <li>✅ Integración con <strong>transferencia automática (ATS)</strong></li>
            <li>✅ Equipos de alta confiabilidad y eficiencia energética</li>
          </ul>
        </div>

        <div className="ventas-brands">
          <h2>Componentes de Calidad Mundial</h2>
          <p>
            Nuestras plantas eléctricas están ensambladas con los componentes más robustos 
            y reconocidos del mercado, garantizando durabilidad y eficiencia en su operación.
          </p>
          
          {/* SECCIÓN DE MOTORES */}
          <div className="brands-category">
            <h3>Motores</h3>
            <div className="brandsGrid">
              {MOTORS_VENTAS.map((brand) => (
                <div key={brand.name} className="brandItem">
                  <Image
                    src={brand.src}
                    alt={`Motor para planta eléctrica ${brand.name}`}
                    width={120}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* SECCIÓN DE ALTERNADORES */}
          <div className="brands-category">
            <h3>Alternadores</h3>
            <div className="brandsGrid">
              {ALTERNATORS_VENTAS.map((brand) => (
                <div key={brand.name} className="brandItem">
                  <Image
                    src={brand.src}
                    alt={`Alternador para planta eléctrica ${brand.name}`}
                    width={120}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APLICACIONES */}
      <section className="ventas-aplicaciones">
        <h2>Aplicaciones de las Plantas Eléctricas</h2>
        <p>
          Nuestras soluciones de respaldo energético son utilizadas en diferentes
          sectores que requieren continuidad operativa ante fallas del suministro eléctrico.
        </p>

        <ul className="ventas-list">
          <li>Edificios residenciales</li>
          <li>Centros comerciales</li>
          <li>Hoteles</li>
          <li>Clínicas y hospitales</li>
          <li>Empresas industriales</li>
          <li>Oficinas corporativas</li>
        </ul>
      </section>

      {/* SERVICIOS INCLUIDOS */}
      <section className="ventas-servicios">
        <h2>Servicios Incluidos en el Suministro</h2>
        <p>
          En Grupo KESoluciones ofrecemos una solución completa que incluye
          asesoría técnica, suministro del equipo e instalación profesional.
        </p>

        <ul className="ventas-list">
          <li>Asesoría técnica para dimensionamiento de planta eléctrica</li>
          <li>Suministro del equipo</li>
          <li>Transporte y montaje</li>
          <li>Instalación eléctrica y mecánica</li>
          <li>Instalación de transferencia automática ATS</li>
          <li>Puesta en marcha</li>
          <li>Pruebas de operación bajo carga</li>
        </ul>
      </section>

      {/* COBERTURA */}
      <section className="ventas-cobertura">
        <h2>Cobertura en la Región Caribe</h2>
        <p>
          Prestamos servicio de suministro e instalación de plantas eléctricas en
          Barranquilla, Cartagena, Santa Marta, Valledupar y otras ciudades de la
          Costa Caribe, brindando soluciones de generación eléctrica confiables
          para empresas y proyectos comerciales.
        </p>
      </section>

      {/* FAQ */}
      <section className="ventas-faq">
        <h2>Preguntas Frecuentes sobre Plantas Eléctricas</h2>

        <div className="faq-item">
          <h3>¿Qué capacidad de planta eléctrica necesito?</h3>
          <p>
            La capacidad depende del consumo eléctrico de la instalación.
            Nuestro equipo técnico realiza un análisis de carga para determinar
            la potencia adecuada del generador.
          </p>
        </div>

        <div className="faq-item">
          <h3>¿Cuánto cuesta una planta eléctrica?</h3>
          <p>
            El costo depende de la potencia del equipo, la marca, el tipo de
            cabina, el sistema de transferencia automática y las condiciones
            de instalación.
          </p>
        </div>

        <div className="faq-item">
          <h3>¿Las plantas eléctricas requieren mantenimiento?</h3>
          <p>
            Sí. Para garantizar su confiabilidad es recomendable realizar
            mantenimientos preventivos periódicos que incluyan revisión del
            motor, alternador y sistema de control.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="¿Necesita una planta eléctrica para su empresa o edificio?"
        text="Comuníquese con nosotros vía WhatsApp y reciba asesoría técnica para seleccionar la planta eléctrica adecuada según su consumo y tipo de instalación."
        buttonText="Solicitar Cotización"
        href="https://wa.me/573177788997?text=Hola,%20estoy%20interesado%20en%20comprar%20una%20planta%20eléctrica%20y%20quisiera%20asesoría."
      />

    </main>
  );
}