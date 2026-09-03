import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. Hero Industrial (Estilo Tarjetas Flotantes) */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 overflow-hidden">
        {/* Imagen de fondo a pantalla completa */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/empresa/camion_rojo_hd.jpg')" }}
        ></div>

        {/* Overlay rojo muy sutil */}
        <div className="absolute inset-0 bg-gray-900/40"></div>

        <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-12 w-full py-20 lg:py-0 mt-10 lg:mt-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-10">

            {/* Izquierda: Título y Botón Principal */}
            <div className="w-full lg:w-5/12 space-y-10">
              <h1 className="text-5xl sm:text-6xl xl:text-[5rem] font-black tracking-tight uppercase text-white leading-[1.05]">
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

            {/* Derecha: Texto Informativo */}
            <div className="w-full lg:w-7/12 xl:w-6/12 flex items-center lg:justify-end">
              <div className="bg-slate-950/20 backdrop-blur-md  p-8 sm:p-10 rounded-2xl shadow-2xl">
                <p className="text-slate-100 text-lg sm:text-xl font-medium leading-relaxed">
                  La evidente crisis climática que afecta al planeta nos obliga a reutilizar los materiales para aprovechar su máxima vida útil posible. <strong className='text-red-600 font-black'>M</strong><strong className="text-white font-black">ETALYSA ACEROS</strong> ayuda en la protección del medio ambiente proporcionando un nuevo uso al fierro de construcción siendo pioneros en el reciclaje de la barra de acero, entregando materia prima a las principales siderúrgicas del país para la refundación u obtención de cloruro férrico, elemento clave en la desalinización de las aguas marinas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Franja de Datos Operativos (Full Width) */}
      <section className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-red-500/50">
          <div className="py-4 md:py-0">
            <span className="text-5xl font-black block mb-2">+250 TON</span>
            <span className="text-sm font-bold uppercase tracking-widest">Procesamiento Mensual</span>
          </div>
          <div className="py-4 md:py-0">
            <span className="text-5xl font-black block mb-2">6.000 m²</span>
            <span className="text-sm font-bold uppercase tracking-widest">Instalaciones Techadas</span>
          </div>
          <div className="py-4 md:py-0">
            <span className="text-5xl font-black block mb-2">Bio-Bio y RM</span>
            <span className="text-sm font-bold uppercase tracking-widest">Cobertura Nacional</span>
          </div>
        </div>
      </section>

      {/* 3. Banner de Clientes (Marquee con Imágenes) */}
      <section className="bg-slate-50 py-16 border-b border-slate-200 overflow-hidden relative">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block">
            Confían en nuestras soluciones circulares
          </span>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center">
            {[
              { nombre: "EBCO", logo: "/img/clientes/ebco.png", scale: "scale-125" },
              { nombre: "Sacyr", logo: "/img/clientes/sacyr.png", scale: "scale-125" },
              { nombre: "Pares & Alvarez", logo: "/img/clientes/pares.png", scale: "scale-90" },
              { nombre: "Formac", logo: "/img/clientes/formac.png", scale: "scale-90" },
              { nombre: "AZA", logo: "/img/clientes/aza.png", scale: "scale-90" },
              { nombre: "OXY", logo: "/img/clientes/oxy.png", scale: "scale-110" },
              { nombre: "Valmar", logo: "/img/clientes/valmar.png", scale: "scale-150" },
              { nombre: "Echeverría Izquierdo", logo: "/img/clientes/echeverria.png", scale: "scale-150" },
              { nombre: "Icafal", logo: "/img/clientes/icafal.png", scale: "scale-75" },

              { nombre: "EBCO", logo: "/img/clientes/ebco.png", scale: "scale-125" },
              { nombre: "Sacyr", logo: "/img/clientes/sacyr.png", scale: "scale-125" },
              { nombre: "Pares & Alvarez", logo: "/img/clientes/pares.png", scale: "scale-90" },
              { nombre: "Formac", logo: "/img/clientes/formac.png", scale: "scale-90" },
              { nombre: "AZA", logo: "/img/clientes/aza.png", scale: "scale-90" },
              { nombre: "OXY", logo: "/img/clientes/oxy.png", scale: "scale-110" },
              { nombre: "Valmar", logo: "/img/clientes/valmar.png", scale: "scale-150" },
              { nombre: "Echeverría Izquierdo", logo: "/img/clientes/echeverria.png", scale: "scale-150" },
              { nombre: "Icafal", logo: "/img/clientes/icafal.png", scale: "scale-75" },
            ].map((cliente, index) => (
              <div
                key={index}
                className="flex shrink-0 items-center justify-center px-4 sm:px-6 mx-1 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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

      {/* 4. Soluciones Industriales (Minimalista) */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold text-red-600 uppercase tracking-widest block mb-4">
            Público Objetivo
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 leading-tight">
            Soluciones para la Gran Industria y Construcción
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="w-16 h-1 bg-red-600"></div>
            <h3 className="text-2xl font-black uppercase text-slate-900">
              <span className="text-slate-300 block text-sm mb-2">01 // RECOLECCIÓN</span>
              Captación de Chatarra
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Gestión integral de descartes metálicos (fierro, pletina, planchas) acumulados en instalaciones industriales y faenas civiles, asegurando un retiro limpio y eficiente.
            </p>
          </div>

          <div className="space-y-6">
            <div className="w-16 h-1 bg-slate-900"></div>
            <h3 className="text-2xl font-black uppercase text-slate-900">
              <span className="text-slate-300 block text-sm mb-2">02 // ACONDICIONAMIENTO</span>
              Procesamiento
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Selección, corte mecánico y preparación técnica de barras de construcción y pletinas para cumplir exactamente con el estándar de las siderúrgicas nacionales.
            </p>
          </div>

          <div className="space-y-6">
            <div className="w-16 h-1 bg-slate-400"></div>
            <h3 className="text-2xl font-black uppercase text-slate-900">
              <span className="text-slate-300 block text-sm mb-2">03 // INSUMOS</span>
              Química Ambiental
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Suministro de material base esencial para la síntesis de cloruro férrico, un componente aplicado directamente en las tecnologías modernas de desalinización marina.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}