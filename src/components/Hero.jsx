import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Code2, Layers, CheckCircle2 } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[#030712] text-white flex items-center justify-center overflow-hidden pt-28 pb-20">
      
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Top Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 inline-flex items-center gap-2 mb-6 shadow-inner"
          >
            <Sparkles size={14} className="animate-spin" /> Next-Gen Full Stack Developer
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6">
            Building Digital <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Masterpieces
            </span>{" "}
            with Code
          </h1>

          {/* Description */}
          <p className="text-base text-gray-400 max-w-lg mb-8 leading-relaxed font-medium">
            Transforming complex ideas into high-performance, immersive, and scalable web applications using modern technologies and stunning UI/UX design.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-md">
            <div className="flex items-center gap-2.5 text-sm text-gray-300 font-medium">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0" /> Clean Architecture
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-300 font-medium">
              <CheckCircle2 size={18} className="text-purple-400 shrink-0" /> Interactive UI/UX
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 w-full">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/Menu"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-extrabold text-sm shadow-[0_0_30px_rgba(139,92,246,0.4)] border border-white/20 flex items-center gap-2 cursor-pointer"
              >
                Explore Projects <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/Contact"
                className="px-8 py-4 rounded-2xl bg-[#080c14] hover:bg-white/5 text-white font-extrabold text-sm border border-white/15 transition shadow-inner flex items-center gap-2 cursor-pointer"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Visual Card Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Glowing Backdrop Circle */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-pink-500/20 rounded-full blur-[80px]"></div>

          {/* Glassmorphism Code/Visual Mockup Container */}
          <div className="relative w-full max-w-md p-6 sm:p-8 rounded-[32px] bg-[#080c14]/90 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
            
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Developer.jsx
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm text-gray-300">
              <p className="text-purple-400">const <span className="text-cyan-400">developer</span> = &#123;</p>
              <p className="pl-4">name: <span className="text-pink-400">"Rauf"</span>,</p>
              <p className="pl-4">role: <span className="text-pink-400">"Full Stack MERN Developer"</span>,</p>
              <p className="pl-4">skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"Tailwind"</span>],</p>
              <p className="pl-4">status: <span className="text-yellow-400">"Available for Hire"</span></p>
              <p className="text-purple-400">&#125;;</p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5"><Code2 size={16} className="text-cyan-400" /> Clean Code</span>
              <span className="flex items-center gap-1.5"><Layers size={16} className="text-pink-400" /> Modern UI</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;