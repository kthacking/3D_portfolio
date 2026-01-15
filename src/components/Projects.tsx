import React from 'react';
import Carousel from './Carousel';

const Projects: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center pointer-events-auto min-h-[60vh]">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-black text-white mb-4 tracking-tight">FEATURED WORK</h2>
                <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full"></div>
            </div>

            <Carousel />

            <div className="mt-12 flex gap-4">
                <button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-gray-400 hover:text-white uppercase tracking-widest text-sm font-bold">
                    View All Projects
                </button>
            </div>
        </div>
    );
};

export default Projects;
