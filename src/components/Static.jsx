import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, UserCheck, Download, Package, Sparkles } from "lucide-react";

// Counter Animation Component
function CounterNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract numeric part (e.g., "2.7K" -> 2700, "35" -> 35)
  const parseNumericValue = (val) => {
    if (val.includes("K")) {
      return parseFloat(val) * 1000;
    }
    return parseInt(val.replace(/[^0-9]/g, ""), 10) || 0;
  };

  const numericValue = parseNumericValue(value);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
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

  // Format back to K if original had K
  const formatCount = (num) => {
    if (value.includes("K")) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + "K";
    }
    return num;
  };

  return <span ref={ref}>{formatCount(count)}{suffix}</span>;
}

function Static() {
  const statsData = [
    {
      icon: <Users className="text-cyan-400" size={26} />,
      count: "2.7K",
      suffix: "+",
      label: "Active Users",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: <UserCheck className="text-purple-400" size={26} />,
      count: "1.8K",
      suffix: "",
      label: "Subscribers",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Download className="text-pink-400" size={26} />,
      count: "35K",
      suffix: "+",
      label: "Total Downloads",
      gradient: "from-pink-400 to-red-500"
    },
    {
      icon: <Package className="text-emerald-400" size={26} />,
      count: "4",
      suffix: "",
      label: "Products Launched",
      gradient: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section className="relative bg-[#020617] text-gray-300 py-24 px-6 md:px-8 overflow-hidden">
      
      {/* Background Animated Glow Beams */}
      <motion.div 
        animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full text-xs font-extrabold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 inline-flex items-center gap-2 shadow-inner"
          >
            <Sparkles size={14} className="text-cyan-400" /> Platform Milestones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-black text-white tracking-tight"
          >
            Trusted by Developers{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.03, 
                borderColor: "rgba(6, 182, 212, 0.5)",
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)"
              }}
              style={{ perspective: 1000 }}
              className="relative p-8 rounded-[28px] bg-[#080c14]/90 border border-white/10 backdrop-blur-2xl text-center group overflow-hidden transition-all duration-300"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Icon Container */}
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition duration-300 shadow-md">
                {item.icon}
              </div>

              {/* Animated Counter Value */}
              <h3 className={`text-4xl sm:text-5xl font-black mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent tracking-tight`}>
                <CounterNumber value={item.count} suffix={item.suffix} />
              </h3>

              {/* Label */}
              <p className="text-xs sm:text-sm text-gray-400 font-semibold tracking-wider uppercase">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Static;