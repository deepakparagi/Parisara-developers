import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-stone-50 dark:bg-slate-950"
        >
            <div className="relative">
                {/* Stage 1: Welcome Text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-6"
                >
                    <span className="text-emerald-600 dark:text-emerald-400 font-serif text-lg md:text-xl tracking-[0.3em] uppercase">
                        Welcome to
                    </span>
                </motion.div>

                {/* Stage 2: The Line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
                    className="h-0.5 bg-slate-800 dark:bg-stone-100 mx-auto mb-2"
                />

                {/* Stage 3: The Name Reveal (Masked) */}
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: "circOut" }}
                        className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white tracking-wider"
                    >
                        PARISARA
                    </motion.h1>
                </div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="text-center mt-3"
                >
                    <span className="text-slate-500 dark:text-slate-400 text-xs md:text-sm tracking-widest uppercase">
                        Developers
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
