import { useEffect, useRef, useState } from 'react';
import { User, Target, Zap, BookOpen } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: <Target size={24} />,
      title: 'Foco em Resultados',
      description: 'Identificar falhas, corrigir rápido e evoluir com base em feedback prático.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Aprendizado Acelerado',
      description: 'Utilizo a técnica de Feynman para consolidar conhecimento de forma profunda.',
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Autodidata',
      description: 'Forte capacidade de raciocínio lógico e adaptação a novas tecnologias.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 relative"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <User size={20} className="text-accent-primary" />
            <span className="text-accent-primary text-sm font-medium uppercase tracking-wider">Sobre Mim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Quem é <span className="gradient-text">Ayrton Sena</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card rounded-2xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Desenvolvedor full stack em constante evolução, movido por curiosidade 
                intelectual e pela busca por domínio técnico. Com experiência prática em 
                tecnologias como <span className="text-accent-primary font-medium">Python</span>,{' '}
                <span className="text-accent-primary font-medium">Node.js</span>,{' '}
                <span className="text-accent-primary font-medium">Express</span> e{' '}
                <span className="text-accent-primary font-medium">React</span>, não me limito 
                ao básico: busco compreender profundamente o que construo, valorizando tanto 
                a lógica quanto a aplicação real.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Meu interesse vai além da programação, explorando áreas como inteligência 
                artificial, eletrônica e organização de conhecimento, sempre com a intenção 
                de criar soluções úteis e eficientes.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 lg:p-8 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Paralelamente ao mundo da tecnologia, cultivo disciplina e mentalidade de 
                alto desempenho por meio do <span className="text-accent-secondary font-medium">street workout</span>, 
                onde desenvolvo força, controle corporal e consistência. Essa mesma mentalidade 
                se reflete nos estudos e projetos, com foco em evolução contínua, autonomia e 
                aprendizado sólido.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Com uma visão ambiciosa e pé no chão, busco construir uma trajetória que una 
                competência técnica, pensamento estratégico e impacto prático. Seja em projetos, 
                estudos ou desafios pessoais, minha abordagem é direta: identificar falhas, 
                corrigir rápido e evoluir.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:border-accent-primary/30 transition-all duration-300 group"
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

            {/* Additional Info Card */}
            <div className="glass-card rounded-xl p-6 border-accent-secondary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Disponível para oportunidades</span>
              </div>
              <p className="text-gray-400 text-sm">
                Atualmente atuando como Jovem Aprendiz na Central IT e buscando 
                oportunidades para crescer como desenvolvedor full stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

