import { useState } from 'react';
import { Shield, Swords, Target, Lock, Repeat } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Basic from '../assets/img/basic.webp';
import Entradas from '../assets/img/entradas.webp';
import Cinturadas from '../assets/img/cinturadas.webp';
import Defesas from '../assets/img/defesas.webp';
import Drills from '../assets/img/drills.webp';

export function CourseOverview() {
  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    {
      id: "01",
      title: "MOVIMENTOS BÁSICOS",
      desc: "Domine Single Leg e Double Leg. Cada técnica é quebrada em seus componentes essenciais para garantir execução perfeita no wrestling moderno.",
      icon: <Target size={22} />,
      image: Basic
    },
    {
      id: "02",
      title: "ENTRADAS E SETUPS",
      desc: "Transforme qualquer situação defensiva em chance de queda. Aprenda os setups que criam as janelas de oportunidade necessárias.",
      icon: <Swords size={22} />,
      image: Entradas
    },
    {
      id: "03",
      title: "CINTURADAS E CLINCH",
      desc: "Quem domina o clinch domina a luta. Técnicas que fazem adversários se sentirem presos em uma morsa impossível de escapar.",
      icon: <Lock size={22} />,
      image: Cinturadas
    },
    {
      id: "04",
      title: "DEFESAS SÓLIDAS",
      desc: "Use o cansaço do adversário a seu favor. Aprenda a conservar energia enquanto o oponente se esgota tentando te derrubar.",
      icon: <Shield size={22} />,
      image: Defesas
    },
    {
      id: "05",
      title: "MEMÓRIA MUSCULAR",
      desc: "Drills específicos que gravam os movimentos no seu corpo. A diferença entre saber fazer e fazer sem precisar pensar.",
      icon: <Repeat size={22} />,
      image: Drills
    }
  ];

  return (
    <section id="conteudo" className="font-inter bg-zinc-50 py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 md:mb-16 text-center lg:text-left">
          <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs block mb-4">
            Estrutura do Programa
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-zinc-900">
            O mapa para a <br className="hidden lg:block" />
            <span className="italic text-amber-500">dominação em pé</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 relative">

          <div className="lg:col-span-5 space-y-4">
            {modules.map((mod, index) => {
              const isActive = activeTab === index;

              return (
                <motion.div
                  key={mod.id}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ x: 5 }}
                  className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 border shadow-sm select-none
                    bg-white border-amber-500 shadow-[0_10px_30px_rgba(245,158,11,0.1)] 
                    lg:shadow-none lg:bg-white/50 lg:border-zinc-200 lg:hover:border-zinc-300 lg:hover:bg-white
                    ${isActive ? "lg:bg-white lg:border-amber-500 lg:shadow-[0_10px_30px_rgba(245,158,11,0.1)]" : ""}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm md:text-base font-black transition-colors duration-300 
                      text-amber-600 lg:text-zinc-400 ${isActive ? "lg:text-amber-500" : ""}`}>
                      {mod.id}
                    </span>

                    <div className="flex items-center gap-3">
                      <div className={`transition-colors duration-300 ${isActive ? "text-amber-500" : "text-zinc-400 group-hover:text-zinc-600"}`}>
                         {mod.icon}
                      </div>
                      <h3 className={`text-base md:text-lg font-black uppercase tracking-tight transition-colors duration-300 
                        text-zinc-900 lg:text-zinc-500 ${isActive ? "lg:text-zinc-900" : "lg:group-hover:text-zinc-700"}`}>
                        {mod.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 block lg:hidden relative aspect-[16/9] rounded-xl overflow-hidden border border-amber-500/30 shadow-md">
                    <img
                      src={mod.image}
                      alt={mod.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className={`text-sm md:text-base mt-4 leading-relaxed transition-colors duration-300 font-medium 
                    text-zinc-700 lg:text-zinc-400 ${isActive ? 'lg:text-zinc-700' : ''}`}>
                    {mod.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="hidden lg:block lg:col-span-7">
            <div className="sticky top-32">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border-4 border-white bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-zinc-200">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={modules[activeTab].image}
                    alt={modules[activeTab].title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="absolute -bottom-6 -right-6 text-[12rem] font-black text-zinc-100 -z-10 select-none">
                {modules[activeTab].id}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}