import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

import maidaBedaImg from '../assets/maida-beda.png';
import godhumaiBedaImg from '../assets/godhumai-beda.png';
import parottaImg from '../assets/parotta.png';
import eggMurtabakImg from '../assets/egg-murtabak.png';
import chickenMurtabakImg from '../assets/chicken-murtabak.png';
import muttonMurtabakImg from '../assets/mutton-murtabak.png';

const menuItems = [
  {
    id: 1,
    name: 'Maida Beda (1kg)',
    description: 'Traditional homemade maida beda, soft and layered, prepared with premium quality maida.',
    image: maidaBedaImg,
    category: 'Beda',
    price: '₹180'
  },
  {
    id: 2,
    name: 'Godhumai Beda (1kg)',
    description: 'Healthy whole wheat beda, handmade for a traditional authentic taste and soft texture.',
    image: godhumaiBedaImg,
    category: 'Beda',
    price: '₹200'
  },
  {
    id: 3,
    name: 'Parotta (1pcs)',
    description: 'Crispy, multi-layered handmade parotta, perfect with any curry or gravy.',
    image: parottaImg,
    category: 'Parotta',
    price: '₹20'
  },
  {
    id: 4,
    name: 'Egg Murthabak',
    description: 'Delicious stuffed pancake filled with seasoned eggs and traditional spices.',
    image: eggMurtabakImg,
    category: 'Murthabak',
    price: '₹40'
  },
  {
    id: 5,
    name: 'Chicken Murthabak',
    description: 'Premium Murthabak stuffed with succulent minced chicken and aromatic spices.',
    image: chickenMurtabakImg,
    category: 'Murthabak',
    price: '₹60'
  },
  {
    id: 6,
    name: 'Mutton Murthabak',
    description: 'Our signature Murthabak filled with rich, spiced minced mutton for a royal taste.',
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

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-50 group hover:-translate-y-3 transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-secondary text-primary font-extrabold px-5 py-2 rounded-2xl text-lg shadow-xl shadow-black/5">
                    {item.price}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-sm font-medium">Freshly prepared with love</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-gray-500 text-base mb-8 leading-relaxed line-clamp-2">{item.description}</p>
                  <a 
                    href={`https://wa.me/919677469736?text=Hi, I want to order ${item.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary justify-center py-4 text-lg rounded-2xl shadow-primary/30"
                  >
                    <FaWhatsapp size={22} /> Order Now
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Decorative patterns */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Menu;
