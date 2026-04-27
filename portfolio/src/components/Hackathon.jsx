import { useEffect, useRef, useState } from 'react';
import { Trophy, Users, Clock, Code2, Globe, ArrowRight } from 'lucide-react';

const Hackathon = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tags = ['HTML', 'CSS', 'JavaScript', 'Banco de Dados'];

  return (
    <section id="hackathon" ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding relative">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy size={18} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">Conquista</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-amber">1º Lugar</span>{' '}
            <span className="text-white">— Hackathon</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Programadores de Futuro
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="glass-card rounded-2xl p-6 lg:p-10 border-amber-500/10 hover:border-amber-500/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Samambaia City News</h3>
                    <p className="text-gray-400 text-sm">Plataforma web de notícias locais</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <ArrowRight size={14} className="text-amber-400" />
                      Problema
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Falta de um canal centralizado de notícias locais focado em bairros específicos, dificultando o acesso à informação relevante para a comunidade.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <ArrowRight size={14} className="text-amber-400" />
                      Solução
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Desenvolvimento de uma plataforma web de notícias voltada para o bairro de Samambaia, com foco em organização, acessibilidade e relevância local.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <ArrowRight size={14} className="text-amber-400" />
                      Meu papel
                    </h4>
                    <ul className="text-gray-400 text-sm leading-relaxed space-y-1 list-disc list-inside">
                      <li>Desenvolvimento completo do frontend (HTML, CSS e JavaScript)</li>
                      <li>Modelagem e implementação do banco de dados</li>
                      <li>Participação ativa no desenvolvimento da solução</li>
                      <li>Apresentação do pitch no palco representando a equipe</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="glass-card rounded-xl p-6 bg-amber-500/5 border-amber-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy size={22} className="text-amber-400" />
                    <h4 className="text-white font-semibold">Resultado</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Projeto <span className="text-amber-400 font-medium">vencedor da hackathon</span>, destacando-se pela clareza da proposta, execução técnica e impacto social local.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm mb-3">Tecnologias utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-md text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-xl p-4 text-center">
                    <Users size={18} className="text-gray-400 mx-auto mb-2" />
                    <div className="text-white font-bold text-lg">4</div>
                    <div className="text-gray-500 text-xs">Integrantes</div>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <Clock size={18} className="text-gray-400 mx-auto mb-2" />
                    <div className="text-white font-bold text-lg">Limitado</div>
                    <div className="text-gray-500 text-xs">Tempo de dev</div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <Code2 size={18} className="text-amber-400" />
                  <div>
                    <div className="text-white text-sm font-medium">Sem frameworks</div>
                    <div className="text-gray-500 text-xs">Solução pura com HTML, CSS e JS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;

