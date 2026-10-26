import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF7F2]">
      {/* Subtle warm ambient background glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#EFE5D3]/60 via-[#F3ECE1]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Centered Editorial Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DA] border border-[#E0D5C1] text-xs font-semibold tracking-wide text-[#453F36] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#4E6047]" />
            <span>Available for Freelance & Local Business Growth</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="tracking-tight"
          >
            <span className="font-editorial italic text-4xl sm:text-6xl md:text-7xl font-normal text-[#191816] block leading-[1.1]">
              Elevate Your Brand,
            </span>
            <span className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#191816] block mt-1 tracking-tight leading-[1.15]">
              Supercharge Your Digital Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-[#6C665D] mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            All-in-one digital partner for graphic design, modern high-converting websites,
            and social media management — built to help local businesses thrive.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mt-8"
          >
            <motion.a
              href="#graphic-designing"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full bg-[#191816] hover:bg-[#2C2925] text-[#FAF7F2] font-semibold text-sm inline-flex items-center gap-2.5 shadow-md shadow-[#191816]/10 transition-all"
            >
              <span>View My Work</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                →
              </span>
            </motion.a>

            <motion.a
              href={`https://wa.me/918762457716?text=${encodeURIComponent(
                "Hi Sachin, I'd like to talk about a project for my business."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full bg-[#ECE5D8] hover:bg-[#E2D9C9] text-[#191816] border border-[#DDD3C0] font-semibold text-sm inline-flex items-center gap-2 transition-all"
            >
              <span>Hire Me</span>
              <ArrowRight size={15} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}