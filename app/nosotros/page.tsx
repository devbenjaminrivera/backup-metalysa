import Link from 'next/link';

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Hero Corporativo (Banner Principal) */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('/img/empresa/interior%20empresa.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
          <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm">Sobre Metalysa Aceros</span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            Nuestra Historia
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium">
            Pioneros en el reciclaje de acero a nivel nacional desde 2014.
          </p>
        </div>
      </section>

      {/* 2. Historia y Evolución (Asimetría Elegante) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase leading-tight">
              Liderazgo y <br/><span className="text-red-600">Evolución</span>
            </h2>
            <div className="w-12 h-1.5 bg-red-600"></div>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                El proyecto nace formalmente el <strong>año 2014</strong> en Talcahuano (Región del Biobío) impulsado por sus fundadores <strong>Luis Basualto</strong> e <strong>Isabel Álvarez</strong>. Su visión fue crear una solución logística y medioambiental robusta para los excedentes industriales que se acumulaban sin tratamiento en la región.
              </p>
              <p>
                Debido a la confianza cultivada con grandes clientes de la construcción y minería, el <strong>año 2021 expandimos nuestras fronteras abriendo una sucursal estratégica en Quilicura, Santiago</strong>, brindando respaldo y recolección de chatarra a nivel nacional. 
              </p>
              <p>
                En Metalysa destacamos por un fuerte compromiso social y una estricta política de <strong>inclusión laboral</strong>, incorporando talento diverso y garantizando un entorno de trabajo plural y seguro.
              </p>
            </div>
          </div>
          <div className="relative">
            {/* Foto real del equipo */}
            <div className="aspect-[4/3] w-full relative z-10">
              <img 
                src="/img/empresa/equipo.png" 
                alt="Equipo de Metalysa Aceros" 
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
            {/* Elemento de diseño asimétrico */}
            <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 border-b-8 border-l-8 border-slate-100 z-0"></div>
            <div className="absolute -top-6 -right-6 w-1/3 h-1/3 bg-red-600 z-0"></div>
          </div>
        </div>
      </section>

      {/* 3. Misión y Visión (Limpieza Visual) */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900 uppercase flex items-center gap-4">
                <span className="w-8 h-1 bg-red-600"></span>
                Nuestra Misión
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed pl-12 border-l border-slate-200">
                Ser un aliado estratégico y líder en la captación de desechos, con enfoque principal en el reciclaje del fierro de construcción y pletina. Nos comprometemos a abordar de manera responsable el impacto ambiental, promoviendo la reutilización sostenible y asegurando un entorno laboral seguro para nuestros trabajadores.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900 uppercase flex items-center gap-4">
                <span className="w-8 h-1 bg-slate-900"></span>
                Visión y Metas
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed pl-12 border-l border-slate-200">
                Aspiramos a ser el símbolo de la gestión de residuos ferrosos generados por la industria a nivel nacional. Nuestra meta es inspirar a otras empresas a unirse en la búsqueda de un futuro más limpio, sostenible e innovador para todos.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Infraestructura y Capacidad (Fotografías Reales) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase leading-tight mb-6">
            Infraestructura y <br/>Capacidad Operativa
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Instalaciones de primer nivel diseñadas para alto tonelaje, pesaje de precisión y máxima seguridad perimetral, operando con estándares de nivel internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="group space-y-6">
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img src="/img/empresa/interior%20empresa.png" alt="Planta Metalysa" className="w-full h-full object-cover transition-all duration-700" />
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-black text-slate-900 uppercase">Planta de 6.000 m²</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Más de 6.000 mt2 totales con galpones techados superiores a 1.000 mt2. Acondicionados para maniobras de grúas horquilla y camiones de gran envergadura.
              </p>
            </div>
          </div>

          <div className="group space-y-6">
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img src="/img/empresa/batea1_hd.jpg" alt="Pesaje Certificado" className="w-full h-full object-cover transition-all duration-700" />
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-black text-slate-900 uppercase">Pesaje Certificado</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Contamos con una romana de pesaje propia de 60 toneladas en nuestro sitio, garantizando total transparencia y rapidez en la recepción de sus excedentes.
              </p>
            </div>
          </div>

          <div className="group space-y-6">
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img src="/img/proceso/proceso%203%20(2).png" alt="Tecnología Italiana" className="w-full h-full object-cover transition-all duration-700" />
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-black text-slate-900 uppercase">Tecnología Italiana</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Línea de cizallado mecánico con maquinaria de origen europeo diseñada para alcanzar nuestro alto rendimiento de más de 250 toneladas mensuales.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}