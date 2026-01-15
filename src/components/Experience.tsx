import React, { useRef } from 'react';
import { useScroll, Image, Float, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import GridFloor from './GridFloor';
import BackgroundParticles from './BackgroundParticles';
import * as THREE from 'three';

const Experience: React.FC = () => {
    const scroll = useScroll();
    // const { viewport } = useThree(); // Unused

    // Refs for animation
    const avatarGroup = useRef<THREE.Group>(null);
    const philosophyChain = useRef<THREE.Group>(null);

    useFrame((state) => {
        // Current scroll offset (0 to 1)
        const offset = scroll.offset;

        // --- Camera Movement ---
        // Smoothly interpolate camera position based on scroll
        // Hero (0) -> z=10, y=5
        // Philosophy (0.2) -> z=10, y= -viewport.height...
        // Actually, ScrollControls moves the HTML, we can simulate camera movement 
        // or move the 'World' up/down. Moving world is often easier.

        // Here we will keep camera static and move the world content up
        // But specific requirement: "Dynamic camera movement following scroll".
        // Let's try animating camera y position:
        // state.camera.position.y = 5 - (offset * 40); // Move down as we scroll

        // But changing camera y creates parallax with the GridFloor!
        // GridFloor is at y=-2.
        // If we move camera down, we go through the floor.
        // Better: Move camera Z and LookAt.

        // Let's implement a 'Camera Rig' logic
        const targetY = 5 - (offset * 50); // Just moving straight down for now
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.1);

        // --- Hero Animation ---
        if (avatarGroup.current) {
            avatarGroup.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            // Parallax effect
            avatarGroup.current.position.y = 1.5 + (offset * 2);
        }

        // --- Grid Animation ---
        // Make grid follow camera x/z but stay at y level
        // Grid handles its own infinite feel via shader usually, but we might need to move it 
        // if camera moves too far.
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
            <pointLight position={[-5, 5, -5]} intensity={0.5} color="#0066ff" />

            {/* Persistent Grid Floor */}
            <GridFloor />
            <BackgroundParticles />

            {/* --- SCENE 1: HERO --- */}
            <group ref={avatarGroup} position={[3, 0, 0]}>
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    {/* Avatar Card */}
                    <mesh>
                        <planeGeometry args={[4, 5]} />
                        <meshBasicMaterial transparent opacity={0.0} /> {/* Invisible click target if needed */}
                        <Image
                            url="/images/ref-1.png"
                            scale={[4, 5, 1]}
                            opacity={0.9}
                            transparent
                            radius={0.2}
                        />
                    </mesh>
                    {/* Glow Border */}
                    <mesh position={[0, 0, -0.1]}>
                        <planeGeometry args={[4.2, 5.2]} />
                        <meshBasicMaterial color="#0066ff" transparent opacity={0.3} />
                    </mesh>
                </Float>
            </group>

            {/* --- SCENE 2: PHILOSOPHY --- */}
            <group position={[-3, -10, 0]} ref={philosophyChain}>
                {/* 3D Chain Elements - Simplified as Tori for now */}
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

            {/* --- SCENE 3: MINIMALISM --- */}
            <group position={[0, -20, 0]}>
                {/* Floating Cubes */}
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

        </>
    );
};

export default Experience;
