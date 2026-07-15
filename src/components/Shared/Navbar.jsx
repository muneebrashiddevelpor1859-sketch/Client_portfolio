// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Code2, Menu, X, CheckCircle, AlertCircle } from "lucide-react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hireModal, setHireModal] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     service: "Web Development",
//     message: "",
//   });

//   const [popup, setPopup] = useState({ isOpen: false, type: "", message: "" });
//   const location = useLocation();

//   const navLinks = ["Home", "About", "Services", "Projects", "Contact"];
//   const getPath = (item) => (item === "Home" ? "/" : `/${item.toLowerCase()}`);

//   const triggerPopup = (type, message) => {
//     setPopup({ isOpen: true, type, message });
//     setTimeout(() => {
//       setPopup({ isOpen: false, type: "", message: "" });
//     }, 3000);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleHireSubmit = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.message) {
//       triggerPopup("error", "Please fill all required fields!");
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setHireModal(false);
//       triggerPopup("success", "Proposal sent successfully! We will contact you soon.");
//       setForm({ name: "", email: "", service: "Web Development", message: "" });
//     }, 1000);
//   };

//   return (
//     <>
//       <motion.header
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 group">
//             <motion.div
//               whileHover={{ rotate: 360, scale: 1.15 }}
//               transition={{ duration: 0.7 }}
//               className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-[0_0_25px_#7c3aed]"
//             >
//               <Code2 size={24} className="text-white" />
//             </motion.div>

//             <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
//               Rauf
//             </h1>
//           </Link>

//           {/* Desktop Links */}
//           <nav className="hidden md:flex gap-8 text-white font-medium">
//             {navLinks.map((item) => {
//               const path = getPath(item);
//               const isActive = location.pathname === path;

//               return (
//                 <motion.div key={item} whileHover={{ y: -3, scale: 1.05 }}>
//                   <Link to={path} className="relative group py-1">
//                     <span className={isActive ? "text-cyan-400 font-bold" : "text-gray-200 hover:text-white"}>
//                       {item}
//                     </span>
//                     <span
//                       className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
//                         isActive ? "w-full" : "w-0 group-hover:w-full"
//                       }`}
//                     ></span>
//                   </Link>
//                 </motion.div>
//               );
//             })}
//           </nav>

//           {/* Desktop Hire Me Button */}
//           <motion.button
//             whileHover={{ scale: 1.08, boxShadow: "0px 0px 30px #8b5cf6" }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setHireModal(true)}
//             className="hidden md:block px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-semibold shadow-lg cursor-pointer"
//           >
//             Hire Me
//           </motion.button>

//           {/* Mobile Menu Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none cursor-pointer"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden bg-[#0a0a0c]/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 shadow-2xl"
//             >
//               <div className="flex flex-col space-y-4">
//                 {navLinks.map((item) => {
//                   const path = getPath(item);
//                   return (
//                     <Link
//                       key={item}
//                       to={path}
//                       onClick={() => setIsOpen(false)}
//                       className="text-lg font-medium px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white transition"
//                     >
//                       {item}
//                     </Link>
//                   );
//                 })}

//                 <button
//                   onClick={() => {
//                     setIsOpen(false);
//                     setHireModal(true);
//                   }}
//                   className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-semibold shadow-lg text-center cursor-pointer"
//                 >
//                   Hire Me
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.header>

//       {/* Right Side Sliding "Hire Me" Modal */}
//       <AnimatePresence>
//         {hireModal && (
//           <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 30, stiffness: 300 }}
//               className="w-full max-w-md h-full bg-[#0b0f19] border-l border-white/10 shadow-2xl p-8 flex flex-col justify-between overflow-y-auto text-white"
//             >
//               <div>
//                 <div className="flex justify-between items-center mb-8">
//                   <div>
//                     <h2 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
//                       Let's Work Together
//                     </h2>
//                     <p className="text-xs text-gray-400 mt-1">Fill out the form and I'll get back to you shortly.</p>
//                   </div>
//                   <button
//                     onClick={() => setHireModal(false)}
//                     className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition cursor-pointer"
//                   >
//                     <X size={18} />
//                   </button>
//                 </div>

//                 <form onSubmit={handleHireSubmit} className="space-y-5">
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-400 mb-2">Your Name</label>
//                     <input
//                       name="name"
//                       placeholder="John Doe"
//                       value={form.name}
//                       onChange={handleChange}
//                       className="w-full p-4 rounded-xl bg-black/50 border border-white/10 text-white outline-none focus:border-cyan-500 transition"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-gray-400 mb-2">Email Address</label>
//                     <input
//                       name="email"
//                       type="email"
//                       placeholder="john@example.com"
//                       value={form.email}
//                       onChange={handleChange}
//                       className="w-full p-4 rounded-xl bg-black/50 border border-white/10 text-white outline-none focus:border-cyan-500 transition"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-gray-400 mb-2">Service Required</label>
//                     <select
//                       name="service"
//                       value={form.service}
//                       onChange={handleChange}
//                       className="w-full p-4 rounded-xl bg-black border border-white/10 text-white outline-none focus:border-cyan-500 transition cursor-pointer"
//                     >
//                       <option value="Web Development" className="bg-[#111]">Web Development</option>
//                       <option value="MERN Stack App" className="bg-[#111]">MERN Stack App</option>
//                       <option value="UI/UX Frontend Design" className="bg-[#111]">UI/UX Frontend Design</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-gray-400 mb-2">Project Details</label>
//                     <textarea
//                       name="message"
//                       rows="4"
//                       placeholder="Tell me about your project..."
//                       value={form.message}
//                       onChange={handleChange}
//                       className="w-full p-4 rounded-xl bg-black/50 border border-white/10 text-white outline-none focus:border-cyan-500 transition resize-none"
//                       required
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)] cursor-pointer hover:opacity-90 transition disabled:opacity-50"
//                   >
//                     {loading ? "Sending..." : "Send Proposal"}
//                   </button>
//                 </form>
//               </div>

//               <div className="mt-8 text-center text-xs text-gray-500">
//                 <p>Secure & Confidential. Direct response guaranteed.</p>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//       {/* Bottom Slide-in Animated Popup Card */}
//       <AnimatePresence>
//         {popup.isOpen && (
//           <div className="fixed bottom-6 right-6 z-[60] flex items-end justify-end pointer-events-none">
//             <motion.div
//               initial={{ y: 100, opacity: 0, scale: 0.95 }}
//               animate={{ y: 0, opacity: 1, scale: 1 }}
//               exit={{ y: 100, opacity: 0, scale: 0.95 }}
//               transition={{ type: "spring", damping: 25, stiffness: 220 }}
//               className="pointer-events-auto relative w-full max-w-sm p-6 rounded-[28px] bg-[#0f172a]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-white backdrop-blur-2xl flex items-center gap-4 text-left"
//             >
//               <div
//                 className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
//                   popup.type === "success"
//                     ? "bg-green-500/15 border-green-500/30 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
//                     : "bg-red-500/15 border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
//                 }`}
//               >
//                 {popup.type === "success" ? <CheckCircle size={22} /> : <AlertCircle size={22} />}
//               </div>

//               <div className="flex-1">
//                 <h4 className="text-sm font-black tracking-tight">
//                   {popup.type === "success" ? "Success" : "Error"}
//                 </h4>
//                 <p className="text-xs font-semibold text-gray-300 tracking-wide mt-0.5">
//                   {popup.message}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setPopup({ isOpen: false, type: "", message: "" })}
//                 className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition cursor-pointer text-gray-400 hover:text-white shrink-0"
//               >
//                 <X size={12} />
//               </button>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default Navbar;




import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X, CheckCircle, AlertCircle, Sparkles, Send } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hireModal, setHireModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });

  const [popup, setPopup] = useState({ isOpen: false, type: "", message: "" });
  const location = useLocation();

  const navLinks = ["Home", "About", "Projects", "Contact"];
  const getPath = (item) => (item === "Home" ? "/" : `/${item.toLowerCase()}`);

  const triggerPopup = (type, message) => {
    setPopup({ isOpen: true, type, message });
    setTimeout(() => {
      setPopup({ isOpen: false, type: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleHireSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      triggerPopup("error", "Please fill all required fields!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setHireModal(false);
      triggerPopup("success", "Proposal sent successfully! We will contact you soon.");
      setForm({ name: "", email: "", service: "Web Development", message: "" });
    }, 1000);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#030712]/80 border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.15 }}
              transition={{ duration: 0.7 }}
              className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.5)] border border-white/20"
            >
              <Code2 size={24} className="text-white drop-shadow-md" />
            </motion.div>

            <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-500 bg-clip-text text-transparent">
              RAUF<span className="text-cyan-400">.</span>
            </h1>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 bg-black/40 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((item) => {
              const path = getPath(item);
              const isActive = location.pathname === path;

              return (
                <motion.div key={item} whileHover={{ scale: 1.05 }}>
                  <Link
                    to={path}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                      isActive ? "text-cyan-400 font-bold bg-white/5" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Desktop Hire Me Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 35px rgba(236,72,153,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setHireModal(true)}
            className="hidden md:flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-white/20 cursor-pointer"
          >
            <Sparkles size={16} /> Hire Me
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2.5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none cursor-pointer hover:bg-white/10 transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#030712]/98 border-b border-white/10 backdrop-blur-2xl px-6 py-6 shadow-2xl"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((item) => {
                  const path = getPath(item);
                  const isActive = location.pathname === path;
                  return (
                    <Link
                      key={item}
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold px-4 py-3 rounded-2xl transition border ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 border-cyan-500/30"
                          : "text-gray-300 border-transparent hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}

                <button
                  onClick={() => {
                    setIsOpen(false);
                    setHireModal(true);
                  }}
                  className="w-full mt-2 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold shadow-lg text-center cursor-pointer flex items-center justify-center gap-2 border border-white/20"
                >
                  <Sparkles size={16} /> Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Right Side Sliding "Hire Me" Modal (Dark Premium Drawer) */}
      <AnimatePresence>
        {hireModal && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="w-full max-w-md h-full bg-[#080c14] border-l border-white/10 shadow-[ -20px_0_50px_rgba(0,0,0,0.9)] p-8 flex flex-col justify-between overflow-y-auto text-white"
            >
              <div>
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-5">
                  <div>
                    <h2 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-500 bg-clip-text text-transparent flex items-center gap-2">
                      Let's Build Together <span className="text-cyan-400">✨</span>
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">Fill out the brief and let's start your project.</p>
                  </div>
                  <button
                    onClick={() => setHireModal(false)}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition cursor-pointer border border-white/10"
                  >
                    <X size={18} />
                  </button>
                </div>

                <form onSubmit={handleHireSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Your Name</label>
                    <input
                      name="name"
                      placeholder="e.g. John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full p-4 rounded-2xl bg-[#030712] border border-white/10 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full p-4 rounded-2xl bg-[#030712] border border-white/10 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Service Required</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full p-4 rounded-2xl bg-[#030712] border border-white/10 text-white outline-none focus:border-cyan-400 transition cursor-pointer text-sm"
                    >
                      <option value="Web Development" className="bg-[#030712]">Web Development</option>
                      <option value="MERN Stack App" className="bg-[#030712]">MERN Stack App</option>
                      <option value="UI/UX Frontend Design" className="bg-[#030712]">UI/UX Frontend Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Project Details</label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell me about your vision, goals or timeline..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full p-4 rounded-2xl bg-[#030712] border border-white/10 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition resize-none text-sm"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-extrabold shadow-[0_0_25px_rgba(139,92,246,0.5)] cursor-pointer hover:opacity-95 transition flex items-center justify-center gap-2 border border-white/20 disabled:opacity-50"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={16} /> Send Proposal
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-center text-xs text-gray-500 font-medium">
                <p>🔒 100% Secure & Confidential Discussion</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Slide-in Animated Popup Card */}
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

export default Navbar;