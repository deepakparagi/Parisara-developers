import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiHelpCircle, FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "Are the plots RERA approved?",
            answer: "Yes, all our layouts are fully RERA approved. We adhere to all government regulations and provide complete legal documentation for every plot."
        },
        {
            question: "Can I get a bank loan for purchasing a plot?",
            answer: "Absolutely. Our projects are approved by all major nationalized and private banks. We also have a dedicated team to assist you with the loan process."
        },
        {
            question: "What amenities are provided in the layout?",
            answer: "We provide wide tar roads, underground drainage, electricity connection with street lights, landscaped parks, and water connection to individual plots."
        },
        {
            question: "Is there a maintenance team for the layout?",
            answer: "Yes, Parisara Developers maintains the layout for the first 2-3 years after completion. Post that, we assist in forming a residents' association for handover."
        },
        {
            question: "How do I book a site visit?",
            answer: "You can book a site visit by calling our office numbers or filling out the 'Schedule a Visit' form on our website. We provide free pick-up and drop facility from Gadag city."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section-padding bg-stone-50 dark:bg-slate-900">
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-5">
                        <span className="section-subtitle">Common Questions</span>
                        <h2 className="section-title mb-6">Frequently Asked <br />Questions</h2>
                        <p className="text-slate-600 dark:text-stone-300 mb-8 text-lg leading-relaxed">
                            Everything you need to know about buying a plot with Parisara. Can&apos;t find the answer you&apos;re looking for?
                        </p>
                        <a href="/contact" className="btn btn-outline inline-flex items-center group">
                            <FiHelpCircle className="mr-2 group-hover:scale-110 transition-transform" />
                            Contact Support
                        </a>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`
                                    rounded-2xl transition-all duration-300 overflow-hidden
                                    ${activeIndex === index
                                        ? 'bg-white dark:bg-slate-800 shadow-xl ring-1 ring-emerald-500/20'
                                        : 'bg-white dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800'
                                    }
                                `}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`font-medium text-lg md:text-xl pr-8 ${activeIndex === index ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-800 dark:text-stone-200'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <span className={`
                                        shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                                        ${activeIndex === index
                                            ? 'bg-emerald-500 text-white rotate-180'
                                            : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                                        }
                                    `}>
                                        <FiChevronDown size={20} />
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed">
                                                <div className="h-px w-full bg-slate-100 dark:bg-slate-700 mb-4"></div>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
