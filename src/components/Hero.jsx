import { motion } from 'framer-motion';

export default function Hero({ onStart }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 pb-8">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-700"></div>

      {/* Floating particles background placeholder */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 mb-6 drop-shadow-lg"
        >
          Happy Birthday to the most special part of our trio ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 2 }}
          className="text-lg md:text-2xl text-slate-300 font-light mb-12 italic tracking-wide"
        >
          "Some souls just understand each other upon meeting."
        </motion.p>

        {/* Hero Images Collage */}
        <div className="flex justify-center items-center gap-2 md:gap-6 mb-12 h-56 md:h-72">
          {[
            { src: '/images/hero1.jpg', rotate: '-rotate-6', delay: 1.4 },
            { src: '/images/hero2.jpg', rotate: 'rotate-2', delay: 1.6, zIndex: 'z-20', scale: 'scale-110' },
            { src: '/images/hero3.jpg', rotate: 'rotate-6', delay: 1.8 }
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: img.delay, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.15, rotate: 0, zIndex: 30 }}
              className={`relative w-28 md:w-56 h-48 md:h-72 rounded-xl md:rounded-2xl overflow-hidden border-4 border-white/20 shadow-[0_0_30px_rgba(236,72,153,0.3)] cursor-pointer ${img.rotate} ${img.zIndex || 'z-10'} ${img.scale || ''} transition-transform`}
            >
              <img src={img.src} alt={`Memory ${i+1}`} className="w-full h-full object-cover object-top" />
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236, 72, 153, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-lg tracking-wider hover:bg-white/20 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Start Journey</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      </div>
    </section>
  );
}
