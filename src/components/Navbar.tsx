import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY > 50);
  });

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Flame className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-bold">DizMe</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-orange-500 transition-colors">About</Link>
            <Link to="/portfolio" className="hover:text-orange-500 transition-colors">Portfolio</Link>
            <Link to="/service" className="hover:text-orange-500 transition-colors">Service</Link>
            <Link to="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
            <a 
              href="WhatsApp Image 2024-11-02 at 15.35.25.jpeg" 
              className="px-4 py-2 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}