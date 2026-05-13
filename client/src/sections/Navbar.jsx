import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-2xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <img 
            src={logo} 
            alt="Al Safi Beda Logo" 
            className={`transition-all duration-300 ${scrolled ? 'h-14' : 'h-16 md:h-20'} w-auto object-contain drop-shadow-md group-hover:scale-105`} 
          />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-3 rounded-2xl border border-white/10 shadow-lg">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest hover:text-secondary transition-all relative group/link ${scrolled ? 'text-dark' : 'text-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover/link:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(11, 107, 47, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919677469736?text=Hi%20I%20want%20to%20order%20Beda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-2xl shadow-2xl"
          >
            <FaWhatsapp size={20} />
            <span className="font-bold">Order Now</span>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden text-4xl transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] lg:hidden bg-white flex flex-col h-screen w-full"
          >
            <div className="flex justify-between items-center p-8 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
                <span className="flex flex-col leading-none">
                  <span className="text-xl font-bold text-primary">Al Safi</span>
                  <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Beda</span>
                </span>
              </div>
              <button className="text-4xl text-primary p-2" onClick={() => setIsOpen(false)}>
                <HiX />
              </button>
            </div>

            <div className="flex flex-col gap-4 p-8 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name} 
                  href={link.href}
                  className="text-3xl font-bold text-dark hover:text-primary transition-all py-2 border-b border-gray-50 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-6">Get in touch</p>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-primary font-bold uppercase mb-1">Call Us</span>
                    <a href="tel:9677469736" className="text-2xl font-bold text-dark">96774 69736</a>
                  </div>
                  <a 
                    href="https://wa.me/919677469736?text=Hi%20I%20want%20to%20order%20Beda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center py-5 text-lg rounded-2xl w-full shadow-xl shadow-primary/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaWhatsapp size={22} /> Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
