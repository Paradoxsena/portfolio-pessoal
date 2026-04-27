import { useEffect, useRef, useState } from 'react';
import { Code2, Server, Database, GitBranch, Cpu } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: 'Frontend',
      icon: <Code2 size={20} />,
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS'],
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/15',
    },
    {
      title: 'Backend',
      icon: <Server size={20} />,
      skills: ['Node.js', 'Express', 'Python', 'APIs REST', 'Autenticação JWT'],
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/15',
    },
    {
      title: 'Banco de Dados',
      icon: <Database size={20} />,
      skills: ['PostgreSQL', 'Modelagem de Dados', 'Queries SQL', 'Relacionamentos'],
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/15',
    },
    {
      title: 'Outros',
      icon: <GitBranch size={20} />,
      skills: ['Git & GitHub', 'Scrum / Agile', 'Low-Code', 'Integração de APIs', 'Deploy'],
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/15',
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 lg:py-28 relative bg-dark-800/40">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Cpu size={18} className="text-accent-primary" />
            <span className="section-label">Habilidades</span>
          </div>
          <h2 className="section-title">
            Stack <span className="gradient-text">Técnico</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Tecnologias que uso no dia a dia para construir aplicações completas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 hover:border-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${(index + 1) * 120}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-lg ${cat.bg} ${cat.color}`}>
                  {cat.icon}
                </div>
                <h3 className="text-white font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium ${cat.bg} ${cat.color} border ${cat.border}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

