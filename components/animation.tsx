'use client'
// components/SplineScene.tsx
import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';


const SplineScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/barW5PWbSiRcA565/scene.splinecode');
    }
  }, []);

  return (
  <canvas
  className='lg:mt-8 mt-20'
  ref={canvasRef}
  id="canvas3d"
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex:-1,
  }}
/>
  );
};

export default SplineScene;

