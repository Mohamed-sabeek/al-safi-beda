import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

// Direct imports for above-the-fold content
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';

// Lazy load below-the-fold sections for performance
const About = lazy(() => import('./sections/About'));
const Menu = lazy(() => import('./sections/Menu'));
const WhyChooseUs = lazy(() => import('./sections/WhyChooseUs'));
const Gallery = lazy(() => import('./sections/Gallery'));
const Reviews = lazy(() => import('./sections/Reviews'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

const Loading = () => (
  <div className="h-screen w-full flex items-center justify-center bg-primary">
    <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="bg-soft min-h-screen selection:bg-primary selection:text-secondary">
      <Navbar />
      <Hero />
      <Suspense fallback={<Loading />}>
        <About />
        <Menu />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Contact />
        <Footer />
      </Suspense>

      {/* Floating WhatsApp Button with Pulse Animation */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919677469736?text=Hi%20I%20want%20to%20order%20Beda"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-5 rounded-full shadow-[0_20px_50px_rgba(34,197,94,0.4)] flex items-center justify-center text-4xl border-4 border-white group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40 group-hover:hidden"></span>
        <FaWhatsapp className="relative z-10" />
      </motion.a>
    </div>
  );
}

export default App;
