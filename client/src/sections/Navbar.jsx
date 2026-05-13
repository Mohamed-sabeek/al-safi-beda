import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

import logo from '../assets/logo.webp';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 group"
        >
          <img 
            src={logo} 
            alt="Al Safi Beda Logo" 
            className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-14 md:h-20'} w-auto object-contain drop-shadow-sm lg:group-hover:scale-105`} 
            loading="eager"
            width="150"
            height="80"
          />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-2xl border border-white/5 shadow-md">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors relative group/link ${scrolled ? 'text-dark' : 'text-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover/link:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/919677469736?text=Hi%20I%20want%20to%20order%20Beda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-xl shadow-lg"
          >
            <FaWhatsapp size={20} />
            <span className="font-bold">Order Now</span>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden text-3xl transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lg:hidden bg-white flex flex-col h-screen w-full overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
                <span className="flex flex-col leading-none">
                  <span className="text-xl font-bold text-primary">Al Safi</span>
                  <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Beda</span>
                </span>
              </div>
              <button className="text-3xl text-primary p-2" onClick={() => setIsOpen(false)}>
                <HiX />
              </button>
            </div>

            <div className="flex flex-col gap-2 p-6 overflow-y-auto">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-bold text-dark hover:text-primary transition-all py-3 border-b border-gray-50 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-4">Get in touch</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-primary font-bold uppercase mb-1">Call Us</span>
                    <a href="tel:9677469736" className="text-xl font-bold text-dark">96774 69736</a>
                  </div>
                  <a 
                    href="https://wa.me/919677469736?text=Hi%20I%20want%20to%20order%20Beda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center py-4 text-base rounded-xl shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaWhatsapp size={20} /> Order on WhatsApp
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
