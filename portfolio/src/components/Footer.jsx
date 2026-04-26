import { Heart, Mail, ArrowUp } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <GitHubIcon size={20} />,
      href: 'https://github.com/Paradoxsena',
      label: 'GitHub',
    },
    {
      icon: <LinkedInIcon size={20} />,
      href: 'https://www.linkedin.com/in/paradoxsena/',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:ayrtonssbr@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <footer className="relative bg-dark-900 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto section-padding py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="text-2xl font-bold gradient-text mb-4 block">
              Ayrton.dev
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Desenvolvedor Full Stack Junior em constante evolução, 
              construindo soluções eficientes e aprendendo todos os dias.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-lg bg-white/5 text-gray-400 hover:bg-accent-primary/10 hover:text-accent-primary transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tecnologias</h4>
            <ul className="space-y-3">
              {['React.js', 'Node.js', 'Python', 'PostgreSQL', 'Git & GitHub', 'APIs REST'].map((tech, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ayrtonssbr@gmail.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  ayrtonssbr@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/paradoxsena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  linkedin.com/in/paradoxsena
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Paradoxsena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  github.com/Paradoxsena
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto section-padding py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} Ayrton Sena. Feito com{' '}
            <Heart size={14} className="text-red-500 fill-red-500" /> e muito código.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors duration-200 group"
          >
            Voltar ao topo
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

