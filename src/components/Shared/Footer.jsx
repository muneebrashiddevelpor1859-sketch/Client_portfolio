import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Send, CheckCircle, AlertCircle, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ isOpen: false, type: "", message: "" });

  const triggerPopup = (type, message) => {
    setPopup({ isOpen: true, type, message });
    setTimeout(() => {
      setPopup({ isOpen: false, type: "", message: "" });
    }, 3000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      triggerPopup("error", "Please enter a valid email address!");
      return;
    }

    setLoading(true);

    // Simulated API Call
    setTimeout(() => {
      setLoading(false);
      triggerPopup("success", "Subscribed successfully! Thank you for staying updated.");
      setEmail("");
    }, 1000);
  };

  return (
    <>
      <footer className="relative bg-[#030712] text-gray-300 border-t border-white/10 overflow-hidden pt-20 pb-12">
        
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
            
            {/* Brand Info (Takes 2 columns on large screens) */}
            <div className="lg:col-span-2 space-y-6">
              <Link to="/" className="flex items-center gap-3 group w-fit">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-[0_0_25px_rgba(124,58,237,0.5)] border border-white/20">
                  <Code2 size={24} className="text-white" />
                </div>
                <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-500 bg-clip-text text-transparent">
                  RAUF<span className="text-cyan-400">.</span>
                </span>
              </Link>

              <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                Crafting high-performance, immersive, and scalable web experiences with modern technologies and stunning UI/UX design.
              </p>

              {/* Functional Newsletter Subscription Box */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">Stay Updated</p>
                <form onSubmit={handleSubscribe} className="flex items-center bg-[#080c14] border border-white/10 rounded-2xl p-1.5 focus-within:border-cyan-400 transition shadow-inner max-w-sm">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-gray-500"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs shadow-md hover:opacity-90 transition cursor-pointer flex items-center gap-1.5 shrink-0 disabled:opacity-50"
                  >
                    {loading ? "..." : <Send size={14} />}
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Links Column 1 */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">Navigation</h3>
              <ul className="space-y-3 text-sm font-medium">
                {["Home", "About", "Services", "Projects"].map((item) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  return (
                    <li key={item}>
                      <Link
                        to={path}
                        className="text-gray-400 hover:text-cyan-400 transition flex items-center gap-1 group w-fit"
                      >
                        <span className="group-hover:translate-x-1 transition duration-300">{item}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Links Column 2 */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-purple-400">Services</h3>
              <ul className="space-y-3 text-sm font-medium text-gray-400">
                <li className="hover:text-white transition cursor-pointer">Web Development</li>
                <li className="hover:text-white transition cursor-pointer">MERN Stack Apps</li>
                <li className="hover:text-white transition cursor-pointer">Frontend UI/UX</li>
                <li className="hover:text-white transition cursor-pointer">Performance Optimization</li>
              </ul>
            </div>

            {/* Socials / Contact Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-pink-400">Connect</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Let's build something extraordinary together. Reach out via social channels.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {[
                  { icon: <FaFacebookF size={14} />, href: "https://www.facebook.com/" },
                  { icon: <FaTwitter size={14} />, href: "https://www.instagram.com/?hl=en" },
                  { icon: <FaInstagram size={14} />, href: "https://x.com/" },
                  { icon: <FaLinkedinIn size={14} />, href: "https://www.linkedin.com/feed/" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-tr hover:from-cyan-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 shadow-md cursor-pointer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
            <p>© {currentYear} Rauf. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition">Security</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Slide-in Animated Popup Card for Footer Form */}
      <AnimatePresence>
        {popup.isOpen && (
          <div className="fixed bottom-6 right-6 z-[60] flex items-end justify-end pointer-events-none">
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="pointer-events-auto relative w-full max-w-sm p-6 rounded-[28px] bg-[#030712]/95 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-white backdrop-blur-2xl flex items-center gap-4 text-left"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                  popup.type === "success"
                    ? "bg-green-500/15 border-green-500/30 text-green-400 shadow-[0_0_25px_rgba(34,197,94,0.4)]"
                    : "bg-red-500/15 border-red-500/30 text-red-400 shadow-[0_0_25px_rgba(239,68,68,0.4)]"
                }`}
              >
                {popup.type === "success" ? <CheckCircle size={22} /> : <AlertCircle size={22} />}
              </div>

              <div className="flex-1">
                <h4 className="text-sm font-black tracking-tight">
                  {popup.type === "success" ? "Success" : "Error"}
                </h4>
                <p className="text-xs font-semibold text-gray-300 tracking-wide mt-0.5">
                  {popup.message}
                </p>
              </div>

              <button
                onClick={() => setPopup({ isOpen: false, type: "", message: "" })}
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition cursor-pointer text-gray-400 hover:text-white shrink-0 border border-white/10"
              >
                <X size={12} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Footer;