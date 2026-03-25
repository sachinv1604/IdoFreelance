import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer({ setView }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-6">
              Idofreelance
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering local businesses with high-quality digital solutions. From branding to web development.
            </p>
            <div className="flex gap-4">

              <a href="https://github.com/sachinv1604" aria-label="Github" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sachin-vernekar-2b38ab289" aria-label="Linkedin" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">Graphic Design</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">Web Development</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">Social Media</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">Local SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">Home</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">Portfolio</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">Pricing</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Stay updated with the latest digital trends.</p>
            <div className="flex bg-slate-900 rounded-xl p-1 border border-slate-800">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-none outline-none text-sm px-3 py-2 text-white w-full"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-500 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} Sachin N V. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => setView('privacy')}
              className="text-slate-400 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setView('terms')}
              className="text-slate-400 hover:text-white text-xs transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}