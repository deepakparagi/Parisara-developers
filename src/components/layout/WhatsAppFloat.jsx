
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink, defaultMessages } from '../../lib/whatsapp';

const WhatsAppFloat = () => {
    return (
        <motion.a
            href={getWhatsAppLink(defaultMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/50 transition-shadow duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Chat on WhatsApp"
        >
            <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-75 animate-ping"></div>
            <FaWhatsapp size={28} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                1
            </span>
        </motion.a>
    );
};

export default WhatsAppFloat;
