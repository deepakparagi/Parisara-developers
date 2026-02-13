import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiMapPin, FiShield } from 'react-icons/fi';
import { fadeInUp, staggerContainer } from '../utils/animations';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center bg-stone-50 dark:bg-slate-950">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                {/* Decoration Circles */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"></div>

                <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.span variants={fadeInUp} className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6">
                            Residential Plots in Gadag
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 dark:text-stone-100 leading-none mb-6">
                            Where Nature <br /> Meets <span className="text-emerald-600 dark:text-emerald-500">Community.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 dark:text-stone-300 mb-8 max-w-lg leading-relaxed">
                            Discover RERA-approved residential layouts tailored for modern living. Secure your future with Gadag&apos;s most trusted developer.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                            <Link to="/projects" className="btn btn-primary text-center">
                                Explore Projects
                            </Link>
                            <Link to="/schedule-visit" className="btn btn-secondary text-center">
                                Schedule a Visit
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-8 md:mt-12 flex flex-wrap items-center gap-4 md:gap-8 text-sm font-semibold text-slate-500 dark:text-slate-400">
                            <div className="flex items-center">
                                <FiShield className="text-emerald-500 mr-2 shrink-0" size={18} />
                                RERA Approved
                            </div>
                            <div className="flex items-center">
                                <FiMapPin className="text-emerald-500 mr-2 shrink-0" size={18} />
                                Strategic Locations
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                            <img
                                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop"
                                alt="Residential Layout"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Floating Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 z-20 max-w-xs"
                        >
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-600 dark:text-gold-400 mr-3">
                                    <FiCheck size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-bold">Status</div>
                                    <div className="font-bold text-slate-900 dark:text-stone-100">Ready for Registration</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                All our current phases are fully developed with tar roads, electricity, and water connection.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Value Props - Why Choose Us */}
            <section className="section-padding bg-emerald-50/50 dark:bg-slate-900 overflow-hidden">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-subtitle">Why Choose Us</span>
                            <h2 className="section-title mb-6">The Parisara Promise</h2>
                            <p className="text-slate-600 dark:text-stone-300 text-lg mb-12 leading-relaxed">
                                We don&apos;t just sell plots; we build communities. Here is why 150+ families have trusted us with their dream home.
                            </p>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: <FiShield />,
                                        title: "100% Legal Clarity",
                                        desc: "Every project is RERA approved and free from litigation. We ensure complete transparency in documentation."
                                    },
                                    {
                                        icon: <FiMapPin />,
                                        title: "Strategic Locations",
                                        desc: "Our layouts are chosen for their connectivity, appreciation potential, and proximity to city amenities."
                                    },
                                    {
                                        icon: <FiCheck />,
                                        title: "Essential Amenities",
                                        desc: "Wide tar roads, underground drainage, landscaped parks, and street lights are standard in all our projects."
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="flex gap-6"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-emerald-600 text-2xl shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif font-bold mb-2 text-slate-900 dark:text-stone-100">{item.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column: Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative lg:h-[600px]"
                        >
                            <div className="absolute inset-0 bg-emerald-200 dark:bg-emerald-900/20 rounded-[3rem] transform rotate-3 z-0"></div>
                            <div className="relative z-10 h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                                <img
                                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop"
                                    alt="Community Life"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                                    <p className="text-white text-lg font-medium">"Building trust, one plot at a time."</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Testimonials />
            <FAQ />

            {/* CTA Section */}
            <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Find Your Perfect Plot?</h2>
                    <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
                        Schedule a free site visit today and experience the quality of our development firsthand. We provide pick-up and drop facility.
                    </p>
                    <Link to="/schedule-visit" className="btn bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 text-lg">
                        Book Site Visit
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
