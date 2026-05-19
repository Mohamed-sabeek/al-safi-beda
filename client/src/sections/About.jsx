import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUserCheck, FaAward, FaMagic } from 'react-icons/fa';

import maidaBedaImg from '../assets/maida-beda.webp';
import godhumaiBedaImg from '../assets/godhumai-beda.webp';
import parottaImg from '../assets/parotta.webp';

const About = () => {
  const stats = [
    { label: "Happy Customers", value: "1000+", icon: <FaHeart className="text-red-500" /> },
    { label: "Traditional Recipes", value: "6+", icon: <FaMagic className="text-purple-500" /> },
    { label: "Quality Rating", value: "4.9/5", icon: <FaAward className="text-yellow-500" /> },
    { label: "Homemade Batches", value: "1000+", icon: <FaUserCheck className="text-blue-500" /> },
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src={maidaBedaImg} 
                  alt="Preparation 1" 
                  className="rounded-3xl shadow-lg lg:hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <img 
                  src={parottaImg} 
                  alt="Preparation 2" 
                  className="rounded-3xl shadow-lg lg:hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src={godhumaiBedaImg} 
                  alt="Preparation 3" 
                  className="rounded-3xl shadow-lg lg:hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="bg-primary p-6 md:p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center shadow-lg">
                  <p className="text-3xl md:text-4xl font-extrabold text-secondary mb-1 md:mb-2">20+</p>
                  <p className="font-bold text-xs md:text-sm uppercase tracking-widest">Years of Tradition</p>
                </div>
              </div>
            </div>
            {/* Decorative dots - Optimized */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 md:mb-8 leading-tight">
              The Art of <span className="text-primary">Homemade</span> Perfection
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              At Al Safi Beda, we don't just cook; we preserve a legacy. Our journey started in a small home kitchen, fueled by the desire to bring back the authentic, unadulterated taste of traditional South Indian sweets and snacks.
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 group p-2 md:p-4 rounded-2xl lg:hover:bg-soft transition-colors">
                  <div className="text-2xl md:text-3xl p-3 bg-white shadow-md rounded-2xl lg:group-hover:scale-105 transition-transform">{stat.icon}</div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-dark leading-none mb-1">{stat.value}</h4>
                    <p className="text-gray-500 text-xs md:text-sm font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div 
              className="p-6 md:p-8 bg-gradient-to-r from-primary to-green-800 rounded-[2rem] text-white shadow-xl"
            >
              <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-3">
                <FaHeart className="text-secondary" /> Our Promise
              </h4>
              <p className="text-white/80 text-sm md:text-base leading-relaxed italic">
                "Every batch is prepared only after you order. No stocks, no preservatives—just fresh ingredients and traditional recipes."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
