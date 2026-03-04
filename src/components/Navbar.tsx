import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
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
    { name: 'Visão Geral', href: '#conteudo' },
    { name: 'Preço', href: '#pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full font-inter z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 w-full flex items-center justify-between">

        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <Zap size={18} className="text-black fill-current" />
          </div>
          <span className="text-white text-xl font-light tracking-tight group-hover:text-amber-500 transition-colors">
            Wilgner<span className="font-medium">Silva</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-yellow-100 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#pricing"
            className="text-sm font-bold text-white hover:text-yellow-100 transition-colors ml-4"
          >
            Garantir Vaga
          </a>
          <a
            href="#"
            className="text-sm font-bold text-white hover:text-yellow-100 transition-colors"
          >
            Acessar
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col py-8 px-6 gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-zinc-400 hover:text-amber-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10 mx-auto w-12" />
              <div className="flex flex-col gap-4">
                <a
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-bold text-white"
                >
                  Garantir Vaga
                </a>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-bold text-white"
                >
                  Acessar
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}