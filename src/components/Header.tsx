import { useState, useEffect } from 'react';
import { Menu, X, Scissors, ShoppingBag, Phone, ArrowRight } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER } from '../data';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    // Scroll to top upon page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Servicios y Tarifas', path: '/servicios-barberia-ciudad-real' },
    { label: 'Sobre Abdel', path: '/barberia-ciudad-real' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-gold-primary/20 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <div
            id="brand-logo"
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="bg-gradient-to-br from-gold-primary to-gold-deep p-2 rounded-lg text-slate-950 transition-transform duration-300 group-hover:rotate-12">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display text-lg sm:text-2xl font-black tracking-widest text-white group-hover:text-gold-primary transition-colors block">
                ABDEL
              </span>
              <span className="font-mono text-[9px] text-gold-primary tracking-[0.25em] block uppercase -mt-1 font-bold">
                BARBER SHOP
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative font-display text-sm uppercase tracking-wider font-semibold py-2 transition-colors duration-300 focus:outline-none ${
                    isActive ? 'text-gold-primary' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-primary to-gold-deep rounded-full shadow-lg shadow-gold-primary/50" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 text-slate-300 hover:text-gold-primary transition-colors font-mono text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href="https://wa.me/34602817759?text=Hola%20Abdel,%20me%20gustar%C3%ADa%20reservar%20una%20cita%20para%20un%20corte"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 font-display font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md hover:from-gold-hover hover:to-gold-primary transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 shadow-lg shadow-gold-primary/10 hover:shadow-gold-primary/20 cursor-pointer"
            >
              <span>Pedir Cita</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-gold-primary"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-[64px] bg-slate-950/98 border-b border-gold-primary/20 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100 z-40' : '-translate-y-10 opacity-0 pointer-events-none -z-50'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-slate-950/95 backdrop-blur-lg">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`block w-full text-left font-display text-base uppercase tracking-wider font-semibold px-4 py-3 rounded-md transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-primary/10 to-gold-deep/10 text-gold-primary border-l-2 border-gold-primary'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-900 mt-4 px-4 flex flex-col gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 text-slate-300 hover:text-gold-primary py-2 text-sm font-mono"
            >
              <Phone className="w-4 h-4 text-gold-primary" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            
            <a
              href="https://wa.me/34602817759?text=Hola%20Abdel,%20me%20gustar%C3%ADa%20reservar%20una%20cita%20para%20un%20corte"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 text-center font-display font-bold text-sm uppercase tracking-wider py-3 rounded-md hover:from-gold-hover hover:to-gold-primary transition-colors flex items-center justify-center gap-2 shadow-lg shadow-gold-primary/10"
            >
              <span>Reservar por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
