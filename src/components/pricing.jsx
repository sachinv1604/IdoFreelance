import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "₹899",
    description: "Best for small shops needing regular promotional posters.",
    features: ["event and festival posters", "2 posters per week", "3 Revision "],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹2499",
    description: "Great for businesses starting to build their online presence.",
    features: ["Social Media Management", "2 posters per week", "event and festival posters", "3 Revision "],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹5499",
    description: "Ideal for businesses ready to look professional and scale.",
    features: ["landing page website", "Social Media Management", "3 posters per week", "event and festival posters", "3 Revision "],
    popular: true,
  },
  {
    name: "Pro",
    price: "₹8499",
    description: "For serious brands aiming for top-level quality and consistency.",
    features: ["Social Media Management", "landing page website", "google my business setup", "4 posters per week", "event and festival posters", " 5 Revision "],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Transparent <span className="text-indigo-500">Pricing</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose the best plan for your business growth. Small investments, big results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-500/10' : 'bg-slate-950 border-slate-800'} transition-all hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-400 text-sm">/ project</span>
              </div>
              <p className="text-slate-400 text-sm mb-8">{plan.description}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <Check size={18} className="text-indigo-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={`https://wa.me/918762457716?text=${encodeURIComponent(`Hi Sachin, I'm interested in the ${plan.name} package (${plan.price}). ${plan.description}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full block text-center py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
