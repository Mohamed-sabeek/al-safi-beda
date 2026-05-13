import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
  const testimonials = [
    { 
      name: "Suresh Kumar", 
      role: "Regular Customer", 
      text: "The Mitha Beda is absolutely delicious. It tastes just like how my grandmother used to make it. Highly recommended for anyone looking for authentic taste!", 
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    { 
      name: "Priya Rajan", 
      role: "Food Blogger", 
      text: "Amazing quality and hygiene. You can really taste the freshness of the ingredients. The Gothuma Beda is a perfect healthy treat. Loved the packaging too!", 
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    { 
      name: "Arun V.", 
      role: "Home Chef", 
      text: "Best homemade snacks in town. The traditional touch is what makes Al Safi stand out. My kids love their special beda varieties. 5 stars all the way!", 
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
  ];

  return (
    <section className="section-padding bg-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-dark mb-4"
          >
            Loved by Our <span className="text-primary">Customers</span>
          </motion.h2>
          <div className="flex justify-center gap-1 text-secondary mb-8">
            {[...Array(5)].map((_, i) => <FaStar key={i} size={24} />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 relative group hover:-translate-y-4 transition-all duration-500"
            >
              <div className="absolute -top-6 left-10">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl shadow-xl shadow-primary/30">
                  <FaQuoteLeft />
                </div>
              </div>
              
              <div className="mb-8 pt-6">
                <div className="flex gap-1 text-secondary mb-4">
                  {[...Array(review.rating)].map((_, i) => <FaStar key={i} size={16} />)}
                </div>
                <p className="text-gray-600 text-lg italic leading-relaxed">"{review.text}"</p>
              </div>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/10 p-1"
                />
                <div>
                  <h4 className="font-extrabold text-dark text-lg">{review.name}</h4>
                  <p className="text-primary text-sm font-bold uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -z-10"></div>
    </section>
  );
};

export default Reviews;
