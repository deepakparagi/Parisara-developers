import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiAward, FiUsers, FiLayout, FiCalendar, FiArrowRight } from 'react-icons/fi';
import PageHero from '../components/layout/PageHero';

const About = () => {
    const stats = [
        { icon: FiCalendar, label: "Years of Excellence", value: "12+" },
        { icon: FiLayout, label: "Completed Projects", value: "5+" },
        { icon: FiUsers, label: "Happy Families", value: "200+" },
        { icon: FiCheckCircle, label: "Legal Clarity", value: "100%" },
    ];

    const timeline = [
        {
            year: "2010",
            title: "Inception",
            description: "Laying the Foundation: Established with a singular vision to bring transparency and organized development to the Gadag real estate landscape."
        },
        {
            year: "2015",
            title: "First Major Success",
            description: "Community Milestone: Delivered 'Green Meadows', our flagship project that created a thriving community for over 50 families, setting a new standard for quality."
        },
        {
            year: "2018",
            title: "Expansion",
            description: "Strategic Growth: Expanded our footprint beyond Gadag to Hubli and surrounding districts, driven by growing trust and demand for our quality developments."
        },
        {
            year: "2023",
            title: "Digital Transformation",
            description: "Innovation Era: Launched a cutting-edge digital platform to ensure complete transparency in bookings and project tracking, putting power in our customers' hands."
        }
    ];

    return (
        <div className="bg-stone-50 dark:bg-slate-950 pb-20 overflow-x-hidden">
            {/* Hero */}
            <PageHero
                title="Building Legacies, Not Just Layouts"
                subtitle="Our Story"
                image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
            />

            {/* Intro Section - 2 Column */}
            <section className="container py-20 md:py-32">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                            Crafting ecosystems where <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">families thrive.</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-emerald-500 mb-8 rounded-full"></div>
                        <p className="text-lg text-slate-600 dark:text-stone-300 leading-relaxed mb-6">
                            For over a decade, <span className="font-bold text-slate-800 dark:text-emerald-400">Parisara Developers</span> has been the cornerstone of trusted land development in Gadag. We believe a plot is more than just land; it's the canvas for your future home and a secure investment for generations.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-stone-300 leading-relaxed">
                            Our philosophy is simple: <strong>Transparency, Quality, and Trust.</strong> We don't just sell sites; we partner with you to build your wealth and your dreams.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 border-2 border-emerald-500/20 rounded-[2rem] transform rotate-3"></div>
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                                alt="Modern Architecture"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                                <blockquote className="text-white italic border-l-4 border-emerald-500 pl-4">
                                    "We build what we would buy ourselves."
                                    <footer className="not-italic text-sm text-emerald-300 font-bold mt-2">- Founder's Vision</footer>
                                </blockquote>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Strip */}
            <section className="bg-emerald-900 text-white py-16">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="text-center group"
                            >
                                <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
                                    <stat.icon size={32} className="text-emerald-300" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold font-serif mb-2">{stat.value}</h3>
                                <p className="text-emerald-200/80 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zig-Zag Timeline */}
            <section className="container py-24 md:py-32">
                <h2 className="section-title text-center mb-20">Our Historic Journey</h2>
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-emerald-200 dark:bg-emerald-900/30 transform md:-translate-x-1/2 rounded-full"></div>

                    <div className="space-y-12 md:space-y-24">
                        {timeline.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Spacer/Line Connector */}
                                    <div className="flex-1 md:w-1/2"></div>

                                    {/* Center Dot */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900 z-10 transform md:-translate-x-1/2 mt-1.5 md:mt-0"></div>

                                    {/* Content Card */}
                                    <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
                                        <div className={`
                                            bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative card-border
                                            ${isEven ? 'md:mr-16' : 'md:ml-16'}
                                        `}>
                                            <span className="text-6xl font-bold text-emerald-100 dark:text-emerald-900/20 absolute -top-6 -right-4 z-0">{item.year}</span>
                                            <div className="relative z-10">
                                                <div className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold rounded-full mb-3">{item.year}</div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Enhanced Cards */}
            <section className="bg-white dark:bg-slate-900 py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/10"></div>
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-2 block">The Parisara Advantage</span>
                        <h2 className="section-title mb-6">Why Hundreds Choose Us</h2>
                        <p className="text-slate-600 dark:text-slate-400">Because we understand that buying land is more than a transaction; it's a milestone.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FiCheckCircle,
                                title: "100% Legal Clarity",
                                desc: "Rigorous due diligence. RERA approved projects. We hand over not just papers, but absolute peace of mind."
                            },
                            {
                                icon: FiTarget,
                                title: "Strategic Precision",
                                desc: "We anticipate growth. Our locations are chosen for maximum appreciation potential, near upcoming infrastructure."
                            },
                            {
                                icon: FiAward,
                                title: "The Transparency Promise",
                                desc: "No fine print. No hidden costs. From booking to registration, you know exactly what you get."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group p-10 rounded-[2.5rem] bg-stone-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[4rem] transition-all group-hover:scale-150 group-hover:bg-emerald-500/10 duration-500"></div>
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-500 mb-8 shadow-sm group-hover:shadow-emerald-500/20 group-hover:text-emerald-400 transition-all relative z-10">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 relative z-10">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-stone-400 leading-relaxed text-sm relative z-10">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Buying Process - Horizontal Flow */}
            <section className="container py-24 mb-20">
                <div className="bg-slate-900 dark:bg-black rounded-[3rem] p-8 md:p-20 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    {/* Decorative Blobs */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16">Your Path to Ownership</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {["Site Visit", "Document Verification", "Booking & Agreement", "Registration"].map((step, i) => (
                                <motion.div
                                    key={i}
                                    className="relative group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="w-20 h-20 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-xl font-bold mb-8 border-4 border-slate-700 group-hover:border-emerald-500 transition-colors duration-300 relative z-10">
                                        <span className="text-emerald-400">0{i + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step}</h3>
                                    <span className="text-slate-400 text-sm">Step {i + 1}</span>

                                    {/* Connector Line */}
                                    {i < 3 && (
                                        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-slate-800 z-0">
                                            <div className="h-full bg-emerald-500/50 w-0 group-hover:w-full transition-all duration-700 delay-100"></div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
