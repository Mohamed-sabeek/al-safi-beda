import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Gradient Effect - Optimized */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <img src={logo} alt="Al Safi Beda Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-lg" loading="lazy" />
            </div>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Bringing authentic homemade flavors to your table. Prepared with love, extreme hygiene, and tradition.
            </p>
            <div className="flex gap-4">
              {[FaInstagram, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/5 hover:bg-secondary hover:text-primary transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-secondary uppercase tracking-widest text-sm md:text-base">Navigation</h4>
            <ul className="space-y-3 md:space-y-4">
              {['Home', 'About', 'Menu', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full opacity-0 lg:group-hover:opacity-100 transition-opacity"></span>
                    <span className="font-medium text-sm md:text-base">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Highlights */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-secondary uppercase tracking-widest text-sm md:text-base">Specialties</h4>
            <ul className="space-y-3 md:space-y-4">
              {['Maitha Beda', 'Gothuma Beda', 'Special Homemade Beda', 'Traditional Snacks'].map((item) => (
                <li key={item} className="text-white/60 font-medium flex items-center gap-2 text-sm md:text-base">
                  <div className="w-1 h-1 bg-secondary/40 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-secondary uppercase tracking-widest text-sm md:text-base">Contact</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-bold mb-0.5">Call Us</p>
                  <p className="font-bold text-sm md:text-base">96774 69736</p>
                  <p className="font-bold text-sm md:text-base">96295 61173</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-bold mb-0.5">Location</p>
                  <p className="font-bold text-sm md:text-base">Coimbatore, Tamil Nadu, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs md:text-sm font-medium text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-secondary">Al Safi Beda</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-white/40 text-xs md:text-sm font-medium flex-wrap justify-center">
            <span>Website Support: Mohamed Sabeek</span>
            <span className="hidden sm:inline">|</span>
            <a href="tel:6383028607" className="hover:text-white transition-colors">63830 28607</a>
            <a href="https://wa.me/916383028607?text=Hi%20Mohamed,%20I%20need%20support%20with%20the%20website" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 hover:scale-125 transition-all ml-1">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
