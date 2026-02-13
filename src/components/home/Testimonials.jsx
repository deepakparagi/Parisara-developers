import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rahul Deshpande",
            location: "Hubli",
            text: "Parisara Developers made my dream of owning a plot in Gadag a reality. The documentation process was smooth, and the team was extremely helpful throughout.",
            role: "Software Engineer"
        },
        {
            name: "Ananya Rao",
            location: "Gadag",
            text: "I was impressed by the quality of development. The wide roads and park areas are exactly as promised. It's the best layout in the city for residential purposes.",
            role: "Teacher"
        },
        {
            name: "Suresh Patil",
            location: "Bangalore",
            text: "Investing with Parisara was a great decision. The appreciation has been excellent, and they maintain the layout very well even after selling the plots.",
            role: "Businessman"
        }
    ];

    return (
        <section className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="section-subtitle">Client Stories</span>
                    <h2 className="section-title">What Our Customers Say</h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-stone-50 dark:bg-slate-900 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative border border-slate-100 dark:border-slate-800"
                        >
                            <div className="flex gap-1 mb-6 text-yellow-400">
                                {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
                            </div>

                            <p className="text-slate-700 dark:text-stone-300 mb-8 leading-relaxed relative z-10">
                                &quot;{item.text}&quot;
                            </p>

                            <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-lg">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-stone-100">{item.name}</h4>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">{item.role}, {item.location}</div>
                                </div>
                            </div>

                            <div className="absolute top-6 right-8 text-slate-200 dark:text-slate-800 text-6xl font-serif leading-none -z-0 opacity-50">
                                <FaQuoteLeft />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
