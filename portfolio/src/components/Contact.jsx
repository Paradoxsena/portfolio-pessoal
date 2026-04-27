import { useEffect, useRef, useState } from 'react';
import { Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Contact = () => {
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

  const contacts = [
    {
      icon: <Mail size={22} />,
      title: 'Email',
      value: 'ayrtonssbr@gmail.com',
      href: 'mailto:ayrtonssbr@gmail.com',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },
    {
      icon: <LinkedInIcon size={22} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/paradoxsena',
      href: 'https://www.linkedin.com/in/paradoxsena/',
      color: 'text-blue-500',
      bg: 'bg-blue-600/10',
    },
    {
      icon: <GitHubIcon size={22} />,
      title: 'GitHub',
      value: 'github.com/Paradoxsena',
      href: 'https://github.com/Paradoxsena',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-28 relative bg-dark-800/40">
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare size={18} className="text-accent-primary" />
            <span className="section-label">Contato</span>
          </div>
          <h2 className="section-title">
            Vamos <span className="gradient-text">conversar</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Aberto a oportunidades, colaborações e novos desafios.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="space-y-4">
            {contacts.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-5 p-5 rounded-xl glass-card hover:border-white/10 transition-all duration-300 group"
              >
                <div className={`p-3 rounded-lg ${item.bg} ${item.color}`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <p className="text-gray-400 text-sm truncate">{item.value}</p>
                </div>
                <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>

          <div className="mt-8 glass-card rounded-xl p-6 border-green-500/15 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
              </div>
              <span className="text-green-400 font-medium">Disponível para oportunidades</span>
            </div>
            <p className="text-gray-400 text-sm">
              Buscando posições como desenvolvedor full stack junior, estágio ou freelances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

