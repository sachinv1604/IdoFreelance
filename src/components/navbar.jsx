import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, DollarSign, Star, Mail, Phone, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#graphic-designing' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Floating White Navigation Bar - rounded-full directly on nav to eliminate any square corner shadow artifacts */}
      <nav
        className={`fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl bg-white rounded-full border border-stone-200/90 px-4 sm:px-6 py-2.5 sm:py-3 flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'shadow-lg shadow-black/8' : 'shadow-md shadow-black/5'
        }`}
      >
        {/* Brand Logo & Name */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <img
            src={logoImg}
            alt="IedoFreelance Logo"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-base sm:text-lg font-semibold tracking-tight text-[#191816]">
            IedoFreelance
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-7 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#656056] hover:text-[#191816] transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <motion.a
            href={`https://wa.me/918762457716?text=${encodeURIComponent(
              "Hi Sachin, I'd like to hire you for a project. Can we talk?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#191816] hover:bg-[#2C2925] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-xs"
          >
            <span>Hire Me</span>
            <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
              →
            </span>
          </motion.a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#191816] p-1.5 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden fixed top-20 sm:top-22 left-1/2 -translate-x-1/2 w-[94%] max-w-md z-50"
          >
            <div
              className="fixed inset-0 bg-[#191816]/30 backdrop-blur-xs -z-10"
              onClick={() => setIsOpen(false)}
            />

            <div className="rounded-3xl border border-stone-200 bg-white shadow-2xl p-5 overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <img
                    src={logoImg}
                    alt="IedoFreelance"
                    className="h-7 w-auto object-contain"
                  />
                  <span className="text-sm font-bold text-[#191816]">IedoFreelance</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#656056]">
                  <span className="w-2 h-2 rounded-full bg-[#4E6047]" />
                  <span className="text-xs">Menu</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => {
                  const icon =
                    link.name === 'Services' ? (
                      <LayoutGrid size={15} />
                    ) : link.name === 'Portfolio' ? (
                      <Star size={15} />
                    ) : link.name === 'Pricing' ? (
                      <DollarSign size={15} />
                    ) : (
                      <Mail size={15} />
                    );

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3 bg-stone-50 hover:bg-stone-100 transition-all group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center text-[#191816]">
                          {icon}
                        </span>
                        <span className="text-sm font-semibold text-[#191816]">{link.name}</span>
                      </span>
                      <span className="text-stone-400 group-hover:text-[#191816] transition-colors text-sm">
                        →
                      </span>
                    </a>
                  );
                })}

                <a
                  href={`https://wa.me/918762457716?text=${encodeURIComponent(
                    "Hi Sachin, I'd like to hire you for a project. Can we talk?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3 bg-[#191816] hover:bg-[#2C2925] text-white font-semibold transition-all shadow-md mt-2"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                      <Phone size={15} />
                    </span>
                    <span className="text-sm">Hire Me</span>
                  </span>
                  <span className="text-xs text-white/80">Let&apos;s talk →</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}