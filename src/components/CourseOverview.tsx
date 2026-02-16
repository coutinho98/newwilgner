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
            title: "MOVIMENTOS BÁSICOS",
            desc: "Este módulo te ensina as quedas mais eficazes do wrestling moderno com uma metodologia única: cada técnica é quebrada em seus componentes essenciais para garantir execução perfeita. Você dominará as duas quedas que resolvem 80% das situações - Single Leg e Double Leg.",
            icon: <Target size={24} />,
            image: Basic
        },
        {
            title: "ENTRADAS QUE TODO GRAPPLER DEVE SABER",
            desc: "Dominar quedas sem saber criar oportunidades é inútil. Este módulo ensina os setups e entradas que transformam qualquer situação defensiva em chance de queda garantida.",
            icon: <Swords size={24} />,
            image: Entradas
        },
        {
            title: "CINTURADAS E CLINCH",
            desc: "Quando a luta fica grudada, quem domina o clinch domina tudo. Você aprenderá as cinturadas e técnicas que fazem adversários se sentirem presos em uma morsa - impossíveis de escapar.",
            icon: <Lock size={24} />,
            image: Cinturadas
        },
        {
            title: "DEFESAS",
            desc: "Uma defesa sólida é sua arma secreta para vencer qualquer adversário. Aqui você aprende que é muito mais desgastante atacar do que defender - e como usar isso a seu favor. Enquanto seus oponentes se esgotam tentando te derrubar, você conserva energia e espera o momento perfeito para atacar.",
            icon: <Shield size={24} />,
            image: Defesas
        },
        {
            title: "DRILLS",
            desc: "Conhecer as técnicas é apenas o começo - dominar é sobre repetição inteligente. Este módulo te ensina os drills específicos que gravam os movimentos na sua memória muscular até se tornarem automáticos. É a diferença entre saber fazer e fazer sem pensar.",
            icon: <Repeat size={24} />,
            image: Drills
        }
    ];

    return (
        <div className="min-h-screen w-full bg-black relative">
            <div className="absolute inset-0 z-0" style={{ background: "repeating-linear-gradient(45deg, #000 0px, #050505 2px, #000 4px, #0a0a0a 6px)" }} />
            <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(45px) grayscale(20%)" }} />

            <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 md:py-24">
                <div className="max-w-3xl mb-12 md:mb-16">
                    <h2 className="font-inter text-[#9c9c9c] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                        Conteúdo do Curso
                    </h2>
                    <h3 className="font-inter text-3xl md:text-6xl text-white font-bold tracking-tight leading-tight">
                        O mapa para a <span className="bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">dominação</span> em pé
                    </h3>
                    <p className="font-inter text-zinc-400 mt-6 text-base md:text-lg leading-relaxed">
                        Uma estrutura completa dividida em módulos estratégicos, desenhados para levar você do zero à maestria nas quedas, independente do seu nível atual.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">

                    <div className="order-1 lg:order-2 relative lg:sticky lg:top-32 w-full flex justify-center lg:block">
                        <div className="
                                    relative overflow-hidden
                                    /* Mobile: Tamanho fixo menor e centralizado */
                                    w-[280px] h-[210px] 
                                    /* Desktop: Proporção quadrada original */
                                    lg:w-full lg:aspect-square lg:h-auto
                                    flex items-center justify-center
                                ">
                            {modules.map((mod, index) => (
                                <motion.img
                                    key={index}
                                    src={mod.image}
                                    alt={mod.title}
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: activeTab === index ? 1 : 0,
                                        scale: activeTab === index ? 1 : 1.05
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="order-2 lg:order-1 flex flex-col space-y-3 md:space-y-4">
                        {modules.map((mod, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`group cursor-pointer p-5 md:p-6 rounded-xl border transition-all duration-500 ${activeTab === index
                                    ? "bg-zinc-900/80 border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.05)]"
                                    : "bg-transparent border-white/5 hover:bg-white/5"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`transition-colors duration-500 ${activeTab === index ? "text-amber-500" : "text-zinc-500"}`}>
                                        {mod.icon}
                                    </span>
                                    <h4 className={`font-inter text-sm md:text-lg font-bold uppercase tracking-tight transition-colors ${activeTab === index ? "text-white" : "text-zinc-500"}`}>
                                        {mod.title}
                                    </h4>
                                </div>

                                <AnimatePresence>
                                    {activeTab === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="font-inter text-zinc-400 text-xs md:text-sm leading-relaxed mt-4 pt-4 border-t border-white/5">
                                                {mod.desc}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}