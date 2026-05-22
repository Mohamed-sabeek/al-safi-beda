import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {


  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-dark mb-4"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Have questions or want to place a custom order? Reach out to us via call or WhatsApp.</p>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-soft p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-primary/5 space-y-6 md:space-y-8 shadow-lg flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-md lg:group-hover:scale-105 transition-transform">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-primary font-extrabold uppercase tracking-[0.2em] mb-1">Direct Call</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <a href="tel:9677469736" className="text-xl md:text-2xl font-bold text-dark hover:text-primary transition-colors">96774 69736</a>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <a href="tel:9629561173" className="text-xl md:text-2xl font-bold text-dark hover:text-primary transition-colors">96295 61173</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 text-white rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-md lg:group-hover:scale-105 transition-transform">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-green-600 font-extrabold uppercase tracking-[0.2em] mb-1">Fast Response</p>
                  <a href="https://wa.me/919677469736" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold text-dark hover:text-primary transition-colors">WhatsApp Chat</a>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-accent text-white rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-md lg:group-hover:scale-105 transition-transform">
                  <FaInstagram />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-accent font-extrabold uppercase tracking-[0.2em] mb-1">Follow Us</p>
                  <a href="#" className="text-xl md:text-2xl font-bold text-dark hover:text-primary transition-colors">@alsafibeda_official</a>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary text-primary rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-md lg:group-hover:scale-105 transition-transform">
                  <FaClock />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-secondary-dark font-extrabold uppercase tracking-[0.2em] mb-1">Operating Hours</p>
                  <p className="text-xl md:text-2xl font-bold text-dark">24/7</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Google Maps Embed - Optimized */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-lg h-64 lg:h-full min-h-[350px] border-4 md:border-8 border-white bg-gray-100"
            >
              <iframe 
                title="Location Map"
                src="https://maps.google.com/maps?q=10.736343,79.50993&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration - Optimized */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default Contact;
