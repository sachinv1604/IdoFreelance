import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "₹899",
    description: "Best for small local shops needing regular promotional posters.",
    features: ["Event and festival posters", "2 posters per week", "3 Revisions included"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹2499",
    description: "Great for businesses starting to build their online brand presence.",
    features: ["Social Media Management", "2 posters per week", "Event and festival posters", "3 Revisions included"],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹5499",
    description: "Ideal for businesses ready to scale and convert visitors effectively.",
    features: ["Landing page website", "Social Media Management", "3 posters per week", "Event & festival posters", "3 Revisions included"],
    popular: true,
  },
  {
    name: "Pro",
    price: "₹8499",
    description: "For serious businesses aiming for top-level quality and search presence.",
    features: ["Landing page website", "Google My Business setup", "Social Media Management", "4 posters per week", "Event and festival posters", "5 Revisions included"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#EAE2D2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EFE8DA] text-xs font-semibold text-[#5A5245] mb-4">
            <span>Affordable Investment</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tracking-tight"
          >
            <span className="font-editorial italic text-3xl sm:text-4xl md:text-5xl font-normal text-[#191816] block">
              Simple, Honest &
            </span>
            <span className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#191816] block mt-1">
              Transparent Pricing
            </span>
          </motion.h2>
          <p className="text-[#6C665D] max-w-2xl mx-auto mt-4 text-base">
            Choose the package tailored to your business needs. Quality craftsmanship with fast delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`relative p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#191816] text-[#FAF7F2] border-2 border-[#191816] shadow-xl md:-translate-y-2'
                  : 'bg-[#FFFFFF] text-[#191816] border border-[#DDD3BF] shadow-sm hover:shadow-md hover:border-[#191816]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#4E6047] text-white px-3.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className={`text-xs ${plan.popular ? 'text-[#FAF7F2]/70' : 'text-[#7A7367]'}`}>
                    / package
                  </span>
                </div>
                <p className={`text-xs leading-relaxed mb-6 min-h-[36px] ${plan.popular ? 'text-[#FAF7F2]/80' : 'text-[#6C665D]'}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 pt-4 border-t border-dashed border-current/15">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-white/20 text-[#A2C49A]' : 'bg-[#EFE8DA] text-[#4E6047]'
                      }`}>
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className={plan.popular ? 'text-[#FAF7F2]/90' : 'text-[#453F36]'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href={`https://wa.me/918762457716?text=${encodeURIComponent(
                  `Hi Sachin, I'm interested in the ${plan.name} package (${plan.price}). ${plan.description}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full block text-center py-3 rounded-full text-xs font-bold transition-all shadow-xs ${
                  plan.popular
                    ? 'bg-[#FAF7F2] hover:bg-white text-[#191816]'
                    : 'bg-[#191816] hover:bg-[#2C2925] text-[#FAF7F2]'
                }`}
              >
                Choose {plan.name} →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
