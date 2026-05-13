import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden bg-primary pt-10">
      {/* Background Image - Simplified for Performance */}
      <motion.div 
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 will-change-transform"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80")' }}
      />
      
      {/* Gradient Overlays - Optimized */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/30 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-bold text-xs md:text-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Authentic South Indian Flavors
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6 lg:mb-8">
              Authentic <br />
              <span className="text-secondary">Homemade</span> Taste
            </h1>
            
            <p className="text-white/80 text-base md:text-xl mb-8 lg:mb-12 max-w-xl leading-relaxed">
              Freshly prepared homemade beda with traditional flavor, extreme hygiene, and premium quality ingredients.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#menu" 
                className="px-8 md:px-10 py-4 md:py-5 bg-secondary text-primary rounded-2xl font-extrabold text-lg flex items-center gap-3 transition-all duration-300 shadow-xl"
              >
                Explore Menu <FaArrowRight />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919677469736?text=Hi%20I%20want%20to%20order%20Beda"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg flex items-center gap-3 transition-all duration-300"
              >
                <FaWhatsapp className="text-2xl" /> Order Now
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Big Logo - Hidden on mobile, visible on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center lg:justify-end mb-12 lg:mb-0"
          >
            <div className="relative group">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-3xl opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src={logo} 
                alt="Al Safi Beda Logo" 
                className="h-48 md:h-64 lg:h-[400px] w-auto object-contain drop-shadow-[0_20px_50px_rgba(255,213,79,0.3)] relative z-10" 
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
