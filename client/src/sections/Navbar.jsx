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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
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
      </nav>

      {/* Mobile Menu - Moved outside nav to fix stacking context */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] lg:hidden flex justify-end"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-dark/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2"></div>

              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
                  <span className="flex flex-col leading-none">
                    <span className="text-xl font-bold text-primary tracking-tight">Al Safi</span>
                    <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Beda</span>
                  </span>
                </div>
                <button 
                  className="p-2 bg-primary/5 text-primary rounded-xl text-2xl active:scale-90 transition-transform" 
                  onClick={() => setIsOpen(false)}
                >
                  <HiX />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 px-6 py-8 overflow-y-auto">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.a 
                      key={link.name} 
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="group flex items-center justify-between p-4 rounded-2xl hover:bg-soft transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-xl font-bold text-dark group-hover:text-primary transition-colors">{link.name}</span>
                      <span className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                      </span>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="text-gray-400 font-extrabold uppercase tracking-widest text-[10px] mb-6 ml-4">Quick Contact</p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-soft border border-primary/5">
                      <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center text-xl shadow-lg shadow-primary/20">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-primary font-bold uppercase mb-0.5">Call Us Now</p>
                        <a href="tel:9677469736" className="text-lg font-bold text-dark hover:text-primary transition-colors">96774 69736</a>
                      </div>
                    </div>
                    
                    <a 
                      href="https://wa.me/919677469736?text=Hi%20I%20want%20to%20order%20Beda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 rounded-2xl bg-green-500 text-white shadow-xl shadow-green-500/20 active:scale-[0.98] transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-2xl">
                          <FaWhatsapp />
                        </div>
                        <span className="font-bold">Order on WhatsApp</span>
                      </div>
                      <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7"></path></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Footer */}
              <div className="p-8 bg-soft border-t border-gray-100 flex justify-center gap-6">
                {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest">{social}</a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
