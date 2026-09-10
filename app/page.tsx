import Link from 'next/link';
import ClientMarquee from '@/components/ClientMarquee';

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* hero principal */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 overflow-hidden">
        {/* fotito de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/empresa/camion_rojo_hd.jpg')" }}
        ></div>

        {/* filtro pa oscurecer */}
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
      <section className="bg-red-600 text-white">
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

      {/* las 3 columnas de abajo */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-widest block mb-3 sm:mb-4">
            Público Objetivo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 leading-tight">
            Soluciones para la Gran Industria y Construcción
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16">
          <div className="space-y-4 sm:space-y-6">
            <div className="w-16 h-1 bg-red-600"></div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-slate-900">
              <span className="text-slate-400 sm:text-slate-300 block text-xs sm:text-sm mb-1 sm:mb-2">01 // RECOLECCIÓN</span>
              Captación de Chatarra
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Gestión integral de descartes metálicos (fierro, pletina, planchas) acumulados en instalaciones industriales y faenas civiles, asegurando un retiro limpio y eficiente.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="w-16 h-1 bg-slate-900"></div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-slate-900">
              <span className="text-slate-400 sm:text-slate-300 block text-xs sm:text-sm mb-1 sm:mb-2">02 // ACONDICIONAMIENTO</span>
              Procesamiento
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Selección, corte mecánico y preparación técnica de barras de construcción y pletinas para cumplir exactamente con el estándar de las siderúrgicas nacionales.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="w-16 h-1 bg-slate-400"></div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-slate-900">
              <span className="text-slate-400 sm:text-slate-300 block text-xs sm:text-sm mb-1 sm:mb-2">03 // INSUMOS</span>
              Química Ambiental
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Suministro de material base esencial para la síntesis de cloruro férrico, un componente aplicado directamente en las tecnologías modernas de desalinización marina.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}