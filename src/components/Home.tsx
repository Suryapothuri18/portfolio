import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-scroll';

export function Home() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-violet-600 text-2xl mb-4">Hello, I'm</h2>
            <h1 className="text-6xl font-bold mb-4">Surya Pothuri</h1>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-white-600">A</span>
              <span className="text-violet-600 font-medium">Software Development Engineer</span>
              <span className="text--600">From</span>
              <span className="text-violet-600 font-medium">India</span>
            </div>
            <p className="text-white-600 text-lg leading-relaxed">
            I am an aspiring Software Development Engineer with a passion for Data Science and full-stack development. With expertise in ReactJS, Node.js, and React Native, I build dynamic web and mobile applications. I am Azure-certified and currently working towards becoming an AWS Cloud Practitioner. A strong Python programmer, I excel at problem-solving and data structures & algorithms (DSA). My goal is to combine my technical skills and cloud computing knowledge to innovate and solve real-world challenges in software development and data science.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block bg-violet-600 text-white px-8 py-3 rounded-full hover:bg-violet-700 transition-colors cursor-pointer"
            onClick={() => window.open('https://www.linkedin.com/in/surya-pothuri-6b8578240/', '_blank')}
            >
            Get in Touch
            </Link>

            </motion.div>
              <div className="flex space-x-6 pt-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
              <motion.a
              key={index}
                whileHover={{ y: -3 }}
              href={
              index === 0
              ? "https://www.facebook.com/your-profile-link" // Facebook link
                 : index === 1
             ? "https://x.com/suryapothuri18" // Twitter link
          : index === 2
          ? "https://www.linkedin.com/in/surya-pothuri-6b8578240/" // LinkedIn link (replace if needed)
          : "https://www.instagram.com/suryapothuri18/?next=%2F" // Instagram link
      }
      className="text-gray-600 hover:text-violet-600 transition-colors"
      target="_blank" // Open link in a new tab
      rel="noopener noreferrer" // Security measure
    >
      <Icon size={24} />
    </motion.a>
  ))}
</div>
        </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="WhatsApp Image 2024-11-02 at 15.35.25.jpeg"
                alt="Profile"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating skill icons */}
            {['react', 'nodejs', 'typescript'].map((tech, index) => (
              <motion.img
                key={tech}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                src={`https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${tech}.svg`}
                alt={tech}
                className={`absolute w-12 h-12 bg-white p-2 rounded-xl shadow-lg ${
                  index === 0
                    ? 'top-8 right-8'
                    : index === 1
                    ? 'bottom-8 left-8'
                    : 'bottom-32 right-12'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}