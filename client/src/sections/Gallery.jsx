import { motion } from 'framer-motion';
import maidaBedaImg from '../assets/maida-beda.webp';
import godhumaiBedaImg from '../assets/godhumai-beda.webp';
import parottaImg from '../assets/parotta.webp';
import eggMurtabakImg from '../assets/egg-murtabak.webp';
import chickenMurtabakImg from '../assets/chicken-murtabak.webp';
import muttonMurtabakImg from '../assets/mutton-murtabak.webp';

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl md:rounded-[2rem] shadow-md group ${img.span} will-change-transform`}
            >
              <img 
                src={img.src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width="400"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-8">
                <div>
                  <p className="text-white font-bold text-lg mb-1">Authentic Taste</p>
                  <p className="text-secondary text-xs font-bold uppercase tracking-widest">Handmade</p>
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
