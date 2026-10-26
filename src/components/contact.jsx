import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Sachin, I am ${formData.name || 'a client'}. ${formData.subject ? `Subject: ${formData.subject}. ` : ''}${formData.message ? `Message: ${formData.message}` : ''}`;
    window.open(`https://wa.me/918762457716?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#EAE2D2]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          {/* Left Column: About & Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 p-7 rounded-3xl bg-[#ECE5D8] border border-[#DDD3BF] shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#4E6047]" />
                <p className="text-xs font-bold uppercase tracking-widest text-[#5A5348]">
                  About The Founder
                </p>
              </div>
              <p className="text-[#36322C] leading-relaxed text-sm md:text-base font-serif italic">
                "Hi, I’m Sachin N V, a final year BCA student and passionate designer and web developer.
                Under <span className="font-semibold text-[#191816] not-italic">IedoFreelance</span>, I create clean,
                effective digital solutions and visual branding for local businesses and ambitious brands."
              </p>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EFE8DA] text-xs font-semibold text-[#5A5245] mb-3">
                <span>Start a Project</span>
              </div>
              <h2 className="tracking-tight mb-4">
                <span className="font-editorial italic text-3xl sm:text-4xl md:text-5xl font-normal text-[#191816] block">
                  Let's Connect &
                </span>
                <span className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#191816] block mt-1">
                  Grow Your Business
                </span>
              </h2>
              <p className="text-[#6C665D] text-base leading-relaxed">
                Ready to take your business to the next level? Reach out directly via WhatsApp, call, or email.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE2D2] shadow-xs">
                <div className="w-11 h-11 bg-[#EFE8DA] rounded-xl flex items-center justify-center text-[#191816] shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#7A7367]">Email Address</p>
                  <a
                    href="mailto:sachinvernekar29@gmail.com"
                    className="font-semibold text-[#191816] text-sm hover:underline"
                  >
                    sachinvernekar29@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE2D2] shadow-xs">
                <div className="w-11 h-11 bg-[#EFE8DA] rounded-xl flex items-center justify-center text-[#191816] shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#7A7367]">WhatsApp & Direct Line</p>
                  <a
                    href="https://wa.me/918762457716"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#191816] text-sm hover:underline"
                  >
                    +91 87624 57716
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFFFFF] border border-[#EAE2D2] shadow-xs">
                <div className="w-11 h-11 bg-[#EFE8DA] rounded-xl flex items-center justify-center text-[#191816] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#7A7367]">Headquarters</p>
                  <p className="font-semibold text-[#191816] text-sm">
                    Mundgod, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-[#FFFFFF] border border-[#DDD3BF] shadow-md"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EAE2D2]">
              <div>
                <h3 className="text-xl font-bold text-[#191816]">Send a Quick Message</h3>
                <p className="text-xs text-[#7A7367] mt-0.5">I typically reply within a few hours</p>
              </div>
              <span className="w-9 h-9 rounded-full bg-[#EFE8DA] flex items-center justify-center text-[#191816]">
                <MessageCircle size={18} />
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#453F36]">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Prabhu"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#DDD3BF] rounded-2xl px-4 py-2.5 text-sm text-[#191816] focus:border-[#191816] focus:bg-white outline-none transition-all placeholder:text-[#9E978C]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#453F36]">Email or Phone</label>
                  <input
                    type="text"
                    placeholder="ramesh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#DDD3BF] rounded-2xl px-4 py-2.5 text-sm text-[#191816] focus:border-[#191816] focus:bg-white outline-none transition-all placeholder:text-[#9E978C]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#453F36]">Project Type</label>
                <input
                  type="text"
                  placeholder="e.g. Graphic Designing / Website / GMB setup"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#DDD3BF] rounded-2xl px-4 py-2.5 text-sm text-[#191816] focus:border-[#191816] focus:bg-white outline-none transition-all placeholder:text-[#9E978C]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#453F36]">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Briefly describe what your business needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#DDD3BF] rounded-2xl px-4 py-2.5 text-sm text-[#191816] focus:border-[#191816] focus:bg-white outline-none transition-all resize-none placeholder:text-[#9E978C]"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#191816] hover:bg-[#2C2925] text-[#FAF7F2] font-semibold py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2 text-sm mt-2"
              >
                <span>Send via WhatsApp</span>
                <Send size={15} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}