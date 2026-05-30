import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Map, Moon, Users, Coffee, Sun, Music, Compass, Sparkles, Camera } from 'lucide-react';

const photos = [
  { id: 1, url: '/images/media__1779601611298.jpg', caption: 'The crazy trip we almost missed', icon: Map, size: 'md:col-span-2 md:row-span-2' },
  { id: 2, url: '/images/media__1779601627054.jpg', caption: 'Hostel night talks', icon: Moon, size: 'md:col-span-1 md:row-span-1' },
  { id: 3, url: '/images/gallery1.jpg', caption: 'Last bench gang', icon: Users, size: 'md:col-span-1 md:row-span-2' },
  { id: 4, url: '/images/media__1779601627082.jpg', caption: 'Maggi at 2 AM', icon: Coffee, size: 'md:col-span-1 md:row-span-1' },
  { id: 7, url: '/images/media__1779600738600.jpg', caption: 'Sun-kissed memories', icon: Sun, size: 'md:col-span-2 md:row-span-1' },
  { id: 5, url: '/images/gallery2.jpg', caption: 'That one fest', icon: Music, size: 'md:col-span-1 md:row-span-2' },
  { id: 6, url: '/images/media__1779601842188.jpg', caption: 'Unplanned adventures', icon: Compass, size: 'md:col-span-1 md:row-span-1' },
  { id: 8, url: '/images/gallery3.jpg', caption: 'Unforgettable days', icon: Sparkles, size: 'md:col-span-2 md:row-span-1' },
  { id: 9, url: '/images/media__1779601639811.jpg', caption: 'Candid moments together', icon: Camera, size: 'md:col-span-1 md:row-span-1' },
];

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <section className="py-32 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 mb-6 backdrop-blur-md">
            <Sparkles size={16} className="text-indigo-400" />
            <span className="text-sm font-medium tracking-wider uppercase">Focus on the Good Times</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-6 drop-shadow-sm tracking-tight">
            A Thousand Words
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Hover over the faded memories to bring them back into sharp focus. A visual diary of the unforgettable journey we shared together.
          </p>
        </motion.div>

        {/* Blur-Reveal Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[250px] md:auto-rows-[280px]">
          {photos.map((photo, i) => {
            const Icon = photo.icon;
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
                className={`relative group overflow-hidden rounded-[2rem] cursor-pointer bg-slate-900 border border-white/5 shadow-xl hover:shadow-[0_0_40px_rgba(129,140,248,0.2)] hover:border-indigo-500/30 transition-all duration-500 ${photo.size}`}
                onClick={() => setLightboxImg(photo)}
              >
                {/* Background Image - heavily blurred by default */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={photo.url} 
                    alt={photo.caption} 
                    className="w-full h-full object-cover transition-all duration-700 ease-out blur-[20px] scale-125 group-hover:blur-0 group-hover:scale-105" 
                  />
                </div>
                
                {/* Default Dark Overlay (Fades out on hover) */}
                <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/10 transition-colors duration-700 ease-out z-10" />

                {/* Default Centered Content (Fades out on hover) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20 transition-opacity duration-500 ease-out group-hover:opacity-0">
                  <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                    <Icon className="w-8 h-8 text-white/70" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-md">
                    {photo.caption}
                  </h3>
                  <p className="text-indigo-300 text-xs font-semibold tracking-[0.2em] uppercase mt-4 opacity-70">
                    Hover to Reveal
                  </p>
                </div>

                {/* Revealed Caption (Slides up on hover) */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-30 pointer-events-none">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-indigo-400" />
                    <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase">Memory Unlocked</span>
                  </div>
                  <h3 className="text-white font-bold text-xl drop-shadow-lg">{photo.caption}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/95 backdrop-blur-xl"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-all z-50 hover:scale-110 hover:rotate-90 duration-300"
              onClick={() => setLightboxImg(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full flex flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(129,140,248,0.2)]">
                <img
                  src={lightboxImg.url}
                  alt={lightboxImg.caption}
                  className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-2xl"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 sm:mt-8 bg-slate-900/60 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full"
              >
                <p className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                  {lightboxImg.caption}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
