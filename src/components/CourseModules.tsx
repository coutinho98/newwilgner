import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, PlayCircle } from 'lucide-react';

export function CourseCurriculum() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const curriculum = [
        {
            title: "Movimentos Básicos",
            lessons: [
                "Aprenda a Previnir Lesões e Maximizar seu Desempenho",
                "Double Leg três passos - Entrada básica",
                "Single Leg Cabeça por fora",
                "Single Leg cabeça no meio e por dentro - Evitando Guilhotina"
            ]
        },
        {
            title: "Truques Básicos",
            lessons: [
                "Double Leg saindo do Sprawl no Ombro",
                "Deslocamento Básico"
            ]
        },
        {
            title: "Defesas para Iniciantes",
            lessons: [
                "Defesa de Double Leg Crossface",
                "3 Defesas de Single"
            ]
        },
        {
            title: "Drills",
            lessons: [
                "Entrada Contínua - Melhore suas entradas",
                "Drill Troca de Nivel",
                "Drill Pegada Russa",
                "Drill Arm Drag",
                "Drill Seoi com faixa ou elástico",
                "Drill Elástico"
            ]
        },
        {
            title: "Entradas Intermediárias",
            lessons: [
                "As 4 Principais Entradas de Queda",
                "Entrada Arco e Flecha",
                "Ankle Pick",
                "Ankle Pick Reverso",
                "Entrada Lateral",
                "Entrada de Single Leg em Pé",
                "Double Leg em Pé"
            ]
        },
        {
            title: "Defesas Intermediárias",
            lessons: [
                "Defesas de Cinturada",
                "6 Defesass de Guilhotina - Básicas, Intermediárias e Avançadas"
            ]
        },
        {
            title: "Domínios no Headlock",
            lessons: [
                "Underhook: ataques, defesas e combinações",
                "Ataques no Pescoço"
            ]
        },
        {
            title: "Bodylock e Posições no Clinch",
            lessons: [
                "Ataques na Cinturada",
                "Clinch: Ataques e Combinações",
                "Pegada Russa: Ataques, Combinações e Defesas",
                "Single Double - Combinações"
            ]
        },
        {
            title: "Ataques no Single Leg",
            lessons: [
                "Ataques a partir do Single Leg"
            ]
        },
        {
            title: "Truques Intermediários",
            lessons: [
                "Posições Saindo do Sprawl no Ombro",
                "Saindo do Bloqueio do Braço"
            ]
        },
        {
            title: "Arm Drag e Variações",
            lessons: [
                "Tipos de Arm Drag",
                "Arm Drag: Combinações com outras posições"
            ]
        },
        {
            title: "Suplex e Lateral Drop",
            lessons: [
                "Suplex e Lataral Drop"
            ]
        },
        {
            title: "Guarda Umbrella",
            lessons: [
                "Guarda Umbrella / Guarda 'Guarda Chuva'"
            ]
        },
        {
            title: "Defesas Avançadas",
            lessons: [
                "Defesas Avançadas de Single Lag",
                "Defesas de Double Avançadas",
                "Granby Roll - 5 Variações",
                "Granby Roll Avançado"
            ]
        },
        {
            title: "Duck Under",
            lessons: [
                "Duck Under e Variações"
            ]
        },
        {
            title: "Outras Posições Avançadas",
            lessons: [
                "Noções de Defesa Pessoal e Situações de Rua",
                "Pegada Russa com Guilhotina",
                "Defesa de Guilhotina Avançada com Double Lag",
                "Quedas do Judô Usadas no Wrestling para o BJJ",
                "Defesa de Guilhotina Avançada",
                "2 Defesas de Kimura",
                "Defesa de Granby Roll",
                "Sasae da Esgrima",
                "Victor Roll com Finalizações",
                "Russian Tie Snap",
                "Defesa de Bodylock com Estrela",
                "Kataguruma/Headlock Fireman/ Bombeiro de Cabeça"
            ]
        }
    ];

    return (
        <section className="bg-black py-24 relative overflow-hidden font-inter">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">Grade de Aulas</h2>
                    <h3 className="text-4xl md:text-5xl text-white font-bold tracking-tight">Conteúdo <span className="italic bg-gradient-to-r from-amber-200 to-yellow-600 bg-clip-text text-transparent">Detalhado</span></h3>
                </div>

                <div className="space-y-3">
                    {curriculum.map((item, index) => (
                        <div 
                            key={index} 
                            className="border border-white/5 rounded-xl overflow-hidden bg-zinc-950/50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/5"
                            >
                                <span className="text-white font-bold md:text-lg tracking-tight uppercase">
                                    {item.title}
                                </span>
                                <ChevronDown 
                                    className={`text-amber-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                                    size={20} 
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-5 pt-0 flex flex-col gap-3 border-t border-white/5 mt-2">
                                            {item.lessons.map((lesson, lIndex) => (
                                                <div key={lIndex} className="flex items-center gap-3 text-zinc-400 group">
                                                    <PlayCircle size={16} className="text-amber-500/50 group-hover:text-amber-500 transition-colors" />
                                                    <span className="text-sm md:text-base">{lesson}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}