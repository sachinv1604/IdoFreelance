import { motion } from 'framer-motion';
import { Share2, Globe, Layout, Megaphone, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Graphic Designing",
    desc: "Visual branding and designs that make your business stand out from the competition.",
    icon: <Megaphone size={32} />,
  },
  {
    title: "Google My Business",
    desc: "Boost your local SEO and get found by customers in your immediate area.",
    icon: <Globe size={32} />,
  },
  {
    title: "Social Media Management",
    desc: "Strategic content and engagement to grow your presence across all platforms.",
    icon: <Share2 size={32} />,
  },
  {
    title: "Landing Page Website",
    desc: "High-converting landing pages designed to turn visitors into loyal customers.",
    icon: <Layout size={32} />,
  },
  
];

export default function Services() {
  // Duplicate items for seamless infinite marquee loop (desktop only).
  const loopServices = [...services, ...services];

  return (
    <section id="services" className="py-14 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-3"
          >
            Services I <span className="text-indigo-500">Provide</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Specialized digital services designed to help local businesses thrive in a digital-first world.
          </p>
        </div>

        {/* Desktop: marquee auto-slide */}
        <div className="hidden md:block relative">
          {/* Premium edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 " />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 " />

          <div className="marquee rounded-3xl border border-slate-800 bg-slate-950/40 shadow-xl overflow-hidden">
            <div className="p-4">
              <div className="marquee-track">
                {loopServices.map((service, index) => (
                  <motion.div
                    key={`${service.title}-${index}`}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="w-[300px] flex-none"
                  >
                    <div className="h-full p-5 rounded-3xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all group shadow-xl">
                      <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2 leading-tight">{service.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-xs">{service.desc}</p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-slate-400">Fast & clean delivery</span>
                        <span className="text-sm font-bold text-indigo-300 group-hover:text-indigo-200 transition-colors">
                         
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: show all 4 services at once (no looping) */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl"
              >
                <div className="w-11 h-11 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-3">
                  {service.icon}
                </div>
                <h3 className="text-[13px] font-bold leading-tight">{service.title}</h3>
                <p className="text-[11px] text-slate-400 mt-2 hidden xs:block">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}