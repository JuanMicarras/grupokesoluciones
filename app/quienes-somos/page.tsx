import Image from "next/image";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Quiénes Somos | Grupo KeSoluciones",
  description: "Conoce nuestra experiencia, misión y visión en el mantenimiento y soporte de plantas eléctricas en la Costa Caribe.",
};

// Pequeña constante local para los hitos, manteniendo el código limpio
const HITOS = [
  {
    anos: "14 Años",
    texto: "Experiencia con representante Cummins en Eje Cafetero y Suroccidente.",
  },
  {
    anos: "7 Años",
    texto: "Líder Cummins en Barranquilla. Reparación de motores de alta potencia.",
  },
  {
    anos: "4 Años",
    texto: "Gerente Nacional de Servicio. Operación posventa en todo el país.",
  },
];

export default function QuienesSomosPage() {
  return (
    <main className="pt-[var(--nav-h)]">
      {/* ─── 1. SECCIÓN: QUIÉNES SOMOS ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1160px] mx-auto px-4 md:px-7">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-['Barlow_Condensed',sans-serif] font-bold text-[var(--dark)] uppercase mb-6 border-l-4 border-[var(--blue)] pl-4">
                ¿Quiénes Somos?
              </h1>
              <p className="text-[var(--muted)] text-lg mb-4 leading-relaxed">
                <strong>KESoluciones</strong> es una empresa especializada en la venta, mantenimiento preventivo y correctivo de plantas eléctricas, reparación de motores diésel de aplicación industrial, mantenimiento a subestaciones, venta de repuestos e insumos y soluciones integrales en energía de respaldo.
              </p>
            </div>
            <div className="bg-[var(--bg)] p-8 rounded-xl border-l-4 border-[var(--dark)]">
              <p className="text-xl text-[var(--ink)] font-medium italic">
                "Brindamos atención técnica eficiente, confiable y con altos estándares de calidad."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. SECCIÓN: NUESTRA EXPERIENCIA ─── */}
      <section className="py-16 md:py-24 bg-[var(--bg)]">
        <div className="container max-w-[1160px] mx-auto px-4 md:px-7">
          <h2 className="text-3xl md:text-4xl font-['Barlow_Condensed',sans-serif] font-bold text-[var(--dark)] uppercase mb-12 text-center">
            Nuestra Experiencia Nos Respalda
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/img/plantas-instaladas.jpeg" 
                alt="Plantas eléctricas instaladas por Grupo KESoluciones" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--ink)] mb-4">Ing. Luis Fernando Carrasquilla</h3>
              <p className="text-[var(--muted)] text-lg mb-6 leading-relaxed">
                En Grupo KESoluciones contamos con el respaldo y liderazgo del Ingeniero Luis Fernando Carrasquilla, profesional con más de <strong>25 años de trayectoria</strong> en el sector energético.
              </p>
              <p className="text-[var(--muted)] text-lg leading-relaxed">
                Su experiencia técnica y directiva en marcas de clase mundial como <strong>Cummins</strong> garantiza el éxito de cada intervención técnica en Grupo KESoluciones.
              </p>
            </div>
          </div>

          {/* HITOS PROFESIONALES */}
          <div className="grid md:grid-cols-3 gap-6">
            {HITOS.map((hito, index) => (
              <article key={index} className="bg-white p-8 rounded-xl shadow-sm text-center border-t-4 border-[var(--blue)]">
                <h4 className="text-3xl font-bold text-[var(--dark)] mb-4">{hito.anos}</h4>
                <p className="text-[var(--muted)]">{hito.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. SECCIÓN: MISIÓN Y VISIÓN ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-[1160px] mx-auto px-4 md:px-7">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Foto del Ingeniero Luis */}
            <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0 rounded-full overflow-hidden shadow-xl border-4 border-white">
        
              <Image 
                src="/img/luis-carrasquilla.png" 
                alt="Ingeniero Luis Fernando Carrasquilla" 
                fill
                className="object-cover"
              />
            </div>

            {/* Tarjetas de Misión y Visión */}
            <div className="grid sm:grid-cols-2 gap-6 w-full">
              <div className="bg-[var(--dark)] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 font-['Barlow_Condensed',sans-serif] uppercase tracking-wide">Misión</h3>
                <p className="text-white/80 leading-relaxed">
                  Brindar soluciones integrales en mantenimiento, instalación y optimización de plantas eléctricas, garantizando confiabilidad, eficiencia y continuidad operativa a nuestros clientes, con personal calificado y tecnología avanzada.
                </p>
              </div>
              <div className="bg-[var(--blue)] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 font-['Barlow_Condensed',sans-serif] uppercase tracking-wide">Visión</h3>
                <p className="text-white/90 leading-relaxed">
                  Ser la empresa líder en servicios para plantas eléctricas a nivel nacional, reconocida por nuestra excelencia, innovación y compromiso con la seguridad y sostenibilidad.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="pb-16 bg-white">
        <div className="container max-w-[1160px] mx-auto px-4 md:px-7">
          <CTA 
            title="¿Buscas un aliado estratégico con experiencia?"
            text="Confía el respaldo energético de tu empresa a especialistas con más de 25 años en el sector."
          />
        </div>
      </section>
    </main>
  );
}