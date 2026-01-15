import { useRef, useEffect } from 'react';
import Lenis from 'lenis';

const useLenis = () => {
    const lenis = useRef<Lenis | null>(null);
    const reqIdRef = useRef<number | null>(null);

    useEffect(() => {
        lenis.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        });

        const raf = (time: number) => {
            lenis.current?.raf(time);
            reqIdRef.current = requestAnimationFrame(raf);
        };
        reqIdRef.current = requestAnimationFrame(raf);

        return () => {
            lenis.current?.destroy();
            if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
        };
    }, []);

    return lenis;
};

export default useLenis;
