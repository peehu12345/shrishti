import { useState, useRef, useEffect } from 'react';
import { Music, Music3, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // We create the audio object directly
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Placeholder music
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      onClick={toggleMusic}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center
        ${isPlaying ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50' : 'bg-slate-800/50 text-slate-400 border border-slate-700/50'}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isPlaying ? (
        <div className="relative">
          <Volume2 size={24} />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -inset-2 bg-pink-500/20 rounded-full -z-10 blur-sm"
          ></motion.div>
        </div>
      ) : (
        <VolumeX size={24} />
      )}
    </motion.button>
  );
}
