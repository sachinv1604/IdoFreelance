import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function Terms({ onBack }) {
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
          <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Service Agreement</h2>
            <p>By using our services, you agree to provide accurate information and cooperate during the design and development process.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Payments</h2>
            <p>Project pricing is as listed in our "Pricing" section or as agreed upon via formal inquiry. A deposit may be required before starting any work.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. Revisions</h2>
            <p>Each package includes a specific number of revisions. Additional revisions may incur extra costs.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>Upon final payment, the rights to the designs or code created for you will be transferred to you, though we reserve the right to showcase the work in our portfolio.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>Idofreelance will not be liable for any indirect or consequential losses arising from the use of our services or website.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
            <p>These terms are governed by the laws of Karnataka, India.</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
