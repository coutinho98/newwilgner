import { Check, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Pricing() {
  const benefits = [
    "Domínio total de quedas e controle",
    "Módulos do básico ao avançado",
    "Drills de repetição específicos",
    "Suporte para dúvidas técnicas",
    "Certificado de conclusão de curso"
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden font-inter">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h3 className="text-3xl md:text-5xl text-zinc-900 font-bold mb-6 max-w-3xl mx-auto leading-tight tracking-tighter ">
          Pare de aceitar a guarda. <br />
          <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent italic font-medium">
            Domine o combate em pé.
          </span>
        </h3>
        <p className="text-zinc-600 mb-16 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
          Garanta seu acesso à metodologia definitiva de Wrestling para Jiu-Jitsu. Aprenda as entradas, defesas e transições que vão te colocar no topo do pódio.
        </p>

        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group w-full max-w-md"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-[2.5rem] opacity-10 group-hover:opacity-100 transition duration-500 blur" />

            <div className="relative bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-12 text-left shadow-2xl">
              <div className="mb-8">
                <span className="text-amber-600 font-bold  tracking-widest text-[10px] bg-amber-500/10 px-4 py-2 rounded-full inline-block mb-8">
                    Acesso Vitalício
                </span>

                <div className="mt-6 flex flex-col">
                  <span className="text-zinc-400 text-xl font-bold line-through mb-1">De R$ 497,00</span>

                  <div className="flex items-baseline gap-1">
                    <span className="text-zinc-500 text-3xl font-bold tracking-tighter">12x</span>
                    <span className="text-[5.5rem] md:text-[6.5rem] leading-none font-black text-zinc-900 tracking-tighter">20</span>
                    <span className="text-zinc-500 text-2xl md:text-3xl font-bold">,37</span>
                  </div>
                  <p className="text-amber-600 mt-4 text-xl md:text-2xl font-black tracking-tight ">ou R$ 197 à vista</p>
                </div>
              </div>

              <div className="space-y-4 mb-10 text-left">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 group/item">
                    <div className="bg-amber-500/10 p-1 rounded-full flex-shrink-0 group-hover/item:bg-amber-500 transition-colors duration-300">
                      <Check className="w-4 h-4 text-amber-600 group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-zinc-700 text-sm md:text-base font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://pay.hotmart.com/..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group/btn relative overflow-hidden cursor-pointer bg-gradient-to-r from-amber-400 to-yellow-600 text-black py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_50px_rgba(245,158,11,0.5)] hover:-translate-y-1 hover:scale-[1.02]"
              >
                <span>Quero dominar o tatame hoje</span>
                <MoveUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex flex-col items-center gap-2 mt-8">
                <div className="flex items-center gap-2 opacity-50">
                    <div className="h-[1px] w-8 bg-zinc-300" />
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
                        Ambiente Seguro Hotmart
                    </p>
                    <div className="h-[1px] w-8 bg-zinc-300" />
                </div>
                <p className="text-zinc-400 text-[9px] font-medium text-center uppercase tracking-wider">
                    Processado pela plataforma Hotmart • Satisfação garantida
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <p className="text-zinc-400 text-sm font-medium italic mt-8">
          *Acesso vitalício ao curso e todas as futuras atualizações.
        </p>

      </div>
    </section>
  );
}