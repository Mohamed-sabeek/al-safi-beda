import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

import maidaBedaImg from '../assets/maida-beda.webp';
import godhumaiBedaImg from '../assets/godhumai-beda.webp';
import parottaImg from '../assets/parotta.webp';
import eggMurtabakImg from '../assets/egg-murtabak.webp';
import chickenMurtabakImg from '../assets/chicken-murtabak.webp';
import muttonMurtabakImg from '../assets/mutton-murtabak.webp';

const menuItems = [
  {
    id: 1,
    name: 'Maida Beda (1kg)',
    description: 'Traditional homemade maida beda, soft and layered, prepared with premium quality maida.',
    note: '1kg ≈ 15 pieces',
    image: maidaBedaImg,
    category: 'Beda',
    price: '₹180'
  },
  {
    id: 2,
    name: 'Godhumai Beda (1kg)',
    description: 'Healthy whole wheat beda, handmade for a traditional authentic taste and soft texture.',
    note: '1kg ≈ 15 pieces',
    image: godhumaiBedaImg,
    category: 'Beda',
    price: '₹200'
  },
  {
    id: 3,
    name: 'Parotta (1pcs)',
    description: 'Crispy, multi-layered handmade parotta, perfect with any curry or gravy.',
    note: 'Minimum order: 20 pieces',
    image: parottaImg,
    category: 'Parotta',
    price: '₹20'
  },
  {
    id: 4,
    name: 'Egg Murthabak',
    description: 'Delicious stuffed pancake filled with seasoned eggs and traditional spices.',
    note: 'Minimum order: 20 pieces',
    image: eggMurtabakImg,
    category: 'Murthabak',
    price: '₹40'
  },
  {
    id: 5,
    name: 'Chicken Murthabak',
    description: 'Premium Murthabak stuffed with succulent minced chicken and aromatic spices.',
    note: 'Minimum order: 20 pieces',
    image: chickenMurtabakImg,
    category: 'Murthabak',
    price: '₹60'
  },
  {
    id: 6,
    name: 'Mutton Murthabak',
    description: 'Our signature Murthabak filled with rich, spiced minced mutton for a royal taste.',
    note: 'Minimum order: 20 pieces',
    image: muttonMurtabakImg,
    category: 'Murthabak',
    price: '₹70'
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Beda', 'Parotta', 'Murthabak'];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Authentic Taste
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-dark mb-4"
          >
            Our Specialty <span className="text-primary">Menu</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            className="h-1.5 bg-secondary mx-auto rounded-full mb-12"
          />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
                  activeCategory === cat 
                    ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105' 
                    : 'bg-white text-dark border-gray-100 hover:border-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-50 group hover:-translate-y-2 lg:hover:shadow-2xl transition-all duration-300 will-change-[opacity,transform]"
              >
                <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-300 lg:group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-primary font-bold px-4 py-1.5 rounded-xl text-lg shadow-md">
                    {item.price}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className={`text-gray-500 text-sm md:text-base leading-relaxed line-clamp-2 ${item.note ? 'mb-2' : 'mb-6'}`}>{item.description}</p>
                  {item.note && (
                    <p className="text-orange-500 text-[11px] md:text-xs font-bold uppercase tracking-wider mb-4">* {item.note}</p>
                  )}
                  <a 
                    href={`https://wa.me/919677469736?text=Hi, I want to order ${item.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary justify-center py-4 text-base md:text-lg rounded-xl shadow-md active:scale-95 transition-transform"
                  >
                    <FaWhatsapp size={20} /> Order Now
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative patterns */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Menu;
