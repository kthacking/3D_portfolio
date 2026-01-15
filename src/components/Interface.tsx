import React from 'react';
import Hero from './Hero';
import Philosophy from './Philosophy';
import Minimalism from './Minimalism';
import Services from './Services';
import Projects from './Projects';
import Skills from './Skills';
import Timeline from './Timeline';
import Contact from './Contact';

const SectionWrapper = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={`w-screen min-h-screen flex items-center justify-center p-4 md:p-20 relative ${className}`}>
        <div className="w-full max-w-7xl relative z-10">
            {children}
        </div>
    </section>
);

const Interface: React.FC = () => {
    return (
        <div className="flex flex-col w-full text-white">
            {/* Hero Section */}
            <Hero id="home" />

            {/* Philosophy Section */}
            <SectionWrapper id="about">
                <Philosophy />
            </SectionWrapper>

            {/* Minimalism Section */}
            <SectionWrapper>
                <Minimalism />
            </SectionWrapper>

            {/* Services Section */}
            <SectionWrapper>
                <Services />
            </SectionWrapper>

            {/* Projects Section */}
            <SectionWrapper id="projects">
                <Projects />
            </SectionWrapper>

            {/* Skills Section */}
            <SectionWrapper id="skills">
                <Skills />
            </SectionWrapper>

            {/* Timeline Section */}
            <SectionWrapper>
                <Timeline />
            </SectionWrapper>

            {/* Contact Section */}
            <SectionWrapper id="contact" className="pb-40">
                <Contact />
            </SectionWrapper>
        </div>
    );
};

export default Interface;
