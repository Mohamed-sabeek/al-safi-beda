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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${reason.lightColor} group-hover:bg-gradient-to-br group-hover:${reason.color} group-hover:text-white group-hover:shadow-lg`}>
                {reason.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{reason.title}</h3>
              <p className="text-gray-500 leading-relaxed text-base group-hover:text-gray-700 transition-colors">{reason.desc}</p>
              
              {/* Bottom Decoration */}
              <div className="absolute bottom-4 right-8 text-6xl font-black text-gray-50 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 select-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

export default WhyChooseUs;
