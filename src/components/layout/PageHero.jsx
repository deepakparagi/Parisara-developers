import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, image }) => {
    return (
        <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 z-10 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="container relative z-20 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="block text-emerald-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">
                        {subtitle}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-2xl py-2">
                        {title}
                    </h1>
                </motion.div>
            </div>
        </div>
    );
};

export default PageHero;
