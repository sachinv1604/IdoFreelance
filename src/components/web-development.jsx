import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, LayoutGrid, Rocket } from 'lucide-react';

const websites = [
  {
    title: 'LIC OBCEWA WEBSITE',
    category: 'Insurance Service',
    description:
      'A professional insurance service website providing policy information and easy customer interaction.',
    image: 'https://picsum.photos/seed/lic/1200/800',
    url: 'https://licobcewa.in/',
    tags: ['Professional', 'Insurance', 'Policy Info'],
    icon: <Globe size={28} />,
  },
  {
    title: 'BASU CAB SERVICE',
    category: 'Cab Service',
    description:
      'A local cab service website designed to improve bookings and provide clear service information.',
    image: 'https://picsum.photos/seed/cab/1200/800',
    url: 'https://basucabservice.com/',
    tags: ['Booking System', 'Local Service', 'Responsive'],
    icon: <Rocket size={28} />,
  },
  {
    title: 'RC TAX CONSULTANT',
    category: 'Tax Consulting',
    description:
      'A clean and professional website for tax consulting services, focused on trust and client communication.',
    image: 'https://picsum.photos/seed/tax/1200/800',
    url: 'https://weareat.online/rctaxconsultant/',
    tags: ['Professional', 'Consulting', 'Trust-focused'],
    icon: <LayoutGrid size={28} />,
  },
  {
    title: 'WEB FINDER',
    category: 'Search Tool',
    description:
      'A simple web search tool that helps users quickly find and navigate useful websites with a clean interface.',
    image: 'https://picsum.photos/seed/search/1200/800',
    url: 'https://github.com/sachinv1604/WEB_FINDER',
    tags: ['Search Tool', 'Clean UI', 'Navigation'],
    icon: <Code size={28} />,
  },
  {
    title: 'GOLDSMITH WEB',
    category: 'Premium Business',
    description:
      'A premium business website designed for showcasing jewelry products with elegant UI and smooth user experience.',
    image: 'https://picsum.photos/seed/jewelry/1200/800',
    url: 'https://github.com/sachinv1604/GOLDSMITH_WEB',
    tags: ['Elegant UI', 'Jewelry Showcase', 'Premium'],
    icon: <Globe size={28} />,
  },
  {
    title: 'EDUTRANS WEB',
    category: 'Student Transport',
    description:
      'A service-based website for student transport solutions, focusing on accessibility, clarity, and responsive design.',
    image: 'https://picsum.photos/seed/transport/1200/800',
    url: 'https://github.com/sachinv1604/edutrans_web',
    tags: ['Accessibility', 'Transport Solutions', 'Responsive'],
    icon: <Rocket size={28} />,
  },
];

export default function WebDevelopment() {
  const scrollAreaRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [scrollHeightVh, setScrollHeightVh] = useState(120 + websites.length * 18);

  useEffect(() => {
    const area = scrollAreaRef.current;
    if (!area) return;

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    let startY = 0;
    let endY = 0;
    const calcBounds = () => {
      const rect = area.getBoundingClientRect();
      startY = rect.top + window.scrollY;
      endY = startY + area.offsetHeight - window.innerHeight;
    };

    let raf = 0;
    const updateFromScroll = () => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        const denom = endY - startY;
        const p = denom <= 0 ? 0 : clamp((window.scrollY - startY) / denom, 0, 1);
        setProgress(p);
      });
    };

    calcBounds();
    updateFromScroll();

    window.addEventListener('scroll', updateFromScroll, { passive: true });
    const onResize = () => {
      calcBounds();
      updateFromScroll();
    };
    window.addEventListener('resize', onResize);

    const calcScrollHeight = () => {
      const w = window.innerWidth;
      // Make the section shorter on mobile so it doesn't feel like it's taking over the screen.
      if (w < 640) return 95 + websites.length * 10;
      if (w < 420) return 85 + websites.length * 9;
      return 120 + websites.length * 18;
    };

    setScrollHeightVh(calcScrollHeight());
    const onResizeForHeight = () => setScrollHeightVh(calcScrollHeight());
    window.addEventListener('resize', onResizeForHeight, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('resize', onResizeForHeight);
    };
  }, []);

  const pSteps = progress * Math.max(1, websites.length - 1);

  return (
    <section id="web-development" className="py-24 bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
          >
            Web <span className="text-indigo-500">Development</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Scroll diagonally. {websites.length} cards.
          </p>
        </div>
      </div>

      {/* Sticky diagonal showcase driven by vertical scroll */}
      <div ref={scrollAreaRef} className="relative" style={{ minHeight: `${scrollHeightVh}vh` }}>
        <div className="sticky top-24 sm:top-20">
          <div className="container mx-auto px-6 pb-24">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl" />

              <div className="absolute inset-0 opacity-70 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-[-14deg]" />
                <div className="absolute left-1/2 top-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-[166deg]" />
              </div>

              <div className="relative h-[360px] sm:h-[320px]">
                {websites.map((site, index) => {
                  // offset=0 means this card is currently "in focus"
                  const offset = index - pSteps;

                  // Diagonal corner-to-corner motion
                  const translateX = offset * 170;
                  const translateY = offset * -95;
                  const rotate = offset * 1.8;
                  const abs = Math.abs(offset);

                  // No transparency: keep cards solid, only visually de-emphasize
                  const scale = 1 - Math.min(abs * 0.12, 0.30);
                  const filter =
                    abs < 0.01
                      ? 'none'
                      : `saturate(0.92) brightness(0.88) grayscale(0.05)`;

                  return (
                    <motion.article
                      key={site.title}
                      className="absolute left-1/2 top-1/2 rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl"
                      style={{
                        width: 'min(330px, 84vw)',
                        transform: `translate(-50%, -50%) translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg) scale(${scale})`,
                        filter,
                        zIndex: Math.round(100 - abs * 10),
                        pointerEvents: abs > 1.6 ? 'none' : 'auto',
                        willChange: 'transform',
                      }}
                      initial={false}
                    >
                      <div className="relative p-6 sm:p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 shrink-0 sm:w-10 sm:h-10">
                            {site.icon}
                          </div>
                          <span className="text-[11px] font-semibold text-indigo-200/95 bg-slate-900/60 border border-slate-800 px-3 py-1 rounded-full whitespace-nowrap sm:px-2">
                            {site.category}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-lg font-bold mt-5 sm:mt-4">{site.title}</h3>

                        <div className="flex flex-wrap gap-2 mt-4 hidden sm:flex">
                          {site.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs text-slate-300 bg-slate-900/50 border border-slate-800 px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mt-5 sm:mt-4">
                          <a
                            href={site.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-4 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-500/20 sm:px-3 sm:py-2 sm:text-[13px]"
                          >
                            View →
                          </a>
                          <span className="hidden sm:inline text-xs text-slate-400">
                            Scroll to reveal next
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <p className="text-center text-slate-400 text-sm mt-10 hidden sm:block">
              Some of the projects i worked on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

