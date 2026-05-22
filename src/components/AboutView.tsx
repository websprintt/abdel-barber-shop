import { Calendar, Star, Scissors, Heart, ShieldCheck, MapPin, MessageSquare } from 'lucide-react';
import { HERO_DATA, PHONE_DISPLAY, PHONE_NUMBER } from '../data';

export default function AboutView() {
  return (
    <div className="bg-slate-950 pt-28 pb-20 overflow-x-hidden animate-fade-in">
      
      {/* SECTION 1: HEADER BANNER FOR ABOUT US */}
      <section className="relative py-16 bg-slate-900 border-b border-gold-primary/10 mb-16 overflow-hidden">
        <div className="absolute right-10 top-10 w-80 h-80 bg-gold-primary/3 rounded-full filter blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-gold-primary font-mono text-xs uppercase tracking-[0.25em] font-bold block">
              Precisión de Autor y Oficio Tradicional
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.2] uppercase">
              La Filosofía de Abdel Barber Shop en Ciudad Real
            </h1>
            <p className="text-slate-300 text-sm sm:test-base font-light leading-relaxed max-w-xl mx-auto">
              No somos una franquicia sin alma. Somos un espacio independiente de estilismo masculino donde cada cliente recibe un trato único y un acabado de máxima precisión.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE DETAILED BIOGRAPHY / HISTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Picture collage */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative p-1 bg-slate-900 border border-slate-800 rounded-2xl glow-gold max-w-[340px] sm:max-w-md w-full">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-950 relative">
                <img
                  src={HERO_DATA.abdelPortrait}
                  alt="Abdel Barber Shop, Ciudad Real Barber"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              </div>
              
              {/* Overlaid stamp info for visual hierarchy */}
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-gold-primary to-gold-deep text-slate-950 font-display font-black text-xs uppercase px-5 py-3 rounded-lg shadow-2xl tracking-widest text-center border border-gold-primary/20">
                9+ AÑOS DE
                <br />
                EXPERIENCIA
              </div>
            </div>
          </div>

          {/* Right Block: Content storytelling */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-gold-primary font-mono text-xs uppercase font-bold tracking-wide">
              <Scissors className="w-4 h-4" />
              <span>Dedicación Absoluta</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              De un sueño tradicional a la barbería de referencia
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                La historia de <strong>ABDEL BARBER SHOP</strong> nace de la pasión sincera por el oficio clásico de la navaja. 
                Abdel, barber profesional y fundador, comenzó su andadura formándose con los mejores barberos tradicionales, 
                adquiriendo una destreza singular en el perfilado minucioso de barbas y el desvanecido sutil degradado sin líneas (Fades).
              </p>
              
              <p>
                Al abrir las puertas de su propio local en la <strong>Calle Estación Vía Crucis de Ciudad Real</strong>, Abdel decidió
                que su barbería sería diferente: se alejaría del frenético ritmo estresante de las peluquerías industriales 
                para centrarse de lleno en lo que realmente importa: <strong>las personas</strong>.
              </p>

              <blockquote className="border-l-2 border-gold-primary pl-4 py-1 italic text-slate-200 text-sm font-medium">
                “Cada cliente que se sienta en mi sillón tiene un tipo de pelo, una estructura facial y un estilo único. Tratar a todos con la misma plantilla es un error. Por eso nos tomamos el tiempo para repasar cada detalle hasta que quede impecable.”
              </blockquote>

              <p>
                Hoy en día, con más de 110 opiniones verificadas en Google Maps y una valoración sobresaliente de 4.8 sobre 5 estrellas, 
                es un orgullo ver que clientes de toda la provincia de Ciudad Real viajan para ponerse en las manos de Abdel.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE THREE PILLARS OF ABDEL BARBER SHOP */}
      <section className="py-16 bg-slate-900 border-y border-gold-primary/10 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              Nuestros 3 Compromisos de Oro con el Cliente
            </h3>
            <div className="w-12 h-0.5 bg-gold-primary mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-850 space-y-4 text-center items-center flex flex-col">
              <div className="bg-gold-primary/10 p-3 rounded-full text-gold-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display text-base font-bold text-white uppercase tracking-wide">Precisión Absoluta</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                No hay prisas. Repasamos con navaja, eliminamos los vellos rebelde de las orejas o cuello de manera minuciosa para que tu corte esté limpio de verdad.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-850 space-y-4 text-center items-center flex flex-col">
              <div className="bg-gold-primary/10 p-3 rounded-full text-gold-primary">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-display text-base font-bold text-white uppercase tracking-wide">Trato Humano y Cercano</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                Nos encanta hablar contigo, ofrecerte un café caliente o refresco frío, poner buena música ambiente y que te sientas como en casa de un amigo.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-850 space-y-4 text-center items-center flex flex-col">
              <div className="bg-gold-primary/10 p-3 rounded-full text-gold-primary">
                <Star className="w-6 h-6" />
              </div>
              <h4 className="font-display text-base font-bold text-white uppercase tracking-wide">Relación Calidad-Precio</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                Servicio gourmet de barbería tradicional en el centro de Ciudad Real a tarifas razonables y justos. Creemos en fidelizarte a largo plazo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT & IN-PERSON MAP REDIRECT */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase">
          ¿Listo para Reservar tu primera experiencia?
        </h3>
        
        <p className="text-slate-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
          Ven a visitarnos en Calle Estación Vía Crucis, Nº11 Local 2, Ciudad Real. Abdel estará encantado de asesorarte de manera personalizada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/34602817759?text=Hola%20Abdel,%20me%20gustar%C3%ADa%20reservar%22"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 font-display font-black text-xs uppercase tracking-wider rounded-lg hover:from-gold-hover hover:to-gold-primary transition-all duration-300 shadow-lg shadow-gold-primary/10 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Reservar por WhatsApp</span>
          </a>

          <a
            href="https://maps.google.com/?q=ABDEL+BARBER+SHOP+Calle+Estacion+Via+Crucis+11+Local+2+Ciudad+Real"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 hover:border-gold-primary/30 text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <MapPin className="w-4 h-4 text-gold-primary" />
            <span>Cómo Llegar (Google Maps)</span>
          </a>
        </div>
      </section>

    </div>
  );
}
