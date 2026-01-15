import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Video, Shield, Terminal, Cpu, Layout, DollarSign, Database, Lock, Layers } from 'lucide-react';

// Data Configuration
const categories = [
    {
        id: 'code',
        title: 'Programming',
        icon: <Code size={40} />,
        bg: 'from-blue-600 to-cyan-500',
        skills: [
            { name: 'Python', icon: <Terminal size={20} /> },
            { name: 'Java', icon: <Cpu size={20} /> },
            { name: 'JavaScript', icon: <Code size={20} /> },
            { name: 'PHP', icon: <Database size={20} /> }
        ]
    },
    {
        id: 'web',
        title: 'Web Dev',
        icon: <Globe size={40} />,
        bg: 'from-purple-600 to-pink-500',
        skills: [
            { name: 'HTML5 & CSS3', icon: <Layout size={20} /> },
            { name: 'React', icon: <Code size={20} /> },
            { name: 'MySQL', icon: <Database size={20} /> },
            { name: 'Three.js', icon: <Layers size={20} /> }
        ]
    },
    {
        id: 'creative',
        title: 'Multimedia',
        icon: <Video size={40} />,
        bg: 'from-orange-500 to-red-500',
        skills: [
            { name: 'Premiere Pro', icon: <Video size={20} /> },
            { name: 'After Effects', icon: <Layers size={20} /> },
            { name: 'Photoshop', icon: <Layout size={20} /> }
        ]
    },
    {
        id: 'sec',
        title: 'Security',
        icon: <Shield size={40} />,
        bg: 'from-green-500 to-emerald-600',
        skills: [
            { name: 'Kali Linux', icon: <Terminal size={20} /> },
            { name: 'Pentesting', icon: <Lock size={20} /> },
            { name: 'Ethical Hacking', icon: <Shield size={20} /> }
        ]
    }
];

const Skills: React.FC = () => {
    const [isDeckHovered, setIsDeckHovered] = useState(false);

    return (
        <div className="w-full min-h-[80vh] flex flex-col items-center justify-center gap-12 pointer-events-auto px-4">

            {/* Header */}
            <div className="text-center relative z-10">
                <h2 className="text-6xl font-black text-white mb-2 tracking-tighter">MY ARSENAL</h2>
                <div className="h-1 w-24 bg-neon-blue rounded-full mx-auto"></div>
            </div>

            {/* Card Deck Display */}
            <div
                className="w-full h-[500px] flex items-center justify-center relative perspective-1000"
                onMouseEnter={() => setIsDeckHovered(true)}
                onMouseLeave={() => setIsDeckHovered(false)}
            >
                {/* The "Hand" of Cards */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {categories.map((cat, index) => {
                        // Calculate transforms
                        const fannedRotate = (index - 1.5) * 10;
                        const fannedX = (index - 1.5) * 50;
                        const fannedY = Math.abs(index - 1.5) * 10;

                        // Spread State: Horizontal grid row
                        const spreadX = (index - 1.5) * 280; // Wider spread
                        const spreadRotate = 0;
                        const spreadY = 0;

                        return (
                            <motion.div
                                key={cat.id}
                                className={`absolute w-[260px] h-[360px] rounded-3xl bg-gradient-to-br ${cat.bg} shadow-2xl flex flex-col p-6 border border-white/20 backdrop-blur-md overflow-hidden group`}
                                initial={{ rotate: fannedRotate, x: fannedX, y: fannedY }}
                                animate={{
                                    rotate: isDeckHovered ? spreadRotate : fannedRotate,
                                    x: isDeckHovered ? spreadX : fannedX,
                                    y: isDeckHovered ? spreadY : fannedY,
                                    scale: isDeckHovered ? 1 : 0.95,
                                    zIndex: isDeckHovered ? 10 : categories.length - index
                                }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                whileHover={{ scale: 1.1, zIndex: 50, rotate: 0 }}
                            >
                                {/* Card Header */}
                                <div className="flex flex-col items-center mb-6">
                                    <div className="p-3 bg-black/20 rounded-full mb-3 text-white">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-white font-bold text-2xl tracking-wide">{cat.title}</h3>
                                    <div className="w-12 h-1 bg-white/30 rounded-full mt-2"></div>
                                </div>

                                {/* Skills List - Properly displayed inside card */}
                                <ul className="flex flex-col gap-3 w-full">
                                    {cat.skills.map((skill, i) => (
                                        <li key={i} className="flex items-center gap-3 bg-black/10 px-3 py-2 rounded-lg hover:bg-black/20 transition-colors">
                                            <span className="text-white opacity-80">{skill.icon}</span>
                                            <span className="text-white font-medium text-sm">{skill.name}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:10px_10px]"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <p className="text-gray-500 text-sm uppercase tracking-widest animate-pulse">Hover to Expand</p>
        </div>
    );
};

export default Skills;
