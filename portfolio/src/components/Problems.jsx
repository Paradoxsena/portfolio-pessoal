import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Layers, Zap, Puzzle, Gauge } from 'lucide-react';

const Problems = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      icon: <Layers size={22} />,
      title: 'Desenvolvimento de APIs escaláveis',
      description: 'Construo APIs REST bem estruturadas com Node.js e Express, prontas para crescer junto com o produto.',
    },
    {
      icon: <Zap size={22} />,
      title: 'Criação de interfaces responsivas',
      description: 'Interfaces que funcionam em qualquer dispositivo, com foco em usabilidade e experiência do usuário.',
    },
    {
      icon: <Puzzle size={22} />,
      title: 'Integração entre frontend e backend',
      description: 'Conecto o front-end React ao back-end de forma eficiente, com autenticação, estado e tratamento de erros.',
    },
    {
      icon: <Gauge size={22} />,
      title: 'Otimização de performance',
      description: 'Identifico gargalos e aplico melhorias para tornar a aplicação mais rápida e leve.',
    },
  ];

  return (
    <section id="problems" ref={sectionRef} className="py-20 lg:py-28 relative bg-dark-800/40">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle2 size={18} className="text-accent-primary" />
            <span className="section-label">Valor</span>
          </div>
          <h2 className="section-title">
            Problemas que eu <span className="gradient-text">resolvo</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 lg:p-8 hover:border-accent-primary/15 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${(index + 1) * 120}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;

