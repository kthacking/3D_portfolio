import React from 'react';
import { motion } from 'framer-motion';

const events = [
    { year: "2026", title: "BCA Graduation", desc: "Goal: Completing degree, ready for industry challenges." },
    { year: "2025", title: "Innovation & Growth", desc: "Advanced web dev, multimedia mastery." },
    { year: "2024", title: "Expanding Horizons", desc: "IT Support, Cybersecurity, Mini Social Network Project." },
    { year: "2023", title: "The Journey Begins", desc: "Started BCA at St. Joseph's College. Freelance Web Dev." },
];

const Timeline: React.FC = () => {
    return (
        <div className="w-full flex justify-center pointer-events-auto">
            <div className="relative border-l-2 border-white/20 pl-8 md:pl-20 py-10 space-y-20">
                {events.map((e, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -left-[42px] md:-left-[90px] top-0 w-6 h-6 bg-black border-4 border-neon-blue rounded-full shadow-[0_0_20px_rgba(0,102,255,0.5)]"></div>

                        <h3 className="text-5xl md:text-8xl font-black text-white/5 absolute -top-8 -left-8 md:-left-4 z-0 pointer-events-none">
                            {e.year}
                        </h3>

                        <div className="relative z-10 bg-black/80 border border-white/10 p-6 rounded-xl backdrop-blur-md max-w-lg hover:border-neon-blue transition-colors">
                            <div className="text-neon-blue font-bold tracking-widest mb-2">{e.year}</div>
                            <h4 className="text-2xl font-bold text-white mb-2">{e.title}</h4>
                            <p className="text-gray-400">{e.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
