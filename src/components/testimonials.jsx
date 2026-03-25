import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Local Business Owner",
    text: "Excellent service! The Google My Business setup significantly increased our local footfall within just a month.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rajesh"
  },
  {
    name: "Sneha Sharma",
    role: "Founder, Bloom Bakery",
    text: "The posters and social media branding are top-notch. My brand looks truly professional now. Highly recommend!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sneha"
  },
  {
    name: "Amit Patel",
    role: "Real Estate Agent",
    text: "Got my landing page developed quickly. The design is sleek, responsive, and converts visitors into leads effectively.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=amit"
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const total = testimonials.length;
  const activeTestimonial = testimonials[active] ?? testimonials[0];

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (mq?.matches) return;

    const t = window.setInterval(() => {
      setActive((p) => (p + 1) % total);
    }, 5000);

    return () => window.clearInterval(t);
  }, [total]);

  const go = (dir) => setActive((p) => (p + dir + total) % total);

  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Client <span className="text-indigo-500">Stories</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about my services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/10 via-purple-500/10 to-indigo-600/10 blur-xl opacity-60 rounded-[2rem]" />

          <div className="relative">
            <div className="flex items-center justify-between gap-4 mb-6">
              <button
                type="button"
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/40 hover:border-indigo-500/60 hover:text-white text-slate-300 transition-all shadow-lg"
                aria-label="Previous testimonial"
              >
                ←
              </button>

              <p className="text-slate-400 text-sm">
                {active + 1} / {total}
              </p>

              <button
                type="button"
                onClick={() => go(1)}
                className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/40 hover:border-indigo-500/60 hover:text-white text-slate-300 transition-all shadow-lg"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-8 md:p-10 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all shadow-xl"
            >
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-200 mb-8 text-lg leading-relaxed italic">
                "{activeTestimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-indigo-500"
                />
                <div>
                  <h4 className="font-bold">{activeTestimonial.name}</h4>
                  <p className="text-slate-400 text-xs">{activeTestimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-2 mt-8 justify-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === active ? 'bg-indigo-400 w-8' : 'bg-slate-600/60 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
