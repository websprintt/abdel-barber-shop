import { Scissors, MapPin, Phone, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER, BUSINESS_HOURS, DIRECTIONS_URL, WHATSAPP_PHONE } from '../data';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenSecurityModal?: (tab: 'legal' | 'cookies' | 'privacy' | 'security') => void;
}

export default function Footer({ onNavigate, onOpenSecurityModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-950 border-t border-gold-primary/20 pt-16 pb-8 text-slate-400 relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Statement */}
          <div className="space-y-4">
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => handleLinkClick('/')}
            >
              <div className="bg-gradient-to-br from-gold-primary to-gold-deep p-1.5 rounded text-slate-950">
                <Scissors className="w-4 h-4" />
              </div>
              <div>
                <span className="font-display text-xl font-black tracking-widest text-white">ABDEL</span>
                <span className="font-mono text-[8px] text-gold-primary tracking-[0.2em] block uppercase -mt-1 font-bold">BARBER SHOP</span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-300">
              Barbería en Ciudad Real especializada en cortes masculinos, fades, degradados y arreglo de barba. 
              Pasión por el detalle, servicio impecable y acabados excepcionales para el hombre moderno.
            </p>
            
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-slate-300">Reserva abierta vía WhatsApp</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white border-b border-slate-900 pb-3 mb-4">
              Páginas de Interés
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('/')}
                  className="hover:text-gold-primary transition-colors hover:translate-x-1 duration-200 transform block text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/servicios-barberia-ciudad-real')}
                  className="hover:text-gold-primary transition-colors hover:translate-x-1 duration-200 transform block text-left"
                >
                  Servicios y Tarifas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/barberia-ciudad-real')}
                  className="hover:text-gold-primary transition-colors hover:translate-x-1 duration-200 transform block text-left"
                >
                  Sobre Abdel Barber
                </button>
              </li>
              <li>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-primary transition-colors hover:translate-x-1 duration-200 transform inline-flex items-center gap-1"
                >
                  <span>Cómo llegar</span>
                  <ExternalLink className="w-3 h-3 text-gold-primary/70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & SEO Local NAP */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white border-b border-slate-900 pb-3 mb-4">
              Contacto (Local SEO)
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white text-xs uppercase tracking-wide">Dirección Física:</strong>
                  <span className="text-xs text-slate-300 leading-normal block mt-0.5">
                    ABDEL BARBER SHOP
                    <br />
                    C. Estación Vía Crucis, Nº11 Local 2
                    <br />
                    13003 Ciudad Real, España
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-primary shrink-0" />
                <div>
                  <strong className="block text-white text-xs uppercase tracking-wide">Citas / Teléfono:</strong>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-xs text-slate-300 hover:text-gold-primary font-mono block mt-0.5">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <strong className="block text-white text-xs uppercase tracking-wide">WhatsApp Express:</strong>
                  <a
                    href="https://wa.me/34602817759?text=Hola%20Abdel,%20me%20gustar%C3%ADa%20reservar%20una%20cita%20para%20un%20corte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 hover:text-gold-primary font-mono block mt-0.5"
                  >
                    602 81 77 59
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white border-b border-slate-900 pb-3 mb-4">
              Horario de Apertura
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gold-primary mb-2 text-xs uppercase font-mono font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>Horas de Atención</span>
              </div>
              <table className="w-full text-xs text-slate-300 font-mono">
                <tbody>
                  {BUSINESS_HOURS.map((b) => (
                    <tr key={b.day} className="border-b border-slate-900/50 py-1 flex justify-between items-center">
                      <td className="text-slate-400 font-sans font-medium">{b.day}</td>
                      <td className={`text-right ${b.isClosed ? 'text-red-400 font-bold' : 'text-slate-300'}`}>{b.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <p>© {currentYear} ABDEL BARBER SHOP — Todos los derechos reservados.</p>
            <p className="mt-1">Sitio web diseñado para máximo rendimiento, posicionamiento y conversión en Ciudad Real.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenSecurityModal?.('legal')}
              className="hover:text-gold-primary transition-colors cursor-pointer bg-transparent border-none text-left p-0 text-xs font-mono"
            >
              Aviso Legal
            </button>
            <span className="text-slate-800">|</span>
            <button
              onClick={() => onOpenSecurityModal?.('cookies')}
              className="hover:text-gold-primary transition-colors cursor-pointer bg-transparent border-none text-left p-0 text-xs font-mono"
            >
              Cookies
            </button>
            <span className="text-slate-800">|</span>
            <button
              onClick={() => onOpenSecurityModal?.('privacy')}
              className="hover:text-gold-primary transition-colors cursor-pointer bg-transparent border-none text-left p-0 text-xs font-mono"
            >
              Privacidad y RGPD
            </button>
            <span className="text-slate-800">|</span>
            <button
              onClick={() => onOpenSecurityModal?.('security')}
              className="hover:text-emerald-400 transition-colors cursor-pointer bg-transparent border-none text-left p-0 text-xs font-mono text-emerald-500/90 flex items-center gap-1"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Garantía de Seguridad
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
