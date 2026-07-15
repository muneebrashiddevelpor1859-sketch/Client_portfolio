import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight, Sparkles, Heart, X, Trash2, Plus, Minus, Layers } from "lucide-react";

function Ecommerace() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      category: "UI COMPONENTS",
      name: "The Catalyzer",
      price: 16.00,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      description: "Blazing fast interactive UI components engineered with React and Tailwind CSS."
    },
    {
      id: 2,
      category: "REACT TEMPLATES",
      name: "Shooting Stars",
      price: 21.15,
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      description: "Advanced motion templates integrated smoothly with Framer Motion."
    },
    {
      id: 3,
      category: "DATABASE UI",
      name: "Neptune Dashboard",
      price: 12.00,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      description: "Real-time data visualization layout connected seamlessly with backend APIs."
    },
    {
      id: 4,
      category: "SAAS KIT",
      name: "The 400 Blows",
      price: 18.40,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      description: "Complete full-stack architecture toolkit designed for high-end SaaS products."
    }
  ];

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section className="relative bg-[#020617] text-gray-300 py-32 px-6 md:px-8 overflow-hidden min-h-screen">
      
      {/* Floating Cart Trigger */}
      <div className="absolute top-8 right-8 z-30">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCartOpen(true)}
          className="relative px-5 py-3 rounded-2xl bg-[#080c14]/90 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl text-white font-bold text-xs flex items-center gap-2.5 shadow-2xl cursor-pointer"
        >
          <ShoppingBag size={18} className="text-cyan-400" />
          <span>Cart</span>
          {totalItemsCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-cyan-500 text-black font-extrabold text-[10px] flex items-center justify-center shadow-lg">
              {totalItemsCount}
            </span>
          )}
        </motion.button>
      </div>

      {/* Background Neon Glow */}
      <motion.div 
        animate={{ opacity: [0.08, 0.2, 0.08], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[180px] pointer-events-none"
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
            <Sparkles size={14} className="animate-spin text-cyan-400" /> Featured Creations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white"
          >
            Digital Products &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Showcase
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-gray-400 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            A high-end layout layout featuring seamless interactive elements and direct checkout capabilities.
          </motion.p>
        </div>

        {/* Clean Modern List/Row Showcase (No traditional cards) */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                borderColor: "rgba(6, 182, 212, 0.6)",
                boxShadow: "0 20px 40px -15px rgba(6, 182, 212, 0.2)"
              }}
              className="relative p-6 sm:p-8 rounded-[24px] bg-[#080c14]/90 border border-white/10 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 group transition-all duration-300"
            >
              {/* Left Side: Image and Details */}
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto text-center sm:text-left">
                <div className="relative w-28 h-28 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 max-w-md font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Price & Action */}
              <div className="flex items-center justify-between w-full md:w-auto gap-8 pt-4 md:pt-0 border-t md:border-t-0 border-white/10">
                <div className="text-left md:text-right">
                  <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider">Price</span>
                  <span className="text-xl font-extrabold text-white">${item.price.toFixed(2)}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(item)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-extrabold text-xs tracking-wide shadow-[0_10px_25px_rgba(6,182,212,0.3)] transition-all cursor-pointer flex items-center gap-2"
                >
                  <ShoppingBag size={14} /> Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#080c14] border-l border-white/10 z-50 flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag size={20} className="text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">Your Shopping Cart</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-extrabold">
                    {totalItemsCount}
                  </span>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-3 text-gray-400">
                    <ShoppingBag size={48} className="text-gray-600 mb-2" />
                    <p className="text-base font-semibold text-white">Your cart is empty</p>
                    <p className="text-xs max-w-xs">Select any product from the list above to add it to your cart.</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      key={item.id}
                      className="p-4 rounded-2xl bg-[#020617] border border-white/10 flex items-center gap-4 shadow-inner"
                    >
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-white/10" />
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-white">{item.name}</h4>
                        <p className="text-xs font-extrabold text-cyan-400 mt-0.5">${(item.price * item.quantity).toFixed(2)}</p>
                        
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-white cursor-pointer">
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-bold text-white w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-white cursor-pointer">
                              <Plus size={12} />
                            </button>
                          </div>
                          <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-300 transition cursor-pointer">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#080c14] space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 font-medium">Subtotal</span>
                    <span className="text-white font-extrabold text-lg">${totalPrice}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-extrabold text-sm tracking-wide shadow-[0_10px_30px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Checkout</span> <ArrowRight size={16} />
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Ecommerace;