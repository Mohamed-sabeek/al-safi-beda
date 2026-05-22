import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaShieldAlt, FaClock, FaRupeeSign, FaStar, FaLeaf } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    { 
      icon: <FaHeart />, 
      title: "Homemade Quality", 
      desc: "Cooked with love and traditional warmth.", 
      lightColor: "bg-red-50 text-red-500" 
    },
    { 
      icon: <FaStar />, 
      title: "Traditional Taste", 
      desc: "Authentic recipes preserved through generations.", 
      lightColor: "bg-yellow-50 text-yellow-500" 
    },
    { 
      icon: <FaLeaf />, 
      title: "Fresh Ingredients", 
      desc: "Hand-picked organic and fresh produce.", 
      lightColor: "bg-green-50 text-green-500" 
    },
    { 
      icon: <FaShieldAlt />, 
      title: "Hygienic Cooking", 
      desc: "Utmost cleanliness in every preparation.", 
      lightColor: "bg-blue-50 text-blue-500" 
    }
  ];

  return (
    <section className="section-padding bg-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            The Al Safi Difference
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-dark"
          >
            Why <span className="text-primary">Al Safi?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 md:p-8 rounded-[1.5rem] bg-white border border-gray-100 shadow-sm lg:hover:shadow-lg lg:hover:border-primary/20 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300 lg:group-hover:scale-110 ${reason.lightColor}`}>
                {reason.icon}
              </div>
              
              <h3 className="text-lg font-bold text-dark mb-2 lg:group-hover:text-primary transition-colors">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-snug">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur Spheres - Optimized */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[80px] -z-10"></div>
    </section>
  );
};

export default WhyChooseUs;
