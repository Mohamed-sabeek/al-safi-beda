import { motion } from 'framer-motion';
import maidaBedaImg from '../assets/maida-beda.png';
import godhumaiBedaImg from '../assets/godhumai-beda.png';
import parottaImg from '../assets/parotta.png';
import eggMurtabakImg from '../assets/egg-murtabak.png';
import chickenMurtabakImg from '../assets/chicken-murtabak.png';
import muttonMurtabakImg from '../assets/mutton-murtabak.png';

const Gallery = () => {
  const images = [
    { src: maidaBedaImg, span: "row-span-2 col-span-2" },
    { src: godhumaiBedaImg, span: "row-span-1 col-span-1" },
    { src: parottaImg, span: "row-span-1 col-span-1" },
    { src: eggMurtabakImg, span: "row-span-1 col-span-2" },
    { src: chickenMurtabakImg, span: "row-span-2 col-span-1" },
    { src: muttonMurtabakImg, span: "row-span-1 col-span-1" }
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-dark mb-4"
          >
            Our Food <span className="text-primary">Gallery</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A visual feast of our homemade preparations, captured fresh from our kitchen.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[2rem] cursor-pointer group shadow-xl ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <div>
                  <p className="text-white font-extrabold text-xl mb-1">Authentic Taste</p>
                  <p className="text-secondary text-sm font-bold uppercase tracking-widest">Handmade</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
