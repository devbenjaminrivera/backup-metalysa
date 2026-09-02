'use client';

import { useState, FormEvent } from 'react';

export default function Contacto() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Encabezado */}
        <section className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-3">
            Contacto Directo
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Comunícate con <span className="text-red-600">Nosotros</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Estamos disponibles para coordinar el retiro, recepción y gestión integral de tus excedentes industriales.
          </p>
        </section>

        {/* Contenedor Principal (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Mitad Izquierda: Info y Formulario */}
          <div className="p-8 md:p-12 flex flex-col justify-between space-y-10">
            
            {/* Info Corporativa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-red-600 font-bold mb-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Ubicación
                </div>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">Jaime Repullo #385<br/>Talcahuano, Biobío</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-red-600 font-bold mb-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Contacto
                </div>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">+56 9 6218 5107<br/>administracion@metalysa.cl</p>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Formulario */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Envíanos un mensaje</h3>
              {submitted ? (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded-lg font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Mensaje enviado exitosamente. Te contactaremos pronto.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase text-slate-500">Nombre</label>
                      <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase text-slate-500">Empresa</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all" placeholder="Opcional" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase text-slate-500">Correo</label>
                      <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all" placeholder="correo@ejemplo.com" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase text-slate-500">Teléfono</label>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all" placeholder="+56 9 1234 5678" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase text-slate-500">Mensaje</label>
                    <textarea rows={4} required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none" placeholder="¿En qué te podemos ayudar?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-lg text-sm transition-colors shadow-lg shadow-red-600/20">
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Mitad Derecha: Mapa */}
          <div className="relative min-h-[400px] lg:min-h-full bg-slate-200">
            <iframe 
              src="https://www.google.com/maps?q=Jaime+Repullo+385,+Talcahuano,+Chile&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación Metalysa"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}