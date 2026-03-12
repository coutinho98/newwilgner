import { motion } from "framer-motion";
import { useRef } from "react";
import {
    XCircle,
    AlertCircle,
    CheckCircle2,
    Minus
} from "lucide-react";

export function ProblemAnimated() {
    const sectionRef = useRef(null);

    return (
        <section
            ref={sectionRef}
            id="metodologia"
            className="py-24 md:py-32 bg-white relative font-inter"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header da Seção */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs block mb-4">
                        Supere seus limites
                    </span>
                    <h2 className="text-4xl md:text-6xl text-zinc-900 font-black tracking-tighter max-w-4xl mx-auto leading-[1.1]">
                        Sim, você <span className="text-amber-500 italic">PODE</span> dominar o Wrestling... <br className="hidden md:block" /> 
                        mesmo começando <span className="relative inline-block">
                            do zero.
                            <span className="absolute bottom-1 left-0 w-full h-[6px] bg-amber-500/20 -z-10"></span>
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Card 01: Dúvidas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group bg-white border border-zinc-100 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-zinc-200 transition-all duration-500"
                    >
                        <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <XCircle className="text-red-500 w-6 h-6" />
                        </div>
                        
                        <h3 className="text-2xl text-zinc-900 font-bold tracking-tight mb-6">
                            O que passa na sua cabeça
                        </h3>
                        
                        <ul className="space-y-5 mb-10">
                            {[
                                "Já tentei aprender antes e falhei",
                                "Minha academia não foca em quedas",
                                "Tenho receio de sofrer lesões",
                                "Será que isso funciona com kimono?",
                                "O investimento vale a pena agora?"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4 text-zinc-500 group/item">
                                    <Minus className="text-red-400 w-4 h-4 mt-1.5 flex-shrink-0" />
                                    <span className="text-base font-medium leading-snug group-hover/item:text-zinc-800 transition-colors">{text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto p-5 bg-zinc-50 rounded-2xl border border-zinc-100">
                            <p className="text-sm text-zinc-600 font-medium">
                                <span className="text-red-600 font-bold">Fique tranquilo.</span> Já treinei +3.000 alunos e todos sentiram o mesmo medo antes de começar.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 02: Consequências */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group bg-white border border-zinc-100 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-zinc-200 transition-all duration-500"
                    >
                        <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <AlertCircle className="text-orange-500 w-6 h-6" />
                        </div>
                        
                        <h3 className="text-2xl text-zinc-900 font-bold tracking-tight mb-6">
                            O preço de adiar
                        </h3>
                        
                        <ul className="space-y-5 mb-10">
                            {[
                                "Entregar 2 pontos de graça pro rival",
                                "Começar a luta sempre por baixo",
                                "Limitar seu jogo a apenas 50%",
                                "Ficar vulnerável contra passadores",
                                "Perder medalhas por falta de ajuste"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4 text-zinc-500 group/item">
                                    <Minus className="text-orange-400 w-4 h-4 mt-1.5 flex-shrink-0" />
                                    <span className="text-base font-medium leading-snug group-hover/item:text-zinc-800 transition-colors">{text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto p-5 bg-orange-50/50 rounded-2xl border border-orange-100">
                            <p className="text-sm text-zinc-600 font-medium">
                                <span className="text-orange-600 font-bold">A realidade:</span> Enquanto você adia, seus adversários estão estudando como te colocar para baixo.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 03: Solução (Destaque) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] pointer-events-none"></div>
                        
                        <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                            <CheckCircle2 className="text-white w-6 h-6" />
                        </div>
                        
                        <h3 className="text-2xl text-white font-bold tracking-tight mb-6">
                            A solução definitiva
                        </h3>
                        
                        <ul className="space-y-5 mb-10">
                            {[
                                "Aprenda de onde estiver, no seu ritmo",
                                "Método validado por +3.000 alunos",
                                "Módulos do absoluto zero ao avançado",
                                "Técnicas 100% adaptadas ao BJJ",
                                "Domine tanto com kimono quanto sem"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4 text-zinc-400 group/item">
                                    <CheckCircle2 className="text-amber-500 w-5 h-5 mt-1 flex-shrink-0" />
                                    <span className="text-base font-medium leading-snug group-hover/item:text-white transition-colors">{text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <p className="text-sm text-zinc-300 font-medium">
                                <span className="text-amber-500 font-bold">O Método:</span> Direto ao ponto, focado no que realmente funciona na hora da luta.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}