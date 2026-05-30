import { motion } from 'framer-motion';
import { Sparkles, Star, Heart } from 'lucide-react';

const years = [
  {
    year: '1st Year (Lateral Entry)',
    title: 'Where it all began',
    desc: 'The awkward introductions, the first shared laughs, and the beginning of our trio.',
    img: '/images/media__1779601852480.jpg', // Group image 1
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    year: '2nd Year',
    title: 'Unstoppable Bond',
    desc: 'Surviving exams on coffee, late night assignments, fests, and making memories we will never forget.',
    img: '/images/media__1779601611298.jpg', // Group image 2
    icon: Star,
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: '3rd Year (Final)',
    title: 'Forever Family',
    desc: 'Placements, unforgettable trips, and the promise to stay exactly like this forever.',
    img: '/images/media__1779601842194.jpg', // Group image 3
    icon: Heart,
    color: 'from-rose-500 to-orange-400'
  },
];

export default function Timeline() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-pink-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 md:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-pink-400 mb-6 backdrop-blur-md">
            <Heart size={16} className="fill-pink-400" />
            <span className="text-sm font-medium tracking-wider uppercase">Our Story</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white mb-6 tracking-tight drop-shadow-sm">
            Our 3-Year <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Journey</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium">Every moment was a core memory, every day an adventure.</p>
        </motion.div>

        <div className="relative">
          {/* Central Glowing Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500 opacity-20 rounded-full"></div>

          {years.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`flex flex-col md:flex-row items-center justify-between mb-24 md:mb-32 relative group ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="w-full md:w-5/12 mb-10 md:mb-0 relative z-20">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateY: isEven ? -5 : 5, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ perspective: 1000 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl h-72 md:h-96 border border-white/10 bg-slate-900 cursor-pointer"
                  >
                    {/* Glowing blur behind image */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Uncropped background blur */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center blur-2xl opacity-50 scale-125 transition-transform duration-700 group-hover:scale-150"
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>

                    <img
                      src={item.img}
                      alt={item.year}
                      className="absolute inset-0 w-full h-full object-contain z-10 drop-shadow-2xl"
                    />
                  </motion.div>
                </div>

                {/* Interactive Center Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-slate-900 border border-white/10 items-center justify-center z-30 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-125 transition-transform duration-500">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500`}></div>
                  <div className={`relative w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg z-10`}>
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-center md:text-left z-20`}>
                  <div className={`inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-bold tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                    {item.year}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-md">{item.title}</h4>
                  
                  <div className={`relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/5 shadow-xl hover:bg-slate-800/50 transition-colors duration-500 overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    <p className="text-slate-300 text-lg leading-relaxed relative z-10 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
