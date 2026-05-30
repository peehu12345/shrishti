import { motion } from 'framer-motion';

export default function SpecialMessage() {
  const message = "To the one who made my college life a beautiful story, Happy Birthday. We've shared tears, laughter, stress, and joy. You're not just a best friend, you're a piece of my soul. I love you.";
  const words = message.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-32 bg-slate-900 relative flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-2xl max-h-2xl rounded-full bg-pink-500/5 blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="glass p-10 md:p-16 rounded-3xl border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.1)] relative"
        >
          {/* Decorative quotes */}
          <span className="absolute top-6 left-6 text-6xl text-pink-500/20 font-serif">"</span>
          <span className="absolute bottom-6 right-8 text-6xl text-pink-500/20 font-serif rotate-180">"</span>
          
          <motion.div
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl md:text-4xl text-slate-200 font-light leading-relaxed italic"
          >
            {words.map((word, index) => (
              <motion.span variants={child} key={index}>
                {word}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3.5, duration: 1 }}
            className="mt-12 text-pink-400 text-xl font-medium"
          >
            - Forever Yours
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
