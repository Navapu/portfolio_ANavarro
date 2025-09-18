import { motion } from "framer-motion";
import { educationData } from "../constants/educationData.js";
const About = () => {
    return (
        <section id="about" className="my-24 px-5">
            <h2 className="text-3xl font-bold font-poppins mb-16 text-center">Sobre mí</h2>
            <div className="relative flex justify-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

                <div className="w-full max-w-4xl">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`mb-12 relative flex w-full ${index % 2 === 0 ? "justify-start text-left" : "justify-end text-right"
                                }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <span className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-2 border-white"></span>

                            <div className="w-full md:w-5/12 p-4 bg-white rounded-md shadow-md">
                                <h3 className="text-xl font-bold font-poppins">{item.title}</h3>
                                {item.subtitle && <h4 className="text-gray-600 font-inter">{item.subtitle}</h4>}
                                {item.date && <span className="text-gray-500 text-sm">{item.date}</span>}
                                {item.description && <p className="mt-2 text-gray-700 font-inter">{item.description}</p>}
                                {item.skills && <p className="mt-2 text-gray-800 font-inter font-medium">Aptitudes: {item.skills}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
