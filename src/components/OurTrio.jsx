import { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw } from 'lucide-react';

const friends = [
  {
    name: 'Nisha Nishad',
    role: 'The Soul',
    stats: {
      lateNightTalks: '900+',
      laughsShared: 'Too many',
      emotionalSupport: '100%',
    },
    img: '/images/nisha.jpg',
    color: 'blue',
    position: 'object-[center_top]',
  },
  {
    name: 'Priya Pandey',
    role: 'The Brain',
    stats: {
      lateNightTalks: '850+',
      laughsShared: 'Countless',
      emotionalSupport: '100%',
    },
    img: '/images/priya.jpg',
    color: 'purple',
    position: 'object-[center_15%]',
  },
  {
    name: 'Shrishti (The Birthday Girl)',
    role: 'The Heart',
    stats: {
      lateNightTalks: '999+',
      laughsShared: 'Infinite',
      emotionalSupport: '100%',
    },
    img: '/images/shrishti.jpg',
    color: 'pink',
    position: 'object-center',
  },
];

export default function OurTrio() {
  const [rotations, setRotations] = useState({ 0: 0, 1: 0, 2: 0 });

  const rotateImage = (index, e) => {
    e.stopPropagation();
    setRotations(prev => ({
      ...prev,
      [index]: prev[index] + 90
    }));
  };

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-pink-900/20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Iconic Trio
          </h2>
          <p className="text-slate-400 text-lg">Three different personalities, one perfect family.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {friends.map((friend, i) => (
            <motion.div
              key={friend.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative group w-full md:w-[340px]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                friend.color === 'pink' ? 'from-pink-500' : friend.color === 'purple' ? 'from-purple-500' : 'from-blue-500'
              } to-slate-900 rounded-3xl blur-md opacity-20 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              <div className="relative h-full glass rounded-3xl p-6 flex flex-col items-center text-center border-t border-l border-white/20 overflow-hidden">
                <div className="relative w-40 h-40 rounded-full overflow-visible mb-8 mt-4 group-hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 rounded-full ring-4 ring-white/20 group-hover:ring-white/50 transition-all duration-300 shadow-xl overflow-hidden bg-slate-800">
                    <img 
                      src={friend.img} 
                      alt={friend.name} 
                      className={`w-full h-full object-cover ${friend.position} transition-transform duration-500`} 
                      style={{ transform: `rotate(${rotations[i]}deg)` }}
                    />
                  </div>
                  {/* Rotate Button */}
                  <button 
                    onClick={(e) => rotateImage(i, e)}
                    className="absolute -bottom-2 -right-2 bg-slate-800 text-white p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 hover:bg-slate-700 transition-all duration-300 shadow-lg z-20"
                    title="Rotate Photo"
                  >
                    <RotateCw size={18} />
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">{friend.name}</h3>
                <p className={`text-sm font-medium tracking-widest uppercase mb-8 text-${friend.color}-400`}>
                  {friend.role}
                </p>

                <div className="w-full space-y-4">
                  {Object.entries(friend.stats).map(([key, value]) => (
                    <div key={key} className="bg-black/20 rounded-xl p-3 flex justify-between items-center border border-white/5">
                      <span className="text-slate-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-white font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
