'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-white/20 backdrop-blur-md border-b border-white/30'}`}>

        {/* Top bar de contacto (Se oculta de forma suave al hacer scroll para ahorrar espacio) */}
        <div className={`hidden md:block w-full bg-red-700 text-white text-xs font-medium transition-all duration-300 overflow-hidden flex-shrink-0 ${scrolled ? 'h-0 opacity-0' : 'h-8 opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="mailto:administracion@metalysa.cl" className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">administracion@metalysa.cl</span>
              </a>
              <a href="tel:+56962185107" className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +56 9 6218 5107
              </a>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Jaime Repullo #385, Talcahuano
            </div>
          </div>
        </div>

        {/* la barrita de navegacion principal */}
        <nav className={`max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* el logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src={scrolled ? "/img/metalysa-logo.png" : "/img/metalysa-logo-blanco.png"}
              alt="Logo Metalysa"
              width={180}
              height={70}
              className={`h-auto object-contain transition-all duration-300 group-hover:opacity-90 ${scrolled ? "w-24 sm:w-28" : "w-32 sm:w-40"
                }`}
              priority
            />
          </Link>

          {/* botones pa pc */}
          <div className={`hidden md:flex items-center space-x-8 font-semibold text-sm transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}>
            <Link href="/" className="relative py-2 hover:text-red-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
              Inicio
            </Link>
            <Link href="/productos" className="relative py-2 hover:text-red-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
              Productos
            </Link>
            <Link href="/servicios" className="relative py-2 hover:text-red-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
              Servicios
            </Link>
            <Link href="/nosotros" className="relative py-2 hover:text-red-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
              Nosotros
            </Link>

            <Link
              href="/contacto"
              className="bg-red-600 text-white px-5 py-2.5 rounded hover:bg-red-700 transition-colors shadow-sm font-bold"
            >
              Contacto
            </Link>
          </div>

          {/* boton hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
            className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* menu del celu */}
        {isOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg border-b border-white/20 px-6 pt-4 pb-8 space-y-2 shadow-2xl rounded-b-2xl">
            <Link href="/" onClick={() => setIsOpen(false)} className="block py-3 text-lg text-slate-800 font-semibold hover:text-red-600 border-b border-slate-50/50">
              Inicio
            </Link>
            <Link href="/productos" onClick={() => setIsOpen(false)} className="block py-3 text-lg text-slate-800 font-semibold hover:text-red-600 border-b border-slate-50">
              Productos
            </Link>
            <Link href="/servicios" onClick={() => setIsOpen(false)} className="block py-3 text-lg text-slate-800 font-semibold hover:text-red-600 border-b border-slate-50">
              Servicios
            </Link>
            <Link href="/nosotros" onClick={() => setIsOpen(false)} className="block py-3 text-lg text-slate-800 font-semibold hover:text-red-600 border-b border-slate-50">
              Nosotros
            </Link>

            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-red-600 text-white font-bold py-4 rounded-xl mt-6 hover:bg-red-700 transition-colors shadow-md text-lg"
            >
              Contacto Directo
            </Link>
          </div>
        )}
      </header>
    </>
  );
}