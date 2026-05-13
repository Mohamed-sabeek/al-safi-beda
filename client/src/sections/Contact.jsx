import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

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

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start px-4 md:px-0">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-10"
          >
            <div className="bg-soft p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-primary/5 space-y-6 md:space-y-8 shadow-lg">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-md lg:group-hover:scale-105 transition-transform">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-primary font-extrabold uppercase tracking-[0.2em] mb-1">Direct Call</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <a href="tel:9677469736" className="text-xl md:text-2xl font-bold text-dark hover:text-primary transition-colors">96774 69736</a>
                    <span className="hidden sm:block text-gray-300">|</span>
                    <a href="tel:8148682249" className="text-xl md:text-2xl font-bold text-dark hover:text-primary transition-colors">81486 82249</a>
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
            </div>

            {/* Google Maps Embed - Optimized */}
            <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-lg h-56 md:h-64 border-4 md:border-8 border-white bg-gray-100">
              <iframe 
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173133188!2d76.88483284000307!3d11.01201452399996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f973901%3A0x2670dd4609727419!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715512000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-gray-100 mt-10 lg:mt-0"
          >
            <h3 className="text-xl md:text-2xl font-bold text-dark mb-6 md:mb-8 text-center md:text-left">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs md:text-sm font-bold text-gray-700 ml-1">Your Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Mohamed Sabeek H" 
                  className="w-full px-5 md:px-6 py-3 md:py-4 bg-soft border border-gray-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-dark font-medium text-sm md:text-base"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs md:text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210" 
                  className="w-full px-5 md:px-6 py-3 md:py-4 bg-soft border border-gray-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-dark font-medium text-sm md:text-base"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs md:text-sm font-bold text-gray-700 ml-1">Your Requirements</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  placeholder="Tell us what you'd like to order..." 
                  className="w-full px-5 md:px-6 py-3 md:py-4 bg-soft border border-gray-100 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-dark font-medium resize-none text-sm md:text-base"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full btn-primary justify-center py-4 md:py-5 text-lg md:text-xl font-bold rounded-xl md:rounded-2xl shadow-lg relative overflow-hidden group active:scale-95 transition-transform"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitted ? 'Sent Successfully!' : 'Send Message'}
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-primary/10 text-primary font-bold text-center rounded-xl border border-primary/20"
                >
                  We'll get back to you shortly!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background decoration - Optimized */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default Contact;
