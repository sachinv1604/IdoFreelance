import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, LayoutGrid, DollarSign, Star, Mail, Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md py-3 shadow-xs border-b border-[#E8DEC8]'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo & Name: small, clean, and not bold */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5 group"
        >
          <img
            src={logoImg}
            alt="IedoFreelance Logo"
            className="h-8 md:h-9 w-auto object-contain mix-blend-multiply rounded transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-base md:text-lg font-semibold tracking-tight text-[#191816]">
            IedoFreelance
          </span>
        </motion.a>

        {/* Desktop Navigation - Reduced clean links */}
        <div className="hidden md:flex space-x-7 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#5C574F] hover:text-[#191816] transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href={`https://wa.me/918762457716?text=${encodeURIComponent(
              "Hi Sachin, I'd like to hire you for a project. Can we talk?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#191816] hover:bg-[#2C2925] text-[#FAF7F2] px-5 py-2.5 rounded-full text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-xs"
          >
            <span>Hire Me</span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
              →
            </span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#191816] p-2 hover:bg-[#EFE9DC] rounded-xl transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden fixed top-[68px] left-0 right-0 z-50"
          >
            <div
              className="absolute inset-0 bg-[#191816]/30 backdrop-blur-xs min-h-[100vh]"
              onClick={() => setIsOpen(false)}
            />

            <div className="relative mx-5 mt-2 rounded-3xl border border-[#E8DEC8] bg-[#FAF7F2] shadow-2xl overflow-hidden">
              <div className="relative px-5 py-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={logoImg}
                      alt="IedoFreelance"
                      className="h-7 w-auto object-contain mix-blend-multiply"
                    />
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7E776D]">
                      Navigation
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#5C574F]">
                    <span className="w-2 h-2 rounded-full bg-[#4E6047]" />
                    <span className="text-xs">Quick jump</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
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
                      ) : (
                        <Mail size={16} />
                      );

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between gap-4 rounded-2xl px-4 py-3 border border-[#EAE4D6] bg-[#F4EFE5] hover:bg-[#EDE5D5] transition-all group"
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-[#E8DEC8] flex items-center justify-center text-[#191816]">
                            {icon}
                          </span>
                          <span className="text-sm font-semibold text-[#191816]">{link.name}</span>
                        </span>
                        <span className="text-[#8D867C] group-hover:text-[#191816] transition-colors">
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
                    className="flex items-center justify-between gap-4 rounded-2xl px-4 py-3 bg-[#191816] hover:bg-[#2C2925] text-[#FAF7F2] font-semibold transition-all shadow-md mt-1"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                        <Phone size={15} />
                      </span>
                      <span>Hire Me</span>
                    </span>
                    <span className="text-xs text-[#FAF7F2]/80">Let&apos;s talk →</span>
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