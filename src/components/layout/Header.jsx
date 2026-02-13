import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../design-system/ThemeToggle';
import logo from '../../assets/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
    ];

    // Close mobile menu on route change
    useEffect(() => {
        // eslint-disable-next-line
        setIsOpen(false);
    }, [location]);

    return (
        <header
            className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3"
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center group gap-3">
                    <img src={logo} alt="PARISARA" className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors duration-300 relative group ${location.pathname === link.path
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-slate-600 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-800 dark:text-stone-100 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl"
                    >
                        <nav className="container py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-base font-medium transition-colors ${location.pathname === link.path
                                        ? 'text-emerald-600 dark:text-emerald-400'
                                        : 'text-slate-600 dark:text-stone-300'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
