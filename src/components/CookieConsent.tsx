import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { lpData } from '../data';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 pointer-events-none flex justify-center"
        >
          {/* pb-24 on mobile prevents overlap with the Floating WhatsApp button */}
          <div className="w-full max-w-4xl bg-white shadow-2xl ring-1 ring-slate-900/10 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto mb-20 sm:mb-0">
            <p className="text-sm text-slate-600 font-medium text-center sm:text-left">
              Utilizamos cookies para melhorar sua experiência no site e personalizar o conteúdo. Ao continuar navegando, você concorda com a nossa política de privacidade.
            </p>
            <button
              onClick={acceptCookies}
              style={{ backgroundColor: lpData.theme.primaryColor }}
              className="whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Entendi e Aceito
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
