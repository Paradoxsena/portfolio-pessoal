import { useEffect, useRef, useState } from 'react';
import { ExternalLink, FileText, Bell, Brain, Code2, ArrowRight } from 'lucide-react';
import { GitHubIcon } from './Icons';

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Sistema de Sumarização de Textos',
      problem: 'Processar grandes volumes de texto manualmente é lento e ineficiente. Não havia uma ferramenta simples para resumir arquivos .txt e .docx com inteligência artificial.',
      solution: 'Sistema web que recebe upload de arquivos, processa o conteúdo via APIs de IA e entrega resumos claros, com opção de tradução automática e download do resultado.',
      result: 'Redução drástica no tempo de leitura. Interface interativa com feedback visual e suporte a múltiplos formatos de arquivo.',
      icon: <FileText size={26} />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/15',
      technologies: ['Python', 'React', 'APIs de IA', 'Manipulação de Arquivos'],
      github: 'https://github.com/Paradoxsena/text-summarizer-ai',
      demo: null,
    },
    {
      title: 'Sistema de Notificações em Tempo Real',
      problem: 'Aplicações com múltiplos usuários precisam de um canal centralizado para envio, recebimento e gerenciamento de notificações, sem recarregar a página.',
      solution: 'Aplicação web com controle de estado robusto, permitindo notificações em tempo real entre múltiplos usuários, com gerenciamento completo de leitura e organização.',
      result: 'Fluxo de comunicação unificado. Resolução de bugs críticos de sincronização e melhoria contínua da lógica da aplicação.',
      icon: <Bell size={26} />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/15',
      technologies: ['React', 'Node.js', 'Express', 'WebSocket'],
      github: 'https://github.com/Paradoxsena/realtime-notification-system',
      demo: null,
    },
    {
      title: 'Automações e Testes de APIs',
      problem: 'Processos manuais repetitivos consomem tempo e são propensos a erros. Testar APIs sem automação dificulta a validação contínua.',
      solution: 'Scripts de automação em Python e Node.js para testar endpoints, processar dados e experimentar integrações com inteligência artificial.',
      result: 'Validação automatizada de APIs. Aprendizado profundo do funcionamento interno das tecnologias através da prática.',
      icon: <Brain size={26} />,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/15',
      technologies: ['Python', 'Node.js', 'APIs REST', 'Automação'],
      github: 'https://github.com/Paradoxsena',
      demo: null,
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 size={18} className="text-accent-primary" />
            <span className="section-label">Projetos</span>
          </div>
          <h2 className="section-title">
            Projetos <span className="gradient-text">Reais</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Cada projeto nasceu de um problema real e foi construído para resolver.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                  <div className="flex-shrink-0">
                    <div className={`p-4 rounded-xl ${project.bgColor} ${project.color}`}>
                      {project.icon}
                    </div>
                  </div>

                  <div className="flex-1 space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm border border-white/10 transition-all"
                        >
                          <GitHubIcon size={16} />
                          Ver Projeto
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm border border-white/10 transition-all"
                          >
                            <ExternalLink size={14} />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-5">
                      <div>
                        <h4 className="text-white font-medium text-sm mb-1.5 flex items-center gap-1.5">
                          <ArrowRight size={12} className={project.color} />
                          Problema
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm mb-1.5 flex items-center gap-1.5">
                          <ArrowRight size={12} className={project.color} />
                          Solução
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm mb-1.5 flex items-center gap-1.5">
                          <ArrowRight size={12} className={project.color} />
                          Resultado
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{project.result}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={`px-2.5 py-1 rounded-md text-xs font-medium ${project.bgColor} ${project.color} border ${project.borderColor}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-14 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a
            href="https://github.com/Paradoxsena"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium transition-all duration-300"
          >
            <GitHubIcon size={18} />
            Ver mais no GitHub
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

