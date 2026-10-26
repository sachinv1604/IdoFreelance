import { motion } from 'framer-motion';
import { Megaphone, Layout, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#EAE2D2]">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14 md:mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DA] text-xs font-semibold text-[#5A5245] mb-4"
          >
            <span>Core Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#191816] tracking-tight leading-tight"
          >
            Everything Your Business Needs to Grow
          </motion.h2>
          <p className="text-[#6C665D] mt-4 text-base md:text-lg leading-relaxed">
            Specialized in two high-impact digital disciplines built to make your brand stand out and attract customers.
          </p>
        </div>

        {/* Just Two Focused Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Graphic Designs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl p-8 md:p-10 bg-[#FFFFFF] border border-[#DDD3BF] shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#191816]/30 transition-all group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EFE8DA] flex items-center justify-center text-[#191816] mb-6 group-hover:scale-105 transition-transform">
                <Megaphone size={24} />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#7A7367]">
                Visual Branding
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191816] mt-1 mb-3">
                Graphic Designs
              </h3>
              <p className="text-[#6C665D] text-sm md:text-base leading-relaxed mb-6">
                Custom promotional posters, festival greetings, social media creatives, and visual branding crafted to make your business instantly recognizable.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#EAE2D2] mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-[#453F36]">
                  <CheckCircle2 size={15} className="text-[#4E6047]" />
                  <span>Promotional & festival posters</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#453F36]">
                  <CheckCircle2 size={15} className="text-[#4E6047]" />
                  <span>Social media creative campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#453F36]">
                  <CheckCircle2 size={15} className="text-[#4E6047]" />
                  <span>High-resolution export for print & digital</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#graphic-designing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#191816] hover:bg-[#2C2925] text-[#FAF7F2] font-semibold text-sm transition-all shadow-xs group-hover:shadow-md"
              >
                <span>View My Work</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="rounded-3xl p-8 md:p-10 bg-[#FFFFFF] border border-[#DDD3BF] shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#191816]/30 transition-all group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EFE8DA] flex items-center justify-center text-[#191816] mb-6 group-hover:scale-105 transition-transform">
                <Layout size={24} />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#7A7367]">
                Modern Web Solutions
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191816] mt-1 mb-3">
                Web Development
              </h3>
              <p className="text-[#6C665D] text-sm md:text-base leading-relaxed mb-6">
                Fast, responsive landing pages and custom websites engineered with clean code to showcase your services and convert local visitors into customers.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#EAE2D2] mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-[#453F36]">
                  <CheckCircle2 size={15} className="text-[#4E6047]" />
                  <span>Mobile-friendly responsive landing pages</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#453F36]">
                  <CheckCircle2 size={15} className="text-[#4E6047]" />
                  <span>WhatsApp direct booking & call integration</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#453F36]">
                  <CheckCircle2 size={15} className="text-[#4E6047]" />
                  <span>SEO-friendly structure & fast page loading</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#web-development"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#191816] hover:bg-[#2C2925] text-[#FAF7F2] font-semibold text-sm transition-all shadow-xs group-hover:shadow-md"
              >
                <span>View My Work</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}