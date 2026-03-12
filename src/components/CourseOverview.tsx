import { useState } from 'react';
import { Shield, Swords, Target, Lock, Repeat } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Imagens
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
            desc: "Domine Single Leg e Double Leg. Cada técnica é quebrada em seus componentes essenciais para garantir execução perfeita no wrestling moderno.",
            icon: <Target size={22} />,
            image: Basic
        },
        {
            title: "ENTRADAS E SETUPS",
            desc: "Transforme qualquer situação defensiva em chance de queda. Aprenda os setups que criam as janelas de oportunidade necessárias.",
            icon: <Swords size={22} />,
            image: Entradas
        },
        {
            title: "CINTURADAS E CLINCH",
            desc: "Quem domina o clinch domina a luta. Técnicas que fazem adversários se sentirem presos em uma morsa impossível de escapar.",
            icon: <Lock size={22} />,
            image: Cinturadas
        },
        {
            title: "DEFESAS SÓLIDAS",
            desc: "Use o cansaço do adversário a seu favor. Aprenda a conservar energia enquanto o oponente se esgota tentando te derrubar.",
            icon: <Shield size={22} />,
            image: Defesas
        },
        {
            title: "MEMÓRIA MUSCULAR",
            desc: "Drills específicos que gravam os movimentos no seu corpo. A diferença entre saber fazer e fazer sem precisar pensar.",
            icon: <Repeat size={22} />,
            image: Drills
        }
    ];

    return (
        // Alterado para bg-white (branco puro)
        <section id="conteudo" className="font-inter bg-white py-20 md:py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Header da Seção */}
                <div className="max-w-3xl mb-16 md:mb-24 text-center md:text-left">
                    <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs block mb-4">
                        Conteúdo do Curso
                    </span>
                    <h2 className="text-4xl md:text-6xl text-zinc-900 font-black tracking-tighter leading-tight">
                        O mapa para a <span className="italic text-amber-500 font-medium">dominação</span> em pé
                    </h2>
                    <p className="text-zinc-500 mt-6 text-lg leading-relaxed font-medium">
                        Uma estrutura completa dividida em módulos estratégicos para levar você do zero à maestria.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* LADO ESQUERDO: LISTA DE ABAS */}
                    <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col space-y-4">
                        {modules.map((mod, index) => {
                            const isActive = activeTab === index;
                            return (
                                <motion.div
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    whileHover={{ x: 5 }}
                                    className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 border select-none ${
                                        isActive
                                            ? "bg-white border-amber-500 shadow-[0_15px_40px_rgba(245,158,11,0.12)]"
                                            : "bg-white border-zinc-100 hover:border-zinc-300"
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${isActive ? "bg-amber-500" : "bg-zinc-100 group-hover:bg-amber-50"}`}>
                                            <span className={`transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-amber-600"}`}>
                                                {mod.icon}
                                            </span>
                                        </div>
                                        <h4 className={`font-black text-sm md:text-base uppercase tracking-tight transition-colors duration-300 ${isActive ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-700"}`}>
                                            {mod.title}
                                        </h4>
                                    </div>

                                    <p className={`text-sm md:text-base mt-4 leading-relaxed transition-colors duration-300 font-medium ${isActive ? 'text-zinc-700' : 'text-zinc-400'}`}>
                                        {mod.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* LADO DIREITO: IMAGEM (DESKTOP STICKY) */}
                    <div className="order-1 lg:order-2 lg:col-span-7 relative lg:sticky lg:top-32 w-full">
                        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border-8 border-white bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] ring-1 ring-zinc-100">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeTab}
                                    src={modules[activeTab].image}
                                    alt={modules[activeTab].title}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                        </div>
                        
                        {/* Indicador de número atrás da imagem */}
                        <div className="absolute -bottom-10 -right-6 text-[15rem] font-black text-zinc-50 -z-10 select-none pointer-events-none">
                            {activeTab + 1}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}