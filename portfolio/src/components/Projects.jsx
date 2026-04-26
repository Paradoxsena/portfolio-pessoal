import { useEffect, useRef, useState } from 'react';
import { ExternalLink, FileText, Bell, Brain, Code2, Sparkles } from 'lucide-react';
import { GitHubIcon } from './Icons';

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Sistema de Sumarização de Textos',
      description: 'Sistema web completo para upload de arquivos (.txt e .docx), processamento com APIs de inteligência artificial para gerar resumos claros e objetivos. Inclui tradução automática, interface interativa com feedback visual e opções para download do resultado.',
      icon: <FileText size={28} />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/20',
      technologies: ['Python', 'React', 'APIs de IA', 'Manipulação de Arquivos', 'JavaScript'],
      features: [
        'Upload de arquivos .txt e .docx',
        'Processamento com APIs de IA',
        'Geração de resumos automáticos',
        'Tradução automática',
        'Interface com feedback visual',
        'Download do resultado',
      ],
      github: 'https://github.com/Paradoxsena',
      demo: null,
    },
    {
      title: 'Sistema de Notificações em Tempo Real',
      description: 'Aplicação web voltada para lógica de interação e organização de informações, com envio, recebimento e gerenciamento de notificações em tempo real para múltiplos usuários.',
      icon: <Bell size={28} />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400',
      borderColor: 'border-purple-500/20',
      technologies: ['React', 'Node.js', 'Express', 'WebSocket', 'JavaScript'],
      features: [
        'Envio e recebimento de notificações',
        'Gerenciamento em tempo real',
        'Múltiplos usuários simultâneos',
        'Controle de estado complexo',
        'Resolução de bugs e melhorias',
      ],
      github: 'https://github.com/Paradoxsena',
      demo: null,
    },
    {
      title: 'Automações e Testes de APIs',
      description: 'Projetos de aprendizado contínuo explorando automações, testes de APIs e experimentações com inteligência artificial, focados em entender profundamente o funcionamento das tecnologias utilizadas.',
      icon: <Brain size={28} />,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/20',
      technologies: ['Python', 'Node.js', 'APIs REST', 'Automação', 'IA'],
      features: [
        'Automação de processos',
        'Testes de APIs',
        'Experimentação com IA',
        'Aprendizado prático contínuo',
        'Documentação de conhecimento',
      ],
      github: 'https://github.com/Paradoxsena',
      demo: null,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 lg:py-32 relative bg-dark-800/50"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 size={20} className="text-accent-primary" />
            <span className="text-accent-primary text-sm font-medium uppercase tracking-wider">Projetos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Projetos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desenvolvimento de aplicações reais com foco em resolução de problemas e aprendizado prático.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group glass-card rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Project Header */}
              <div className={`p-6 ${project.bgColor} border-b ${project.borderColor}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${project.bgColor} ${project.textColor}`}>
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                      title="Ver no GitHub"
                    >
                      <GitHubIcon size={20} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="Ver Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="px-6 py-4 border-b border-white/5">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded-md text-xs font-medium ${project.bgColor} ${project.textColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                  <Sparkles size={14} className={project.textColor} />
                  Funcionalidades
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GitHubIcon size={28} className="text-accent-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Quer ver mais projetos?
            </h3>
            <p className="text-gray-400 mb-6">
              Acesse meu GitHub para explorar todos os projetos, experimentos e contribuições.
            </p>
            <a
              href="https://github.com/Paradoxsena"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium transition-all duration-300"
            >
              <GitHubIcon size={18} />
              Visitar GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

