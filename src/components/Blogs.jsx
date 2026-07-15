import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Cpu, Globe, Rocket, ArrowRight, Sparkles, Layers, Database, Server, Terminal, Check } from "lucide-react";

function CounterNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const incrementTime = 30;
      const step = Math.ceil(numericValue / (duration / incrementTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function About() {
  const [activeTech, setActiveTech] = useState("React.js");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    "React.js": `// React Component Example\nimport React, { useState } from 'react';\n\nfunction Greeting() {\n  const [text, setText] = useState("Hello MERN Developer!");\n  return <h1 className="text-cyan-400">{text}</h1>;\n}`,
    "Node.js": `// Express Server Setup\nconst express = require('express');\nconst app = express();\n\napp.listen(5000, () => {\n  console.log("Server running on port 5000");\n});`,
    "MongoDB": `// Mongoose Schema Example\nconst mongoose = require('mongoose');\n\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true }\n});`,
    "Tailwind CSS": `<!-- Tailwind HTML/JSX Example -->\n<div className="p-6 max-w-sm mx-auto bg-slate-900 \n rounded-xl shadow-lg flex items-center space-x-4">\n  <div className="text-cyan-400 font-bold">Awesome UI</div>\n</div>`,
    "JavaScript (ES6+)": `// ES6+ Arrow Function & Destructuring\nconst fetchUserData = async ({ id }) => {\n  const response = await fetch(\`/api/users/\${id}\`);\n  return await response.json();\n};`
  };

  const cardsData = [
    {
      icon: <Code2 className="text-cyan-400" size={28} />,
      title: "Frontend Mastery",
      description: "Crafting blazing-fast, responsive web interfaces with React, Tailwind CSS, and smooth Framer Motion animations.",
      category: "UI / UX ARCHITECTURE",
      stat: "100% Responsive"
    },
    {
      icon: <Cpu className="text-purple-400" size={28} />,
      title: "Backend & APIs",
      description: "Building robust server-side logic, secure RESTful APIs, and efficient data handling with Node.js and Express.",
      category: "MERN STACK",
      stat: "Secure & Scalable"
    },
    {
      icon: <Globe className="text-pink-400" size={28} />,
      title: "Database Management",
      description: "Designing structured schemas and connecting real-time data persistence seamlessly using MongoDB.",
      category: "DATA PERSISTENCE",
      stat: "High Performance"
    }
  ];

  const stats = [
    { label: "Completed Projects", rawValue: "15", suffix: "+" },
    { label: "Client Satisfaction", rawValue: "100", suffix: "%" },
    { label: "Code Quality", rawValue: "99", suffix: "%" },
    { label: "Problem Solving", rawValue: "24", suffix: "/7" },
  ];

  const skills = [
    { name: "React.js", icon: <Code2 size={16} className="text-cyan-400" /> },
    { name: "Node.js", icon: <Server size={16} className="text-green-400" /> },
    { name: "MongoDB", icon: <Database size={16} className="text-emerald-400" /> },
    { name: "Tailwind CSS", icon: <Layers size={16} className="text-teal-400" /> },
    { name: "JavaScript (ES6+)", icon: <Terminal size={16} className="text-yellow-400" /> },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTech]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-[#020617] text-gray-300 py-32 px-6 md:px-8 overflow-hidden min-h-screen">
      
      {/* Background Animated Pulse Beams */}
      <motion.div 
        animate={{ opacity: [0.05, 0.2, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="px-4 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/30 inline-flex items-center gap-2 shadow-lg"
          >
            <Sparkles size={14} className="animate-spin text-cyan-400" /> Professional Overview
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white"
          >
            Engineering Digital{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-gray-400 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            A dedicated MERN Stack Developer transforming visionary concepts into high-performing, scalable, and visually breathtaking web applications.
          </motion.p>
        </div>

        {/* Stats Row with Staggered Entrance */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}
              className="p-6 rounded-2xl bg-[#080c14]/60 border border-white/10 backdrop-blur-xl text-center shadow-lg group transition"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                <CounterNumber value={stat.rawValue} suffix={stat.suffix} />
              </h3>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Cards Grid with Staggered 3D Tilt Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cardsData.map((card, index) => (
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
                boxShadow: "0 25px 60px -15px rgba(6, 182, 212, 0.25)",
                borderColor: "rgba(6, 182, 212, 0.8)"
              }}
              style={{ perspective: 1000 }}
              className="relative p-8 rounded-[32px] bg-[#080c14]/95 border border-white/10 backdrop-blur-2xl flex flex-col justify-between group overflow-hidden transition-colors duration-300"
            >
              {/* Glowing Corner Aura & Top Line on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all duration-500 pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/25">
                    {card.category}
                  </span>
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition shadow-md"
                  >
                    {card.icon}
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-8 font-medium">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Rocket size={14} className="text-pink-400" /> {card.stat}
                </span>
                <span className="text-cyan-400 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1.5 cursor-pointer">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Tech Stack & Live Code Box with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-[32px] bg-[#080c14]/90 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            <div className="text-center lg:text-left space-y-1">
              <h4 className="text-xl font-extrabold text-white">Interactive Tech Stack</h4>
              <p className="text-xs text-gray-400 font-medium">Click any technology below to view its live code snippet.</p>
            </div>
            
            {/* Clickable Tech Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {skills.map((skill, i) => (
                <motion.button 
                  key={i}
                  onClick={() => setActiveTech(skill.name)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 shadow-inner transition cursor-pointer ${
                    activeTech === skill.name
                      ? "bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      : "bg-white/5 border-white/10 text-gray-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
                  }`}
                >
                  {skill.icon} {skill.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Code Snippet Display Box */}
          <motion.div 
            key={activeTech}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-[#020617] border border-white/10 p-5 font-mono text-xs sm:text-sm text-cyan-300 relative shadow-inner overflow-x-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-gray-400">
              <span className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <Terminal size={14} className="text-cyan-400" /> {activeTech} snippet.js
              </span>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-300 transition flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check size={12} className="text-green-400" /> : null}
                {copied ? "Copied!" : "Copy Code"}
              </motion.button>
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed text-gray-200">
              {codeSnippets[activeTech]}
            </pre>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;