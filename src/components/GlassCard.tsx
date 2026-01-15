import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, FileText, Code2 } from 'lucide-react';

const GlassCard: React.FC = () => {
    // Parallax Tilt Hook
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for mouse movement
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 100);
        y.set(yPct * 100);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group perspective-1000" // Added perspective for 3D tilt
        >
            {/* Neon Glow Behind - Pulses smoothly */}
            <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-purple-600 rounded-3xl blur-2xl transition duration-1000"
            />

            {/* Main Card with 3D Transform */}
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                initial={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                    y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                className="relative w-full max-w-lg bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
                {/* Visual Noise Texture for realism */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

                {/* Reflection Gradient - Shimmers on Hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity duration-700"></div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center text-center transform translate-z-10" style={{ transform: 'translateZ(20px)' }}>

                    {/* Header */}
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-lg drop-shadow-neon-blue/50">
                        Kirubalan V
                    </h2>
                    <p className="text-sm md:text-base text-neon-blue font-mono mb-8 tracking-widest uppercase drop-shadow-md">
                        Full-Stack Developer | Cybersecurity Enthusiast
                    </p>

                    {/* .... rest of content same .... */}

                    {/* Code Preview Box */}
                    <div className="w-full bg-black/80 rounded-xl border border-white/10 p-4 mb-8 relative overflow-hidden h-32 group/code hover:border-neon-blue/50 transition-colors duration-500 shadow-inner">
                        <div className="absolute top-2 left-4 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-red-500/50 shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-yellow-500/50 shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-green-500/50 shadow-sm"></div>
                        </div>
                        <div className="mt-6 font-mono text-xs text-left text-green-400 opacity-90 leading-relaxed overflow-hidden">
                            <motion.div
                                animate={{ y: [0, -100] }}
                                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                            >
                                {`const developer = {
  name: "Kirubalan",
  skills: ["React", "Three.js", "CyberSec"],
  status: "Building Future",
  hardWorker: true,
  coffee: true
};

function init() {
  return "Ready to innovate";
}

// System Online...`}
                            </motion.div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none animate-scan"></div>
                    </div>

                    {/* Buttons - Optimized Hover */}
                    <div className="flex gap-6 mb-8">
                        {[{ Icon: FileText, label: "Resume" }, { Icon: Github, label: "GitHub" }, { Icon: Linkedin, label: "LinkedIn" }].map((btn, i) => (
                            <motion.button
                                key={i}
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="p-4 bg-white/5 border border-white/10 rounded-full group/btn relative overflow-hidden backdrop-blur-sm"
                            >
                                <div className="absolute inset-0 bg-neon-blue/30 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                                <btn.Icon size={24} className="text-white relative z-10 drop-shadow-md" />
                            </motion.button>
                        ))}
                    </div>

                    {/* Stats - Counter Animation */}
                    <div className="w-full border-t border-white/10 pt-6">
                        <div className="flex items-center justify-center gap-3 group/stats cursor-default">
                            <div className="p-2 bg-neon-orange/10 rounded-lg group-hover/stats:bg-neon-orange/20 transition-colors duration-500">
                                <Code2 size={24} className="text-neon-orange drop-shadow-orange" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-white leading-none flex items-center gap-1">
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                    >12+</motion.span>
                                </div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider group-hover/stats:text-white transition-colors duration-300">
                                    Completed Projects
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
};

export default GlassCard;
