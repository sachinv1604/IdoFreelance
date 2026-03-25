import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-10 p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/10">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-2">About Me</p>
              <p className="text-slate-300 leading-relaxed italic">
                "Hi, I’m Sachin N V, a final year BCA student and aspiring web and graphic designer building my freelance journey. I create simple, clean, and effective designs for local businesses and online brands."
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-indigo-500">Connect</span></h2>
            <p className="text-slate-400 mb-10 text-lg">
              Ready to take your business to the next level? reach out directly via WhatsApp or Email.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Me</p>
                  <a href="mailto:sachinvernekar29@gmail.com" className="font-semibold hover:text-indigo-400 transition-colors">sachinvernekar29@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp / Call</p>
                  <a href="https://wa.me/918762457716" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-indigo-400 transition-colors">+91 87624 57716</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-semibold">Mundgod, Karnataka, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Inquiry for Branding"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}