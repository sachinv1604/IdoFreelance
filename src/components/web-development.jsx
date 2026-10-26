import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, LayoutGrid, Rocket, ExternalLink } from 'lucide-react';

const websites = [
  {
    title: 'LIC OBCEWA WEBSITE',
    category: 'Insurance Service',
    description:
      'A professional insurance service website providing policy information and easy customer interaction.',
    url: 'https://licobcewa.in/',
    tags: ['Professional', 'Insurance', 'Policy Info'],
    icon: <Globe size={24} />,
  },
  {
    title: 'BASU CAB SERVICE',
    category: 'Cab Service',
    description:
      'A local cab service website designed to improve bookings and provide clear service information.',
    url: 'https://basucabservice.com/',
    tags: ['Booking System', 'Local Service', 'Responsive'],
    icon: <Rocket size={24} />,
  },
  {
    title: 'RC TAX CONSULTANT',
    category: 'Tax Consulting',
    description:
      'A clean and professional website for tax consulting services, focused on trust and client communication.',
    url: 'https://weareat.online/rctaxconsultant/',
    tags: ['Professional', 'Consulting', 'Trust-focused'],
    icon: <LayoutGrid size={24} />,
  },
  {
    title: 'WEB FINDER',
    category: 'Search Tool',
    description:
      'A simple web search tool that helps users quickly find and navigate useful websites with a clean interface.',
    url: 'https://github.com/sachinv1604/WEB_FINDER',
    tags: ['Search Tool', 'Clean UI', 'Navigation'],
    icon: <Code size={24} />,
  },
  {
    title: 'GOLDSMITH WEB',
    category: 'Premium Business',
    description:
      'A premium business website designed for showcasing jewelry products with elegant UI and smooth user experience.',
    url: 'https://github.com/sachinv1604/GOLDSMITH_WEB',
    tags: ['Elegant UI', 'Jewelry Showcase', 'Premium'],
    icon: <Globe size={24} />,
  },
  {
    title: 'EDUTRANS WEB',
    category: 'Student Transport',
    description:
      'A service-based website for student transport solutions, focusing on accessibility, clarity, and responsive design.',
    url: 'https://github.com/sachinv1604/edutrans_web',
    tags: ['Accessibility', 'Transport Solutions', 'Responsive'],
    icon: <Rocket size={24} />,
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
    <section id="web-development" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#EAE2D2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EFE8DA] text-xs font-semibold text-[#5A5245] mb-4">
            <span>Built for Performance</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tracking-tight"
          >
            <span className="font-editorial italic text-3xl sm:text-4xl md:text-5xl font-normal text-[#191816] block">
              Engineered for Results &
            </span>
            <span className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#191816] block mt-1">
              Web Development Showcase
            </span>
          </motion.h2>
          <p className="text-[#6C665D] max-w-2xl mx-auto text-sm sm:text-base mt-4">
            Scroll down to explore live client websites and web applications developed with clean code.
          </p>
        </div>
      </div>

      {/* Sticky diagonal showcase driven by vertical scroll */}
      <div ref={scrollAreaRef} className="relative" style={{ minHeight: `${scrollHeightVh}vh` }}>
        <div className="sticky top-24 sm:top-20">
          <div className="container mx-auto px-6 pb-24">
            <div className="relative overflow-hidden rounded-3xl border border-[#E0D5C1] bg-[#F5EFE4] shadow-md p-4 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EFE8DA]/40 via-transparent to-[#EAE0CF]/40" />

              <div className="relative h-[380px] sm:h-[340px]">
                {websites.map((site, index) => {
                  const offset = index - pSteps;
                  const translateX = offset * 170;
                  const translateY = offset * -95;
                  const rotate = offset * 1.8;
                  const abs = Math.abs(offset);

                  const scale = 1 - Math.min(abs * 0.12, 0.3);
                  const filter =
                    abs < 0.01 ? 'none' : `saturate(0.9) brightness(0.94)`;

                  return (
                    <motion.article
                      key={site.title}
                      className="absolute left-1/2 top-1/2 rounded-3xl border border-[#DDD3BF] bg-[#FAF7F2] overflow-hidden shadow-xl"
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
                      <div className="relative p-6 sm:p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="w-11 h-11 rounded-2xl bg-[#EFE8DA] border border-[#DDD3BF] flex items-center justify-center text-[#191816] shrink-0">
                            {site.icon}
                          </div>
                          <span className="text-[11px] font-bold text-[#453F36] bg-[#EFE8DA] border border-[#DDD3BF] px-3 py-1 rounded-full whitespace-nowrap">
                            {site.category}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-lg font-bold mt-4 text-[#191816]">
                          {site.title}
                        </h3>

                        <p className="text-xs text-[#6C665D] mt-2 line-clamp-2 leading-relaxed">
                          {site.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {site.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-medium text-[#5A5348] bg-[#EAE2D2]/60 border border-[#DDD3BF] px-2.5 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#EAE2D2]">
                          <a
                            href={site.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="bg-[#191816] hover:bg-[#2C2925] text-[#FAF7F2] px-4 py-2 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-sm"
                          >
                            <span>Visit Site</span>
                            <ExternalLink size={12} />
                          </a>
                          <span className="hidden sm:inline text-[11px] text-[#7A7367]">
                            Scroll to flip
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <p className="text-center text-[#7A7367] text-xs mt-6 hidden sm:block">
              {websites.length} curated websites & applications built for live businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
