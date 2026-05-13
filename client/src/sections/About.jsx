import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUserCheck, FaAward, FaMagic } from 'react-icons/fa';

import maidaBedaImg from '../assets/maida-beda.png';
import godhumaiBedaImg from '../assets/godhumai-beda.png';
import parottaImg from '../assets/parotta.png';

const About = () => {
  const stats = [
    { label: "Happy Customers", value: "500+", icon: <FaHeart className="text-red-500" /> },
    { label: "Traditional Recipes", value: "15+", icon: <FaMagic className="text-purple-500" /> },
    { label: "Quality Rating", value: "4.9/5", icon: <FaAward className="text-yellow-500" /> },
    { label: "Homemade Batches", value: "1000+", icon: <FaUserCheck className="text-blue-500" /> },
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src={maidaBedaImg} 
                  alt="Preparation 1" 
                  className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src={parottaImg} 
                  alt="Preparation 2" 
                  className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src={godhumaiBedaImg} 
                  alt="Preparation 3" 
                  className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-primary p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center shadow-2xl">
                  <p className="text-4xl font-extrabold text-secondary mb-2">10+</p>
                  <p className="font-bold text-sm uppercase tracking-widest">Years of Tradition</p>
                </div>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-extrabold uppercase tracking-[0.3em] text-sm mb-4 block">Our Heritage</span>
            <h2 className="text-5xl font-extrabold text-dark mb-8 leading-tight">
              The Art of <span className="text-primary">Homemade</span> Perfection
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              At Al Safi Beda, we don't just cook; we preserve a legacy. Our journey started in a small home kitchen, fueled by the desire to bring back the authentic, unadulterated taste of traditional South Indian sweets and snacks.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-soft transition-colors">
                  <div className="text-3xl p-3 bg-white shadow-lg rounded-2xl group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div>
                    <h4 className="text-2xl font-extrabold text-dark leading-none mb-1">{stat.value}</h4>
                    <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gradient-to-r from-primary to-green-800 rounded-[2rem] text-white shadow-2xl"
            >
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <FaHeart className="text-secondary" /> Our Promise
              </h4>
              <p className="text-white/80 leading-relaxed italic">
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
