import Link from 'next/link';
import Image from 'next/image';

export default function Servicios() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* portada de servicios */}
      <section className="relative min-h-[300px] md:min-h-[400px] h-[40vh] md:h-[50vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('/img/empresa/batea2.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 md:space-y-4 mt-8 md:mt-0">
          <span className="block mb-1 md:mb-2 text-red-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Capacidades Operativas</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            Servicios Logísticos
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium">
            Acopio, valorización y adecuación de materiales metálicos con el más estricto cumplimiento normativo.
          </p>
        </div>
      </section>

      {/* logistica de bateas */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase leading-tight">
              Logística de Bateas y <span className="text-red-600 block">Ampli-Roll</span>
            </h2>
            <div className="w-12 h-1.5 bg-red-600"></div>
            <div className="space-y-4 lg:space-y-6 text-slate-600 text-base lg:text-lg leading-relaxed">
              <p>
                Nuestra operación en terreno se ejecuta directamente mediante nuestra alianza con <strong>Transportes Basualto Limitada</strong>. Contamos con una flota de camiones de modelos recientes equipados con sistemas hidráulicos Ampli-Roll autocargantes para maniobras de precisión y retiro de alto tonelaje.
              </p>
              <ul className="space-y-4 text-slate-700 font-medium">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0"></span>
                  <span>Bateas (Tolvas) adaptables a su espacio: <strong>3 m³, 8 m³, 10 m³ y 20 m³</strong>.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0"></span>
                  <span>Instalación y reposición directa en obras y faenas.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 shrink-0"></span>
                  <span>Pesaje exacto en nuestra propia romana de 60 toneladas.</span>
                </li>
              </ul>
              <p className="pl-6 border-l-2 border-red-600 font-medium italic text-slate-700">
                Ventaja de Valor: Evitamos la acumulación de despuntes, permitiendo a su empresa mantener un entorno limpio, accesible y seguro.
              </p>
            </div>
            <div className="pt-2 sm:pt-4">
              <Link href="/contacto" className="inline-flex justify-center items-center w-full sm:w-auto px-6 sm:px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold tracking-widest uppercase transition-all text-sm sm:text-base text-center">
                Solicitar Batea para mi Obra
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/5] w-full relative z-10 overflow-hidden bg-slate-100">
              <Image 
                src="/img/empresa/batea1_hd.jpg" 
                alt="Batea Ampli-roll" 
                fill
                className="object-cover transition-transform duration-700"
              />
            </div>
            {/* cuadrito de fondo */}
            <div className="absolute top-10 -right-10 w-2/3 h-full bg-slate-50 z-0"></div>
          </div>
        </div>
      </section>

      {/* info del camion */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square lg:aspect-[4/5] w-full relative z-10 overflow-hidden bg-slate-100">
              <Image 
                src="/img/empresa/camion_garra_hd.jpg" 
                alt="Camión de Carga" 
                fill
                className="object-cover transition-transform duration-700"
              />
            </div>
            {/* cuadrito de fondo invertido */}
            <div className="absolute -bottom-10 -left-10 w-2/3 h-full bg-slate-900 z-0"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8 lg:pl-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase leading-tight">
              Gestión Ambiental y <span className="text-red-600 block">Manejo de Residuos</span>
            </h2>
            <div className="w-12 h-1.5 bg-slate-900"></div>
            <div className="space-y-4 lg:space-y-6 text-slate-600 text-base lg:text-lg leading-relaxed">
              <p>
                Brindamos un servicio integral de gestión ambiental para fortalecer sus prácticas industriales, garantizando el cumplimiento legal y la reducción de riesgos.
              </p>
              
              <p>
                En el ámbito logístico, operamos como <strong>Transportistas Autorizados</strong> con Resolución Sanitaria para el retiro y traslado seguro de <strong>Residuos Peligrosos y No Peligrosos</strong>, respaldados por un estricto control de manifiestos de carga (SIDREP).
              </p>

              <p>
                De manera complementaria, desarrollamos <strong>Proyectos en Terreno</strong> diseñando y construyendo soluciones de almacenamiento para Sustancias y Residuos Peligrosos directamente en sus instalaciones. Nuestro servicio abarca desde la fabricación de bateas y jaulas bajo la normativa NCh, hasta la tramitación integral de permisos sanitarios (DS 148, DS 43) y la capacitación especializada de su equipo operativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* fondo negro de la ley rep */}
      <section className="relative py-20 md:py-32 bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay"
          style={{ backgroundImage: "url('/img/proceso/proceso 3.png')" }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8 md:space-y-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase">Trazabilidad Ambiental y Ley REP</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          <div className="space-y-4 md:space-y-6 text-slate-300 text-base md:text-lg leading-relaxed text-justify">
            <p>
              Toda nuestra operación se rige por la <strong>Ley N° 20.920</strong> (Responsabilidad Extendida del Productor), fomentando el reciclaje a través del Sistema Nacional de Declaración de Residuos (<strong>SINADER</strong>). Contamos con <strong>Código identificador de Ventanilla Única del Ministerio del Medio Ambiente N.º 5478434</strong>.
            </p>
            <p>
              Los movimientos y excedentes de los generadores son declarados formalmente a través de la <strong>Ventanilla Única del Ministerio del Medio Ambiente (RETC)</strong>, garantizando por ley la correcta disposición final. Al concluir el proceso, emitimos y hacemos <strong>entrega de certificados de disposición final</strong> a nuestros clientes, otorgando respaldo total ante auditorías medioambientales.
            </p>
          </div>
          <div className="pt-6 md:pt-8">
            <Link href="/contacto" className="inline-flex justify-center items-center w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-white text-slate-900 font-bold tracking-widest uppercase hover:bg-red-600 hover:text-white transition-colors text-sm sm:text-base">
              Coordinar Declaración de Excedentes
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}