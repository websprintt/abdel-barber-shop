import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock, EyeOff, Check, X, Cookie, ShieldAlert, KeyRound } from 'lucide-react';

interface SecurityCenterProps {
  initialOpenModal?: 'legal' | 'cookies' | 'privacy' | 'security' | null;
  onCloseModal?: () => void;
}

export default function SecurityCenter({ initialOpenModal = null, onCloseModal }: SecurityCenterProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [activeTab, setActiveTab] = useState<'security' | 'privacy' | 'cookies' | 'legal'>('security');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already set cookie preferences
    const consent = localStorage.getItem('abdel-cookies-consent');
    if (!consent) {
      // Show the consent banner after a short delay for smooth loading
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (initialOpenModal) {
      if (initialOpenModal === 'legal') setActiveTab('legal');
      if (initialOpenModal === 'cookies') setActiveTab('cookies');
      if (initialOpenModal === 'privacy') setActiveTab('privacy');
      if (initialOpenModal === 'security') setActiveTab('security');
      setModalOpen(true);
    }
  }, [initialOpenModal]);

  const handleAcceptAll = () => {
    localStorage.setItem('abdel-cookies-consent', 'accepted-all');
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem('abdel-cookies-consent', 'declined');
    setShowBanner(false);
  };

  const openSecurityCenterWithTab = (tab: 'security' | 'privacy' | 'cookies' | 'legal') => {
    setActiveTab(tab);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    if (onCloseModal) {
      onCloseModal();
    }
  };

  return (
    <>
      {/* 1. GDPR Cookie Consent Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-slate-900/98 backdrop-blur-md border border-slate-800 shadow-2xl rounded-2xl p-5 z-50 text-slate-300 flex flex-col gap-4 font-sans"
            style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.05)' }}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gold-primary/10 text-gold-primary shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-display font-bold text-white tracking-wide flex items-center gap-1.5">
                  Privacidad y Cookies Aseguradas
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Utilizamos únicamente cookies técnicas esenciales para garantizar una navegación rápida, segura e íntegra. No almacenamos datos personales en el navegador ni compartimos información privada.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-slate-800/80 pt-3">
              <button
                onClick={() => openSecurityCenterWithTab('cookies')}
                className="text-[11px] font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors py-1.5 px-3 rounded"
              >
                Configurar
              </button>
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={handleDeclineAll}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded transition-colors"
                >
                  Rechazar
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="bg-gradient-to-r from-gold-primary to-gold-deep text-slate-950 text-xs font-mono uppercase tracking-wider font-bold px-4 py-1.5 rounded hover:shadow-lg transition-all"
                >
                  Aceptar todo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Security & GDPR Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
            />

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 150 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-slate-800/80 rounded-2xl shadow-3xl overflow-hidden text-slate-350 font-sans flex flex-col max-h-[90vh]"
            >
              {/* Gold border header line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent" />

              {/* Modal Header */}
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-emerald-500/10 text-emerald-500 rounded-md">
                    <ShieldCheck className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white tracking-wide">Centro de Seguridad y Privacidad</h3>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">Control de datos e integridad del cliente</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-full hover:bg-slate-800/80 text-slate-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-800/60 overflow-x-auto scrollbar-none scroll-smooth">
                <button
                  onClick={() => setActiveTab('security')}
                  className={`flex-1 py-3 px-4 text-xs font-mono uppercase tracking-wider border-b-2 text-center whitespace-nowrap transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'security'
                      ? 'border-gold-primary text-gold-primary bg-gold-primary/5 font-bold'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  <Lock className="w-3.5 h-3.5" />
                  Garantía de Seguridad
                </button>
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`flex-1 py-3 px-4 text-xs font-mono uppercase tracking-wider border-b-2 text-center whitespace-nowrap transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'privacy'
                      ? 'border-gold-primary text-gold-primary bg-gold-primary/5 font-bold'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  Privacidad GDPR
                </button>
                <button
                  onClick={() => setActiveTab('cookies')}
                  className={`flex-1 py-3 px-4 text-xs font-mono uppercase tracking-wider border-b-2 text-center whitespace-nowrap transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'cookies'
                      ? 'border-gold-primary text-gold-primary bg-gold-primary/5 font-bold'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  <Cookie className="w-3.5 h-3.5" />
                  Cookies
                </button>
                <button
                  onClick={() => setActiveTab('legal')}
                  className={`flex-1 py-3 px-4 text-xs font-mono uppercase tracking-wider border-b-2 text-center whitespace-nowrap transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'legal'
                      ? 'border-gold-primary text-gold-primary bg-gold-primary/5 font-bold'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  Aviso Legal
                </button>
              </div>

              {/* Scrollable Tab Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm leading-relaxed text-slate-300">
                
                {activeTab === 'security' && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl flex items-start gap-4">
                      <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg shrink-0">
                        <ShieldCheck className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-display font-medium text-white text-sm">Protección Absoluta Sin Bases de Datos Vulnerables</h4>
                        <p className="text-xs text-slate-400 mt-1 lines-normal">
                          A diferencia de los sistemas tradicionales donde los hackers roban bases de datos con contraseñas y teléfonos de los usuarios, en Abdel Barber Shop implementamos una arquitectura estática descentralizada. <strong>No almacenamos tus datos en servidores abiertos</strong>.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                        <div className="flex items-center gap-2 mb-2 text-gold-primary">
                          <Lock className="w-4 h-4" />
                          <h5 className="font-display font-bold text-xs uppercase tracking-wide">Túnel WhatsApp Cifrado</h5>
                        </div>
                        <p className="text-xs text-slate-400 leading-normal">
                          Para reservar tu cita, te comunicas de manera directa con Abdel usando el protocolo de cifrado extremo a extremo de WhatsApp. Ni nosotros ni terceros pueden leer tus chats.
                        </p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                        <div className="flex items-center gap-2 mb-2 text-gold-primary">
                          <EyeOff className="w-4 h-4" />
                          <h5 className="font-display font-bold text-xs uppercase tracking-wide">Cero Seguimiento Comercial</h5>
                        </div>
                        <p className="text-xs text-slate-400 leading-normal">
                          No vendemos, alquilamos ni cedemos tus interacciones comerciales a anunciantes o proveedores de publicidad externa. Tu visita e historial son 100% confidenciales.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-800 pt-4 space-y-3">
                      <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest text-gold-primary">— Estándares Técnicos Activos —</h4>
                      <ul className="space-y-2 text-xs text-slate-400 font-mono">
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Conexión cifrada de canal TLS 1.3 con soporte de Forward Secrecy completo.</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Directiva Content Security Policy (CSP) reforzada para mitigar XSS de terceros.</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Aislamiento de cookies y tokens de seguridad locales (sin almacenamiento intrusivo).</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'privacy' && (
                  <div className="space-y-4 animate-fadeIn text-slate-300">
                    <h4 className="font-display font-bold text-white text-base">Tratamiento de Datos Personales (GDPR España)</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      En cumplimiento del <strong>Reglamento General de Protección de Datos (RGPD UE 2016/679)</strong> y de la <strong>Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD 3/2018)</strong>, te informamos de las bases legales en Abdel Barber Shop:
                    </p>

                    <table className="w-full text-xs font-mono border-collapse border border-slate-800 text-slate-450 rounded-lg overflow-hidden my-4">
                      <thead>
                        <tr className="bg-slate-950 text-slate-300 border-b border-slate-800">
                          <th className="p-2.5 text-left border-r border-slate-850">Cláusula</th>
                          <th className="p-2.5 text-left">Detalle de Cumplimiento</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-850">
                          <td className="p-2.5 border-r border-slate-850 text-white font-sans text-xs font-bold">Responsable del Tratamiento</td>
                          <td className="p-2.5 text-slate-400">Abdeljalil (Abdel Barber Shop) — C. Estación Vía Crucis, Nº11 Local 2, 13003 Ciudad Real.</td>
                        </tr>
                        <tr className="border-b border-slate-850">
                          <td className="p-2.5 border-r border-slate-850 text-white font-sans text-xs font-bold">Finalidad del Tratamiento</td>
                          <td className="p-2.5 text-slate-400">Atender y gestionar las solicitudes de citas presenciales de peluquería y barbería recibidas por canal telefónico o WhatsApp.</td>
                        </tr>
                        <tr className="border-b border-slate-850">
                          <td className="p-2.5 border-r border-slate-850 text-white font-sans text-xs font-bold">Legitimación</td>
                          <td className="p-2.5 text-slate-400">Consentimiento expreso de la persona interesada para dar de alta y agendar su cita.</td>
                        </tr>
                        <tr className="border-b border-slate-850">
                          <td className="p-2.5 border-r border-slate-850 text-white font-sans text-xs font-bold">Conservación</td>
                          <td className="p-2.5 text-slate-400">Los datos de agenda de citas se eliminan periódicamente tras completar el servicio respectivo en tienda.</td>
                        </tr>
                      </tbody>
                    </table>

                    <p className="text-xs text-slate-400">
                      <strong>Tus Derechos ARCO:</strong> Puedes solicitar en cualquier momento el acceso, rectificación, supresión y derecho al olvido de tus datos de citas comunicándote directamente por WhatsApp o de forma presencial en la barbería.
                    </p>
                  </div>
                )}

                {activeTab === 'cookies' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h4 className="font-display font-bold text-white text-base">Uso Exclusivo de Cookies Técnicas</h4>
                    <p className="text-xs text-slate-400">
                      Para dar cumplimiento estricto a la legislación española (LSSI-CE), manifestamos que esta página web <strong>no emplea rastreadores de cookies persistentes de terceros para elaboración de perfiles de anuncios</strong>.
                    </p>

                    <div className="space-y-3">
                      <div className="border border-slate-800 rounded-xl p-3 bg-slate-950 flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                        <div>
                          <strong className="text-white text-xs block">Cookies Técnicas Esenciales (Obligatorio)</strong>
                          <span className="text-[11px] text-slate-500 block">Necesarias para la carga instantánea de recursos, enrutamiento rápido SPA y persistencia de consentimientos.</span>
                        </div>
                      </div>

                      <div className="border border-slate-800 rounded-xl p-3 bg-slate-950 flex items-center gap-3">
                        <X className="w-4 h-4 text-red-400 shrink-0" />
                        <div>
                          <strong className="text-white text-xs block">Cookies de Terceros para Anuncios (Inexistente)</strong>
                          <span className="text-[11px] text-slate-500 block">Abdel Barber Shop no utiliza cookies invasivas de redirección de remarketing comercial (Facebook Pixel, DoubleClick, AdSense, etc.).</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 leading-normal font-mono">
                      * Nota: Si decides rechazar las cookies, no afectará en absoluto tu capacidad de reservar citas en línea, ya que valoramos tu libertad por encima de todo.
                    </div>
                  </div>
                )}

                {activeTab === 'legal' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h4 className="font-display font-bold text-white text-base">Términos Legales de Uso</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Este sitio web corporativo de Abdel Barber Shop ha sido diseñado para proveer información sobre los servicios prestados por el establecimiento en Ciudad Real.
                    </p>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 border-dashed text-xs text-slate-400 leading-relaxed space-y-2">
                      <p><strong>1. Propiedad Intelectual:</strong> Todos los contenidos informativos expuestos incluyendo el diseño estético, logotipos, imágenes optimizadas y redacciones tipográficas pertenecen íntegramente a Abdel Barber Shop o han sido licenciados legalmente. Se prohíbe el copiado masivo indebido para fines ajenos.</p>
                      <p><strong>2. Descargo de Responsabilidad:</strong> Aunque Abdel procura la exactitud constante de los precios expuestos en esta web, se recalca que las tarifas oficiales definitivas y válidas son las que se establecen en persona o mediante chat confirmado antes de realizar el corte.</p>
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between font-mono text-xs">
                <span className="text-emerald-500 flex items-center gap-1.5 font-bold animate-pulse">
                  <ShieldCheck className="w-4 h-4" />
                  Servidor Seguro SSL
                </span>
                <button
                  onClick={handleClose}
                  className="bg-gold-primary hover:bg-gold-deep text-slate-950 border-none px-5 py-2 rounded-lg font-bold font-display uppercase tracking-wider text-[11px] transition-all"
                >
                  Entendido y Seguro
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
