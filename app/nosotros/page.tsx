import Link from 'next/link';

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Encabezado */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 block">
            Sobre Metalysa Aceros
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Pioneros en el reciclaje de acero a nivel nacional
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Desde 2014, nuestro propósito es poner a disposición de la gran industria años de experiencia técnica en la gestión integral de residuos ferrosos.
          </p>
        </section>

        {/* Historia y Cultura */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-14 space-y-6">
              <h2 className="text-2xl font-black text-slate-900 uppercase">Historia y Liderazgo</h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  El proyecto nace formalmente el <strong>año 2014</strong> en Talcahuano (Región del Biobío) bajo el grupo Lubalmet, impulsado por sus fundadores <strong>Luis Basualto</strong> e <strong>Isabel Álvarez</strong>. Su visión fue crear una solución logística y medioambiental robusta para los excedentes industriales que se acumulaban sin tratamiento en la región.
                </p>
                <p>
                  Debido a la confianza cultivada con grandes clientes de la construcción y minería, el <strong>año 2021 expandimos nuestras fronteras abriendo una sucursal estratégica en Quilicura, Santiago</strong>, brindando respaldo y recolección de chatarra a nivel nacional. Hoy, como Metalysa Aceros, lideramos el mercado operando con estándares de nivel internacional.
                </p>
              </div>
            </div>
            <div className="bg-slate-900 p-10 md:p-14 space-y-6 text-white flex flex-col justify-center">
              <h2 className="text-2xl font-black uppercase text-red-500">Cultura e Inclusión</h2>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  En Metalysa destacamos por un fuerte compromiso social y una estricta política de <strong>inclusión laboral</strong>.
                </p>
                <p>
                  Incorporamos talento diverso, abriendo oportunidades a trabajadores extranjeros y garantizando un entorno de trabajo plural, de amplio respeto, seguro y normado bajo la legislación laboral vigente de Chile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Misión y Visión */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-lg space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transition-all group-hover:w-2"></div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Nuestra Misión</h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Ser un aliado estratégico y líder en la captación de desechos, con enfoque principal en el reciclaje del fierro de construcción y pletina. Nos comprometemos a abordar de manera responsable el impacto ambiental, promoviendo la reutilización sostenible y asegurando un entorno laboral seguro para nuestros trabajadores.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-lg space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-slate-900 transition-all group-hover:w-2"></div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Nuestra Visión y Metas</h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Aspiramos a ser el símbolo de la gestión de residuos ferrosos generados por la industria a nivel nacional. Nuestra meta es inspirar a otras empresas a unirse en la búsqueda de un futuro más limpio, sostenible e innovador para todos.
            </p>
          </div>
        </section>

        {/* Infraestructura Técnica */}
        <section className="bg-slate-900 text-white rounded-2xl p-10 md:p-16 border-t-8 border-red-600 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Infraestructura y Capacidad Operativa</h2>
            <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
              Instalaciones de primer nivel diseñadas para alto tonelaje, pesaje de precisión y máxima seguridad perimetral.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-red-500 mb-4 border border-slate-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white">Planta de 6.000 m²</h3>
              <p className="text-slate-400 text-sm">Más de 6.000 mt2 totales con galpones techados superiores a 1.000 mt2. Acondicionados para maniobras de grúas horquilla y camiones de gran envergadura.</p>
            </div>
            
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-red-500 mb-4 border border-slate-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white">Pesaje Certificado</h3>
              <p className="text-slate-400 text-sm">Contamos con una romana de pesaje propia de 60 toneladas en nuestro sitio, garantizando total transparencia y rapidez en la recepción de sus excedentes.</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-red-500 mb-4 border border-slate-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-white">Tecnología Italiana</h3>
              <p className="text-slate-400 text-sm">Línea de cizallado mecánico con maquinaria de origen europeo diseñada para alcanzar nuestro alto rendimiento de más de 250 toneladas mensuales.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}