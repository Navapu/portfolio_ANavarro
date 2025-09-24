import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [form, setForm] = useState({ user_name: "", user_email: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
            .then(() => {
                setStatus("success");
                setForm({ user_name: "", user_email: "", message: "" });
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setStatus("error");
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="my-24 px-5">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold font-poppins mb-10 text-center text-[#F3F4F6]">Contacto</h2>
                <form onSubmit={sendEmail} className="bg-[#1F2937] p-8 rounded-lg shadow-lg flex flex-col gap-6 w-full">
                    <label htmlFor="user_name" className="text-[#2563EB]">Nombre</label>
                    <input id="user_name" type="text" name="user_name" placeholder="Tu nombre" value={form.user_name} onChange={handleChange} required className="p-3 bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />

                    <label htmlFor="user_email" className="text-[#2563EB]">Correo electrónico</label>
                    <input id="user_email" type="email" name="user_email" placeholder="Tu correo" value={form.user_email} onChange={handleChange} required className="p-3 bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />

                    <label htmlFor="message" className="text-[#2563EB]">Mensaje</label>
                    <textarea id="message" name="message" placeholder="Tu mensaje" value={form.message} onChange={handleChange} required rows="5" className="p-3 bg-transparent border-b-2 border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none" />

                    <button type="submit" disabled={loading} className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-xl">
                        {loading ? "Enviando..." : "Enviar"}
                    </button>
                    {status === "success" && <p className="text-green-500 mt-2">✅ Mensaje enviado con éxito</p>}
                    {status === "error" && <p className="text-red-500 mt-2">❌ Error al enviar, inténtalo de nuevo</p>}
                </form>
                <div className="flex flex-col gap-2 justify-center items-center mt-8 text-center text-gray-300">
                    <p className="text-lg">¿Quieres colaborar o tienes alguna propuesta? 📬</p>
                    <a href="mailto:drojannp@gmail.com" className="text-blue-400 hover:underline">📧 drojannp@gmail.com</a>
                    <a href="https://www.linkedin.com/in/tuusuario/" target="_blank" className="text-blue-400 hover:underline">💼 LinkedIn</a>
                    <a href="https://github.com/Navapu" target="_blank" className="text-blue-400 hover:underline">🖥️ GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
