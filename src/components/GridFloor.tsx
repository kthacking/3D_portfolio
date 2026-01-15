import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GridFloor: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPos;
    uniform float uTime;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Dynamic wave effect
      float wave = sin(pos.x * 0.1 + uTime) * 0.5 + sin(pos.y * 0.1 + uTime * 0.8) * 0.5;
      // Fade wave at edges or just keep it flat base but move hints?
      // Actually, let's keep it mostly flat but with slight ripple for "breathing" grid
      
      pos.z += wave * 0.2; // Slight vertical displacement

      vPos = pos;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    varying vec3 vPos;
    uniform float uTime;
    
    void main() {
      // Grid generation
      float gridSize = 50.0;
      float lineThickness = 0.05;
      
      // Calculate grid lines
      vec2 coord = vPos.xy * 0.5; // Scale
      vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
      float line = min(grid.x, grid.y);
      float gridIntensity = 1.0 - min(line, 1.0);

      // Glow color
      vec3 glowColor = vec3(0.0, 0.4, 1.0); // Electric Blue
      
      // Distance fade (Fog) - Fade out sooner to prevent horizon aliasing/clutter
      float dist = length(vPos.xy);
      float alpha = 1.0 - smoothstep(15.0, 45.0, dist);
      
      // Pulsing effect
      float pulse = (sin(uTime * 2.0) * 0.5 + 0.5) * 0.5 + 0.5;
      
      vec3 finalColor = glowColor * gridIntensity * pulse * 2.0;

      gl_FragColor = vec4(finalColor, alpha * gridIntensity);
    }
  `;

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
    // Keep grid floor relatively under the camera
    // We update this AFTER camera movement (priority 1) to avoid jitter/lag
    if (meshRef.current) {
      // Logic removed: User wants grid ONLY in Home section.
      // By not updating position, it stays at [0, -2, 0] and the camera will scroll past it (moving down),
      // effectively making the grid "move up" out of view.
      // meshRef.current.position.y = state.camera.position.y - 7;
      // meshRef.current.position.x = state.camera.position.x;
      // meshRef.current.position.z = state.camera.position.z;
    }
  }, 1); // Priority 1 ensures this runs after the main camera update logic (usually priority 0)

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[100, 100, 100, 100]} />
      <shaderMaterial
        ref={materialRef}
        transparent
        side={THREE.DoubleSide}
        uniforms={{
          uTime: { value: 0 },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export default GridFloor;
