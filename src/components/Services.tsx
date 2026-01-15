import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Monitor, Database, Shield, Palette, Layers } from 'lucide-react';

const services = [
    {
        title: "Web Development",
        desc: "HTML • CSS • JavaScript • PHP • MySQL",
        icon: <Code2 size={40} className="text-neon-blue" />
    },
    {
        title: "UI/UX Design",
        desc: "Responsive Layouts • Modern Aesthetics",
        icon: <Monitor size={40} className="text-neon-orange" />
    },
    {
        title: "Multimedia Editing",
        desc: "Photoshop • Premiere Pro • Canva",
        icon: <Palette size={40} className="text-purple-500" />
    },
    {
        title: "Database Management",
        desc: "MySQL • SQL Server • Data Integration",
        icon: <Database size={40} className="text-green-500" />
    },
    {
        title: "Cybersecurity",
        desc: "Kali Linux • Termux • Penetration Testing",
        icon: <Shield size={40} className="text-red-500" />
    },
    {
        title: "Graphic Design",
        desc: "Motion Graphics • Brand Identity",
        icon: <Layers size={40} className="text-yellow-500" />
    }
];

const Services: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center pointer-events-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl font-bold mb-4 font-sans uppercase tracking-widest text-white">My Services</h2>
                <p className="text-gray-400 text-lg">That can elevate your <span className="text-neon-blue font-bold text-xl px-1">BRAND</span> to the next level</p>
                <div className="w-24 h-1 bg-neon-blue mx-auto mt-6 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-glass backdrop-blur-xl border border-white/5 p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        <div className="relative z-10 flex flex-col gap-4">
                            <div className="bg-black/40 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">{service.title}</h3>
                            <p className="text-gray-400 group-hover:text-gray-300">{service.desc}</p>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500 z-0"></div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-16 bg-black/80 backdrop-blur-md px-8 py-4 rounded-full border border-white/10 flex items-center gap-4"
            >
                <span className="text-gray-300">Make Your <span className="bg-neon-blue text-black px-2 py-0.5 rounded font-bold mx-1">✓</span> Call</span>
                <a href="mailto:kirubalan220@gmail.com" className="text-neon-blue font-bold hover:underline">kirubalan220@gmail.com</a>
            </motion.div>
        </div>
    );
};

export default Services;
