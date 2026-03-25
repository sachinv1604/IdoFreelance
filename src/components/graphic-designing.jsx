import { useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Use Vite's glob import to get all the graphic design images at once
const images = import.meta.glob('../assets/poster-*.jpeg', { eager: true, import: 'default' });
// Sort filenames naturally to maintain consistency
const sortedPaths = Object.keys(images).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
const photoUrls = sortedPaths.map(path => images[path]);

const photos = photoUrls.map((src, i) => {
  const n = i + 1;
  return {
    id: n,
    src,
  };
});

export default function GraphicDesigning() {
  const scrollAreaRef = useRef(null);
  const scrollerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Optimized scroll logic using framer-motion's useScroll
  const { scrollYProgress } = useScroll({
    target: scrollAreaRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollLeft = max <= 0 ? 0 : latest * max;
    setProgress(latest);
  });

  const scrollByCards = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 720, behavior: 'smooth' });
  };

  const scrollHeightVh = useMemo(() => 180 + photos.length * 6, []);

  return (
    <section
      id="graphic-designing"
      className="py-24 bg-slate-950 border-t border-slate-800"
    >
      {/* Sticky horizontal gallery driven by vertical scroll (prevents moving to next section early) */}
      <div ref={scrollAreaRef} className="relative" style={{ minHeight: `${scrollHeightVh}vh` }}>
        <div className="sticky top-12 pt-12">
          <div className="container mx-auto px-6 pb-20">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Graphic <span className="text-indigo-500">Designing</span> Gallery
              </motion.h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Here are a few graphic designs I’ve done for past clients. Take a look!
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/70 border border-slate-800 shadow-lg">
                <Sparkles className="text-indigo-400" size={16} />
                <span className="text-xs font-bold text-slate-200">keep scrolling...</span>
              </div>

              <button
                type="button"
                onClick={() => scrollByCards(-1)}
                className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 hover:text-white text-slate-300 transition-all shadow-lg"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollByCards(1)}
                className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 hover:text-white text-slate-300 transition-all shadow-lg"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>

              <div
                ref={scrollerRef}
                className="trendy-scrollbar overflow-x-auto flex gap-6 pb-10"
                style={{ scrollBehavior: 'auto' }}
              >
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="flex-none w-[280px] sm:w-[340px] md:w-[420px] bg-slate-900 overflow-hidden"
                  >
                    <img
                      src={photo.src}
                      alt={`Poster ${photo.id}`}
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="absolute left-0 right-0 bottom-0 px-4 md:px-0">
                <div className="h-2.5 bg-slate-900/60 border border-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

