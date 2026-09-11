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

    // llaves de emailjs
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

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
    <div className="min-h-screen bg-slate-50 flex flex-col pb-20">

      {/* Hero Portada */}
      <section className="relative min-h-[450px] h-[55vh] flex items-center justify-center pt-24 bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/img/empresa/Camion1.png')" }}
        ></div>
        {/* Overlay gris solicitado */}
        <div className="absolute inset-0 bg-slate-800/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-5 pb-16">
          <span className="block mb-3 text-red-500 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm drop-shadow-md">Atención Personalizada</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight drop-shadow-md">
            Contacto Comercial
          </h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto font-medium drop-shadow">
            Coordinemos el retiro, recepción y gestión integral de sus excedentes industriales de manera eficiente.
          </p>
        </div>
      </section>

      {/* Datos de Contacto */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          <div className="w-full lg:w-5/12 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
              Atención al <span className="text-red-600">Cliente</span>
            </h2>
            <div className="w-12 h-1.5 bg-red-600 mb-6"></div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Comunícate directamente con nuestra gerencia comercial para coordinar retiros, solicitar presupuestos o resolver dudas operativas.
            </p>
          </div>

          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-1">
                Ubicación & Horario
              </span>
              <p className="text-slate-900 font-bold text-lg">Jaime Repullo #385<br /><span className="font-medium text-base text-slate-700">Talcahuano, Biobío</span></p>
              <div className="text-slate-600 text-sm pt-2 space-y-1">
                <p><span className="font-bold text-slate-800">Lunes a Jueves:</span> 8:00 - 17:30</p>
                <p><span className="font-bold text-slate-800">Viernes:</span> 8:00 - 16:30</p>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-1">
                Contacto Directo
              </span>
              <p className="text-slate-900 font-bold text-lg">Isabel Alvarez<br /><span className="font-medium text-base text-slate-500">Gerente Comercial</span></p>
              <p className="text-slate-900 font-bold pt-2">+56 9 6218 5107</p>
              <div className="text-slate-600 text-sm flex flex-col space-y-1">
                <a href="mailto:administracion@metalysa.cl" className="hover:text-red-600 transition-colors">administracion@metalysa.cl</a>
                <a href="mailto:metalysaacerospa@gmail.com" className="hover:text-red-600 transition-colors">metalysaacerospa@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sección Formulario y Mapa */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* Formulario */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                Trabajemos <span className="text-red-600">Juntos</span>
              </h2>
              <div className="w-12 h-1.5 bg-red-600 mt-4"></div>
              <p className="text-slate-500 mt-4">Déjanos tus datos y requerimientos, te contactaremos a la brevedad.</p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">

              {submitted && !error && (
                <div className="p-4 bg-green-50 border-l-4 border-green-600 text-green-900 font-medium text-sm rounded-r-md">
                  Mensaje enviado exitosamente. Nuestro equipo se pondrá en contacto a la brevedad.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border-l-4 border-red-600 text-red-900 font-medium text-sm rounded-r-md">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nombre Completo</label>
                  <input type="text" name="user_name" required className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Empresa</label>
                  <input type="text" name="user_company" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all" placeholder="Opcional" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Correo Electrónico</label>
                  <input type="email" name="user_email" required className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all" placeholder="correo@empresa.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Teléfono</label>
                  <input type="tel" name="user_phone" required className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all" placeholder="+56 9 1234 5678" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Requerimiento</label>
                <textarea rows={4} name="message" required className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all resize-none" placeholder="Indique tipo de material, volumen estimado o servicio requerido..."></textarea>
              </div>
              <button type="submit" disabled={loading} className="inline-flex justify-center items-center px-10 py-4 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold tracking-widest uppercase transition-all rounded-lg w-full shadow-lg shadow-red-600/30">
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>

          {/* Mapa */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative bg-slate-200">
            <iframe
              src="https://www.google.com/maps?q=Jaime+Repullo+385,+Talcahuano,+Chile&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación Metalysa"
              className="grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>

    </div>
  );
}