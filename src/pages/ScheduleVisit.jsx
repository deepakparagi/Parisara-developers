import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiUser, FiPhone, FiMail } from 'react-icons/fi';


const ScheduleVisit = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-stone-50 dark:bg-slate-950">
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-5"
                    >
                        <span className="section-subtitle">Experience It Yourself</span>
                        <h1 className="section-title mb-6">Schedule a <br />Site Visit</h1>
                        <p className="text-lg text-slate-600 dark:text-stone-300 mb-8">
                            We believe seeing is believing. Book a free site visit to experience the location, amenities, and development quality firsthand.
                        </p>

                        <div className="bg-emerald-900 text-white p-6 md:p-8 lg:p-10 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <h3 className="text-xl font-serif font-bold mb-4">What to Expect?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center shrink-0 mt-1 mr-3">
                                        <span className="text-xs font-bold">1</span>
                                    </div>
                                    <span className="text-emerald-100 text-sm">Guided tour of the entire layout by our expert.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center shrink-0 mt-1 mr-3">
                                        <span className="text-xs font-bold">2</span>
                                    </div>
                                    <span className="text-emerald-100 text-sm">Review of legal documents and master plan.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center shrink-0 mt-1 mr-3">
                                        <span className="text-xs font-bold">3</span>
                                    </div>
                                    <span className="text-emerald-100 text-sm">Transport facility from our office (optional).</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-slate-100 dark:border-slate-800">
                            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-stone-100 mb-6">Book Your Slot</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-stone-300 mb-2">Name</label>
                                        <div className="relative">
                                            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input type="text" className="input-field pl-10" placeholder="John Doe" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-stone-300 mb-2">Phone</label>
                                        <div className="relative">
                                            <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input type="tel" className="input-field pl-10" placeholder="+91 98765 43210" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-stone-300 mb-2">Preferred Date</label>
                                        <div className="relative">
                                            <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <input type="date" className="input-field pl-10" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-stone-300 mb-2">Preferred Time</label>
                                        <div className="relative">
                                            <FiClock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                            <select className="input-field pl-10 appearance-none">
                                                <option>Morning (10 AM - 1 PM)</option>
                                                <option>Afternoon (2 PM - 5 PM)</option>
                                                <option>Evening (5 PM - 7 PM)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-stone-300 mb-2">Project of Interest</label>
                                    <div className="relative">
                                        <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <select className="input-field pl-10 appearance-none">
                                            <option>All Projects</option>
                                            <option>Parisara Layout - Phase 1</option>
                                            <option>Green Valley Estate</option>
                                            <option>Sunshine Enclave</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="transport" className="rounded text-emerald-600 focus:ring-emerald-500" />
                                    <label htmlFor="transport" className="text-sm text-slate-600 dark:text-slate-400">I need transport from Gadag city center</label>
                                </div>

                                <button type="submit" className="btn btn-primary w-full py-4 text-lg">
                                    Confirm Booking
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleVisit;
