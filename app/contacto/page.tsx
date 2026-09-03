'use client';

import { useState, FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacto() {
  const form = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setError(null);

    // TODO: Reemplaza estos valores con tus credenciales de EmailJS
    const SERVICE_ID = 'service_pt73w9o';
    const TEMPLATE_ID = 'template_fll4hzt';
    const PUBLIC_KEY = '7vEbxUqgOeK-e6KkZ';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        setLoading(false);
        form.current?.reset(); // Limpia los campos del formulario
      }, (err) => {
        console.log(err);
        setError(err?.text || 'Error desconocido al conectar con EmailJS');
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Contenedor Principal para Contacto y Formulario */}
      <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:px-8 flex flex-col lg:flex-row gap-16 xl:gap-24">

        {/* Columna Izquierda: Información de Contacto */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12">

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
              <p className="text-slate-900 font-medium">Jaime Repullo #385<br />Talcahuano, Biobío</p>
              <p className="text-slate-500 text-sm mt-3">
                <span className="font-bold text-slate-700">Lunes a Jueves:</span> 8:00 - 17:30<br />
                <span className="font-bold text-slate-700">Viernes:</span> 8:00 - 16:30
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-1">
                Contacto Directo
              </span>
              <p className="text-slate-900 font-medium">Isabel Alvarez<br /><span className="text-slate-500 text-sm">Gerente Comercial</span></p>
              <p className="text-slate-900 font-medium mt-3">
                +56 9 6218 5107<br />
                <span className="text-slate-500 text-sm">administracion@metalysa.cl</span>
              </p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="bg-slate-50 p-8 lg:p-10 rounded-xl border border-slate-100">
            <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase">Envíanos un mensaje</h3>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              
              {submitted && !error && (
                <div className="p-4 bg-green-50 border-l-4 border-green-600 text-green-900 font-medium text-sm">
                  Mensaje enviado exitosamente. Nuestro equipo se pondrá en contacto a la brevedad.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border-l-4 border-red-600 text-red-900 font-medium text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nombre Completo</label>
                  <input type="text" name="user_name" required className="w-full bg-white border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-red-600 transition-colors" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Empresa</label>
                  <input type="text" name="user_company" className="w-full bg-white border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-red-600 transition-colors" placeholder="Opcional" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Correo Electrónico</label>
                  <input type="email" name="user_email" required className="w-full bg-white border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-red-600 transition-colors" placeholder="correo@empresa.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Teléfono</label>
                  <input type="tel" name="user_phone" required className="w-full bg-white border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-red-600 transition-colors" placeholder="+56 9 1234 5678" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Requerimiento</label>
                <textarea rows={4} name="message" required className="w-full bg-white border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:outline-none focus:border-red-600 transition-colors resize-none" placeholder="Indique tipo de material, volumen estimado o servicio requerido..."></textarea>
              </div>
              <button type="submit" disabled={loading} className="inline-flex justify-center items-center px-10 py-4 bg-red-600 hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold tracking-widest uppercase transition-colors w-full sm:w-auto">
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Sección Inferior: Mapa */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="w-full h-[400px] lg:h-[500px] bg-slate-200 relative rounded-xl overflow-hidden shadow-sm border border-slate-200">
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

    </div>
  );
}