import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  // footer corporativo
  return (
    <footer className="bg-slate-100 text-slate-600 border-t-4 border-red-600 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Columna Marca */}
        <div className="md:col-span-2 space-y-4">
          <Image 
            src="/img/metalysa-logo.png" 
            alt="Logo Metalysa" 
            width={160} 
            height={60} 
            className="w-32 sm:w-40 h-auto object-contain"
          />
          <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
            Empresa dedicada al reciclaje de residuos ferrosos y procesamiento de barra de acero para la refundición en siderúrgicas y obtención de insumos para cloruro férrico.
          </p>
        </div>

        {/* Columna Navegacion */}
        <div className="space-y-3">
          <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider border-b border-slate-200 pb-2">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm font-medium">
            <li><Link href="/" className="hover:text-red-600 transition-colors">Inicio</Link></li>
            <li><Link href="/productos" className="hover:text-red-600 transition-colors">Productos</Link></li>
            <li><Link href="/servicios" className="hover:text-red-600 transition-colors">Servicios</Link></li>
            <li><Link href="/nosotros" className="hover:text-red-600 transition-colors">Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-red-600 transition-colors">Contacto</Link></li>

          </ul>
        </div>

        {/* Columna Planta y Operaciones */}
        <div className="space-y-3">
          <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider border-b border-slate-200 pb-2">
            Planta Talcahuano
          </h3>
          <div className="space-y-2 text-sm">
            <p className="text-slate-700 font-medium">Jaime Repullo #385</p>
            <p className="text-slate-600">Talcahuano, Región del Biobío</p>
            <p className="text-slate-600">Tel: +56 9 6218 5107</p>
            <p className="text-slate-600">Email: administracion@metalysa.cl</p>
          </div>
        </div>

      </div>

      <div className="bg-slate-200 border-t border-slate-300 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>© {new Date().getFullYear()} Metalysa Aceros. Todos los derechos reservados.</span>
          <span>Talcahuano, Chile</span>
        </div>
      </div>
    </footer>
  );
}