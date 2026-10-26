import { useMemo, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Use Vite's glob import to get all the graphic design images at once
const images = import.meta.glob('../assets/poster-*.jpeg', { eager: true, import: 'default' });
// Sort filenames naturally to maintain consistency
const sortedPaths = Object.keys(images).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
const photoUrls = sortedPaths.map((path) => images[path]);

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
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    // Normalized so posters finish scrolling at 85% of section height.
    // The remaining 15% gives a generous buffer so the final poster is 100% full before unpinning!
    const normalized = Math.min(1, Math.max(0, latest / 0.85));
    el.scrollLeft = max <= 0 ? 0 : normalized * max;
    setProgress(latest);
  });

  const scrollByCards = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 500, behavior: 'smooth' });
  };

  // Generous vertical scroll track so each poster is easily viewed
  const scrollHeightVh = useMemo(() => 220 + photos.length * 8, []);

  return (
    <section id="graphic-designing" className="relative bg-[#FAF7F2] border-t border-[#EAE2D2]">
      {/* Sticky horizontal gallery driven by vertical scroll */}
      <div ref={scrollAreaRef} className="relative" style={{ minHeight: `${scrollHeightVh}vh` }}>
        {/* Pinned full-viewport container centered vertically so posters are NEVER cut off */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pt-16 md:pt-14 pb-8">
          <div className="container mx-auto px-4 sm:px-6 flex flex-col justify-center h-full max-h-[92vh]">
            {/* Compact, elegant header that leaves plenty of room for posters */}
            <div className="text-center mb-3 sm:mb-4 shrink-0">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE8DA] text-[11px] font-semibold text-[#5A5245] mb-2">
                <Sparkles className="text-[#4E6047]" size={12} />
                <span>Selected Graphic Works ({photos.length} Designs)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191816] tracking-tight">
                Visual Identity & Poster Showcase
              </h2>
              <p className="text-xs sm:text-sm text-[#6C665D] mt-1 max-w-xl mx-auto">
                Scroll down to browse through all campaign posters and branding designs
              </p>
            </div>

            {/* Gallery Track Container */}
            <div className="relative max-w-6xl mx-auto w-full shrink-0">
              {/* Left / Right manual arrows */}
              <button
                type="button"
                onClick={() => scrollByCards(-1)}
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-[#FAF7F2] border border-[#DDD3BF] hover:bg-[#191816] hover:text-[#FAF7F2] text-[#191816] transition-all shadow-md cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={() => scrollByCards(1)}
                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-[#FAF7F2] border border-[#DDD3BF] hover:bg-[#191816] hover:text-[#FAF7F2] text-[#191816] transition-all shadow-md cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>

              {/* Poster scroller: constrained height so posters are 100% visible vertically */}
              <div
                ref={scrollerRef}
                className="trendy-scrollbar overflow-x-auto flex gap-5 sm:gap-6 pb-6 pt-2 px-2 pl-4 pr-[35vw] md:pr-[45vw]"
                style={{ scrollBehavior: 'auto' }}
              >
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="h-[46vh] sm:h-[50vh] md:h-[54vh] max-h-[440px] min-h-[250px] aspect-square flex-none rounded-2xl md:rounded-3xl overflow-hidden border border-[#E5DEC9] bg-[#EFE8DA] shadow-md transition-transform hover:scale-[1.02] duration-200"
                  >
                    <img
                      src={photo.src}
                      alt={`Poster design ${photo.id}`}
                      loading="lazy"
                      className="w-full h-full object-cover block"
                    />
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="w-full max-w-md mx-auto px-4 mt-2">
                <div className="h-1.5 bg-[#EAE2D2] border border-[#DDD3BF] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#191816] rounded-full transition-all duration-100"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[11px] text-[#7A7367] mt-1.5">
                  <span>Scroll down to navigate</span>
                  <span>{Math.round(progress * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
