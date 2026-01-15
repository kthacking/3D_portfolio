import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Full-Stack Web Applications",
        desc: "Built dynamic websites with database integration, enhanced SEO, and optimized performance.",
        tech: "HTML • CSS • JavaScript • PHP • MySQL",
        type: "Web App"
    },
    {
        title: "Social Network Platform",
        desc: "College project featuring user authentication, posts, comments, and real-time interactions.",
        tech: "PHP • MySQL • Responsive Design",
        type: "Social Media"
    },
    {
        title: "Animated Portfolio Designs",
        desc: "Modern portfolios with smooth animations and immersive 3D experiences.",
        tech: "HTML • CSS • JavaScript • Three.js",
        type: "Creative"
    },
    {
        title: "Video Editing & Motion Graphics",
        desc: "Professional video editing and motion graphics for YouTube and social media content.",
        tech: "Premiere Pro • Photoshop • After Effects",
        type: "Multimedia"
    },
    {
        title: "Security Awareness Training",
        desc: "Conducted workshops on cybersecurity basics, ethical hacking, and penetration testing fundamentals.",
        tech: "Kali Linux • Termux • Penetration Testing",
        type: "Cybersecurity"
    }
];

const Projects: React.FC = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="w-full flex flex-col md:flex-row gap-8 pointer-events-auto h-[80vh] items-center">
            {/* List / Tabs */}
            <div className="w-full md:w-1/3 flex flex-col gap-4">
                <h2 className="text-4xl font-bold mb-8 text-white font-sans">Projects</h2>
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        className={`p-6 border-l-4 cursor-pointer transition-all duration-300 ${active === i ? 'border-neon-blue bg-white/5' : 'border-gray-800 hover:border-gray-600'}`}
                        onClick={() => setActive(i)}
                        whileHover={{ x: 10 }}
                    >
                        <h3 className={`text-xl font-bold ${active === i ? 'text-white' : 'text-gray-500'}`}>{p.title}</h3>
                        <p className="text-xs text-gray-500 uppercase mt-1">{p.type}</p>
                    </motion.div>
                ))}
            </div>

            {/* Preview Card */}
            <div className="w-full md:w-2/3 h-full relative perspective-1000">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, rotateY: -10, x: 50 }}
                    animate={{ opacity: 1, rotateY: 0, x: 0 }}
                    exit={{ opacity: 0, rotateY: 10, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-12 flex flex-col justify-center shadow-2xl overflow-hidden"
                >
                    {/* Background Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        <h3 className="text-neon-blue tracking-widest uppercase font-mono mb-4 text-sm">{projects[active].type}</h3>
                        <h2 className="text-5xl font-black text-white mb-6 leading-tight">{projects[active].title}</h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">{projects[active].desc}</p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            {projects[active].tech.split('•').map((tech, t) => (
                                <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>

                        <button className="px-8 py-4 bg-neon-orange hover:bg-orange-600 text-black font-bold rounded-lg transition-colors shadow-lg shadow-orange-900/20">
                            View Project
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
