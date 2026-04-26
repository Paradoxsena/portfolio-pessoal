import { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Server,
  Database,
  GitBranch,
  Brain,
  Lightbulb,
  Puzzle,
  TrendingUp,
  Layers,
  Terminal,
  Cpu,
  Workflow,
} from 'lucide-react';

const Skills = () => {
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

  const technicalSkills = [
    {
      category: 'Frontend',
      icon: <Code2 size={20} />,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'Tailwind CSS', level: 80 },
      ],
    },
    {
      category: 'Backend',
      icon: <Server size={20} />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'APIs REST', level: 82 },
      ],
    },
    {
      category: 'Banco de Dados',
      icon: <Database size={20} />,
      skills: [
        { name: 'PostgreSQL', level: 75 },
        { name: 'Modelagem de Dados', level: 70 },
        { name: 'Queries SQL', level: 78 },
      ],
    },
    {
      category: 'Ferramentas',
      icon: <GitBranch size={20} />,
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Versionamento', level: 82 },
        { name: 'Scrum & Ágil', level: 75 },
        { name: 'Low-Code', level: 70 },
      ],
    },
  ];

  const cognitiveSkills = [
    {
      icon: <Brain size={24} />,
      title: 'Raciocínio Lógico',
      description: 'Capacidade analítica para resolver problemas complexos de forma estruturada.',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Aprendizado Autodidata',
      description: 'Técnica de Feynman para consolidar conhecimento de forma profunda e duradoura.',
    },
    {
      icon: <Puzzle size={24} />,
      title: 'Resolução de Problemas',
      description: 'Identificar falhas, ajustar rapidamente a abordagem e evoluir com feedback prático.',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Mentalidade de Crescimento',
      description: 'Foco em evolução contínua, autonomia e aprendizado sólido.',
    },
    {
      icon: <Layers size={24} />,
      title: 'Organização',
      description: 'Estruturação de conteúdos e processos bem definidos para máxima eficiência.',
    },
    {
      icon: <Workflow size={24} />,
      title: 'Adaptabilidade',
      description: 'Facilidade para aprender novas ferramentas e aplicá-las de forma prática.',
    },
  ];

  const technologies = [
    { name: 'React', icon: <Code2 size={16} /> },
    { name: 'Node.js', icon: <Server size={16} /> },
    { name: 'Python', icon: <Terminal size={16} /> },
    { name: 'Express', icon: <Server size={16} /> },
    { name: 'PostgreSQL', icon: <Database size={16} /> },
    { name: 'Git', icon: <GitBranch size={16} /> },
    { name: 'APIs', icon: <Cpu size={16} /> },
    { name: 'JavaScript', icon: <Code2 size={16} /> },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-32 relative"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Cpu size={20} className="text-accent-primary" />
            <span className="text-accent-primary text-sm font-medium uppercase tracking-wider">Habilidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tecnologias & <span className="gradient-text">Competências</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Domínio técnico combinado com habilidades cognitivas para entregar soluções eficientes e inovadoras.
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-accent-primary/10 hover:border-accent-primary/30 hover:text-accent-primary transition-all duration-300"
            >
              {tech.icon}
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technicalSkills.map((category, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 hover:border-accent-primary/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                  {category.icon}
                </div>
                <h3 className="text-white font-semibold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-accent-primary text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 200) + (i * 100) + 500}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cognitive Skills Section */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Habilidades <span className="gradient-text">Cognitivas</span>
            </h3>
            <p className="text-gray-400">
              Competências que impulsionam o desempenho técnico e profissional
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cognitiveSkills.map((skill, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:border-accent-secondary/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-secondary/10 text-accent-secondary group-hover:bg-accent-secondary/20 transition-colors">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{skill.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

