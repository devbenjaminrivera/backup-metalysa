import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Industrial */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Izquierda: Mensaje Original */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase leading-[1.05]">
              Trabajo en equipo para un <span className="text-red-600 underline decoration-red-600/40 decoration-4">Futuro Sustentable</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              La evidente crisis climática que afecta al planeta nos obliga a reutilizar los materiales para aprovechar su máxima vida útil posible, <strong className="text-red-600">M</strong><strong className="text-shadow-white">ETALYSA ACEROS</strong> ayuda en la protección del medio ambiente proporcionando un nuevo uso al fierro de construcción siendo pioneros en el reciclaje de la barra de acero, entregando materia prima a las principales siderúrgicas del país para la refundación u obtención de cloruro férrico, elemento clave en la desalinización de las aguas marinas.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex justify-center items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-red-900/30"
              >
                Coordinar Retiro de Material
              </Link>
              <Link
                href="/servicios"
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent hover:bg-slate-900 text-slate-200 border border-slate-700 font-bold text-sm tracking-wider uppercase transition-all"
              >
                Ver Nuestras Operaciones
              </Link>
            </div>
          </div>

          {/* Derecha: Panel de Datos Operativos e Información Nueva */}
          <div className="lg:col-span-5 bg-slate-900 border-2 border-slate-800 p-8 space-y-6 rounded-xl shadow-2xl relative">
            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-black px-3 py-1 uppercase tracking-widest rounded shadow-lg">
              Biobío y Santiago
            </div>
            
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">Capacidad y Garantía Operativa</span>
              <h2 className="text-2xl font-black text-white uppercase mt-1">Cobertura Nacional</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-950 p-4 border border-slate-800 rounded-lg">
                <span className="text-red-500 font-mono font-black text-2xl block mb-1">+250<span className="text-xs"> TON</span></span>
                <span className="text-slate-200 font-bold block">Procesamiento Mensual</span>
                <span className="text-slate-500 text-xs">De chatarra y barra de acero</span>
              </div>
              <div className="bg-slate-950 p-4 border border-slate-800 rounded-lg">
                <span className="text-red-500 font-mono font-black text-2xl block mb-1">6.000<span className="text-xs"> m²</span></span>
                <span className="text-slate-200 font-bold block">Instalaciones</span>
                <span className="text-slate-500 text-xs">Galpones y pesaje de 60 ton</span>
              </div>
            </div>

            {/* Badges de Confianza */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 bg-slate-950/50 p-3 rounded border border-slate-800">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-red-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <span className="block text-slate-200 text-xs font-bold uppercase">Trazabilidad Ambiental</span>
                  <span className="block text-slate-500 text-[10px] uppercase">Ley REP 20.920 • SINADER</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-950/50 p-3 rounded border border-slate-800">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-red-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <div>
                  <span className="block text-slate-200 text-xs font-bold uppercase">Inclusión Laboral</span>
                  <span className="block text-slate-500 text-[10px] uppercase">Entorno diverso y seguro</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Clientes de Confianza */}
      <section className="bg-slate-100 py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-6">Confían en nuestras soluciones circulares</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-black text-slate-800">Sacyr</span>
             <span className="text-xl font-black text-slate-800">AZA Acero</span>
             <span className="text-xl font-black text-slate-800">Echeverría Izquierdo</span>
             <span className="text-xl font-black text-slate-800">Icafal</span>
             <span className="text-xl font-black text-slate-800">Pares&Alvarez</span>
             <span className="text-xl font-black text-slate-800">Valmar</span>
          </div>
        </div>
      </section>

      {/* Bloque de Procesos / Módulos Industriales */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              Público Objetivo
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900 mt-1">
              Soluciones para la Gran Industria y Construcción
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md mt-4 md:mt-0 font-medium">
            Procesamiento y logística adaptada a políticas medioambientales para proyectos de ingeniería a nivel regional y nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-200">
          
          <div className="p-8 border-r border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors group">
            <span className="text-xs font-mono text-slate-400 font-bold block mb-4">01 // RECOLECCIÓN</span>
            <h3 className="text-xl font-bold uppercase text-slate-900 group-hover:text-red-600 transition-colors mb-3">
              Captación de Chatarra
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Gestión integral de descartes metálicos (fierro, pletina, planchas) acumulados en instalaciones industriales y faenas civiles.
            </p>
          </div>

          <div className="p-8 border-r border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors group">
            <span className="text-xs font-mono text-slate-400 font-bold block mb-4">02 // ACONDICIONAMIENTO</span>
            <h3 className="text-xl font-bold uppercase text-slate-900 group-hover:text-red-600 transition-colors mb-3">
              Procesamiento de Fierro
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Selección, corte y preparación de barras de construcción según estándar de siderúrgicas nacionales.
            </p>
          </div>

          <div className="p-8 border-r border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors group">
            <span className="text-xs font-mono text-slate-400 font-bold block mb-4">03 // INSUMOS</span>
            <h3 className="text-xl font-bold uppercase text-slate-900 group-hover:text-red-600 transition-colors mb-3">
              Química Ambiental
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Suministro de material base para síntesis de cloruro férrico aplicado en tecnologías de desalinización marina.
            </p>
          </div>

        </div>
      </section>

      {/* Nuevo Banner de Clientes (Marquee con Imágenes) */}
      <section className="bg-slate-100 py-16 border-y border-slate-200 overflow-hidden relative">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
          <h2 className="text-sm sm:text-base font-black uppercase text-slate-400 tracking-[0.2em]">
            Nuestros Clientes
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center">
            {/* Lista duplicada con rutas de imágenes para asegurar el bucle infinito */}
            {[
              { nombre: "EBCO", logo: "/img/clientes/ebco.png" },
              { nombre: "Sacyr", logo: "/img/clientes/sacyr.png" },
              { nombre: "Pares & Alvarez", logo: "/img/clientes/pares.png" },
              { nombre: "Formac", logo: "/img/clientes/formac.png", scale: "scale-90" },
              { nombre: "AZA", logo: "/img/clientes/aza.png" },
              { nombre: "OXY", logo: "/img/clientes/oxy.png", scale: "scale-75" },
              { nombre: "Valmar", logo: "/img/clientes/valmar.png", scale: "scale-150" },
              { nombre: "Echeverría Izquierdo", logo: "/img/clientes/echeverria.png", scale: "scale-125" },
              { nombre: "Icafal", logo: "/img/clientes/icafal.png", scale: "scale-75" },
              
              // Copia exacta para el bucle
              { nombre: "EBCO", logo: "/img/clientes/ebco.png" },
              { nombre: "Sacyr", logo: "/img/clientes/sacyr.png" },
              { nombre: "Pares & Alvarez", logo: "/img/clientes/pares.png" },
              { nombre: "Formac", logo: "/img/clientes/formac.png", scale: "scale-90" },
              { nombre: "AZA", logo: "/img/clientes/aza.png" },
              { nombre: "OXY", logo: "/img/clientes/oxy.png", scale: "scale-75" },
              { nombre: "Valmar", logo: "/img/clientes/valmar.png", scale: "scale-150" },
              { nombre: "Echeverría Izquierdo", logo: "/img/clientes/echeverria.png", scale: "scale-125" },
              { nombre: "Icafal", logo: "/img/clientes/icafal.png", scale: "scale-75" },
            ].map((cliente, index) => (
              <div 
                key={index} 
                className="flex shrink-0 items-center justify-center px-6 sm:px-8 mx-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img 
                  src={cliente.logo} 
                  alt={cliente.nombre} 
                  className={`h-16 sm:h-24 w-40 sm:w-60 object-contain ${cliente.scale || ""}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}