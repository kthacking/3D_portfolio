import { motion, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';

const VideoCard = ({ video }: { video: any, index: number }) => {
    return (
        <motion.div
            className="flex-shrink-0 w-[400px] h-[250px] mx-6 relative group perspective-1000"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="w-full h-full bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                {/* Shiny Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none z-10"></div>

                {/* Video Placeholder (Use actual video/gif if available, falling back to gradient for demo) */}
                <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
                    <div className={`absolute inset-0 opacity-50 bg-gradient-to-br ${video.color}`}></div>
                    <span className="text-4xl z-10">{video.icon}</span>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                    <h3 className="text-white font-bold text-lg">{video.title}</h3>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">{video.category}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Carousel: React.FC = () => {
    // Smooth Infinite Loop Logic
    const baseVelocity = -0.02; // Slower speed for smoother viewing
    const baseX = useMotionValue(0);

    useAnimationFrame((_, delta) => {
        let moveBy = baseVelocity * (delta / 16); // Normalise speed

        // Wrap around logic
        // If we have enough items, we can just reset position when it goes too far
        // For simple infinite loop, we usually render double items

        baseX.set(baseX.get() + moveBy);
    });

    // We need to wrap the x value so it repeats. 
    // Assuming total width of cards + gaps is e.g. 3000px
    const x = useTransform(baseX, (v) => `${v % 50}%`); // Wrap at 50% if we duplicate list once

    const videos = [
        { title: "CyberSec Demo", category: "Training", color: "from-green-900 to-black", icon: "🔒",},
        { title: "React Animations", category: "Web Dev", color: "from-blue-900 to-black", icon: "⚛️" },
        { title: "3D Portfolio", category: "Creative", color: "from-purple-900 to-black", icon: "🧊" },
        { title: "Motion Graphics", category: "Design", color: "from-orange-900 to-black", icon: "🎬" },
        { title: "API Integration", category: "Backend", color: "from-red-900 to-black", icon: "⚙️" },
    ];

    // Duplicate for seamless loop
    const duplicatedVideos = [...videos, ...videos, ...videos];

    return (
        <div className="w-full relative overflow-hidden py-20 group">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

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
