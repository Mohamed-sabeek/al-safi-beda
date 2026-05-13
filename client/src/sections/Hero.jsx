import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden bg-primary pt-20">
      {/* Background Image with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/40 z-10"></div>

      {/* Floating Animated Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1], 
            scale: [1, 1.5, 1],
            x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
            y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
          }}
          transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
          className="absolute w-24 h-24 bg-secondary/20 rounded-full blur-3xl z-0"
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%` 
          }}
        />
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-secondary/20 border border-secondary/30 rounded-full text-secondary font-bold text-sm mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            Authentic South Indian Flavors
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight mb-8">
            Authentic <br />
            <span className="text-secondary">Homemade</span> Taste
          </h1>
          
          <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-xl leading-relaxed">
            Freshly prepared homemade beda with traditional flavor, extreme hygiene, and premium quality ingredients.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255, 213, 79, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#menu" 
              className="px-10 py-5 bg-secondary text-primary rounded-2xl font-extrabold text-lg flex items-center gap-3 transition-all duration-300 shadow-xl"
            >
              Explore Menu <FaArrowRight />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919677469736?text=Hi%20I%20want%20to%20order%20Beda"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg flex items-center gap-3 backdrop-blur-sm transition-all duration-300"
            >
              <FaWhatsapp className="text-2xl" /> Order on WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Visual Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 p-4 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/20 shadow-2xl overflow-hidden group">
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=90" 
              alt="Premium Beda" 
              className="w-full h-auto rounded-[2.5rem] shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary font-bold">100%</div>
              <div>
                <p className="text-dark font-extrabold text-sm uppercase">Pure Quality</p>
                <p className="text-gray-500 text-xs">Handmade with care</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/40 rounded-full blur-[100px] -z-10"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
