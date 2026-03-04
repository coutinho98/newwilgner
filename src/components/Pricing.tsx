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
    <section id="pricing" className="py-24 bg-black relative overflow-hidden font-inter">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h3 className="text-3xl md:text-5xl text-white font-bold mb-6 max-w-3xl mx-auto leading-tight tracking-tighter">
          Pare de aceitar a guarda. <br />
          <span className="bg-gradient-to-r from-amber-200 to-yellow-600 bg-clip-text text-transparent italic">
            Domine o combate em pé.
          </span>
        </h3>
        <p className="text-zinc-400 mb-16 max-w-2xl mx-auto text-base md:text-lg">
          Garanta seu acesso à metodologia definitiva de Wrestling para Jiu-Jitsu. Aprenda as entradas, defesas e transições que vão te colocar no topo do pódio.
        </p>

        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group w-full max-w-md"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl opacity-10 group-hover:opacity-100 transition duration-500 blur" />

            <div className="relative bg-zinc-950 border border-white/5 rounded-2xl p-8 md:p-12 text-left">
              <div className="mb-8">
                <span className="text-amber-500 font-bold uppercase tracking-wider text-[10px] bg-amber-500/10 px-3 py-1.5 rounded-full">Acesso Vitalício</span>

                <div className="mt-6 flex flex-col">
                  <span className="text-zinc-500 text-lg line-through mb-1">De R$ 497,00</span>

                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-400 text-2xl">12x</span>
                    <span className="text-6xl font-black text-white tracking-tighter">20</span>
                    <span className="text-gray-400 text-lg">,37</span>
                  </div>
                  <p className="text-amber-500 mt-2 text-sm font-bold">ou R$ 197,00 à vista</p>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-amber-500/10 p-1 rounded-full flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <span className="text-zinc-200 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="w-full group/btn relative cursor-pointer bg-gradient-to-r from-amber-400 to-yellow-600 text-black py-4 rounded-xl font-black uppercase text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.02]">
                <span>Quero dominar o tatame hoje</span>
                <MoveUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>

              <div className="flex flex-col items-center gap-2 mt-6">
                <p className="text-zinc-500 text-[10px]">Garantia incondicional de 7 dias</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}