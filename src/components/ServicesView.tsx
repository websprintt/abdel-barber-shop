import { Scissors, Star, MessageSquare, Clock, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import { SERVICES, PHONE_DISPLAY, PHONE_NUMBER } from '../data';

export default function ServicesView() {
  return (
    <div className="bg-slate-950 pt-28 pb-20 overflow-x-hidden animate-fade-in">
      
      {/* HEADER SECTION --- SEO HERO FOR SERVICES */}
      <section className="relative py-16 bg-slate-900 border-b border-gold-primary/10 mb-16 overflow-hidden">
        {/* Abstract Glow Shapes */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold-primary/5 rounded-full filter blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-gold-primary font-mono text-xs uppercase tracking-[0.25em] font-bold block">
              Servicio de Autor y Tarifas Transparentes
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
              Cortes, Degradados y Arreglo de Barba en <span className="text-gold-primary">Ciudad Real</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Descubre tarifas honestas, sin sorpresas de última hora. No cobramos extras injustificados: cada servicio incluye asesoramiento personalizado, lavado con champú premium y peinado con ceras especiales de fijación.
            </p>
            <div className="inline-flex items-center gap-2 pt-2 text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Abierto • Cita Previa por WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES LISTINGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-12">
          {SERVICES.map((service, index) => {
            const isStar = service.isPopular;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-2xl border transition-all duration-300 items-center ${
                  isStar
                    ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-gold-primary shadow-2xl relative glow-gold'
                    : 'bg-slate-900/45 border-slate-850 hover:border-gold-primary/30'
                }`}
              >
                {/* Popular floating badge */}
                {isStar && (
                  <span className="absolute top-4 right-4 sm:right-6 bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 font-display text-[9px] font-black tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full">
                    Servicio Destacado
                  </span>
                )}

                {/* Left side: Numeral indicator */}
                <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center">
                  <span className="font-display text-4xl font-black text-slate-800 text-stroke-gold">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-px bg-gold-primary/30 mt-2" />
                </div>

                {/* Middle side: Main Copy */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h2 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                      {service.title}
                    </h2>
                    <div className="flex items-center gap-2 font-mono text-xs text-gold-primary">
                      <span>•</span>
                      <span>{service.duration} de servicio meticuloso</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Included features tags */}
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1.5 font-bold">
                      ¿Qué incluye este servicio?
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-950 border border-slate-800 text-slate-300 text-[10px] font-mono px-2.5 py-1 rounded"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side: Pricing and Action */}
                <div className="lg:col-span-3 text-center lg:border-l lg:border-slate-800/80 lg:pl-8 flex flex-col justify-center py-4 space-y-4">
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">Tarifa Cerrada</span>
                    <span className="font-display text-4xl font-black text-gold-primary block mt-1">{service.price}</span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-950/60 py-0.5 px-2 rounded-full mt-2 inline-block">Sin cargos sorpresa</span>
                  </div>

                  <a
                    href={`https://wa.me/34602817759?text=Hola%20Abdel,%20me%20gustar%C3%ADa%20reservar%20el%20servicio%3A%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-lg text-center font-display text-xs font-bold uppercase tracking-widest block cursor-pointer transition-colors duration-200 ${
                      isStar
                        ? 'bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 hover:from-gold-hover hover:to-gold-primary'
                        : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-gold-primary hover:border-gold-primary'
                    }`}
                  >
                    Reservar Cita
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* WHY OUR METHOD OF CUTTING IS BETTER --- SEO PARAGRAPHS */}
      <section className="py-16 bg-slate-900 border-y border-gold-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left copy */}
            <div className="space-y-6">
              <span className="text-gold-primary font-mono text-xs uppercase tracking-widest block">
                Artesanía Contra Automatismo
              </span>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-tight uppercase">
                Por qué nos tomamos el tiempo necesario en tu corte de pelo
              </h2>
              <div className="space-y-4 text-slate-300 text-sm font-light leading-relaxed">
                <p>
                  En muchas barberías modernas de bajo coste, el objetivo es despachar clientes lo antes posible. Los cortes se programan cada 10 o 15 minutos, utilizando excesivamente la máquina rapador sin considerar la fisonomía craneal del cliente ni la caída natural del cabello.
                </p>
                <p>
                  <strong>En Abdel Barber Shop trabajamos de forma opuesta.</strong> Reservamos un mínimo de 30 a 60 minutos por cliente según el servicio. Nos sentamos, analizamos la dirección del crecimiento capilar, el grosor y adaptamos las líneas para que el corte siga luciendo impecable incluso semanas después de haber salido del salón.
                </p>
                <p>
                  Utilizamos tijeras de corte de alta precisión japonesa, navajas desinfectadas de un solo uso y aplicamos cera capilar de primera calidad sin siliconas para asegurar la máxima salud del cuero cabelludo.
                </p>
              </div>
            </div>

            {/* Right Bullet bento panel */}
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-850 space-y-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-slate-100 mb-2">
                Nuestros Protocolos de Máxima Calidad
              </h3>

              <div className="grid grid-cols-1 gap-6">
                
                <div className="flex gap-4">
                  <div className="bg-gold-primary/10 p-2.5 rounded text-gold-primary h-fit">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold uppercase tracking-wide text-white">Higiene Estricta</h4>
                    <p className="text-xs text-slate-400 leading-normal mt-1">
                      Desinfectamos y esterilizamos todas las herramientas (clippers, peines, tijeras) antes de cada cliente. Capas limpias y navajas desechables por motivos sanitarios.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-gold-primary/10 p-2.5 rounded text-gold-primary h-fit">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold uppercase tracking-wide text-white">Asesoramiento de Visagismo</h4>
                    <p className="text-xs text-slate-400 leading-normal mt-1">
                      Te estudiamos la forma del rostro, mandíbula y cráneo para sugerir el fade adecuado, ya sea un sombreado Mid Fade discreto u óptimo perfilado de barbillas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-gold-primary/10 p-2.5 rounded text-gold-primary h-fit">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold uppercase tracking-wide text-white">Toalla Caliente Incluida</h4>
                    <p className="text-xs text-slate-400 leading-normal mt-1">
                      En los arreglos y afeitados de barba, abrimos los poros capilares con toallas aromatizadas calientes para evitar la irritación y ablandar el folículo.
                    </p>
                  </div>
                </div>

              </div>
              
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION ACCENT */}
      <section className="pt-20 text-center max-w-3xl mx-auto px-4">
        <h3 className="font-display text-2xl font-extrabold text-white uppercase mb-4 tracking-wide">
          ¿Quieres un cambio radical o mantener tu corte actual milimétrico?
        </h3>
        <p className="text-slate-400 text-sm mb-8 font-light max-w-xl mx-auto">
          Reserva cómodamente desde el móvil. Abdel te responderá personalmente por WhatsApp para definir el mejor día y hora para ti.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/34602817759?text=Hola%20Abdel,%20me%20gustar%C3%ADa%20pedir%20cita%20para%20esta%20semana"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 font-display font-black text-xs uppercase tracking-[0.15em] rounded-lg hover:from-gold-hover hover:to-gold-primary transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-gold-primary/10 cursor-pointer inline-flex items-center gap-2 justify-center"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Reservar Cita WhatsApp</span>
          </a>
          
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="px-8 py-4 bg-slate-900 border border-slate-800 text-white font-display font-bold text-xs uppercase tracking-[0.15em] rounded-lg hover:bg-slate-850 transition-colors inline-block"
          >
            Llamar al {PHONE_DISPLAY}
          </a>
        </div>
      </section>

    </div>
  );
}
