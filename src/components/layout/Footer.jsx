import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { companyInfo } from '../../lib/whatsapp';
import logo from '../../assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">

                    {/* Brand Section - Col 4 */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link to="/" className="inline-block">
                            <img src={logo} alt="PARISARA" className="h-12 w-auto brightness-0 invert opacity-90" />
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                            Building legacy communities with trust and transparency. RERA approved residential layouts in Godag.
                        </p>
                    </div>

                    {/* Navigation - Col 4 (Centered) */}
                    <div className="lg:col-span-4 flex flex-col lg:items-center">
                        <div>
                            <h3 className="text-white font-serif font-bold mb-6 text-sm uppercase tracking-widest">Explore</h3>
                            <ul className="space-y-3">
                                {['Home', 'Projects', 'About', 'Team', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                            className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact - Col 4 (Right Aligned on Desktop) */}
                    <div className="lg:col-span-4 flex flex-col lg:items-end">
                        <div className="text-left lg:text-right">
                            <h3 className="text-white font-serif font-bold mb-6 text-sm uppercase tracking-widest">Contact</h3>
                            <ul className="space-y-4">
                                <li className="flex lg:justify-end items-start gap-3 group">
                                    <FaMapMarkerAlt className="text-emerald-500 mt-1 shrink-0 lg:order-2" />
                                    <span className="text-sm text-slate-400 lg:order-1 max-w-[200px]">{companyInfo.address}</span>
                                </li>
                                <li className="flex lg:justify-end items-center gap-3 group">
                                    <FaPhoneAlt className="text-emerald-500 shrink-0 lg:order-2" />
                                    <a href={`tel:${companyInfo.phone}`} className="text-sm text-slate-400 hover:text-white transition-colors lg:order-1">
                                        {companyInfo.displayPhone}
                                    </a>
                                </li>
                                <li className="flex lg:justify-end items-center gap-3 group">
                                    <FaEnvelope className="text-emerald-500 shrink-0 lg:order-2" />
                                    <a href={`mailto:${companyInfo.email}`} className="text-sm text-slate-400 hover:text-white transition-colors lg:order-1">
                                        {companyInfo.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-600 order-2 md:order-1">
                        &copy; {currentYear} Parisar Developers. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 order-1 md:order-2">
                        <div className="flex space-x-4">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-slate-500 hover:text-emerald-400 transition-colors"
                                    aria-label="Social Link"
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-10 h-10 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all shadow-lg hover:-translate-y-1 z-50 opacity-80 hover:opacity-100"
                        aria-label="Back to Top"
                    >
                        <FiArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
