import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { Home } from './components/Home';
import { Mail } from 'lucide-react';
import { experiences, projects, skills, categories } from './data';


export function App() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <CustomCursor />
      <Navigation />
      <main className="relative">
        <Home />
        <Section id="about" title="About Me">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed mb-6 text-gray-300">
              I am an aspiring Software Development Engineer with a strong passion for both software development and data science. My journey has been shaped by my expertise in full-stack development, including proficiency in ReactJS, Node.js, and React Native, which enables me to build dynamic, high-performance web and mobile applications.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
              Currently, I am an Azure-certified cloud computing professional and am working towards becoming an AWS Cloud Practitioner to deepen my knowledge of cloud technologies. My programming skills are rooted in Python, where I specialize in solving complex problems using Data Structures and Algorithms (DSA).

              With a focus on continuous learning and problem-solving, my goal is to merge my technical skills with my cloud computing expertise to create innovative software solutions and drive impactful projects in both the software development and data science fields.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-gray-300">Aspiring Software Development Engineer with a passion for solving complex problems and building scalable applications.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-gray-300">Technical Skills: Python, C, C++, JavaScript, R</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-gray-300">Frameworks: ReactJS, Express.js, Node.js, React Native</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-gray-300">Operating Systems: Linux, Windows, macOS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-gray-300">Tools & Technologies: AWS, Docker, Kubernetes, Git, APIs, Microservices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-gray-300">Database Management: SQL, PostgreSQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-gray-300">Focused on cloud computing, web development, and data science</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-gray-300">Dedicated and versatile professional with a blend of technical expertise and excellent communication skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-400/50 transition-colors">
                <div className="flex flex-wrap gap-4 justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-violet-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="w-2 h-2 mt-2 bg-violet-400 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-400/50 transition-all">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-sm rounded-full bg-violet-400/10 text-violet-400 border border-violet-400/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map(({ id, label, icon: Icon }) => (
              <div key={id} className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-400/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-6 h-6 text-violet-400" />
                  <h3 className="text-xl font-semibold">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter((skill) => skill.category === id)
                    .map((skill) => (
                      <div key={skill.id} className="px-4 py-2 rounded-full bg-violet-400/10 text-violet-400 border border-violet-400/20 hover:bg-violet-400/20 transition-colors">
                        {skill.name}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-8 text-gray-300">
                I'm always interested in hearing about new projects and opportunities. 
                Feel free to get in touch with me using the form or through my contact information.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-400/10 border border-violet-400/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:contact@example.com" className="text-violet-400">
                      suryapothuri18@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </Section>
      </main>
    </div>
  );
}