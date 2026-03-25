import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, LayoutGrid, DollarSign, Star, Mail, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#graphic-designing' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-lg border-b border-indigo-500/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        >
          IdoFreelance
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href={`https://wa.me/918762457716?text=${encodeURIComponent("Hi Sachin, I'd like to hire you for a project. Can we talk?")}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-indigo-500/25"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden fixed top-[72px] left-0 right-0 z-50"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

            <div className="relative mx-6 mt-3 rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10" />

              <div className="relative px-5 py-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Quick Navigation
                  </p>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span className="text-xs">Tap to jump</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {navLinks.map((link) => {
                    const icon =
                      link.name === 'Home' ? (
                        <Home size={16} />
                      ) : link.name === 'Services' ? (
                        <LayoutGrid size={16} />
                      ) : link.name === 'Portfolio' ? (
                        <Star size={16} />
                      ) : link.name === 'Pricing' ? (
                        <DollarSign size={16} />
                      ) : link.name === 'Testimonials' ? (
                        <Star size={16} />
                      ) : (
                        <Mail size={16} />
                      );

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between gap-4 rounded-2xl px-4 py-3 border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 transition-all group"
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-9 h-9 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 group-hover:text-indigo-200 transition-colors">
                            {icon}
                          </span>
                          <span className="text-sm font-semibold text-slate-100">{link.name}</span>
                        </span>
                        <span className="text-slate-400 group-hover:text-indigo-300 transition-colors">→</span>
                      </a>
                    );
                  })}

                  <a
                    href={`https://wa.me/918762457716?text=${encodeURIComponent("Hi Sachin, I'd like to hire you for a project. Can we talk?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between gap-4 rounded-2xl px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold transition-all shadow-lg shadow-indigo-500/20"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <Phone size={16} />
                      </span>
                      <span>Hire Me</span>
                    </span>
                    <span>Let&apos;s talk</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}