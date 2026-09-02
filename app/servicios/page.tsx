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
            Otorgamos soluciones de acopio, valorización y adecuación de materiales metálicos, integrando eficiencia logística con el más estricto cumplimiento normativo.
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
                Nuestra operación en terreno se ejecuta mediante una alianza estratégica con <strong>Transportes Basualto Limitada</strong>. Contamos con una flota de camiones de modelos recientes equipados con sistemas hidráulicos Ampli-Roll para maniobras de precisión y retiro de alto tonelaje.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium pt-2">
                <li>Parque de 20 bateas modulares de acero.</li>
                <li>Capacidades adaptables de 10 y 20 metros cúbicos.</li>
                <li>Instalación y reposición directa en obras y faenas.</li>
              </ul>
              <p className="pt-2 text-red-600 font-bold">
                Ventaja de Valor: Evitamos la acumulación de despuntes, permitiendo a su empresa mantener un entorno limpio, accesible y seguro, sin paralizar sus operaciones productivas.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/contacto" className="inline-block px-8 py-3.5 bg-red-600 text-white font-bold text-sm uppercase rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
                Solicitar Batea para mi Obra
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 bg-slate-900 p-10 md:p-14 flex items-center justify-center border-l-8 border-red-600">
             <div className="text-center space-y-4">
                <svg className="w-24 h-24 text-slate-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                <h3 className="text-2xl font-black text-white uppercase">Retiro de Alto Tonelaje</h3>
                <p className="text-slate-400 text-sm">Flota especializada para la gran industria.</p>
             </div>
          </div>
        </section>

        {/* Grid de Destinos (Economía Circular) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-lg space-y-6">
            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 border border-slate-200">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h2 className="text-2xl font-black text-slate-900">Acondicionamiento para Siderúrgicas</h2>
            <p className="text-slate-600 text-base leading-relaxed">
              La chatarra y barra de acero recolectada atraviesa un riguroso proceso de corte y preparación técnica. Este material acondicionado retorna a la cadena productiva abasteciendo directamente a las principales siderúrgicas del país para su refundición.
            </p>
          </div>

          <div className="bg-red-600 border border-red-700 rounded-2xl p-10 shadow-lg space-y-6 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-10">
              <svg className="w-64 h-64" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 bg-red-800/50 rounded-xl flex items-center justify-center text-white border border-red-500">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h2 className="text-2xl font-black">Derivados: Cloruro Férrico</h2>
              <p className="text-red-100 text-base leading-relaxed">
                Nuestra economía circular va un paso más allá. Proveemos insumos ferrosos de alta especificidad que son el componente clave para la generación de <strong>Cloruro Férrico</strong>, un químico fundamental utilizado en los procesos tecnológicos de <strong>desalinización de aguas marinas</strong> a lo largo del país.
              </p>
            </div>
          </div>
        </section>

        {/* Transporte con Resolución Sanitaria */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 p-10 md:p-14 space-y-6 flex flex-col justify-center">
            <span className="inline-block bg-slate-100 text-slate-700 text-xs font-black uppercase px-3 py-1 rounded w-max">
              Transporte Autorizado
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase">Transporte de Residuos con Resolución Sanitaria</h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Contamos con <strong>Resolución Sanitaria vigente</strong> que nos autoriza para el transporte de residuos peligrosos y no peligrosos, cumpliendo con la normativa aplicable y los estándares exigidos para una gestión segura y responsable.
              </p>
              <p>
                Nuestro servicio permite entregar a nuestros clientes una solución integral para el retiro, transporte y gestión de sus residuos, asegurando trazabilidad, cumplimiento normativo y seguridad durante todo el proceso.
              </p>
              <ul className="space-y-2 text-slate-700 font-medium pt-2">
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Transporte de residuos peligrosos</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Transporte de residuos no peligrosos</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Resolución Sanitaria vigente</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Gestión y traslado seguro</li>
                <li className="flex items-center gap-2"><svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Trazabilidad y respaldo documental</li>
              </ul>
              <p className="pt-2 text-slate-800 font-bold italic">
                Confíe el transporte de sus residuos a una empresa autorizada y comprometida con una gestión responsable.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 bg-slate-100 p-10 md:p-14 flex items-center justify-center border-r-8 border-slate-900">
             <div className="text-center space-y-4">
                <svg className="w-24 h-24 text-slate-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <h3 className="text-2xl font-black text-slate-900 uppercase">Seguridad y Normativa</h3>
                <p className="text-slate-500 text-sm">Estricto cumplimiento de protocolos sanitarios.</p>
             </div>
          </div>
        </section>

        {/* Trazabilidad y Cumplimiento */}
        <section className="bg-slate-900 text-white rounded-2xl p-10 md:p-16 text-center space-y-8 shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-black uppercase">Trazabilidad y Cumplimiento Medioambiental</h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Toda nuestra operación de recolección y venta está estrictamente regida bajo el Sistema Nacional de Declaración de Residuos (<strong>SINADER</strong>).
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Para su tranquilidad corporativa, los movimientos y excedentes de su empresa son declarados formalmente a través de la <strong>Ventanilla Única del Ministerio del Medio Ambiente</strong>, garantizando por ley la correcta disposición final de los materiales.
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