import { motion } from "framer-motion";
import { educationData } from "../constants/educationData.js";

const Education = () => {
    return (
        <section className="my-24 px-5">
            <h2 className="text-3xl font-bold font-poppins mb-16 text-center text-[#F3F4F6]">Formación</h2>
            <div className="relative flex justify-center">
                <div className="w-full max-w-4xl">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex w-full ${index % 2 === 0 ? "justify-start text-left" : "justify-end text-right"}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <span className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-2 border-white z-10"></span>

                            {index < educationData.length - 1 && (
                                <span className="absolute left-1/2 transform -translate-x-1/2 top-6 w-1 bg-gray-300 h-[calc(100%-1.5rem)]"></span>
                            )}

                            <div className={`bg-[#374151] timeline-content ${index % 2 === 0 ? "left" : "right"}`}>
                                <h3 className="text-xl font-bold font-poppins text-[#F3F4F6]">{item.title}</h3>
                                {item.subtitle && <h4 className="text-[#D1D5DB] font-inter">{item.subtitle}</h4>}
                                {item.date && <span className="text-[#2563EB] text-sm font-medium">{item.date}</span>}
                                {item.description && <p className="mt-2 text-[#D1D5DB] font-inter">{item.description}</p>}
                                {item.skills && <p className="mt-2 text-[#D1D5DB] font-inter font-medium">Aptitudes: {item.skills}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
