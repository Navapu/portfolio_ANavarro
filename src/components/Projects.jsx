import { motion } from "framer-motion";
import { projectsData } from "../constants/projectsData";

const Projects = () => {
    return (
        <section id="projects" className="my-24 px-5">
            <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-[#F3F4F6]">
                Proyectos
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card bg-[#374151] rounded-md shadow-md flex flex-col cursor-pointer transform transition-transform transition-shadow duration-300 hover:-translate-y-4 hover:scale-105 hover:shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}>
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-[#F3F4F6] mb-2"> {project.title}</h3>
                            <p className="text-[#D1D5DB] font-inter text-lg mb-4"> {project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="bg-[#1F2937] border border-gray-500 text-[#F3F4F6] font-medium px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-3 mt-auto">
                                {project.demo && (
                                    <a href={project.demo} target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
                                        Demo</a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" className="px-4 py-2 bg-gray-600 text-white rounded-md shadow hover:bg-gray-700 transition">
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
