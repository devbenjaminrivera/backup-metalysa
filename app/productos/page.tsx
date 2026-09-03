import Link from 'next/link';

export default function Productos() {
    return (
        <div className="min-h-screen bg-white">
            
            {/* 1. Hero Corporativo */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: "url('/img/empresa/chatarra_mixta.png')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
                    <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm">Catálogo y Derivados</span>
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                        Transformación de Acero
                    </h1>
                </div>
            </section>

            {/* 2. Materia Prima (Lo que compramos) - Clean Grid */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-slate-200">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">Materia Prima <span className="text-slate-400 font-light">Recepcionada</span></h2>
                    <div className="w-12 h-1.5 bg-red-600 mt-6"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
                    <div className="group">
                        <div className="w-full h-44 sm:h-60 mx-auto flex items-center justify-center mb-6">
                            <img src="/img/empresa/fierro_construcion.png" alt="Fierro de Construcción" className="w-full h-full object-contain transition-transform duration-500" />
                        </div>
                        <h4 className="font-black text-slate-900 uppercase text-lg border-l-2 border-red-600 pl-3">Fierro de Construcción</h4>
                        <p className="text-sm text-slate-500 mt-2 pl-3">Despuntes y excedentes</p>
                    </div>
                    <div className="group">
                        <div className="w-full h-44 sm:h-60 mx-auto flex items-center justify-center mb-6">
                            <img src="/img/empresa/pletina.png" alt="Pletina" className="w-full h-full object-contain transition-transform duration-500" />
                        </div>
                        <h4 className="font-black text-slate-900 uppercase text-lg border-l-2 border-slate-900 pl-3">Pletina</h4>
                        <p className="text-sm text-slate-500 mt-2 pl-3">Rollo de acero negro</p>
                    </div>
                    <div className="group">
                        <div className="w-full h-44 sm:h-60 mx-auto flex items-center justify-center mb-6">
                            <img src="/img/empresa/chatarra_mixta.png" alt="Chatarra Mixta" className="w-full h-full object-contain transition-transform duration-500" />
                        </div>
                        <h4 className="font-black text-slate-900 uppercase text-lg border-l-2 border-slate-400 pl-3">Chatarra Mixta</h4>
                        <p className="text-sm text-slate-500 mt-2 pl-3">Perfiles y planchas estructurales</p>
                    </div>
                    <div className="group">
                        <div className="w-full h-44 sm:h-60 mx-auto flex items-center justify-center mb-6">
                            <img src="/img/empresa/lata.png" alt="Lata" className="w-full h-full object-contain transition-transform duration-500" />
                        </div>
                        <h4 className="font-black text-slate-900 uppercase text-lg border-l-2 border-slate-300 pl-3">Lata</h4>
                        <p className="text-sm text-slate-500 mt-2 pl-3">Planchas, zunchos, alambrones</p>
                    </div>
                </div>
            </section>

            {/* 3. Proceso de Transformación - Timeline Lineal Limpio */}
            <section className="bg-slate-50 py-24 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">Ciclo de <span className="text-slate-400 font-light">Procesamiento</span></h2>
                        <div className="w-12 h-1.5 bg-red-600 mt-6"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start justify-between gap-6 relative">
                        {/* Paso 1 */}
                        <div className="w-full md:w-1/3 flex flex-col">
                            <div className="w-full h-64 md:h-72 overflow-hidden relative">
                                <div className="absolute top-0 left-0 bg-red-600 text-white font-black text-xl px-4 py-2 z-10">01</div>
                                <img src="/img/proceso/proceso1.png" alt="Recolección" className="w-full h-full object-cover transition-all duration-700" />
                            </div>
                            <div className="w-full mt-6">
                                <h3 className="text-2xl font-black text-slate-900 uppercase">Recolección</h3>
                                <p className="text-slate-600 mt-2">Retiro desde terreno en bateas a través de camiones ampli-roll.</p>
                            </div>
                        </div>

                        {/* Flecha */}
                        <div className="hidden md:flex text-slate-300 mt-24">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        </div>

                        {/* Paso 2 */}
                        <div className="w-full md:w-1/3 flex flex-col">
                            <div className="flex flex-col gap-4">
                                <div className="w-full h-32 md:h-[8.5rem] overflow-hidden relative">
                                    <div className="absolute top-0 left-0 bg-slate-900 text-white font-black text-xl px-4 py-2 z-10">02</div>
                                    <img src="/img/proceso/proceso2%20(2).png" alt="Recepción de Chatarra" className="w-full h-full object-cover transition-all duration-700" />
                                </div>
                                <div className="w-full h-32 md:h-[8.5rem] overflow-hidden relative">
                                    <img src="/img/proceso/proceso2.png" alt="Recepción de Pletina" className="w-full h-full object-cover transition-all duration-700" />
                                </div>
                            </div>
                            <div className="w-full mt-6">
                                <h3 className="text-2xl font-black text-slate-900 uppercase">Recepción</h3>
                                <p className="text-slate-600 mt-2">Pesaje y clasificación del material ferroso en nuestra romana certificada.</p>
                            </div>
                        </div>

                        {/* Flecha */}
                        <div className="hidden md:flex text-slate-300 mt-24">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        </div>

                        {/* Paso 3 */}
                        <div className="w-full md:w-1/3 flex flex-col">
                            <div className="flex flex-col gap-4">
                                <div className="w-full h-32 md:h-[8.5rem] overflow-hidden relative">
                                    <div className="absolute top-0 left-0 bg-slate-400 text-white font-black text-xl px-4 py-2 z-10">03</div>
                                    <img src="/img/proceso/proceso%203.png" alt="Fierro Procesado 1" className="w-full h-full object-cover transition-all duration-700" />
                                </div>
                                <div className="w-full h-32 md:h-[8.5rem] overflow-hidden relative">
                                    <img src="/img/proceso/proceso%203%20(2).png" alt="Fierro Procesado 2" className="w-full h-full object-cover transition-all duration-700" />
                                </div>
                            </div>
                            <div className="w-full mt-6">
                                <h3 className="text-2xl font-black text-slate-900 uppercase">Acondicionado</h3>
                                <p className="text-slate-600 mt-2">Corte mecanizado con cizallas de alta capacidad para entrega a siderúrgicas.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Productos Procesados (Salida) - Layout asimétrico oscuro */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">Insumos de <span className="text-red-600 font-black">Salida</span></h2>
                    <div className="w-12 h-1.5 bg-red-600 mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-900">
                    {/* Bloque 1 */}
                    <div className="bg-slate-900 p-12 md:p-16 text-white space-y-6">
                        <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs">Siderúrgicas</span>
                        <h3 className="text-3xl font-black uppercase">Acero Acondicionado</h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            La chatarra y barra de acero recolectada atraviesa un riguroso proceso de corte mecánico y preparación técnica en nuestras instalaciones.
                        </p>
                        <p className="text-slate-300 font-medium">
                            Este material retorna a la cadena productiva abasteciendo a las principales siderúrgicas del país para su refundición, asegurando calidad y densidad.
                        </p>
                    </div>
                    {/* Bloque 2 */}
                    <div className="bg-red-600 p-12 md:p-16 text-white space-y-6">
                        <span className="text-slate-900 font-bold tracking-[0.2em] uppercase text-xs">Desalinización</span>
                        <h3 className="text-3xl font-black uppercase text-slate-900">Derivados: Cloruro Férrico</h3>
                        <p className="text-red-100 text-lg leading-relaxed">
                            Proveemos insumos ferrosos de altísima especificidad química, yendo más allá del reciclaje tradicional.
                        </p>
                        <p className="text-white font-bold">
                            Nuestros insumos son el componente clave para la síntesis de Cloruro Férrico, un químico fundamental utilizado en la desalinización de aguas marinas a nivel nacional.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Link href="/contacto" className="inline-flex justify-center items-center px-10 py-5 bg-red-600 text-white font-bold tracking-widest uppercase hover:bg-slate-900 transition-colors">
                        Contactar a Ventas
                    </Link>
                </div>
            </section>

        </div>
    );
}