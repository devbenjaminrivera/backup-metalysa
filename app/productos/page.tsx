import Link from 'next/link';

export default function Productos() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Encabezado */}
                <section className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-red-600 block">
                        Catálogo de Materiales y Derivados
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                        Valorización y Transformación de Acero
                    </h1>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Nuestra cadena productiva está dividida en dos grandes fases: la captación de excedentes industriales (materia prima) y la entrega de productos procesados de alto estándar para la gran industria.
                    </p>
                </section>

                {/* Materia Prima (Lo que compramos) */}
                <section className="space-y-8">
                    <div className="border-b border-slate-200 pb-4">
                        <h2 className="text-3xl font-black text-slate-900 uppercase">Materia Prima que Recibimos</h2>
                        <p className="text-slate-500 mt-2">Capacidad de recepción en nuestras plantas operativas a nivel nacional.</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 py-10 px-4 shadow-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="group cursor-default">
                                <div className="w-full h-44 sm:h-60 mx-auto flex items-center justify-center mb-5">
                                    <img src="/img/empresa/fierro_construcion.png" alt="Fierro de Construcción" className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <h4 className="font-black text-slate-900 uppercase text-lg">Fierro de Construcción</h4>
                                <p className="text-sm text-slate-500">Despuntes y excedentes</p>
                            </div>
                            <div className="group cursor-default">
                                <div className="w-full h-44 sm:h-60 mx-auto flex items-center justify-center mb-5">
                                    <img src="/img/empresa/pletina.png" alt="Pletina" className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <h4 className="font-black text-slate-900 uppercase text-lg">Pletina</h4>
                                <p className="text-sm text-slate-500">Rollo de acero negro</p>
                            </div>
                            <div className="group cursor-default">
                                <div className="w-full h-44 sm:h-60 mx-auto flex items-center justify-center mb-5">
                                    <img src="/img/empresa/chatarra_mixta.png" alt="Chatarra Mixta" className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <h4 className="font-black text-slate-900 uppercase text-lg">Chatarra Mixta</h4>
                                <p className="text-sm text-slate-500">Perfiles y planchas estructurales</p>
                            </div>
                            <div className="group cursor-default">
                                <div className="w-full h-44 sm:h-60 mx-auto flex items-center justify-center mb-5">
                                    <img src="/img/empresa/lata.png" alt="Lata" className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <h4 className="font-black text-slate-900 uppercase text-lg">Lata</h4>
                                <p className="text-sm text-slate-500">Planchas, zunchos, alambrones</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Proceso de Transformación */}
                <section className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-14 relative overflow-hidden">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-black text-slate-900 uppercase">Nuestro Proceso</h2>
                        <p className="text-slate-500 mt-2">Desde la recolección en terreno hasta el acondicionamiento final de la chatarra.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">

                        {/* Paso 1 */}
                        <div className="w-full md:w-1/3 flex flex-col items-center group">
                            <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-md border border-slate-200 relative">
                                <div className="absolute top-3 left-3 bg-slate-900 text-white font-black px-3 py-1 text-xs rounded z-10">1. RECOLECCIÓN</div>
                                <img src="/img/proceso/proceso1.png" alt="Recolección en Batea" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                        </div>

                        {/* Flecha */}
                        <div className="hidden md:flex text-red-600">
                            <svg className="w-12 h-12 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        </div>

                        {/* Paso 2 */}
                        <div className="w-full md:w-1/3 flex flex-col gap-4 group">
                            <div className="w-full h-32 md:h-[8.5rem] rounded-xl overflow-hidden shadow-md border border-slate-200 relative">
                                <div className="absolute top-3 left-3 bg-slate-900 text-white font-black px-3 py-1 text-xs rounded z-10 shadow">2. RECEPCIÓN</div>
                                <img src="/img/proceso/proceso2%20(2).png" alt="Recepción de Chatarra" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="w-full h-32 md:h-[8.5rem] rounded-xl overflow-hidden shadow-md border border-slate-200 relative">
                                <img src="/img/proceso/proceso2.png" alt="Recepción de Pletina" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                        </div>

                        {/* Flecha */}
                        <div className="hidden md:flex text-red-600">
                            <svg className="w-12 h-12 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        </div>

                        {/* Paso 3 */}
                        <div className="w-full md:w-1/3 flex flex-col gap-4 group">
                            <div className="w-full h-32 md:h-[8.5rem] rounded-xl overflow-hidden shadow-md border border-slate-200 relative">
                                <div className="absolute top-3 left-3 bg-red-600 text-white font-black px-3 py-1 text-xs rounded z-10 shadow">3. ACONDICIONADO</div>
                                <img src="/img/proceso/proceso%203.png" alt="Fierro Procesado 1" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                            <div className="w-full h-32 md:h-[8.5rem] rounded-xl overflow-hidden shadow-md border border-slate-200 relative">
                                <img src="/img/proceso/proceso%203%20(2).png" alt="Fierro Procesado 2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                            </div>
                        </div>

                    </div>
                </section>

                {/* Productos Procesados (Lo que vendemos) */}
                <section className="space-y-8 pt-8">
                    <div className="border-b border-slate-200 pb-4">
                        <h2 className="text-3xl font-black text-slate-900 uppercase">Productos Procesados (Salida)</h2>
                        <p className="text-slate-500 mt-2">Insumos de alta pureza destinados a la refundición y procesos tecnológicos.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Acero Acondicionado */}
                        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 flex flex-col group relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                            <div className="p-10 flex-grow space-y-4 relative z-10">
                                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-red-500 mb-6 border border-slate-700">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Acero para Siderúrgicas</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    La chatarra y barra de acero recolectada atraviesa un riguroso proceso de corte mecánico y preparación técnica en nuestras instalaciones.
                                </p>
                                <p className="text-slate-300 font-medium text-sm">
                                    Este material acondicionado retorna a la cadena productiva abasteciendo directamente a las principales siderúrgicas del país para su refundición inmediata, asegurando altos estándares de calidad y densidad.
                                </p>
                            </div>
                        </div>

                        {/* Cloruro Férrico */}
                        <div className="bg-red-600 rounded-2xl overflow-hidden shadow-xl border border-red-700 flex flex-col group relative">
                            <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
                                <svg className="w-64 h-64 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                            </div>
                            <div className="p-10 flex-grow space-y-4 relative z-10">
                                <div className="w-16 h-16 bg-red-800/50 rounded-xl flex items-center justify-center text-white mb-6 border border-red-500">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Derivados: Cloruro Férrico</h3>
                                <p className="text-red-100 text-sm leading-relaxed">
                                    Nuestra economía circular va un paso más allá de la chatarra tradicional. Proveemos insumos ferrosos de altísima especificidad química.
                                </p>
                                <p className="text-white font-bold text-sm">
                                    Estos insumos son el componente clave para la generación de Cloruro Férrico, un químico fundamental utilizado en los procesos tecnológicos de desalinización de aguas marinas a lo largo de todo el país.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="bg-slate-100 rounded-2xl p-10 text-center border border-slate-200 mt-12">
                    <h2 className="text-2xl font-black text-slate-900 uppercase mb-4">¿Requiere nuestros productos o servicios?</h2>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Contacte a nuestro equipo comercial para evaluar requerimientos técnicos, volúmenes de entrega y coordinación logística.</p>
                    <Link href="/contacto" className="inline-block px-8 py-3 bg-red-600 text-white font-bold text-sm uppercase rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
                        Contactar a Ventas
                    </Link>
                </section>

            </div>
        </div>
    );
}