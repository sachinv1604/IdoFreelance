import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Welcome to Idofreelance. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we handle your information when you visit our website.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p>We only collect information that you voluntarily provide to us through our contact forms or when you reach out via WhatsApp/Email. This may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content and project details</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries</li>
              <li>Provide our services (Graphic Design, Web Development, etc.)</li>
              <li>Communicate regarding ongoing projects</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>We implement basic security measures to protect your data. However, please be aware that no method of transmission over the internet is 100% secure.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2 text-indigo-400">sachinvernekar29@gmail.com</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
