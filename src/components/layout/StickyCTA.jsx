import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck } from 'react-icons/fa';
import { getWhatsAppLink, defaultMessages, companyInfo } from '../../lib/whatsapp';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 w-full z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-emerald-500/30 md:hidden"
                >
                    <div className="grid grid-cols-3 gap-2 p-2">
                        <a
                            href={`tel:${companyInfo.phone}`}
                            className="flex flex-col items-center justify-center py-2 text-slate-700 dark:text-stone-300 active:text-emerald-600"
                        >
                            <FaPhoneAlt className="text-xl mb-1" />
                            <span className="text-xs font-medium">Call</span>
                        </a>
                        <a
                            href={getWhatsAppLink(defaultMessages.general)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center py-2 text-slate-700 dark:text-stone-300 active:text-green-500"
                        >
                            <FaWhatsapp className="text-2xl mb-1 text-green-500" />
                            <span className="text-xs font-medium">WhatsApp</span>
                        </a>
                        <a
                            href={getWhatsAppLink(defaultMessages.siteVisit)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center py-2 text-white bg-emerald-600 rounded-lg shadow-emerald-glow active:scale-95 transition-transform"
                        >
                            <FaCalendarCheck className="text-xl mb-1" />
                            <span className="text-xs font-medium">Book Visit</span>
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
