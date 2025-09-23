import { motion } from "framer-motion";
import { skillsData } from "../constants/skillsData";

const About = () => {
    return (
        <section id="about" className="my-24 px-5">
            <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-[#F3F4F6]">Sobre mí</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Columna izquierda: texto */}
                <motion.div
                    className="p-6 bg-[#374151] rounded-md shadow-md hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-[#F3F4F6] font-inter text-lg mb-4">
                        Soy <span className="font-bold">Alejandro Navarro</span>, Full Stack Developer Junior, apasionado por crear aplicaciones web dinámicas y funcionales.
                    </p>
                    <p className="text-[#D1D5DB] font-inter text-lg mb-4">
                        Tengo experiencia en <span className="font-semibold">JavaScript, React, Node.js y MongoDB</span>, y disfruto aprendiendo nuevas tecnologías para mejorar cada proyecto.
                    </p>
                    <p className="text-[#D1D5DB] font-inter text-lg">
                        Mi objetivo es seguir creciendo como desarrollador, contribuyendo a equipos que busquen soluciones innovadoras y eficientes.
                    </p>
                </motion.div>

                <motion.div
                    className="p-4 bg-[#374151] rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-wrap gap-3 items-center justify-start"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {skillsData.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-[#1F2937] border border-gray-500 text-[#F3F4F6] font-medium px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-all duration-300 leading-none text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default About;
