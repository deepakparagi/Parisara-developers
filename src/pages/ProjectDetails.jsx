import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMapPin, FiCalendar, FiCheck, FiDownload } from 'react-icons/fi';
import { projectsData } from '../data/projects';
import { fadeInUp, staggerContainer } from '../utils/animations';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-slate-950">
                <div className="text-center">
                    <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-stone-100 mb-4">Project Not Found</h2>
                    <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-stone-50 dark:bg-slate-950 min-h-screen pb-20">
            {/* Hero Image */}
            <div className="relative h-[50vh] min-h-[400px]">
                <div className="absolute inset-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/60"></div>
                </div>
                <div className="absolute inset-0 flex items-center">
                    <div className="container text-white">
                        <Link to="/projects" className="inline-flex items-center text-stone-300 hover:text-white mb-6 transition-colors">
                            <FiArrowLeft className="mr-2" /> Back to Projects
                        </Link>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={staggerContainer}
                        >
                            <motion.span variants={fadeInUp} className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4 ${project.category === 'Completed' ? 'bg-emerald-500' :
                                project.category === 'Ongoing' ? 'bg-gold-500' :
                                    'bg-slate-500'
                                }`}>
                                {project.category}
                            </motion.span>
                            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold mb-4">
                                {project.title}
                            </motion.h1>
                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 text-stone-300">
                                <div className="flex items-center">
                                    <FiMapPin className="mr-2 text-emerald-400" />
                                    {project.location}
                                </div>
                                {project.possession && (
                                    <div className="flex items-center">
                                        <FiCalendar className="mr-2 text-gold-400" />
                                        Possession: {project.possession}
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container -mt-10 relative z-10">
                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Main Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-xl p-8 shadow-xl border border-slate-100 dark:border-slate-800"
                    >
                        <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-stone-100 mb-6">About the Project</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                            {project.description}
                            <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-stone-100 mb-4">Amenities & Features</h3>
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {project.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mr-3 shrink-0">
                                        <FiCheck size={16} />
                                    </div>
                                    {feature}
                                </div>
                            ))}
                            {/* Adding generated features for demo */}
                            {['Underground Drainage', 'Wide Tar Roads', 'Landscape Gardens', 'Children Play Area'].map((feature, index) => (
                                <div key={`demo-${index}`} className="flex items-center text-slate-600 dark:text-slate-300">
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mr-3 shrink-0">
                                        <FiCheck size={16} />
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>

                        {/* Gallery Placeholder */}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-stone-100 mb-4">Gallery</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="aspect-square bg-stone-200 dark:bg-slate-800 rounded-lg overflow-hidden relative group cursor-pointer">
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors"></div>
                                    <img
                                        src={`https://source.unsplash.com/random/400x400?architecture,${item}`}
                                        alt="Gallery"
                                        className="w-full h-full object-cover"
                                        onError={(e) => e.target.src = 'https://via.placeholder.com/400?text=Image'}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        {/* Status Card */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-100 dark:border-slate-800">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-stone-100 mb-4">Project Status</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm text-slate-500 mb-1">RERA Number</div>
                                    <div className="font-mono text-sm bg-stone-100 dark:bg-slate-800 p-2 rounded text-slate-700 dark:text-slate-300 break-all border border-stone-200 dark:border-slate-700">
                                        {project.rera || 'Pending Approval'}
                                    </div>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                                    <span className="text-slate-500">Launch Date</span>
                                    <span className="font-medium text-slate-900 dark:text-stone-200">{project.year || project.launch || 'TBA'}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                                    <span className="text-slate-500">Total Area</span>
                                    <span className="font-medium text-slate-900 dark:text-stone-200">12 Acres</span>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <span className="text-slate-500">Total Plots</span>
                                    <span className="font-medium text-slate-900 dark:text-stone-200">185</span>
                                </div>
                            </div>
                            <button className="w-full mt-6 btn btn-secondary flex items-center justify-center">
                                <FiDownload className="mr-2" /> Download Brochure
                            </button>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-emerald-900 rounded-xl p-6 shadow-lg text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800/50 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <h3 className="text-xl font-serif font-bold mb-2">Interested?</h3>
                            <p className="text-emerald-100 mb-6 text-sm">Schedule a site visit to see the progress yourself.</p>
                            <Link to="/contact" className="btn bg-white text-emerald-900 hover:bg-emerald-50 w-full text-center block">
                                Book Site Visit
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
