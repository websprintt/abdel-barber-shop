import { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SchemaLocalBusiness from './components/SchemaLocalBusiness';
import HomeView from './components/HomeView';
import SecurityCenter from './components/SecurityCenter';

// Lazy load secondary views to reduce the initial bundle size and boost page load speed
const ServicesView = lazy(() => import('./components/ServicesView'));
const AboutView = lazy(() => import('./components/AboutView'));

import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER } from './data';

// Helper path handlers to seamlessly support GitHub Pages subfolder hosting (websprintt.github.io/abdel-barber-shop/)
const getCleanPath = (pathname: string) => {
  let path = pathname;
  if (path.startsWith('/abdel-barber-shop')) {
    path = path.substring('/abdel-barber-shop'.length);
  }
  return path || '/';
};

const getFullPath = (cleanPath: string) => {
  const isGithubPages = window.location.pathname.startsWith('/abdel-barber-shop');
  if (isGithubPages) {
    if (cleanPath === '/') return '/abdel-barber-shop/';
    return `/abdel-barber-shop${cleanPath}`;
  }
  return cleanPath;
};

export default function App() {
  // Simple SPA dynamic routing based on browser pathname
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const validPaths = ['/', '/servicios-barberia-ciudad-real', '/barberia-ciudad-real'];
    const path = getCleanPath(window.location.pathname);
    return validPaths.includes(path) ? path : '/';
  });

  const [openedSecurityTab, setOpenedSecurityTab] = useState<'legal' | 'cookies' | 'privacy' | 'security' | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Synchronize browser backward and forward history buttons
  useEffect(() => {
    const handlePopState = () => {
      const validPaths = ['/', '/servicios-barberia-ciudad-real', '/barberia-ciudad-real'];
      const path = getCleanPath(window.location.pathname);
      setCurrentPath(validPaths.includes(path) ? path : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Monitor scroll for ScrollToTop button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set page titles and meta description configurations dynamically for maximum local SEO
  useEffect(() => {
    const baseTitle = " | Abdel Barber Shop";
    const metaDescElement = document.querySelector('meta[name="description"]');

    if (currentPath === '/') {
      document.title = "Barbería en Ciudad Real" + baseTitle;
      if (metaDescElement) {
        metaDescElement.setAttribute(
          "content",
          "Barbería en Ciudad Real con más de 110 reseñas y 4.8 estrellas. Cortes modernos, fades, barba y atención profesional. Reserva tu cita."
        );
      }
    } else if (currentPath === '/servicios-barberia-ciudad-real') {
      document.title = "Peluquería de Caballero y Tarifas en Ciudad Real" + baseTitle;
      if (metaDescElement) {
        metaDescElement.setAttribute(
          "content",
          "Mira nuestros precios de corte clásico, degradados, fades modernos y arreglo de barba en Ciudad Real. Reserva tu cita online rápidamente."
        );
      }
    } else if (currentPath === '/barberia-ciudad-real') {
      document.title = "Barbero en Ciudad Real — Nuestra Historia" + baseTitle;
      if (metaDescElement) {
        metaDescElement.setAttribute(
          "content",
          "Conoce la historia de Abdel Barber Shop en Ciudad Real. Pasión por la barbería tradicional, atención al detalle y confianza para nuestros clientes."
        );
      }
    }
  }, [currentPath]);

  // Handle high quality custom navigation trigger
  const handleNavigate = (path: string) => {
    window.history.pushState(null, '', getFullPath(path));
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch renderer view selector
  const renderActiveView = () => {
    switch (currentPath) {
      case '/':
        return <HomeView onNavigate={handleNavigate} />;
      case '/servicios-barberia-ciudad-real':
        return <ServicesView />;
      case '/barberia-ciudad-real':
        return <AboutView />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-gold-primary selection:text-slate-950">
      
      {/* 1. SEO Structured Data Injection */}
      <SchemaLocalBusiness />

      {/* 2. Glassmorphic Navigation Header */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* 3. Main content blocks */}
      <main className="flex-grow">
        <Suspense fallback={
          <div className="min-h-[70vh] bg-slate-950 flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 border-2 border-gold-primary border-t-transparent rounded-full animate-spin shadow-lg" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-primary animate-pulse">Cargando...</p>
          </div>
        }>
          {renderActiveView()}
        </Suspense>
      </main>

      {/* 4. Contact & Address Footer */}
      <Footer onNavigate={handleNavigate} onOpenSecurityModal={(tab) => setOpenedSecurityTab(tab)} />

      {/* Security & GDRP Cookie Banner & Compliance center */}
      <SecurityCenter initialOpenModal={openedSecurityTab} onCloseModal={() => setOpenedSecurityTab(null)} />

      {/* 5. Mobile & Desktop FLOATING WHATSAPP EXPRESS BUTTON (Botsones fijos de conversión) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 group items-end">
        {/* Hover help tip banner */}
        <div className="hidden sm:flex bg-slate-900 border border-gold-primary/30 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-2xl items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>¡Abdel responde al instante por WhatsApp!</span>
        </div>

        <div className="flex gap-2.5 items-center">
          {/* Scroll to top component wrapper */}
          {showScrollTop && (
            <button
              onClick={handleScrollToTop}
              className="bg-slate-900 border border-slate-800 p-3 rounded-full text-slate-400 hover:text-white hover:border-gold-primary transition-all duration-300 shadow-2xl shrink-0 outline-none cursor-pointer"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}

          {/* Core Green Floating WhatsApp Button */}
          <a
            href="https://wa.me/34602817759?text=Hola%20Abdel,%20me%20gustar%C3%ADa%20reservar%20una%20cita%20para%20un%20corte"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-4 rounded-full shadow-2xl hover:shadow-emerald-500/20 transform hover:scale-110 active:scale-95 transition-all duration-300 shrink-0 relative flex items-center justify-center cursor-pointer animate-pulse-slow border-2 border-slate-950 outline-none"
            title="Pedir Cita por WhatsApp"
          >
            <MessageSquare className="w-6 h-6 fill-current" />
            {/* Visual pulse ring effect */}
            <span className="absolute inset-0 rounded-full border border-emerald-500 animate-ping opacity-75 -z-10" />
          </a>
        </div>
      </div>

    </div>
  );
}
