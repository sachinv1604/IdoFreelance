import { motion } from 'framer-motion';
import { CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import heroImage from '../assets/mee.png';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white relative">
                                {"Helping Local Businesses Grow Online".split(" ").map((word, i) => (
                                    <span key={i} className="relative inline-block mr-[0.25em] last:mr-0 mt-2">
                                        {word === "Local" || word === "Businesses" ? (
                                            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                                                {word}
                                            </span>
                                        ) : word}

                                        {/* Sequential Radiative Line - Mobile Only */}
                                        <motion.div
                                            className="absolute top-1/2 -translate-y-1/2 h-[2px] w-4 md:hidden z-20"
                                            style={{
                                                background: 'linear-gradient(90deg, transparent, #fff, transparent)',
                                                boxShadow: '0 0 15px 2px rgba(99, 102, 241, 0.8)',
                                                left: 0
                                            }}
                                            initial={{ x: '-100%', opacity: 0 }}
                                            animate={{
                                                x: ['-100%', '200%'],
                                                opacity: [0, 1, 1, 0]
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                delay: i * 0.5,
                                                repeat: Infinity,
                                                repeatDelay: ("Helping Local Businesses Grow Online".split(" ").length * 0.5) + 2,
                                                ease: "linear"
                                            }}
                                        />
                                    </span>
                                ))}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                                Elevate your brand with premium graphic design, social media management, and custom landing pages tailored for local growth. Let's turn your vision into digital reality.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a
                                    href="#graphic-designing"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-center shadow-lg hover:shadow-indigo-500/30 transition-shadow"
                                >
                                    View My Work
                                </motion.a>
                                <motion.a
                                    href={`https://wa.me/918762457716?text=${encodeURIComponent("Hi Sachin, I'm interested in hiring you for a project. Let's discuss!")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-slate-900 border border-slate-700 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-slate-800 transition-colors"
                                >
                                    Hire Me
                                </motion.a>
                            </div>


                        </motion.div>
                    </div>

                    <div className="flex-1 relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            className="relative z-20"
                        >
                            <div className="relative w-full max-w-[500px] aspect-square mx-auto">
                                {/* Decorative Elements */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                                <div className="absolute -inset-4 border border-slate-800 rounded-full animate-spin-slow"></div>

                                <img
                                    src={heroImage}
                                    alt="Sachin AJ"
                                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}