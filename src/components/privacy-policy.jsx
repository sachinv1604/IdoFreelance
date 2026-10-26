import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#453F36] py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EFE8DA] hover:bg-[#E2D8C7] text-[#191816] text-xs font-semibold transition-all mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-[#DDD3BF] rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#191816] mb-3 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#7A7367] mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#191816] mb-3">1. Introduction</h2>
            <p className="text-sm leading-relaxed text-[#5A5245]">
              Welcome to <span className="font-semibold text-[#191816]">IedoFreelance</span>. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we handle your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#191816] mb-3">2. Information We Collect</h2>
            <p className="text-sm leading-relaxed text-[#5A5245] mb-3">
              We only collect information that you voluntarily provide to us through our contact forms or when you reach out via WhatsApp or email. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-[#5A5245]">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone or WhatsApp number</li>
              <li>Message content and project details</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#191816] mb-3">3. How We Use Your Information</h2>
            <p className="text-sm leading-relaxed text-[#5A5245] mb-3">
              We use the collected information solely to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-[#5A5245]">
              <li>Respond to your inquiries</li>
              <li>Provide our services (Graphic Design, Web Development, Social Media, Google Business setup)</li>
              <li>Communicate regarding ongoing projects and deliverables</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#191816] mb-3">4. Data Security</h2>
            <p className="text-sm leading-relaxed text-[#5A5245]">
              We implement reasonable security measures to protect your data. However, please be aware that no transmission over the internet can be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#191816] mb-3">5. Contact Us</h2>
            <p className="text-sm leading-relaxed text-[#5A5245]">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2 text-sm font-semibold text-[#191816]">
              sachinvernekar29@gmail.com
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
