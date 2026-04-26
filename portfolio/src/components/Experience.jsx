import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Jovem Aprendiz',
      company: 'Central IT',
      location: 'Brasil',
      period: 'Atual',
      type: 'Presencial',
      description: 'Atuação em times de desenvolvimento e metodologias ágeis. Contato com processos de Scrum, acompanhamento de demandas e organização de fluxos de trabalho. Experiência com ferramentas low-code utilizadas internamente.',
      highlights: [
        'Participação em times de desenvolvimento',
        'Metodologias ágeis (Scrum)',
        'Acompanhamento de demandas',
        'Ferramentas low-code',
        'Adaptação a ambientes corporativos',
      ],
    },
    {
      title: 'Desenvolvedor Full Stack',
      company: 'Projetos Pessoais',
      location: 'Remoto',
      period: '2023 - Atual',
      type: 'Freelance',
      description: 'Desenvolvimento de aplicações web completas utilizando Python no back-end e React no front-end. Integração com APIs de IA, manipulação de arquivos e implementação de funcionalidades como upload, tradução automática e organização de respostas.',
      highlights: [
        'Desenvolvimento full stack',
        'Integração com APIs de IA',
        'Manipulação de arquivos (.txt, .docx)',
        'Upload e processamento de dados',
        'Automação e tradução automática',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 lg:py-32 relative bg-dark-800/50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto section-padding relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase size={20} className="text-accent-primary" />
            <span className="text-accent-primary text-sm font-medium uppercase tracking-wider">Experiência</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trajetória <span className="gradient-text">Profissional</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experiência prática no desenvolvimento de aplicações web e vivência em ambientes corporativos com metodologias ágeis.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 lg:p-8 hover:border-accent-primary/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon & Company Info */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                      <Briefcase size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-accent-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-gray-400 text-sm border border-white/10"
                        >
                          <ChevronRight size={12} className="text-accent-primary" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-12 glass-card rounded-2xl p-6 lg:p-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent-secondary/10 text-accent-secondary">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Ferramentas e Práticas</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Além da experiência profissional, possuo familiaridade com controle de versão 
                utilizando <span className="text-white">Git</span> e{' '}
                <span className="text-white">GitHub</span>, incluindo versionamento de projetos, 
                resolução de conflitos e organização de repositórios. Tenho conhecimentos em 
                bancos de dados, com foco em <span className="text-white">PostgreSQL</span>, e 
                interesse crescente em inteligência artificial, automação e desenvolvimento de 
                soluções eficientes.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'PostgreSQL', 'Scrum', 'APIs REST', 'Low-Code'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-sm border border-accent-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

