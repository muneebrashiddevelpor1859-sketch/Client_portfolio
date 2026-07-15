import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2 } from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative bg-[#020617] text-gray-300 py-32 px-6 md:px-8 overflow-hidden min-h-screen flex items-center">
      
      {/* Background Animated Neon Glow */}
      <motion.div 
        animate={{ opacity: [0.08, 0.2, 0.08], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="px-4 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/30 inline-flex items-center gap-2 shadow-lg"
          >
            <Sparkles size={14} className="animate-spin text-cyan-400" /> Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white"
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-gray-400 leading-relaxed font-medium max-w-lg mx-auto"
          >
            Have a project in mind or want to collaborate? Drop me a message and I'll get back to you shortly.
          </motion.p>
        </div>

        {/* Contact Container Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-[32px] bg-[#080c14]/90 border border-white/10 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden shadow-2xl"
          >
            {/* Top Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight mb-2">Contact Information</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  Fill out the form or reach out directly through the details below.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Location</h4>
                    <p className="text-sm font-bold text-white mt-0.5">Lahore, Punjab, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Me</h4>
                    <a href="mailto:example@email.com" className="text-sm font-bold text-white hover:text-cyan-400 transition mt-0.5 block">
                      developer@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone</h4>
                    <p className="text-sm font-bold text-white mt-0.5">+92 300 1234567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 text-xs text-gray-500 font-medium">
              Available for freelance opportunities and full-time roles.
            </div>
          </motion.div>

          {/* Right Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-[32px] bg-[#080c14]/90 border border-white/10 backdrop-blur-2xl relative overflow-hidden shadow-2xl flex flex-col justify-center"
          >
            {/* Top Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/40 rounded-full flex items-center justify-center mx-auto text-cyan-400">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-gray-400 max-w-xs mx-auto">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    placeholder="John Doe" 
                    className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    required
                    placeholder="Type your message here..." 
                    className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-extrabold text-sm tracking-wide shadow-[0_10px_30px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <span>Send Message</span> <Send size={16} />
                </motion.button>
              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;