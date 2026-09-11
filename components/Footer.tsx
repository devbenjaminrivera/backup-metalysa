import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-neutral-900 text-white border-t-4 border-red-600 mt-auto overflow-hidden">
      {/* Imagen de fondo (Solo visible en pantallas medianas o grandes) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <Image 
          src="/img/3.jpg" 
          alt="Fondo footer"
          fill
          className="object-fill object-center opacity-80"
        />
        {/* Overlay oscuro para asegurar la legibilidad del texto */}
        <div className="absolute inset-0 bg-neutral-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-10 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

        {/* Logo y texto */}
        <div className="space-y-4">
          <Image
            src="/img/metalysa-logo-blanco.png"
            alt="Logo Metalysa"
            width={160}
            height={60}
            className="w-32 sm:w-40 h-auto object-contain"
          />
          <p className="text-sm leading-relaxed text-white max-w-sm">
            Empresa dedicada al reciclaje de residuos ferrosos y procesamiento de barra de acero para la refundición en siderúrgicas y obtención de insumos para cloruro férrico.
          </p>
        </div>

        {/* Menú de sitio */}
        <div className="space-y-5">
          <h3 className="text-white text-sm font-bold uppercase tracking-widest">
            Navegación
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link href="/" className="text-white hover:text-red-500 transition-colors">Inicio</Link></li>
            <li><Link href="/productos" className="text-white hover:text-red-500 transition-colors">Productos</Link></li>
            <li><Link href="/servicios" className="text-white hover:text-red-500 transition-colors">Servicios</Link></li>
            <li><Link href="/nosotros" className="text-white hover:text-red-500 transition-colors">Nosotros</Link></li>
            <li><Link href="/contacto" className="text-white hover:text-red-500 transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="space-y-5">
          <h3 className="text-white text-sm font-bold uppercase tracking-widest">
            Contacto
          </h3>
          <div className="text-sm space-y-4">
            <p className="text-white">Ponte en contacto con nosotros</p>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="flex flex-col space-y-1 text-white">
                <span>administracion@metalysa.cl</span>
                <span>metalysaacerospa@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white">+56 9 6218 5107</span>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="flex flex-col space-y-1 text-white">
                <span>Jaime Repullo #385</span>
                <span className="text-white">Talcahuano, Región del Biobío</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="relative z-10 bg-neutral-950/80 border-t border-neutral-800 py-4 text-xs text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>{new Date().getFullYear()} Metalysa Aceros. Todos los derechos reservados.</span>
          <span>Talcahuano, Chile</span>
        </div>
      </div>
    </footer>
  );
}