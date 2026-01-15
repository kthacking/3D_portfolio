import React, { useState } from 'react';
import { motion, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';

const VideoCard = ({ video }: { video: any, index: number }) => {
    return (
        <motion.div
            className="flex-shrink-0 w-[300px] h-[200px] mx-4 relative group perspective-1000"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.3 }}
        >
            {/* Water/Glow Effect Behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 animate-pulse"></div>

            <div className="w-full h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden relative shadow-2xl flex flex-col">
                {/* Liquid Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none z-20"></div>
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:animate-shine pointer-events-none z-20"></div>

                {/* Content Area */}
                <div className="w-full flex-grow bg-black/60 flex items-center justify-center relative overflow-hidden">
                    {video.embed ? (
                        <div className="w-full h-full transform scale-[1.01]"> {/* Slight scale to hide borders */}
                            <iframe
                                src={video.embed}
                                className="w-full h-full"
                                frameBorder="0"
                                allowFullScreen
                                title={video.title}
                                style={{ pointerEvents: 'auto' }}
                            ></iframe>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-5xl mb-4">{video.icon}</span>
                            <span className="text-white/50 font-mono">Loading...</span>
                        </div>
                    )}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none">
                    <h3 className="text-white font-bold text-sm drop-shadow-md truncate">{video.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse"></div>
                        <p className="text-neon-blue text-[10px] uppercase tracking-widest font-semibold">{video.category}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Carousel: React.FC = () => {
    // Smooth Infinite Loop Logic
    const [isHovered, setIsHovered] = useState(false);
    const baseVelocity = -0.03;
    const baseX = useMotionValue(0);

    useAnimationFrame((_, delta) => {
        // Stop movement if hovered
        const velocity = isHovered ? 0 : baseVelocity;
        let moveBy = velocity * (delta / 16);

        baseX.set(baseX.get() + moveBy);
    });

    const x = useTransform(baseX, (v) => `${v % 50}%`);

    const videos = [
        { title: "CyberSec Demo", category: "Latest Update", icon: "🔒", embed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7417334497089736704?compact=1" },
        { title: "Full Stack Project", category: "Development", icon: "�", embed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7416002161303580672?compact=1" },
        { title: "UI/UX Animation", category: "Design", icon: "🎨", embed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7415623035325579264?compact=1" },
        { title: "3D Interactive", category: "Three.js", icon: "🧊", embed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7414509615620501504?compact=1" },
        { title: "Motion Graphics", category: "Creative", icon: "🎬", embed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7414131879764791296?compact=1" },
        { title: "System Architecture", category: "Backend", icon: "⚙️", embed: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7413769070178795520?compact=1" },
    ];

    // Duplicate for seamless loop
    const duplicatedVideos = [...videos, ...videos];

    return (
        <div
            className="w-full relative overflow-hidden py-24 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Fade Edges / Vignette */}
            <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

            <motion.div
                className="flex w-max"
                style={{ x }}
                initial={{ x: 0 }}
            >
                {duplicatedVideos.map((video, i) => (
                    <VideoCard key={i} video={video} index={i} />
                ))}
            </motion.div>
        </div>
    );
};

export default Carousel;
