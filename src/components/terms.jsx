import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function Terms({ onBack }) {
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
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#7A7367] mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#191816] mb-3">1. Service Agreement</h2>
            <p className="text-sm leading-relaxed text-[#5A5245]">
              By engaging <span className="font-semibold text-[#191816]">IedoFreelance</span> for services, you agree to provide accurate information and collaborate constructively during the design and development cycle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#191816] mb-3">2. Payments</h2>
            <p className="text-sm leading-relaxed text-[#5A5245]">
              Project pricing is as listed in our Pricing section or as mutually agreed via formal quote. Advance payment or deposit may be required prior to initiating work.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#191816] mb-3">3. Revisions</h2>
            <p className="text-sm leading-relaxed text-[#5A5245]">
              Each package includes a defined quota of revisions. Scope expansions or extra revision rounds beyond the agreed plan may incur additional fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#191816] mb-3">4. Intellectual Property</h2>
            <p className="text-sm leading-relaxed text-[#5A5245]">
              Upon final settlement of invoices, ownership rights to finalized graphic files and deployed website code are transferred to the client. IedoFreelance reserves the right to display the completed work in portfolio showcases.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#191816] mb-3">5. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed text-[#5A5245]">
              IedoFreelance will not be liable for any indirect or consequential damages or losses arising from third-party platform changes, hosting outages, or service usage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#191816] mb-3">6. Governing Law</h2>
            <p className="text-sm leading-relaxed text-[#5A5245]">
              These terms are governed by and construed in accordance with the laws of Karnataka, India.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
