import Link from 'next/link';

export default function Servicios() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Encabezado */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 block">
            Capacidades Operativas
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Servicios de Logística y Procesamiento Ferroso
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Otorgamos soluciones de acopio, valorización y adecuación de materiales metálicos, integrando eficiencia logística con el más estricto cumplimiento normativo (Ley REP 20.920, DS 148, DS 43).
          </p>
        </section>

        {/* Logística en Terreno */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10 md:p-14 space-y-6 flex flex-col justify-center">
            <span className="inline-block bg-slate-100 text-slate-700 text-xs font-black uppercase px-3 py-1 rounded w-max">
              Gestión en Terreno
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase">Logística de Bateas y Ampli-Roll</h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Nuestra operación en terreno se ejecuta mediante una alianza estratégica con <strong>Transportes Basualto Limitada</strong>. Contamos con una flota de camiones de modelos recientes equipados con sistemas hidráulicos Ampli-Roll autocargantes para maniobras de precisión y retiro de alto tonelaje.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium pt-2">
                <li>Bateas (Tolvas) adaptables a su espacio: <strong>3 m³, 8 m³, 10 m³ y 20 m³</strong>.</li>
                <li>Instalación y reposición directa en obras y faenas.</li>
                <li>Pesaje exacto en nuestra propia romana de 60 toneladas.</li>
              </ul>
              <p className="pt-2 text-red-600 font-bold">
                Ventaja de Valor: Evitamos la acumulación de despuntes, permitiendo a su empresa mantener un entorno limpio, accesible y seguro.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/contacto" className="inline-block px-8 py-3.5 bg-red-600 text-white font-bold text-sm uppercase rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
                Solicitar Batea para mi Obra
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative p-10 md:p-14 flex items-center justify-center border-l-8 border-red-600 bg-[url('/img/empresa/batea1.png')] bg-cover bg-center overflow-hidden">
            {/* Overlay Sólido Claro */}
            <div className="absolute inset-0 bg-slate-900/60 z-0"></div>

            <div className="relative z-10 text-center space-y-4">
              <svg className="w-24 h-24 text-slate-300/90 mx-auto drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              <h3 className="text-2xl font-black text-white uppercase drop-shadow-lg">Retiro de Alto Tonelaje</h3>
              <p className="text-slate-200 text-sm drop-shadow-md">Camiones Ampli-roll y Autocargantes.</p>
            </div>
          </div>
        </section>

        {/* Transporte con Resolución Sanitaria */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 p-10 md:p-14 space-y-6 flex flex-col justify-center">
            <span className="inline-block bg-slate-100 text-slate-700 text-xs font-black uppercase px-3 py-1 rounded w-max">
              Transporte Autorizado
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase">Transporte de Sustancias y Residuos</h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Contamos con <strong>Resolución Sanitaria vigente</strong> que nos autoriza para el almacenamiento y transporte de <strong>Sustancias Peligrosas y Residuos Peligrosos (SP y RP)</strong>, cumpliendo rigurosamente con los decretos MINSAL N°148 y N°43, así como las normativas NCh 382, 2190 y 2245.
              </p>
              <ul className="space-y-2 text-slate-700 font-medium pt-2">
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Bodegaje estructural certificado (DS 43)</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Transporte de residuos peligrosos y no peligrosos</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Rotulación y señalización bajo NCh</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Entregable peligroso (Mensual o Única vez)</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 relative p-10 md:p-14 flex items-center justify-center border-r-8 border-slate-900 bg-[url('/img/empresa/camion_garra.png')] bg-cover bg-center overflow-hidden">
            {/* Overlay Sólido Claro */}
            <div className="absolute inset-0 bg-slate-900/60 z-0"></div>

            <div className="relative z-10 text-center space-y-4">
              <svg className="w-24 h-24 text-slate-300/90 mx-auto drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <h3 className="text-2xl font-black text-white uppercase drop-shadow-lg">Seguridad y Normativa</h3>
              <p className="text-slate-200 text-sm drop-shadow-md">Estricto cumplimiento de protocolos sanitarios.</p>
            </div>
          </div>
        </section>

        {/* Trazabilidad y Cumplimiento */}
        <section className="bg-slate-900 text-white rounded-2xl p-10 md:p-16 text-center space-y-8 shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-black uppercase">Trazabilidad Ambiental y Ley REP</h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Toda nuestra operación se rige por la <strong>Ley N° 20.920</strong> (Responsabilidad Extendida del Productor), fomentando el reciclaje a través del Sistema Nacional de Declaración de Residuos (<strong>SINADER</strong>).
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Los movimientos y excedentes de los generadores son declarados formalmente a través de la <strong>Ventanilla Única del Ministerio del Medio Ambiente (RETC)</strong>, garantizando por ley la correcta disposición final.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contacto" className="inline-block px-8 py-4 bg-white text-slate-900 font-black text-sm uppercase rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
              Coordinar Declaración de Excedentes
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}