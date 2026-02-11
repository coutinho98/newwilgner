import { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'O Curso', href: '#conteudo' },
    { name: 'Investimento', href: '#pricing' },
    { name: 'Combo', href: '#combo', isNew: true },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center p-4 md:p-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full transition-all duration-500 border ${scrolled
            ? 'bg-zinc-950/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-transparent'
          }`}
      >
        {/* Logo Estilo Minimalista */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Zap size={18} className="text-black fill-current" />
          </div>
          <span className="text-white font-bold tracking-tight text-lg hidden sm:block">
            WILGNER <span className="text-amber-500">SILVA</span>
          </span>
        </div>

        {/* Links Centrais (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
            >
              {link.name}
              {link.isNew && (
                <span className="absolute -top-1 -right-4 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
              )}
              <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
            </a>
          ))}
        </div>

        {/* Botão de Ação Estilo SaaS */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-all active:scale-95">
            Garantir Vaga
            <ChevronRight size={16} />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-full"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu com Blur e Animação */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-zinc-950/95 border border-white/10 backdrop-blur-2xl p-8 rounded-3xl md:hidden z-40 shadow-2xl"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-semibold text-zinc-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              <button className="w-full bg-amber-500 text-black py-4 rounded-2xl font-bold">
                Começar Agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}