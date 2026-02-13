import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';
import PageHero from '../components/layout/PageHero';

import { companyInfo } from '../lib/whatsapp';

const Contact = () => {
    return (
        <div className="bg-stone-50 dark:bg-slate-950 pb-0">
            <PageHero
                title="Contact Us"
                subtitle="Get in Touch"
                image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920&auto=format&fit=crop"
            />

            <div className="container pt-16 pb-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-stone-100 mb-4">Let&apos;s Start a Conversation</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                Whether you&apos;re looking for your dream plot or an investment opportunity, we&apos;re here to guide you every step of the way.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm card-border">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mr-5">
                                    <FiPhone size={24} />
                                </div>
                                <div className="mt-1">
                                    <h4 className="font-bold text-slate-900 dark:text-stone-100 text-lg mb-1">Call Us</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{companyInfo.displayPhone}</p>
                                </div>
                            </div>

                            <div className="flex items-start p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm card-border">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mr-5">
                                    <FiMail size={24} />
                                </div>
                                <div className="mt-1">
                                    <h4 className="font-bold text-slate-900 dark:text-stone-100 text-lg mb-1">Email Us</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{companyInfo.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm card-border">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mr-5">
                                    <FiMapPin size={24} />
                                </div>
                                <div className="mt-1">
                                    <h4 className="font-bold text-slate-900 dark:text-stone-100 text-lg mb-1">Visit Us</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                                        {companyInfo.address}
                                    </p>
                                    <a
                                        href={companyInfo.googleMaps}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-600 font-bold hover:text-emerald-700 hover:underline text-sm inline-flex items-center gap-1"
                                    >
                                        View on Google Maps <FiSend className="transform -rotate-45" size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 shadow-xl card-border"
                    >
                        <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-stone-100 mb-6">Send Message</h3>
                        <form className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                                    <input type="text" className="input-field" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                                    <input type="tel" className="input-field" placeholder="+91 98765 00000" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                <input type="email" className="input-field" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">I&apos;m interested in</label>
                                <select className="input-field">
                                    <option>Buying a Plot</option>
                                    <option>Site Visit</option>
                                    <option>Investment</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                <textarea className="input-field min-h-[120px]" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full btn btn-primary py-4 text-base flex items-center justify-center gap-2">
                                <FiSend /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[400px] grayscale-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123068.52554707647!2d75.61746775!3d15.4285743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8dc0e67b2d2f7%3A0xe67962c4a45e76!2sGadag-Betageri%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1707835123456!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
