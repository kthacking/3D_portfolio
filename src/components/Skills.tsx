import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    // 3D Visualization handled in Experience layer, this is the text overlay
    return (
        <div className="w-full h-full flex flex-col items-center justify-center pointer-events-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-center bg-black/50 backdrop-blur-md p-12 rounded-3xl border border-white/5 max-w-4xl"
            >
                <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-500 mb-8">
                    SKILL COMPOSITION
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                    A constellation of technologies orbiting around a core of problem-solving.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                    <div className="p-4 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                        <h4 className="text-neon-orange font-bold mb-2">Programming</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                            <li>Python</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                    <div className="p-4 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                        <h4 className="text-neon-blue font-bold mb-2">Web</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                            <li>HTML5 & CSS3</li>
                            <li>React & Three.js</li>
                            <li>MySQL</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    <div className="p-4 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                        <h4 className="text-purple-500 font-bold mb-2">Multimedia</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                            <li>Photoshop</li>
                            <li>Premiere Pro</li>
                            <li>After Effects</li>
                            <li>Canva</li>
                        </ul>
                    </div>
                    <div className="p-4 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                        <h4 className="text-green-500 font-bold mb-2">Cybersec</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                            <li>Kali Linux</li>
                            <li>Penetration Testing</li>
                            <li>Ethical Hacking</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;
