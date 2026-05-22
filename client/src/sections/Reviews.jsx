import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
  const testimonials = [
    { 
      name: "Mohammed Tariq", 
      location: "Podakkudi", 
      text: "Romba nalla irukku. The Maitha Beda reminds me of my paati's cooking. Packaging was also super neat and hygienic.", 
      rating: 5,
      initials: "MT",
      bgColor: "bg-green-100 text-green-700"
    },
    { 
      name: "Ayesha Fathima", 
      location: "Kootthanalloor", 
      text: "First time ordering from here, exact homemade taste. Sweetness correct ah irukku. Definitely ordering again!", 
      rating: 5,
      initials: "AF",
      bgColor: "bg-yellow-100 text-yellow-700"
    },
    { 
      name: "Abdul Rahman", 
      location: "Marakadai", 
      text: "Clean and hygienic homemade snacks. En kids ku intha gothuma beda romba pudichirukku. Worth the price.", 
      rating: 5,
      initials: "AR",
      bgColor: "bg-blue-100 text-blue-700"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white border border-gray-100 shadow-lg relative lg:hover:-translate-y-2 lg:hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-5 left-8 md:left-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary text-white flex items-center justify-center text-2xl md:text-3xl shadow-lg">
                  <FaQuoteLeft />
                </div>
              </div>
              
              <div className="mb-6 md:mb-8 pt-4 md:pt-6">
                <div className="flex gap-1 text-secondary mb-4">
                  {[...Array(review.rating)].map((_, i) => <FaStar key={i} size={14} />)}
                </div>
                <p className="text-gray-600 text-base md:text-lg italic leading-relaxed">"{review.text}"</p>
              </div>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-6 md:pt-8">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-lg ${review.bgColor}`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-dark text-base md:text-lg">{review.name}</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration - Optimized */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default Reviews;
