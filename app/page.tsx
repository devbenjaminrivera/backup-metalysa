import Link from 'next/link';
import ClientMarquee from '@/components/ClientMarquee';

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* hero principal */}
      <section className="relative min-h-[90vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
        {/* fotito de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/empresa/camion_rojo_hd.jpg')" }}
        ></div>

        {/* filtro para oscurecer */}
        <div className="absolute inset-0 bg-gray-900/40"></div>

        <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 w-full py-16 sm:py-20 lg:py-0 mt-8 sm:mt-10 lg:mt-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10">

            {/* lado izq con el titulo */}
            <div className="w-full lg:w-5/12 space-y-6 sm:space-y-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[5rem] font-black tracking-tight uppercase text-white leading-[1.1] sm:leading-[1.05]">
                Trabajo en equipo para un <span className='ml-1 underline decoration-red-600'>Futuro Sustentable</span>
              </h1>

              <div>
                <Link
                  href="/contacto"
                  className="inline-flex justify-center items-center px-10 py-4 bg-white text-slate-900 hover:bg-red-600 hover:text-white font-bold tracking-wide transition-all rounded-full"
                >
                  Contacto Directo
                </Link>
              </div>
            </div>

            {/* cuadrito de la derecha */}
            <div className="w-full lg:w-7/12 xl:w-6/12 flex items-center lg:justify-end mt-4 lg:mt-0">
              <div className="bg-slate-950/30 lg:bg-slate-950/20 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl border border-white/5 lg:border-transparent">
                <p className="text-slate-100 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
                  La evidente crisis climática que afecta al planeta nos obliga a reutilizar los materiales para aprovechar su máxima vida útil posible. <strong className='text-red-600 font-black'>M</strong><strong className="text-white font-black">ETALYSA ACEROS</strong> ayuda en la protección del medio ambiente proporcionando un nuevo uso al fierro de construcción siendo pioneros en el reciclaje de la barra de acero, entregando materia prima a las principales siderúrgicas del país para la refundación u obtención de cloruro férrico, elemento clave en la desalinización de las aguas marinas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* barrita roja con numeros */}
      <section className="bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-red-500/50">
          <div className="py-4 md:py-0">
            <span className="text-4xl sm:text-5xl font-black block mb-1 sm:mb-2">+800 TON</span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-100 sm:text-white">Procesamiento Mensual</span>
          </div>
          <div className="py-4 md:py-0">
            <span className="text-4xl sm:text-5xl font-black block mb-1 sm:mb-2">6.000 m²</span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-100 sm:text-white">Instalaciones Techadas</span>
          </div>
          <div className="py-4 md:py-0">
            <span className="text-4xl sm:text-5xl font-black block mb-1 sm:mb-2">Bio-Bio y RM</span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-100 sm:text-white">Cobertura Nacional</span>
          </div>
        </div>
      </section>

      {/* carrusel de los clientes */}
      <ClientMarquee />

      {/* valor estrategico y publico objetivo (Combo 1) */}
      <section className="pt-20 md:pt-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="lg:w-1/3">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-4">Valor Estratégico</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase leading-tight mb-6">¿Por qué <br className="hidden lg:block"/> externalizar <br className="hidden lg:block"/> con <span className="text-red-600">Metalysa</span>?</h2>
            <div className="w-12 h-1.5 bg-red-600 mb-6"></div>
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
              Asumimos el riesgo y el control logístico-ambiental para que su empresa se enfoque exclusivamente en su producción y crecimiento.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid gap-10 sm:gap-12 lg:border-l lg:border-slate-200 lg:pl-12">
            {[
              { num: '01', title: 'Interlocutor Único', desc: 'Al consolidar la gestión de todos sus flujos residuales con un solo socio estratégico, eliminamos la necesidad de coordinar múltiples proveedores. Esto reduce drásticamente su carga administrativa, minimiza los puntos de falla logística y le devuelve el control absoluto sobre sus operaciones.' },
              { num: '02', title: 'Continuidad Operativa', desc: 'La acumulación de excedentes es un riesgo latente para la seguridad de su faena. Diseñamos planes logísticos a medida con retiros rigurosamente programados, garantizando un entorno de trabajo limpio, accesible y sin cuellos de botella que afecten su productividad.' },
              { num: '03', title: 'Respaldo Documental', desc: 'Navegamos la complejidad normativa por usted. Entregamos evidencia documental impecable, incluyendo certificados de disposición final y trazabilidad en las plataformas exigidas por la autoridad sanitaria (SIDREP y SINADER), blindando a su empresa ante cualquier auditoría.' }
            ].map((b, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <span className="text-3xl sm:text-4xl font-black text-slate-300 w-12 flex-shrink-0 leading-none">{b.num}</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase mb-3 leading-none">{b.title}</h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200 w-full mt-8 md:mt-12">
           <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-4">Público Objetivo</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase leading-tight">Soluciones Integrales para la Gran Industria</h2>
           </div>
           
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-300">
              {[
                { sub: 'RECOLECCIÓN', title: 'Captación de Chatarra', desc: 'Desarrollamos logística de alta capacidad para el retiro de descartes metálicos estructurales (fierro de construcción, pletinas, planchas) acumulados en grandes maestranzas, obras civiles y talleres mecánicos, asegurando un despeje rápido y eficiente.' },
                { sub: 'ACONDICIONAMIENTO', title: 'Procesamiento Industrial', desc: 'Acondicionamos el material recuperado mediante técnicas de oxicorte y cizallado, preparando la chatarra metálica para cumplir estrictamente con los exigentes estándares de densidad y tamaño requeridos por las siderúrgicas nacionales.' },
                { sub: 'RESPEL Y NO PELIGROSOS', title: 'Gestión Integral', desc: 'Proveemos un control operacional especializado para residuos industriales complejos. Incluimos diagnóstico técnico, diseño de almacenamiento (bateas/jaulas) y tramitación de permisos sanitarios bajo normativas DS 148 y DS 43.' }
              ].map((p, i) => (
                <div key={i} className="pt-8 md:pt-0 md:px-10 first:md:pl-0 last:md:pr-0 hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-xs font-bold text-red-600 tracking-widest mb-3 block">{p.sub}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase mb-4 leading-tight">{p.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed">{p.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}