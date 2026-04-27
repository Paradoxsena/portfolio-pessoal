import { useEffect, useRef, useState } from 'react';
import { User, Target, Zap, BookOpen } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: <Target size={22} />,
      title: 'Resolução de Problemas',
      description: 'Analiso o problema, escolho a stack adequada, implemento, testo e itero até entregar resultado.',
    },
    {
      icon: <Zap size={22} />,
      title: 'Aprendizado Acelerado',
      description: 'Domino novas tecnologias rápido pela prática. Leio código, entendo a lógica e aplico.',
    },
    {
      icon: <BookOpen size={22} />,
      title: 'Código Limpo',
      description: 'Escrevo código organizado, documentado e fácil de manter. Priorizo legibilidade.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <User size={18} className="text-accent-primary" />
            <span className="section-label">Sobre Mim</span>
          </div>
          <h2 className="section-title">
            O que eu <span className="gradient-text">faço</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className={`space-y-5 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                Desenvolvo aplicações web completas, do front-end ao back-end. No front, uso <span className="text-white font-medium">React</span> para construir interfaces responsivas e interativas. No back, trabalho com <span className="text-white font-medium">Node.js</span> e <span className="text-white font-medium">Python</span> para criar APIs robustas e processar dados.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Tenho experiência integrando APIs de inteligência artificial, manipulando arquivos (.txt, .docx), implementando upload, tradução automática e organização de respostas. Uso <span className="text-white font-medium">PostgreSQL</span> para persistência de dados e <span className="text-white font-medium">Git/GitHub</span> para versionamento e colaboração.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                Minha abordagem é prática: entendo o problema, defino a solução mais eficiente, construo e valido. Não decoro — compreendo o funcionamento por dentro, o que me permite adaptar e resolver bugs com agilidade.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Atualmente atuo como Jovem Aprendiz na <span className="text-white font-medium">Central IT</span>, onde participo de times de desenvolvimento com <span className="text-white font-medium">Scrum</span>, acompanhamento de demandas e ferramentas low-code.
              </p>
            </div>
          </div>

          <div className={`space-y-5 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {highlights.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover:border-accent-primary/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="glass-card rounded-xl p-6 border-green-500/15">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                </div>
                <span className="text-green-400 text-sm font-medium">Disponível para oportunidades</span>
              </div>
              <p className="text-gray-400 text-sm">
                Buscando posições como desenvolvedor full stack junior, estágio ou freelances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

