'use client';

import { useState, FormEvent } from 'react';

export default function Contacto() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      
      {/* Mitad Izquierda: Contenido y Formulario */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-20 lg:px-20 xl:px-32">
        <div className="max-w-xl mx-auto w-full space-y-12">
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              Contacto <span className="text-red-600">Comercial</span>
            </h1>
            <div className="w-12 h-1.5 bg-red-600"></div>
            <p className="text-slate-600 text-lg leading-relaxed pt-2">
              Coordinemos el retiro, recepción y gestión integral de sus excedentes industriales de manera eficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-1">
                Ubicación & Horario
              </span>
              <p className="text-slate-900 font-medium">Jaime Repullo #385<br/>Talcahuano, Biobío</p>
              <p className="text-slate-500 text-sm mt-3">
                <span className="font-bold text-slate-700">Lunes a Jueves:</span> 8:00 - 17:30<br/>
                <span className="font-bold text-slate-700">Viernes:</span> 8:00 - 16:30
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-1">
                Contacto Directo
              </span>
              <p className="text-slate-900 font-medium">Isabel Alvarez<br/><span className="text-slate-500 text-sm">Gerente Comercial</span></p>
              <p className="text-slate-900 font-medium mt-3">
                +56 9 6218 5107<br/>
                <span className="text-slate-500 text-sm">administracion@metalysa.cl</span>
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200">
            <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase">Envíanos un mensaje</h3>
            {submitted ? (
              <div className="p-4 bg-green-50 border-l-4 border-green-600 text-green-900 font-medium">
                Mensaje enviado exitosamente. Nuestro equipo se pondrá en contacto a la brevedad.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nombre Completo</label>
                    <input type="text" required className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:bg-white focus:outline-none focus:border-red-600 transition-colors" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Empresa</label>
                    <input type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:bg-white focus:outline-none focus:border-red-600 transition-colors" placeholder="Opcional" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Correo Electrónico</label>
                    <input type="email" required className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:bg-white focus:outline-none focus:border-red-600 transition-colors" placeholder="correo@empresa.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Teléfono</label>
                    <input type="tel" className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:bg-white focus:outline-none focus:border-red-600 transition-colors" placeholder="+56 9 1234 5678" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Requerimiento</label>
                  <textarea rows={4} required className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:bg-white focus:outline-none focus:border-red-600 transition-colors resize-none" placeholder="Indique tipo de material, volumen estimado o servicio requerido..."></textarea>
                </div>
                <button type="submit" className="inline-flex justify-center items-center px-10 py-4 bg-red-600 hover:bg-slate-900 text-white font-bold tracking-widest uppercase transition-colors w-full sm:w-auto">
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Mitad Derecha: Mapa Edge-to-Edge */}
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-screen relative bg-slate-200">
        <iframe 
          src="https://www.google.com/maps?q=Jaime+Repullo+385,+Talcahuano,+Chile&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Ubicación Metalysa"
          className="transition-all duration-1000"
        ></iframe>
      </div>

    </div>
  );
}