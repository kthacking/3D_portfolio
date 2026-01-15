import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 bg-transparent mix-blend-difference text-white">
            <div className="text-2xl font-bold font-sans tracking-widest text-neon-blue glitch-effect cursor-pointer">
                KIRUBALAN V
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(item.toLowerCase());
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="text-sm font-light tracking-wide hover:text-neon-blue transition-colors duration-300 relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
                    </a>
                ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X color="white" size={32} /> : <Menu color="white" size={32} />}
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/95 bg-opacity-95 backdrop-blur-xl flex flex-col justify-center items-center z-40 transition-all duration-500">
                    {navItems.map((item, index) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(false);
                                const element = document.getElementById(item.toLowerCase());
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="text-4xl font-black mb-8 hover:text-neon-blue tracking-widest transition-transform hover:scale-110"
                            style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
