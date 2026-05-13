import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaShieldAlt, FaClock, FaRupeeSign, FaStar, FaLeaf } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    { 
      icon: <FaHeart />, 
      title: "Homemade Quality", 
      desc: "Every bite is filled with home-cooked warmth and love.", 
      color: "from-red-500 to-pink-500",
      lightColor: "bg-red-50 text-red-500" 
    },
    { 
      icon: <FaStar />, 
      title: "Traditional Taste", 
      desc: "Authentic recipes preserved through generations.", 
      color: "from-yellow-500 to-orange-500",
      lightColor: "bg-yellow-50 text-yellow-500" 
    },
    { 
      icon: <FaLeaf />, 
      title: "Fresh Ingredients", 
      desc: "We use only organic and hand-picked fresh produce.", 
      color: "from-green-500 to-emerald-500",
      lightColor: "bg-green-50 text-green-500" 
    },
    { 
      icon: <FaShieldAlt />, 
      title: "Hygienic Cooking", 
      desc: "Utmost cleanliness maintained during every preparation.", 
      color: "from-blue-500 to-cyan-500",
      lightColor: "bg-blue-50 text-blue-500" 
    },
    { 
      icon: <FaRupeeSign />, 
      title: "Affordable Pricing", 
      desc: "Premium quality food at very reasonable prices.", 
      color: "from-purple-500 to-indigo-500",
      lightColor: "bg-purple-50 text-purple-500" 
    },
    { 
      icon: <FaClock />, 
      title: "Fast Service", 
      desc: "Quick preparation and timely WhatsApp response.", 
      color: "from-orange-500 to-red-400",
      lightColor: "bg-orange-50 text-orange-500" 
    },
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
            className="text-4xl md:text-5xl font-extrabold text-dark mb-6"
          >
            Why Choose <span className="text-primary">Our Kitchen?</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">We combine traditional wisdom with modern standards to give you the best homemade experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-gray-100 shadow-lg lg:hover:shadow-xl lg:hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-6 md:mb-8 transition-transform duration-300 lg:group-hover:scale-105 ${reason.lightColor}`}>
                {reason.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-dark mb-3 md:mb-4 lg:group-hover:text-primary transition-colors">{reason.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">{reason.desc}</p>
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
