import React, { useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Image, Float, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import GridFloor from './GridFloor';
import BackgroundParticles from './BackgroundParticles';
import * as THREE from 'three';

const Experience: React.FC = () => {
    // Standard Framer Motion scroll hook (0..1)
    const { scrollYProgress } = useScroll();
    const scrollProgress = useRef(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        scrollProgress.current = latest;
    });

    // Refs for animation
    const avatarGroup = useRef<THREE.Group>(null);
    const philosophyChain = useRef<THREE.Group>(null);

    useFrame((state) => {
        // Use the native scroll progress ref
        const offset = scrollProgress.current;

        // --- Camera Movement ---
        // Move camera down as we scroll.
        // Total scroll height is roughly 8 pages.
        // Map 0..1 to Y position. Start at 5, go down to maybe -40?
        const targetY = 5 - (offset * 60);

        // Smooth camera movement
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);

        // --- Hero Animation ---
        if (avatarGroup.current) {
            avatarGroup.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            // Parallax effect: moves slower than camera
            avatarGroup.current.position.y = 1.5 + (offset * 10);
        }

        // --- Philosophy Animation ---
        // Should appear around offset 0.1 - 0.2
        // We want it to stay in view when its HTML counterpart is there.
        // The camera is moving down. We position objects at specific Y heights in the world.
        // Hero is at ~1.5.
        // If Philosophy HTML is 2nd section, it's roughly 10-15 units down in 3D space if 1 screen ~= 8 units.

        // Let's rely on absolute positioning in World Space, since Camera moves down.
        // Hero: y=0 (approx)
        // Philosophy: y=-10
        // Minimalism: y=-20
        // ...

        // Currently:
        // Philosophy Group at y=-10. 
        // Camera moves 5 -> -55.
        // When camera is at -10, Philosophy is center.
        // Offset 0.25 (approx) -> Y = 5 - (0.25 * 60) = -10. Perfect.
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
            <pointLight position={[-5, 5, -5]} intensity={0.5} color="#0066ff" />

            {/* Persistent Grid Floor - follows camera XZ but Y is fixed */}
            <group position={[0, -2, 0]}>
                {/* We might need to move grid floor with camera if we want infinite floor illusion vertically? 
                    Actually, grid shader handles infinite look. 
                    But if camera goes to Y=-50, floor at -2 is far above.
                    We should probably attach floor to camera Y but offset it?
                    Or just have one huge floor?
                    Let's bind floor to camera position for now to keep it "under feet"
                */}
                <GridFloor />
            </group>

            <BackgroundParticles />

            {/* --- SCENE 1: HERO (Visible at start) --- */}
            <group ref={avatarGroup} position={[3, 0, 0]}>
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <mesh>
                        <planeGeometry args={[4, 5]} />
                        <meshBasicMaterial transparent opacity={0.0} />
                        <Image
                            url="/images/ref-1.png"
                            scale={[4, 5]}
                            opacity={0.9}
                            transparent
                            radius={0.2}
                        />
                    </mesh>
                    <mesh position={[0, 0, -0.1]}>
                        <planeGeometry args={[4.2, 5.2]} />
                        <meshBasicMaterial color="#0066ff" transparent opacity={0.3} />
                    </mesh>
                </Float>
            </group>

            {/* --- SCENE 2: PHILOSOPHY (Visible at scroll ~20%) --- */}
            {/* Positioned at Y = -12 to match camera descent */}
            <group position={[-3, -12, 0]} ref={philosophyChain}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <mesh key={i} position={[0, 2 - i * 0.8, 0]} rotation={[Math.PI / 2, 0, i % 2 ? Math.PI / 2 : 0]}>
                        <torusGeometry args={[0.5, 0.1, 16, 32]} />
                        <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.2} />
                    </mesh>
                ))}
                <Text
                    position={[0, -2, 0.5]}
                    fontSize={0.5}
                    color="white"
                    font="https://fonts.gstatic.com/s/orbitron/v29/yMJRMIlzdpvBhQQL_Qq7dys.woff"
                    anchorX="center"
                    anchorY="middle"
                >
                    LEARNING
                </Text>
            </group>

            {/* --- SCENE 3: MINIMALISM (Visible at scroll ~35%) --- */}
            <group position={[0, -22, 0]}>
                <Float speed={4} rotationIntensity={1}>
                    <mesh position={[4, 2, -2]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="#ff4500" />
                    </mesh>
                    <mesh position={[-4, -2, 2]}>
                        <boxGeometry args={[0.5, 0.5, 0.5]} />
                        <meshStandardMaterial color="#ff4500" />
                    </mesh>
                </Float>
            </group>

            {/* --- SCENE 4: SERVICES --- */}
            <group position={[0, -32, 0]}>
                {/* Add subtle background elements for services */}
            </group>
        </>
    );
};

export default Experience;
