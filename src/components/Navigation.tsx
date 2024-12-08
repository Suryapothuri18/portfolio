import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'experience', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'skills', label: 'Skills' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer"
            >
              Portfolio
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ to, label }) => (
              <motion.div
                key={to}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-violet-600"
                  className="cursor-pointer hover:text-violet-600 transition-colors"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="/cv.pdf"
              download
              className="px-4 py-2 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-violet-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href="/cv.pdf"
              download
              className="block px-3 py-2 rounded-md text-violet-600 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}