import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Footer({ setView }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#191816] text-[#FAF7F2] border-t border-[#2A2723] pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoImg}
                alt="IedoFreelance Logo"
                className="h-9 w-auto object-contain rounded-md bg-white p-0.5"
              />
              <span className="text-lg font-semibold tracking-tight text-[#FAF7F2]">
                IedoFreelance
              </span>
            </div>
            <p className="text-[#9E978C] text-sm leading-relaxed mb-6">
              Empowering local businesses with high-quality graphic design, Google business optimization, and custom web development.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/sachinv1604"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="w-10 h-10 rounded-full bg-[#262421] border border-[#38342E] flex items-center justify-center text-[#DDD3BF] hover:text-white hover:bg-[#3D3934] transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sachin-vernekar-2b38ab289"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className="w-10 h-10 rounded-full bg-[#262421] border border-[#38342E] flex items-center justify-center text-[#DDD3BF] hover:text-white hover:bg-[#3D3934] transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#FAF7F2] font-bold mb-5 text-sm uppercase tracking-wider text-xs">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-[#9E978C] hover:text-[#FAF7F2] transition-colors">
                  Graphic Design & Posters
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#9E978C] hover:text-[#FAF7F2] transition-colors">
                  Landing Page Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#9E978C] hover:text-[#FAF7F2] transition-colors">
                  Social Media Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#9E978C] hover:text-[#FAF7F2] transition-colors">
                  Google My Business Setup
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FAF7F2] font-bold mb-5 text-sm uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-[#9E978C] hover:text-[#FAF7F2] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#graphic-designing" className="text-[#9E978C] hover:text-[#FAF7F2] transition-colors">
                  Portfolio Gallery
                </a>
              </li>
              <li>
                <a href="#web-development" className="text-[#9E978C] hover:text-[#FAF7F2] transition-colors">
                  Websites
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[#9E978C] hover:text-[#FAF7F2] transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#9E978C] hover:text-[#FAF7F2] transition-colors">
                  Contact & Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#FAF7F2] font-bold mb-5 text-sm uppercase tracking-wider text-xs">
              Direct Contact
            </h4>
            <p className="text-[#9E978C] text-sm mb-4">
              Have a quick question or looking for a quote?
            </p>
            <a
              href="https://wa.me/918762457716"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-3 rounded-2xl bg-[#262421] border border-[#38342E] text-xs font-semibold text-[#FAF7F2] hover:bg-[#322F2A] transition-all"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2A2723] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-[#7A7367]">
            © {currentYear} Sachin N V · <span className="text-[#9E978C]">IedoFreelance</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => setView('privacy')}
              className="text-[#9E978C] hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setView('terms')}
              className="text-[#9E978C] hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}