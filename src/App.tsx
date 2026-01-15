import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration, Glitch } from '@react-three/postprocessing';
import Experience from './components/Experience';
import Interface from './components/Interface';
import Navbar from './components/UI/Navbar';
import { useKonami } from './hooks/useKonami';
import './index.css';

function App() {
  const konami = useKonami();

  return (
    <>
      <Navbar />
      <Canvas gl={{ antialias: false, stencil: false, depth: true }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls pages={8} damping={0.2}>
            {/* 3D Content Layer */}
            <Experience />

            {/* HTML Content Layer */}
            <Scroll html style={{ width: '100vw', height: '100vh' }}>
              <Interface />
            </Scroll>
          </ScrollControls>
          <Preload all />
        </Suspense>

        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.4} mipmapBlur intensity={0.8} radius={0.4} />
          <Noise opacity={0.1} />
          <Vignette eskil={false} offset={0.1} darkness={0.9} />
          <ChromaticAberration offset={[0.001, 0.001]} />
          {konami && <Glitch delay={[0.5, 1]} duration={[0.6, 1.0]} strength={[0.3, 1.0]} />}
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;
