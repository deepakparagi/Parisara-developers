import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import { staggerContainer } from '../utils/animations';
import { FiFilter, FiChevronDown } from 'react-icons/fi';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const categories = ['All', 'Completed', 'Ongoing', 'Upcoming'];

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className="pt-28 pb-20 min-h-screen bg-stone-50 dark:bg-slate-950 transition-colors duration-500">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Our Portfolio
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                        Featured Projects
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        Explore our well-planned layouts designed for modern living. From completed landmarks to upcoming opportunities, find your perfect plot.
                    </p>

                    {/* Filter Dropdown */}
                    <div className="mt-10 relative inline-block text-left z-30">
                        <div className="flex items-center justify-center">
                            <button
                                type="button"
                                onClick={toggleDropdown}
                                className="inline-flex justify-between items-center w-48 rounded-md border border-slate-300 dark:border-slate-700 shadow-sm px-4 py-2.5 bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                            >
                                <span className="flex items-center">
                                    <FiFilter className="mr-2 text-emerald-500" />
                                    {filter} Projects
                                </span>
                                <FiChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                            </button>
                        </div>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="origin-top absolute mt-2 w-48 rounded-md shadow-xl bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none left-1/2 transform -translate-x-1/2 overflow-hidden"
                                >
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => {
                                                    setFilter(category);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${filter === category
                                                    ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-medium'
                                                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
                                                    }`}
                                                role="menuitem"
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="inline-block p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                            <FiFilter className="h-8 w-8 text-slate-400" />
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">No projects found in this category.</p>
                        <button
                            onClick={() => setFilter('All')}
                            className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                        >
                            View all projects
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Projects;
