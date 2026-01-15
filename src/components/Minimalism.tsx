import React from 'react';
import { motion } from 'framer-motion';

const Minimalism: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-between pointer-events-auto">
            <div className="md:w-1/2 relative p-8">
                {/* Decorative Frame */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-orange"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-orange"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-orange"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-orange"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="p-12 border border-white/5 bg-black/50 backdrop-blur-sm"
                >
                    <h5 className="text-neon-orange font-bold uppercase tracking-widest mb-4">Essence Academy</h5>
                    <h2 className="text-6xl md:text-8xl font-black mb-0 text-gray-800">Less Isn't</h2>
                    <h2 className="text-6xl md:text-8xl font-black mb-8 text-white">Empty</h2>

                    <p className="text-gray-400 leading-relaxed mb-6">
                        At Kirubalan's Portfolio, I don't just code. I reduce noise. Because every space you leave empty has a purpose. <br />
                        Every pause speaks.
                    </p>

                    <p className="text-xl font-light text-white border-l-4 border-neon-orange pl-4">
                        Every Clean Design Says <br />
                        More Than A Thousand Cluttered Pages
                    </p>
                </motion.div>
            </div>

            <div className="md:w-1/2 flex justify-end">
                {/* 3D Mountain / Void is in background layer */}
                <div className="text-right p-8">
                    <p className="text-gray-500 font-mono text-xs mb-2">MEASUREMENT: 1024x768</p>
                    <p className="text-gray-500 font-mono text-xs">GRID: AXIS-ALIGNED</p>
                </div>
            </div>
        </div>
    );
};

export default Minimalism;
