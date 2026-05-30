import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Confetti from 'react-confetti';

export default function SurpriseEnding() {
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  useEffect(() => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const floatingPhotos = [
    { src: '/images/media__1779601611298.jpg', x: '-30%', y: '-40%', delay: 0 },
    { src: '/images/media__1779601627054.jpg', x: '40%', y: '-30%', delay: 0.2 },
    { src: '/images/media__1779601627060.jpg', x: '-40%', y: '30%', delay: 0.4 },
    { src: '/images/media__1779601627082.jpg', x: '30%', y: '40%', delay: 0.6 },
    { src: '/images/media__1779601639811.jpg', x: '0%', y: '-60%', delay: 0.8 },
    { src: '/images/media__1779600738571.jpg', x: '0%', y: '60%', delay: 1.0 },
  ];

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center bg-slate-950 overflow-hidden py-32">
      {isInView && (
        <div className="absolute inset-0 z-50 pointer-events-none">
          <Confetti
            width={windowDimension.width}
            height={windowDimension.height}
            recycle={false}
            numberOfPieces={800}
            gravity={0.15}
            colors={['#ec4899', '#a855f7', '#3b82f6', '#ffffff']}
          />
        </div>
      )}

      {/* Floating Collage */}
      <div className="absolute inset-0 z-0">
        {floatingPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={isInView ? { opacity: 0.4, scale: 1, x: photo.x, y: photo.y } : {}}
            transition={{ duration: 1.5, delay: photo.delay, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white/10"
            style={{ x: photo.x, y: photo.y }}
          >
            <img src={photo.src} alt="memory" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 1 }}
          className="glass p-12 rounded-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-8 leading-tight">
            This friendship was never just about college...
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 2.5 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-wider"
          >
            We became family ❤️
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
