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

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
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
          
          <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed">
            Freshly prepared homemade beda with traditional flavor, extreme hygiene, and premium quality ingredients.
          </p>

          <div className="flex flex-wrap justify-center gap-10 mt-4">
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
      </div>

    </section>
  );
};

export default Hero;
