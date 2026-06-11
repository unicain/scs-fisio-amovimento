import React from 'react';
import { lpData } from '../data';
import { MessageCircleHeart } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${lpData.contact.whatsappNumber}?text=${encodeURIComponent(lpData.contact.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all group"
      aria-label="Contatar pelo WhatsApp"
    >
        <MessageCircleHeart className="h-7 w-7" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap origin-right group-hover:scale-100 scale-95 border border-slate-100">
            Agendar Consulta
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white -mt-1 rotate-45 border-r border-t border-slate-100"></div>
        </div>
    </motion.button>
  );
}
