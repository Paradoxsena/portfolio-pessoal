import { Heart, ArrowUp } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  const links = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Conquistas', href: '#hackathon' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto section-padding py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <button onClick={scrollToTop} className="text-2xl font-bold gradient-text mb-4 block">
              Ayrton.dev
            </button>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Desenvolvedor Full Stack construindo aplicações web completas e escaláveis.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/Paradoxsena" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 text-gray-400 hover:bg-accent-primary/10 hover:text-accent-primary transition-all">
                <GitHubIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/paradoxsena/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 text-gray-400 hover:bg-accent-primary/10 hover:text-accent-primary transition-all">
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navegação</h4>
            <ul className="space-y-2.5">
              {links.map((link, i) => (
                <li key={i}>
                  <button onClick={() => scrollTo(link.href)} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Stack</h4>
            <ul className="space-y-2.5">
              {['React', 'Node.js', 'Python', 'PostgreSQL', 'Git & GitHub'].map((tech, i) => (
                <li key={i} className="text-gray-400 text-sm">{tech}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contato</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:ayrtonssbr@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">ayrtonssbr@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/in/paradoxsena/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/Paradoxsena" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs flex items-center gap-1">
            © {year} Ayrton Sena. Feito com <Heart size={12} className="text-red-500 fill-red-500" /> e código.
          </p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-gray-500 hover:text-white text-xs transition-colors group">
            Voltar ao topo
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

