import { useState } from 'react';
import {
  Star,
  MessageSquare,
  MapPin,
  Calendar,
  Phone,
  Award,
  Scissors,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Clock,
  Check,
  Zap
} from 'lucide-react';
import {
  HERO_DATA,
  REVIEWS,
  SERVICES,
  GALLERY_ITEMS,
  WHY_CHOOSE_US,
  BUSINESS_HOURS,
  FAQs,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  MAP_EMBED_URL,
  DIRECTIONS_URL
} from '../data';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Gallery states
  const [selectedTag, setSelectedTag] = useState<string>('Todos');
  const tags = ['Todos', 'Fade / Degradado', 'Barba / Grooming', 'Curly / Textura', 'Estilo Corto', 'Buzz Cut', 'Corte Clásico'];

  // FAQ state index tracker
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Open first by default

  const filteredGallery = selectedTag === 'Todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.tag === selectedTag);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="overflow-x-hidden">
      
      {/* SECTION 1 — HERO */}
      <section id="hero-section" className="relative min-h-[95vh] flex items-center pt-24 pb-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        {/* Artistic Backdrop Image with overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={HERO_DATA.heroImage}
            alt="Abdel Barber Shop interior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-25 scale-105 filter blur-[1px] transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              {/* Review Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/30 backdrop-blur-md">
                <div className="flex text-gold-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
                  4.8/5 valorado en GOOGLE
                </span>
              </div>

              {/* Headline & Subheadline */}
              <div className="space-y-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                  La barbería mejor valorada de <span className="bg-gradient-to-r from-gold-primary via-gold-hover to-gold-primary bg-clip-text text-transparent">Ciudad Real</span> para cortes impecables y atención al detalle
                </h1>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                  {HERO_DATA.subtitle}
                </p>
              </div>

              {/* Trust Indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-2.5 font-mono text-xs text-gold-primary font-semibold">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-slate-200">4.8/5 en más de 110 reseñas honestas</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/34602817759?text=Hola%20Abdel,%20me%20gustar%C3%ADa%20reservar%20una%20cita%20para%20un%20corte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 font-display font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:from-gold-hover hover:to-gold-primary transition-all duration-300 transform hover:-translate-y-1 block hover:shadow-xl hover:shadow-gold-primary/25 cursor-pointer flex items-center justify-center gap-2 "
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Reservar por WhatsApp</span>
                </a>
                
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-lg border border-slate-800 transition-all duration-300 transform hover:-translate-y-1 block flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-4 h-4 text-gold-primary" />
                  <span>Cómo Llegar</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 text-slate-500" />
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg mx-auto lg:mx-0 border-t border-slate-900">
                <div className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-black text-white">{HERO_DATA.stats.reviewsCount}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono tracking-wider uppercase mt-1">Opiniones Google</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-black text-gold-primary">{HERO_DATA.stats.rating}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono tracking-wider uppercase mt-1">Puntuación Media</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-black text-white">{HERO_DATA.stats.experience}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-mono tracking-wider uppercase mt-1">Trayectoria</div>
                </div>
              </div>

            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[340px] sm:max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-primary/30 glow-gold">
                <img
                  src={HERO_DATA.abdelPortrait}
                  alt="Abdel Barber portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 duration-700 transition-transform"
                />
                
                {/* Embedded Floating Highlighting */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-gold-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-gold-primary text-slate-950 p-2 rounded-lg font-bold">
                      <Zap className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Abdel Barber</h4>
                      <p className="text-[11px] font-mono text-gold-primary">Corte & Estilo de Autor</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outer Glow Spheres */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-primary/5 rounded-full filter blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold-deep/5 rounded-full filter blur-3xl -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — PRUEBA SOCIAL FUERTE */}
      <section id="social-proof-section" className="py-20 bg-slate-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a20_1px,transparent_1.5px)] [background-size:24px_24px] opacity-25" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold-primary font-mono text-xs uppercase tracking-[0.2em] font-bold block">
              La Experiencia Real de Nuestros Clientes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Más que una barbería: una experiencia que hace que los clientes vuelvan
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-primary to-transparent mx-auto rounded-full mt-4" />
          </div>

          {/* Infinite Moving Marquee */}
          <div className="relative w-full overflow-hidden py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {/* Left and Right Fade Gradients for a gorgeous continuous blend with the dark background */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-36 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-36 bg-gradient-to-l from-slate-950 via-slate-950/60 to-transparent z-20 pointer-events-none" />
            
            <div className="custom-marquee flex gap-4 sm:gap-6">
              {/* Duplicate reviews list twice to maintain seamless infinite carousel wrapping */}
              {[...REVIEWS, ...REVIEWS].map((review, idx) => (
                <div
                  key={`${review.id}-marquee-${idx}`}
                  className="w-[280px] sm:w-[350px] shrink-0 bg-slate-900 border border-slate-800/80 p-5 sm:p-6 rounded-xl hover:border-gold-primary/40 transition-all duration-300 shadow-lg relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2.5 sm:mb-4">
                      <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-gold-primary bg-gold-primary/10 px-2 py-0.5 sm:py-1 rounded-full font-bold">
                        {review.platform}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-slate-500">{review.date}</span>
                    </div>

                    {/* Highlight Quote */}
                    <h4 className="font-display text-[11px] sm:text-sm md:text-base font-bold text-white mb-1.5 sm:mb-3 tracking-wide border-l-2 border-gold-primary pl-2 sm:pl-3 italic group-hover:text-gold-primary transition-colors">
                      “{review.highlight}”
                    </h4>

                    {/* Stars */}
                    <div className="flex text-amber-400 mb-1.5 sm:mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>

                    {/* Paragraph */}
                    <p className="text-slate-350 text-[10px] sm:text-xs md:text-sm leading-normal sm:leading-relaxed font-light mb-3 sm:mb-6">
                      {review.text}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-slate-800/60 pt-2.5 sm:pt-4 flex items-center justify-between mt-auto">
                    <span className="text-[10px] sm:text-sm font-display font-semibold text-white">{review.author}</span>
                    <div className="flex items-center gap-1 text-[9px] sm:text-xs text-slate-400 font-mono">
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span>Verificado</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive instruction tip */}
          <p className="text-center text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-4">
            — Mantén el cursor o pulsa sobre una reseña para pausar —
          </p>

          {/* Rating Footer */}
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps?cid=8790013897103294"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-gold-primary transition-colors font-mono font-bold decoration-dotted underline underline-offset-4"
            >
              <span>Ver todas las opiniones en Google Maps</span>
              <ExternalLink className="w-4 h-4 text-gold-primary" />
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 3 — SERVICIOS */}
      <section id="services-section" className="py-20 bg-slate-900 relative">
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gold-primary/1 rounded-full filter blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-gold-primary font-mono text-xs uppercase tracking-[0.2em] font-bold block">
                Nuestra Carta de Estilo
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Tarifas y servicios de corte premium para caballero
              </h2>
            </div>
            <div>
              <button
                onClick={() => onNavigate('/servicios-barberia-ciudad-real')}
                className="text-sm font-display uppercase tracking-widest font-bold text-gold-primary hover:text-white border-b-2 border-gold-primary hover:border-white pb-1.5 transition-colors"
              >
                Ver Info Detallada
              </button>
            </div>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className={`rounded-xl p-6 border transition-all duration-300 relative flex flex-col justify-between ${
                  service.isPopular
                    ? 'bg-slate-950 border-gold-primary block glow-gold scale-102 hover:scale-105 shadow-2xl'
                    : 'bg-slate-950/60 border-slate-800 hover:border-gold-primary/30 hover:scale-103 shadow-lg'
                }`}
              >
                {/* Popular label indicator */}
                {service.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 font-display text-[9px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded-full shadow-lg">
                    El Más Solicitado
                  </span>
                )}

                <div>
                  {/* Service Title & Price */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-lg font-extrabold text-white uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <div className="text-right">
                      <span className="font-display text-2xl font-black text-gold-primary block">{service.price}</span>
                      <span className="font-mono text-[9px] text-slate-500 uppercase block">{service.duration}</span>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet points structure */}
                  <ul className="space-y-2 mb-8 text-xs font-mono text-slate-400">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-gold-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Local Action Button */}
                <a
                  href={`https://wa.me/34602817759?text=Hola%20Abdel,%20quiero%20reservar%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-md text-center font-display text-[11px] font-extrabold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                    service.isPopular
                      ? 'bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 hover:from-gold-hover hover:to-gold-primary shadow-md'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-gold-primary hover:border-gold-primary/50'
                  }`}
                >
                  Pedir Cita
                </a>
              </div>
            ))}
          </div>

          {/* Under Service Button Call To Action */}
          <div className="mt-12 text-center max-w-xl mx-auto space-y-4">
            <a
              href="https://wa.me/34602817759"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 font-display font-extrabold text-xs uppercase tracking-[0.15em] rounded-lg hover:from-gold-hover hover:to-gold-primary transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-gold-primary/10 hover:shadow-gold-primary/20"
            >
              <span>Pedir Cita Ahora</span>
              <Calendar className="w-4 h-4 fill-current" />
            </a>

            {/* Security Guarantee Box under CTA */}
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-left mt-6 shadow-md backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-emerald-500/10 text-emerald-500 rounded-lg">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-display font-bold text-[11px] uppercase tracking-wider text-white">Reserva 100% Segura y Privada</h5>
                  <p className="text-[10px] text-slate-400 mt-0.5">Sin bases de datos vulnerables. Cita directa por Canal Encriptado.</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[9px] font-mono uppercase bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded font-bold shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Conexión SSL Segura
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 — GALERÍA (MUY IMPORTANTE) */}
      <section id="gallery-section" className="py-20 bg-slate-950 relative">
        <div className="absolute inset-0 bg-radial-gradient from-gold-primary/2 via-transparent to-transparent opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-gold-primary font-mono text-xs uppercase tracking-[0.2em] font-bold block">
              Resultados de Autor
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Galería de Estilos & Acabados de Abdel Barber Shop
            </h2>
            <p className="text-slate-300 text-sm font-light max-w-xl mx-auto">
              Cada foto representa la precisión, dedicación y simetría de nuestro trabajo. Damos nombre técnico a cada acabado para que encuentres tu estilo ideal.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-primary to-transparent mx-auto rounded-full mt-4" />
          </div>

          {/* Tag filter selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-2 border-b border-slate-900">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase rounded-md transition-all duration-200 outline-none ${
                  selectedTag === tag
                    ? 'bg-gold-primary text-slate-950 border border-gold-primary'
                    : 'text-slate-400 border border-slate-900 hover:border-gold-primary/30 hover:text-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Gallery Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-gold-primary/35 transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Product/Hairstyle image */}
                <div className="aspect-[4/3] w-full bg-slate-950 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle top shading overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Details Section */}
                <div className="p-5 relative z-10 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gold-primary">
                        {item.tag}
                      </span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase">
                        SEO: #{item.seoName}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-base font-extrabold text-white uppercase tracking-wide group-hover:text-gold-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-300 text-xs font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Excelente Acabado</span>
                    <a
                      href={`https://wa.me/34602817759?text=Hola%20Abdel,%20he%20visto%20el%20estilo%20${encodeURIComponent(item.title)}%20en%20la%20web%20y%20me%20gustar%C3%ADa%20un%20acabado%20similar`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-display uppercase tracking-wider font-bold text-gold-primary group-hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Reservar este Estilo</span>
                      <span>→</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — POR QUÉ ELEGIRNOS */}
      <section id="why-choose-us" className="py-20 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold-primary font-mono text-xs uppercase tracking-[0.2em] font-bold block">
              Nuestras Garantías
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              ¿Por qué elegir Abdel Barber Shop en Ciudad Real?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-primary to-transparent mx-auto rounded-full mt-4" />
          </div>

          {/* Grid Layout of 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item) => {
              // Icon render strategy based on string mapping
              let IconComponent = Scissors;
              if (item.id === 'why-2') IconComponent = Sparkles;
              if (item.id === 'why-3') IconComponent = MapPin;
              if (item.id === 'why-4') IconComponent = Award;

              return (
                <div
                  key={item.id}
                  className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-gold-primary/30 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="bg-gradient-to-br from-gold-primary to-gold-deep p-4 rounded-xl text-slate-950 mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-primary/5">
                    <IconComponent className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  
                  <h3 className="font-display text-base font-extrabold text-white mb-3 uppercase tracking-wider">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 6 — SOBRE ABDEL */}
      <section id="about-abdel" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Media */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group p-1.5 rounded-2xl border border-slate-800 glow-gold bg-slate-900 overflow-hidden">
                <div className="aspect-[3/4] w-full max-w-[320px] rounded-xl overflow-hidden bg-slate-950 relative">
                  <img
                    src={HERO_DATA.abdelPortrait}
                    alt="Abdel Barber at work"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 duration-500 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-slate-950 border border-gold-primary py-2.5 px-4 rounded-xl font-mono text-[9px] text-gold-primary font-bold uppercase tracking-wider shadow-xl animate-bounce">
                  Barbero Titular
                </div>
              </div>
            </div>

            {/* Right Column: Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-gold-primary font-mono text-xs uppercase tracking-[0.2em] font-bold block">
                Humanizando Nuestra Marca
              </span>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                La historia detrás de la navaja: Conoce a Abdel
              </h2>
              
              <p className="text-slate-300 text-base font-medium leading-relaxed italic border-l-4 border-gold-primary pl-4 py-1">
                “En Abdel Barber Shop creemos que un buen corte no es solo estética, es confianza. Nuestro objetivo es que cada cliente salga sintiéndose mejor de lo que entró.”
              </p>

              <div className="space-y-4 text-slate-300 text-sm font-light leading-relaxed">
                <p>
                  Hola, soy Abdel. Llevo más de 9 años dedicado al noble arte de la barbería tradicional y de vanguardia. 
                  Abrí mi propio salón en Ciudad Real con una idea clara: crear un refugio masculino donde el tiempo se detiene
                  y cada detalle cuenta. 
                </p>
                <p>
                  No soy partidario de los salones ruidosos de cortes automatizados y rápidos en 10 minutos. Creo firmemente 
                  que cada cabello, cada barba y cada línea de contorno merecen dedicación, calma y un pulido simétrico y limpio. 
                  Ese compromiso con la perfección es el que nos ha otorgado más de 110 reseñas de 5 estrellas en Ciudad Real.
                </p>
              </div>

              {/* Navigation button link */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/barberia-ciudad-real')}
                  className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-widest text-gold-primary hover:text-white group border-b border-gold-primary transition-colors pb-1"
                >
                  <span>Leer mi Historia de Confianza</span>
                  <span className="group-hover:translate-x-1.5 duration-200 transition-transform">→</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — UBICACIÓN + MAPA */}
      <section id="location-and-map" className="py-20 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left: Interactive Map & Iframe */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl min-h-[350px] relative flex">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grids(1) contrast(1.1) invert(0.9) hue-rotate(185deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localización de Abdel Barber Shop"
                className="w-full h-full min-h-[350px]"
              />
              
              {/* Floating Dark overlay */}
              <div className="absolute top-4 left-4 right-4 md:right-auto bg-slate-950/90 backdrop-blur-md p-3 rounded-lg border border-gold-primary/20 text-xs font-mono">
                <p className="text-white font-bold">ABDEL BARBER SHOP</p>
                <p className="text-slate-400 mt-1">C. Estación Vía Crucis, Nº11 Local 2</p>
                <p className="text-gold-primary mt-0.5">Ciudad Real, España</p>
              </div>
            </div>

            {/* Right: Local SEO NAP Card */}
            <div className="lg:col-span-5 bg-slate-950 p-8 rounded-2xl border border-slate-800/80 hover:border-gold-primary/30 transition-all duration-300 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-gold-primary font-mono text-xs uppercase tracking-[0.15em] font-bold block">
                    Visítanos en el Centro
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-wide">
                    ABDEL BARBER SHOP
                  </h3>
                </div>

                {/* NAP information lists */}
                <div className="space-y-4 text-xs sm:text-sm">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white uppercase font-mono text-xs tracking-wider">Dirección</strong>
                      <span className="text-slate-300 block mt-1">
                        Calle Estación Vía Crucis, Nº11 Local 2, 13003 Ciudad Real
                      </span>
                      <span className="text-slate-500 block text-xs mt-1">
                        (Junto al paseo, en zona céntrica de fácil aparcamiento)
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white uppercase font-mono text-xs tracking-wider">Teléfono de Citas</strong>
                      <a href={`tel:${PHONE_NUMBER}`} className="text-slate-300 hover:text-gold-primary font-mono block text-sm mt-1 transition-colors">
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white uppercase font-mono text-xs tracking-wider">Horario Local</strong>
                      <p className="text-slate-300 text-xs font-mono mt-1">
                        Lunes a Viernes: 10:00 - 14:00 | 16:30 - 20:30
                        <br />
                        Sábados: 09:30 - 14:30
                        <br />
                        <span className="text-red-400 font-bold">Domingos: Cerrado</span>
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Booking & Calling buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-900 mt-6 md:mt-0">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="bg-slate-900 hover:bg-slate-800 py-3 text-center rounded-lg font-display text-[11px] font-extrabold uppercase text-white tracking-widest transition-colors block border border-slate-800"
                >
                  Llamar
                </a>
                
                <a
                  href="https://wa.me/34602817759?text=Hola%20Abdel,%20me%20gustar%C3%ADa%20reservar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 hover:text-white py-3 text-center rounded-lg font-display text-[11px] font-extrabold uppercase tracking-widest transition-all block text-center"
                >
                  WhatsApp
                </a>

                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 py-3 text-center rounded-lg font-display text-[11px] font-extrabold uppercase tracking-widest transition-colors block text-center"
                >
                  Cómo Llegar
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FAQ SEO ACCORDION */}
      <section id="faq-section" className="py-20 bg-slate-950 relative">
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-radial-gradient from-gold-primary/1 to-transparent opacity-20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold-primary font-mono text-xs uppercase tracking-[0.2em] font-bold block">
              Optimización de Dudas Comunes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Preguntas Frecuentes — FAQ SEO local Ciudad Real
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold-primary to-transparent mx-auto rounded-full mt-4" />
          </div>

          {/* Accordion Component List */}
          <div className="space-y-4">
            {FAQs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.id}
                  className="bg-slate-900/60 border border-slate-850 rounded-xl overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-4 py-3.5 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 text-white hover:text-gold-primary transition-colors outline-none focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[13px] sm:text-base md:text-lg font-bold tracking-wide">
                      {faq.question}
                    </span>
                    <span className="text-gold-primary">
                      {isOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </span>
                  </button>

                  {/* Accordion Body */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] border-t border-slate-900/80' : 'max-h-0 pointer-events-none'
                    } overflow-hidden`}
                  >
                    <div className="px-4 py-3.5 sm:px-6 sm:py-5 text-slate-300 text-xs sm:text-sm font-light leading-relaxed bg-slate-950/40">
                      {faq.answer}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA FINAL GRANDE */}
      <section id="cta-final-section" className="py-24 bg-gradient-to-b from-slate-955 to-slate-950 relative overflow-hidden text-center border-t border-gold-primary/10">
        
        {/* Absolute Background Spheres */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-primary/20 rounded-full filter blur-[150px]" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <div className="bg-gradient-to-br from-gold-primary to-gold-deep p-4 rounded-full text-slate-950 inline-block mb-3 animate-pulse">
            <Scissors className="w-6 h-6 stroke-[2]" />
          </div>

          <div className="space-y-3">
            <span className="text-gold-primary font-mono text-xs uppercase tracking-[0.25em] font-bold block">
              No dejes tu estilo al azar
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              ¿Listo para tu próximo corte?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
              Consigue una definición perfecta, un degradado limpio y el afeitado simétrico que te mereces. Te atendemos en el corazón de Ciudad Real.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/34602817759?text=Hola%20Abdel,%20quiero%20reservar%20mi%20pr%C3%B3ximo%20corte%20lo%2520antes%20posible."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 font-display font-black text-sm uppercase tracking-[0.2em] px-12 py-5 rounded-xl hover:from-gold-hover hover:to-gold-primary transition-all duration-300 transform hover:-translate-y-1 block max-w-sm mx-auto shadow-2xl shadow-gold-primary/20 hover:shadow-gold-primary/40 cursor-pointer"
            >
              Reservar por WhatsApp
            </a>
          </div>

          {/* Local contact support footer */}
          <p className="text-[11px] font-mono text-slate-500 uppercase tracking-widest pt-2">
            O si lo prefieres, llámanos: <a href={`tel:${PHONE_NUMBER}`} className="text-slate-400 font-bold hover:text-gold-primary transition-colors">{PHONE_DISPLAY}</a>
          </p>

        </div>
      </section>

    </div>
  );
}
