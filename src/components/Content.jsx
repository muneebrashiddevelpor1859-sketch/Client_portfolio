import React from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Cpu, Globe, Lock, Zap, ArrowRight, Sparkles } from "lucide-react";

function Content() {
  const features = [
    {
      icon: <Activity className="text-cyan-400" size={26} />,
      title: "Shooting Stars",
      description: "Building high-performance components with real-time data synchronization and optimal rendering.",
      tag: "PERFORMANCE"
    },
    {
      icon: <Cpu className="text-purple-400" size={26} />,
      title: "The Catalyzer",
      description: "Advanced state management and clean RESTful API integration for scalable MERN applications.",
      tag: "ARCHITECTURE"
    },
    {
      icon: <Globe className="text-pink-400" size={26} />,
      title: "Neptune Network",
      description: "Seamless client-server connectivity ensuring secure data persistence across MongoDB databases.",
      tag: "DATABASE"
    },
    {
      icon: <ShieldCheck className="text-emerald-400" size={26} />,
      title: "Melanchole Security",
      description: "Robust authentication and encrypted data routes to protect user sessions and confidential data.",
      tag: "SECURITY"
    },
    {
      icon: <Lock className="text-yellow-400" size={26} />,
      title: "Bunker Storage",
      description: "Optimized server responses and secure token handling for uninterrupted web operations.",
      tag: "RELIABILITY"
    },
    {
      icon: <Zap className="text-cyan-400" size={26} />,
      title: "Ramona Falls",
      description: "Blazing fast UI interactions powered by Tailwind CSS and optimized Framer Motion transitions.",
      tag: "UI / UX"
    }
  ];

  return (
    <section className="relative bg-[#020617] text-gray-300 py-32 px-6 md:px-8 overflow-hidden min-h-screen">
      
      {/* Background Animated Pulse Beams */}
      <motion.div 
        animate={{ opacity: [0.05, 0.2, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="px-4 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/30 inline-flex items-center gap-2 shadow-lg"
          >
            <Sparkles size={14} className="animate-spin text-cyan-400" /> Unique Motion UI
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white"
          >
            Advanced{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Features & Tools
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-gray-400 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Crafted with custom spring physics and spatial depth animations for an immersive browsing experience.
          </motion.p>
        </div>

        {/* Cards Grid with Staggered 3D Tilt Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, type: "spring", stiffness: 90 }}
              whileHover={{ 
                scale: 1.03, 
                rotateX: 4, 
                rotateY: -4, 
                boxShadow: "0 25px 60px -15px rgba(6, 182, 212, 0.25)" 
              }}
              style={{ perspective: 1000 }}
              className="relative p-8 rounded-[32px] bg-[#080c14]/95 border border-white/10 hover:border-cyan-400/80 backdrop-blur-2xl flex flex-col justify-between group overflow-hidden transition-colors duration-300"
            >
              {/* Glowing Corner Aura on Hover */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500 pointer-events-none"></div>

              <div>
                {/* Tag & Icon with bounce on hover */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/25">
                    {item.tag}
                  </span>
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition shadow-md"
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed font-medium mb-8">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Link with sliding arrow */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-end text-xs font-semibold">
                <span className="text-cyan-400 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1.5 cursor-pointer">
                  Explore Feature <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button with Ripple/Glow Animation */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 35px rgba(6, 182, 212, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-9 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-extrabold text-sm tracking-wide shadow-[0_10px_30px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex items-center gap-2.5 group"
            >
              <span>Explore All Projects</span> 
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Content;