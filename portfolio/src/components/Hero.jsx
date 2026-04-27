import { useEffect, useRef } from 'react';
import { ArrowDown, Code2, Terminal, Cpu, Trophy } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    const particleCount = 40;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/80 to-dark-900 z-10" />

      <div className="relative z-20 text-center section-padding max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-medium">
            <Code2 size={16} />
            Desenvolvedor Full Stack
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-6 mb-4 animate-fade-up-delay-1">
          <span className="text-white">Ayrton</span>{' '}
          <span className="gradient-text">Sena</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 mb-3 animate-fade-up-delay-1">
          React · Node.js · PostgreSQL · Python
        </p>

        <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
          Desenvolvo aplicações web completas com foco em performance, escalabilidade e resolução de problemas reais.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-8 animate-fade-up-delay-2">
          <Trophy size={16} />
          1º Lugar — Hackathon Programadores de Futuro
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-up-delay-3">
          <button
            onClick={() => scrollTo('#projects')}
            className="px-6 py-3 rounded-lg bg-accent-primary hover:bg-accent-primary/90 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20"
          >
            <Terminal size={18} className="inline mr-2" />
            Ver projetos
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium transition-all duration-300 hover:bg-white/5"
          >
            <Cpu size={18} className="inline mr-2" />
            Contato
          </button>
          <a
            href="https://github.com/Paradoxsena"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium transition-all duration-300 hover:bg-white/5 inline-flex items-center gap-2"
          >
            <GitHubIcon size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/paradoxsena/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium transition-all duration-300 hover:bg-white/5 inline-flex items-center gap-2"
          >
            <LinkedInIcon size={18} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button onClick={() => scrollTo('#about')} className="text-gray-500 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

