import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for gentle interactive air currents
    const mouse = { x: -1000, y: -1000, radius: 110 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const container = canvas.parentElement;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Generate exclusively snowflakes (no dots, no line streaks)
    const PARTICLE_COUNT = 50;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 6 + 4, // snowflake radius from 4px to 10px
      speedY: Math.random() * 0.9 + 0.4,
      speedX: Math.random() * 0.4 - 0.2,
      opacity: Math.random() * 0.55 + 0.45,
      swing: Math.random() * Math.PI * 2,
      swingSpeed: Math.random() * 0.015 + 0.008,
      drift: Math.random() * 1.0 + 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
    }));

    function drawSnowflake(context, x, y, r, opacity, rotation) {
      context.save();
      context.translate(x, y);
      context.rotate(rotation);
      context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      context.shadowColor = 'rgba(180, 150, 110, 0.45)';
      context.shadowBlur = 4;
      context.lineWidth = Math.max(1, r * 0.2);
      context.lineCap = 'round';
      context.beginPath();
      for (let i = 0; i < 6; i++) {
        context.rotate(Math.PI / 3);
        context.moveTo(0, 0);
        context.lineTo(0, r);
        // Outer V branch
        context.moveTo(0, r * 0.65);
        context.lineTo(-r * 0.35, r * 0.95);
        context.moveTo(0, r * 0.65);
        context.lineTo(r * 0.35, r * 0.95);
        // Inner small V branch on larger flakes
        if (r > 6) {
          context.moveTo(0, r * 0.35);
          context.lineTo(-r * 0.2, r * 0.52);
          context.moveTo(0, r * 0.35);
          context.lineTo(r * 0.2, r * 0.52);
        }
      }
      context.stroke();
      context.restore();
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update oscillation and drift
        p.swing += p.swingSpeed;
        p.rotation += p.rotationSpeed;
        p.y += p.speedY;
        p.x += Math.sin(p.swing) * p.drift + p.speedX;

        // Mouse push interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += (dx / dist) * force * 3;
          p.y += (dy / dist) * force * 3;
        }

        // Wrap around borders
        if (p.y > height + 15) {
          p.y = -15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        // Draw pure snowflake crystal only
        drawSnowflake(ctx, p.x, p.y, p.size, p.opacity, p.rotation);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#FAF7F2]">
      {/* Interactive Snowflake & Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Subtle warm ambient background glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#EFE5D3]/60 via-[#F3ECE1]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-20">
        {/* Centered Editorial Header */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DA] border border-[#E0D5C1] text-xs font-semibold tracking-wide text-[#453F36] mb-6 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#4E6047] animate-pulse" />
            <span>Available for Freelance & Local Business Growth</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="tracking-tight"
          >
            <span className="font-editorial italic text-4xl sm:text-6xl md:text-7xl font-normal text-[#191816] block leading-[1.1]">
              Elevate Your Brand,
            </span>
            <span className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#191816] block mt-1 tracking-tight leading-[1.15]">
              Supercharge Your Digital Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-[#6C665D] mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            All-in-one digital partner for graphic design, modern high-converting websites,
            and social media management — built to help local businesses thrive.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mt-8"
          >
            <motion.a
              href="#graphic-designing"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full bg-[#191816] hover:bg-[#2C2925] text-[#FAF7F2] font-semibold text-sm inline-flex items-center gap-2.5 shadow-md shadow-[#191816]/10 transition-all"
            >
              <span>View My Work</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                →
              </span>
            </motion.a>

            <motion.a
              href={`https://wa.me/918762457716?text=${encodeURIComponent(
                "Hi Sachin, I'd like to talk about a project for my business."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full bg-[#ECE5D8] hover:bg-[#E2D9C9] text-[#191816] border border-[#DDD3BF] font-semibold text-sm inline-flex items-center gap-2 transition-all shadow-xs"
            >
              <span>Hire Me</span>
              <ArrowRight size={15} />
            </motion.a>
          </motion.div>

          {/* Value Badges to fill the space cleanly and build trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-14 pt-8 border-t border-[#EAE2D2]/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#5A5245]"
          >
            <div className="flex items-center gap-2 font-medium">
              <span className="w-5 h-5 rounded-full bg-[#EFE8DA] flex items-center justify-center text-[#4E6047]">
                ✓
              </span>
              <span>350+ Client Posters & Designs</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="w-5 h-5 rounded-full bg-[#EFE8DA] flex items-center justify-center text-[#4E6047]">
                ✓
              </span>
              <span>Fast & Mobile-First Websites</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="w-5 h-5 rounded-full bg-[#EFE8DA] flex items-center justify-center text-[#4E6047]">
                ✓
              </span>
              <span>Direct WhatsApp Communication</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}