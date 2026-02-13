import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import PageHero from '../components/layout/PageHero';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Team = () => {
    const teamMembers = [
        {
            name: "Rajesh Kumar",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
            bio: "With over 20 years of experience in real estate development, Rajesh leads Parisara with a vision for sustainable living."
        },
        {
            name: "Sneha Patil",
            role: "Head of Sales",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
            bio: "Sneha ensures every customer finds their perfect plot. She is known for her transparent and customer-first approach."
        },
        {
            name: "Anand Meti",
            role: "Lead Architect",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            bio: "Anand brings modern design principles to our layouts, ensuring optimal space utilization and aesthetic appeal."
        },
        {
            name: "Vikram Singh",
            role: "Legal Advisor",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
            bio: "Vikram handles all legal compliances, ensuring every Parisara project is 100% legally secure and RERA approved."
        },
        {
            name: "Anita Desai",
            role: "Senior CRM",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
            bio: "Anita is the bridge between our customers and the company, ensuring seamless communication and support."
        },
        {
            name: "Suresh Reddy",
            role: "Site Engineer",
            image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=400&auto=format&fit=crop",
            bio: "Suresh oversees on-site developments, ensuring top-quality construction and timely completion of infrastructure."
        },
        {
            name: "Meera Kulkarni",
            role: "Marketing Head",
            image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?q=80&w=400&auto=format&fit=crop",
            bio: "Meera crafts our brand stories and ensures our vision reaches every potential homeowner in the region."
        },
        {
            name: "Arjun Rao",
            role: "Sales Executive",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
            bio: "Helping families choose their dream plot with patience and detailed guidance is Arjun's forte."
        }
    ];

    return (
        <div className="bg-stone-50 dark:bg-slate-950 pb-16">
            <PageHero
                title="Meet the Team"
                subtitle="Our People"
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
            />

            <div className="container pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <p className="text-xl text-slate-600 dark:text-stone-300">
                        The dedicated professionals behind Parisara Developers.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg card-border group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-colors z-10"></div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-stone-100 mb-1">{member.name}</h3>
                                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-4">{member.role}</div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-3">
                                    {member.bio}
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <button className="text-slate-400 hover:text-emerald-500 transition-colors"><FiLinkedin size={18} /></button>
                                    <button className="text-slate-400 hover:text-emerald-500 transition-colors"><FiMail size={18} /></button>
                                    <button className="text-slate-400 hover:text-emerald-500 transition-colors"><FiPhone size={18} /></button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Join Us CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 bg-gradient-to-r from-emerald-900 to-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Want to join our team?</h2>
                        <p className="text-emerald-100 mb-8 text-lg">
                            We are always looking for passionate individuals to join our mission of building better communities.
                            If you have the drive, we have the platform.
                        </p>
                        <a
                            href="mailto:careers@parisara.com"
                            className="inline-block bg-white text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Send Your Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Team;
