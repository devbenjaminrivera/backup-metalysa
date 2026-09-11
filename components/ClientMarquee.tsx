import Image from 'next/image';

const CLIENTES = [
  { nombre: "EBCO", logo: "/img/clientes/ebco.png", scale: "scale-125" },
  { nombre: "Esperanza", logo: "/img/clientes/esperanza.png", scale: "scale-110" },
  { nombre: "Enap", logo: "/img/clientes/enap.png", scale: "scale-100" },
  { nombre: "Formac", logo: "/img/clientes/formac.png", scale: "scale-90" },
  { nombre: "AZA", logo: "/img/clientes/aza.png", scale: "scale-90" },
  { nombre: "OXY", logo: "/img/clientes/oxy.png", scale: "scale-110" },
  { nombre: "Valmar", logo: "/img/clientes/valmar.png", scale: "scale-[1.9]" },
  { nombre: "Echeverría Izquierdo", logo: "/img/clientes/echeverria.png", scale: "scale-[1.9]" },
  { nombre: "Icafal", logo: "/img/clientes/icafal.png", scale: "scale-75" },
  { nombre: "Altos del Valle Blanco", logo: "/img/clientes/valle.png", scale: "scale-125" },
  { nombre: "Noval", logo: "/img/clientes/noval.png", scale: "scale-125" },
];

export default function ClientMarquee() {
  // Duplicamos el array para el efecto infinito del marquee
  const items = [...CLIENTES, ...CLIENTES];

  return (
    <section className="bg-slate-50 py-16 border-b border-slate-200 overflow-hidden relative">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block">
          Confían en nuestras soluciones circulares
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center">
          {items.map((cliente, index) => (
            <div
              key={index}
              className="relative flex shrink-0 items-center justify-center px-4 sm:px-6 mx-1 h-16 sm:h-24 w-40 sm:w-60 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={cliente.logo}
                alt={cliente.nombre}
                fill
                className={`object-contain ${cliente.scale || ""}`}
                sizes="(max-width: 640px) 160px, 240px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
