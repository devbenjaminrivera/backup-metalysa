import React from 'react';

export default function TestDisenos2() {
  const beneficios = [
    { num: '01', sub: 'GESTIÓN CENTRALIZADA', title: 'Interlocutor Único', desc: 'Reducimos su carga administrativa al consolidar la gestión operativa en un solo socio.' },
    { num: '02', sub: 'FLUJO CONSTANTE', title: 'Continuidad Operativa', desc: 'Evitamos la acumulación riesgosa mediante retiros rigurosamente programados.' },
    { num: '03', sub: 'CUMPLIMIENTO LEGAL', title: 'Respaldo Documental', desc: 'Certificados de disposición final y trazabilidad en plataformas exigidas por ley.' }
  ];

  const publicos = [
    { num: '01', sub: 'RECOLECCIÓN', title: 'Captación de Chatarra', desc: 'Retiros constantes en maestranzas, constructoras y talleres mecánicos.' },
    { num: '02', sub: 'TERRENO', title: 'Generación en Faenas', desc: 'Servicio directo y a escala en operaciones de minería e industria pesada.' },
    { num: '03', sub: 'RED LOGÍSTICA', title: 'Centros de Acopio', desc: 'Integración y alianzas estratégicas para garantizar cobertura a nivel nacional.' }
  ];

  return (
    <div className="min-h-screen bg-white pb-32">
      <div className="bg-slate-900 text-white py-12 text-center mb-16 mt-20">
        <h1 className="text-3xl font-black uppercase tracking-widest">Laboratorio de Diseño V2</h1>
        <p className="text-slate-400 mt-2">Pruebas para 'Valor Estratégico' y 'Público Objetivo'</p>
      </div>

      <div className="max-w-7xl mx-auto space-y-32 px-6">
        
        {/* Combo 1: Editorial Asimétrico */}
        <section>
          <div className="mb-12 border-b-4 border-red-600 pb-2">
            <h2 className="text-2xl font-black text-slate-900 uppercase">Combo 1: Editorial Asimétrico</h2>
            <p className="text-slate-500">Un layout dividido. Muy propio de revistas de arquitectura. Elimina la redundancia de las 3 columnas y le da mucho más peso al título principal.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 border-b border-slate-300 pb-16">
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm block mb-4">Valor Estratégico</span>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase leading-tight mb-6">¿Por qué <br className="hidden lg:block"/> externalizar <br className="hidden lg:block"/> con Metalysa?</h3>
              <p className="text-slate-600 text-lg">Asumimos el riesgo y el control logístico-ambiental para que su empresa se enfoque exclusivamente en producir.</p>
            </div>
            <div className="lg:w-2/3 grid gap-10 lg:border-l lg:border-slate-200 lg:pl-12">
              {beneficios.map((b, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-3xl font-black text-slate-300 w-12 flex-shrink-0 leading-none">{b.num}</span>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 uppercase mb-2 leading-none">{b.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 py-16 px-8 lg:px-16 mt-16 border-y border-slate-200">
             <div className="mb-12 text-center max-w-2xl mx-auto">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-sm block mb-3">Público Objetivo</span>
                <h3 className="text-3xl font-black text-slate-900 uppercase">Soluciones para la Gran Industria</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-300">
                {publicos.map((p, i) => (
                  <div key={i} className="pt-6 md:pt-0 md:px-8 first:md:pl-0 last:md:pr-0">
                    <span className="text-xs font-bold text-red-600 tracking-widest mb-2 block">{p.sub}</span>
                    <h4 className="text-lg font-black text-slate-900 uppercase mb-3">{p.title}</h4>
                    <p className="text-slate-600 text-sm">{p.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>


        {/* Combo 2: Grid Industrial (Módulos Sólidos) */}
        <section>
          <div className="mb-12 border-b-4 border-slate-900 pb-2">
            <h2 className="text-2xl font-black text-slate-900 uppercase">Combo 2: Módulos de Contenedor</h2>
            <p className="text-slate-500">Bloques sólidos con alto contraste inspirados en los contenedores de carga. Cero bordes redondeados, puro impacto industrial.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <div className="col-span-full md:col-span-2 lg:col-span-3 bg-red-600 text-white p-10 md:p-16 flex flex-col justify-center">
              <span className="text-red-200 font-bold uppercase tracking-widest text-sm block mb-4">Valor Estratégico</span>
              <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight max-w-3xl">¿Por qué externalizar con Metalysa?</h3>
            </div>
            
            {beneficios.map((b, i) => (
              <div key={i} className="bg-slate-900 text-white p-8 md:p-10 border-t-4 border-red-600 hover:bg-slate-800 transition-colors">
                <span className="text-slate-700 font-black text-3xl mb-6 block leading-none">{b.num}</span>
                <h4 className="text-xl font-black uppercase mb-4 leading-tight">{b.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
             <div className="lg:col-span-4 bg-slate-100 p-10 md:p-12 border border-slate-200 flex flex-col justify-center">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-sm block mb-3">Público Objetivo</span>
                <h3 className="text-3xl font-black text-slate-900 uppercase leading-tight">Soluciones Industriales</h3>
             </div>
             <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {publicos.map((p, i) => (
                  <div key={i} className="bg-slate-50 p-6 md:p-8 border border-slate-200 hover:border-slate-300 transition-colors">
                    <span className="text-red-600 font-bold text-xs tracking-widest block mb-4">{p.sub}</span>
                    <h4 className="text-lg font-black text-slate-900 uppercase mb-3 leading-tight">{p.title}</h4>
                    <p className="text-slate-600 text-xs">{p.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Combo 3: Layout Tabular Extremo */}
        <section>
          <div className="mb-12 border-b-4 border-slate-400 pb-2">
            <h2 className="text-2xl font-black text-slate-900 uppercase">Combo 3: Tabular Brutalista</h2>
            <p className="text-slate-500">Un enfoque frío, calculado y extremadamente técnico. Cajas con bordes gruesos y separación dura.</p>
          </div>

          <div className="border-[3px] border-slate-900 mb-16">
             <div className="bg-slate-900 text-white px-6 md:px-10 py-6 flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Valor Estratégico</h3>
                <span className="hidden sm:block text-slate-400 text-xs font-bold tracking-widest">WHY METALYSA</span>
             </div>
             <div className="divide-y-[3px] divide-slate-900">
                {beneficios.map((b, i) => (
                  <div key={i} className="flex flex-col md:flex-row bg-white hover:bg-slate-50 transition-colors">
                    <div className="md:w-1/3 p-6 md:p-8 border-b-[3px] md:border-b-0 md:border-r-[3px] border-slate-900 bg-slate-50">
                       <span className="text-red-600 font-bold tracking-widest text-xs mb-2 block">{b.sub}</span>
                       <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase leading-tight">{b.title}</h4>
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8 flex items-center">
                       <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="border-[3px] border-slate-900">
             <div className="bg-slate-200 text-slate-900 px-6 md:px-10 py-6 border-b-[3px] border-slate-900">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Público Objetivo</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-slate-900">
                {publicos.map((p, i) => (
                  <div key={i} className="bg-white p-8 md:p-10 hover:bg-slate-50 transition-colors">
                    <span className="text-5xl font-black text-slate-200 mb-6 block leading-none">{p.num}</span>
                    <h4 className="text-lg font-black text-slate-900 uppercase mb-3">{p.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

      </div>
    </div>
  );
}
