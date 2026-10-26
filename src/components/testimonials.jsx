import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Local Business Owner",
    text: "Excellent service! The Google My Business setup significantly increased our local footfall and customer calls within just a month.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rajesh",
  },
  {
    name: "Sneha Sharma",
    role: "Founder, Bloom Bakery",
    text: "The posters and social media branding are top-notch. My brand looks truly professional and visually cohesive now. Highly recommend!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sneha",
  },
  {
    name: "Amit Patel",
    role: "Real Estate Agent",
    text: "Got my landing page developed quickly. The design is sleek, responsive, and converts visitors into real inquiries effectively.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=amit",
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
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#EAE2D2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EFE8DA] text-xs font-semibold text-[#5A5245] mb-4">
            <span>Client Reviews</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tracking-tight"
          >
            <span className="font-editorial italic text-3xl sm:text-4xl md:text-5xl font-normal text-[#191816] block">
              Proven Results,
            </span>
            <span className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#191816] block mt-1">
              Real Client Impact
            </span>
          </motion.h2>
          <p className="text-[#6C665D] max-w-2xl mx-auto mt-4 text-base">
            See how local businesses and brands are standing out and achieving higher conversions.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative">
            <div className="flex items-center justify-between gap-4 mb-4">
              <button
                type="button"
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-full border border-[#DDD3BF] bg-[#FFFFFF] hover:bg-[#191816] hover:text-white text-[#191816] transition-all shadow-xs flex items-center justify-center cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <p className="text-[#7A7367] text-xs font-semibold">
                {active + 1} of {total}
              </p>

              <button
                type="button"
                onClick={() => go(1)}
                className="w-10 h-10 rounded-full border border-[#DDD3BF] bg-[#FFFFFF] hover:bg-[#191816] hover:text-white text-[#191816] transition-all shadow-xs flex items-center justify-center cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-8 md:p-12 rounded-3xl bg-[#FFFFFF] border border-[#DDD3BF] shadow-md text-center"
            >
              <div className="flex justify-center gap-1.5 mb-6 text-[#4E6047]">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-[#191816] mb-8 text-lg md:text-xl leading-relaxed font-serif italic">
                "{activeTestimonial.text}"
              </p>

              <div className="flex flex-col items-center">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-[#191816] mb-2"
                />
                <h4 className="font-bold text-[#191816] text-base">{activeTestimonial.name}</h4>
                <p className="text-[#7A7367] text-xs">{activeTestimonial.role}</p>
              </div>

              <div className="flex gap-2 mt-8 justify-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === active ? 'bg-[#191816] w-7' : 'bg-[#DDD3BF] w-2'
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
