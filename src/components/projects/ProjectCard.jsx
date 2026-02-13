import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin, FiMaximize2 } from 'react-icons/fi';
import { fadeInUp } from '../../utils/animations';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg card-border hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 flex flex-col h-full"
        >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${project.category === 'Completed' ? 'bg-emerald-500 text-white' :
                        project.category === 'Ongoing' ? 'bg-amber-500 text-white' :
                            'bg-blue-500 text-white'
                        }`}>
                        {project.category}
                    </span>
                </div>

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-flex items-center text-white text-xs font-medium bg-emerald-600/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                        <FiMaximize2 className="mr-1.5" /> View Details
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative">
                <div className="mb-4">
                    <div className="flex items-center text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">
                        <FiMapPin className="mr-1.5" />
                        {project.location}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {project.title}
                    </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                        {project.status === 'Sold Out' ? (
                            <span className="text-xs font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">
                                Sold Out
                            </span>
                        ) : (
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-500 dark:text-slate-400">Status</span>
                                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{project.status}</span>
                            </div>
                        )}
                    </div>

                    <Link
                        to={`/projects/${project.id}`}
                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"
                    >
                        <FiArrowRight className="transform group-hover:-rotate-45 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
