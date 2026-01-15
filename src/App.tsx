import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration, Glitch } from '@react-three/postprocessing';
import { Vector2 } from 'three';
import Experience from './components/Experience';
import Interface from './components/Interface';
import Navbar from './components/UI/Navbar';
import { useKonami } from './hooks/useKonami';
import useLenis from './hooks/useLenis';
import './index.css';

function App() {
  const konami = useKonami();
  useLenis(); // Initialize Smooth Scroll

  return (
    <div className="relative w-full">
      <Navbar />

      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas gl={{ antialias: false, stencil: false, depth: true }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <Experience />
            <Preload all />
          </Suspense>

          <EffectComposer enableNormalPass={false}>
            <Bloom luminanceThreshold={0.4} mipmapBlur intensity={0.8} radius={0.4} />
            <Noise opacity={0.1} />
            <Vignette eskil={false} offset={0.1} darkness={0.9} />
            <ChromaticAberration offset={new Vector2(0.001, 0.001)} />
            {konami ? <Glitch delay={new Vector2(0.5, 1)} duration={new Vector2(0.6, 1.0)} strength={new Vector2(0.3, 1.0)} /> : <group />}
          </EffectComposer>
        </Canvas>
      </div>

      {/* Scrollable HTML Content */}
      <main className="relative z-10 w-full pointer-events-none">
        {/* Pointer events auto on sections in Interface */}
        <Interface />
      </main>
    </div>
  );
}

export default App;
