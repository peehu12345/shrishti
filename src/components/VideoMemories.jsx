import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const memories = [
  {
    id: 1,
    title: 'That one random dance',
    thumb: '/images/media__1779601842194.jpg',
  },
  {
    id: 2,
    title: 'Surprise Birthday 2024',
    thumb: '/images/gallery1.jpg',
  },
  {
    id: 3,
    title: 'Singing terribly in the car',
    thumb: '/images/gallery2.jpg',
  },
  {
    id: 4,
    title: 'Hostel night jam session',
    thumb: '/images/gallery3.jpg',
  },
  {
    id: 5,
    title: 'Endless laughter & gossip',
    thumb: '/images/media__1779601639811.jpg',
  },
  {
    id: 6,
    title: 'Inside jokes only we get',
    thumb: '/images/media__1779601627060.jpg',
  }
];

export default function VideoMemories() {
  const [active, setActive] = useState(2); // Middle one expanded by default

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-pink-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-pink-400 mb-6 backdrop-blur-md">
            <Heart size={16} className="fill-pink-400" />
            <span className="text-sm font-medium tracking-wider uppercase">Cherished Moments</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-white mb-6 drop-shadow-sm">
            The moments we wish <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">we could relive</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Some memories are too precious to be just pictures. They are filled with our craziest ideas, terrible singing, and unforgettable joy.
          </p>
        </motion.div>

        {/* Expanding Accordion Gallery */}
        <div className="flex flex-col lg:flex-row w-full h-[700px] lg:h-[600px] gap-3 sm:gap-4 mt-8">
          {memories.map((mem, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={mem.id}
                layout
                onClick={() => setActive(i)}
                animate={{ 
                  flex: isActive ? 6 : 1,
                  opacity: 1
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                className={`relative overflow-hidden cursor-pointer rounded-3xl lg:rounded-[2.5rem] border ${isActive ? 'border-pink-500/30 shadow-[0_0_40px_rgba(236,72,153,0.15)]' : 'border-white/5 shadow-lg'} transition-colors duration-500 min-h-[60px] lg:min-h-0 lg:min-w-[80px] bg-slate-900 group`}
              >
                {/* Background Image (Cover to prevent cropping) */}
                <div className="absolute inset-0">
                   <div 
                    className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-125"
                    style={{ backgroundImage: `url(${mem.thumb})` }}
                  ></div>
                  <img 
                    src={mem.thumb} 
                    alt={mem.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>

                {/* Overlays */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'group-hover:opacity-40'}`} />
                {isActive && <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />}

                {/* Content - Active State */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col justify-end"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Star size={16} className="text-pink-400 fill-pink-400/30" />
                        <span className="text-pink-300 text-xs sm:text-sm font-bold tracking-widest uppercase">Best Friends</span>
                      </div>
                      <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                        {mem.title}
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Content - Inactive State */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center lg:items-end lg:pb-12 pointer-events-none"
                    >
                      <p className="text-white/80 font-bold text-sm sm:text-base tracking-widest uppercase lg:-rotate-90 whitespace-nowrap drop-shadow-lg text-center px-4 lg:px-0">
                        {mem.title.length > 15 ? mem.title.substring(0, 15) + '...' : mem.title}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

