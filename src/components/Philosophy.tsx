import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center relative w-full h-full pointer-events-auto">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
            >
                <span className="text-sm font-mono text-gray-400 mb-2 block tracking-[0.3em]">PHILOSOPHY</span>
                <h2 className="text-4xl md:text-7xl font-sans font-bold leading-tight">
                    Design is a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">learning experience</span>
                </h2>
                <p className="mt-4 text-xl font-script text-neon-blue">- Hans Hoffmann</p>
            </motion.div>

            {/* Center visual handled by 3D layer (the Chain and Card) 
          We just provide the space and surrounding text 
      */}
            {/* Transparent container for 3D elements */}
            <div className="h-[400px] w-full max-w-2xl mx-auto flex items-center justify-center relative">
                
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center"
            >
                <h3 className="text-2xl font-bold mb-2">I hope you found this helpful!</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                    Code is my canvas, innovation my medium. Every project is a step towards digital perfection.
                </p>
                <button className="mt-6 px-8 py-3 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 rounded-full font-bold tracking-wider">
                    EXPLORE MORE
                </button>
            </motion.div>
        </div>
    );
};

export default Philosophy;
