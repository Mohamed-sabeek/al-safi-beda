import { FaWhatsapp, FaInstagram, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src={logo} alt="Al Safi Beda Logo" className="h-20 w-auto object-contain drop-shadow-xl" />
            </div>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Bringing authentic homemade flavors to your table. Prepared with love, extreme hygiene, and tradition.
            </p>
            <div className="flex gap-4">
              {[FaInstagram, FaFacebook, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-secondary hover:text-primary transition-all duration-500 hover:-translate-y-2">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-extrabold mb-8 text-secondary uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white transition-all flex items-center gap-3 group">
                    <span className="w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                    <span className="font-medium">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Highlights */}
          <div>
            <h4 className="text-xl font-extrabold mb-8 text-secondary uppercase tracking-widest">Specialties</h4>
            <ul className="space-y-4">
              {['Mitha Beda', 'Gothuma Beda', 'Special Homemade Beda', 'Traditional Snacks'].map((item) => (
                <li key={item} className="text-white/60 font-medium flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary/40 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-extrabold mb-8 text-secondary uppercase tracking-widest">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-primary transition-all">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold mb-1">Call Us</p>
                  <p className="font-bold">96774 69736</p>
                  <p className="font-bold">81486 82249</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-primary transition-all">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold mb-1">Location</p>
                  <p className="font-bold">Coimbatore, Tamil Nadu, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-secondary">Al Safi Beda</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/40 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
