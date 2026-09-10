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
      {/* espacio invisible pa q no salte al inicio */}
      <div className="h-24 w-full"></div>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'}`}>


      {/* la barrita superior */}
      <nav className={`max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-24'}`}>
        {/* el logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/img/metalysa-logo.png" 
            alt="Logo Metalysa" 
            width={180} 
            height={70} 
            className={`h-auto object-contain transition-all duration-300 group-hover:opacity-90 ${
              scrolled ? "w-24 sm:w-28" : "w-32 sm:w-40"
              }`}
            priority
          />
        </Link>

        {/* botones pa pc */}
        <div className="hidden md:flex items-center space-x-8 font-semibold text-slate-700 text-sm">
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
          className="md:hidden text-slate-800 p-2 focus:outline-none"
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
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-8 space-y-2 shadow-2xl rounded-b-2xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-3 text-lg text-slate-800 font-semibold hover:text-red-600 border-b border-slate-50">
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