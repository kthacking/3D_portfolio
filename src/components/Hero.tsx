import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC<{ id?: string }> = ({ id }) => {
    return (
        <section id={id} className="w-full h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-20 relative pointer-events-none">
            {/* Left: Typography */}
            <div className="w-full md:w-1/2 flex flex-col items-start z-10 pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-script text-white mb-2 transform -rotate-2">
                        Big Idea
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-black font-sans text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 tracking-tighter"
                >
                    KIRUBALAN V
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl font-light text-gray-300 max-w-lg leading-relaxed border-l-2 border-neon-blue pl-4"
                >
                    Crafting digital experiences that <br />
                    <span className="text-neon-blue font-semibold">speak louder than code.</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-8 flex gap-4"
                >
                    <div className="bg-glass border border-white/10 p-4 rounded-lg backdrop-blur-md">
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Student</p>
                        <p className="text-white font-bold">BCA</p>
                    </div>
                    <div className="bg-glass border border-white/10 p-4 rounded-lg backdrop-blur-md">
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Focus</p>
                        <p className="text-neon-blue font-bold">Web Dev & CyberSec</p>
                    </div>
                </motion.div>
            </div>

            {/* Right: Space for 3D Character (Handled in 3D layer) */}
            <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
                {/* Placeholder for positioning reference */}
                <div className="hidden md:block w-[400px] h-[600px] border border-white/5 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-dashed opacity-20"></div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-neon-blue to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
