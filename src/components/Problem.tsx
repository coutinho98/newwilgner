import { motion } from "framer-motion";
import { useRef } from "react";
import {
    XCircle,
    AlertCircle,
    CheckCircle2
} from "lucide-react";

export function ProblemAnimated() {
    const sectionRef = useRef(null);

    return (
        <section
            ref={sectionRef}
            id="conteudo"
            className="py-32 md:py-40 bg-black relative"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="pt-10">


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl text-white font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                            Sim, você <span className="text-amber-500">PODE</span> dominar o Wrestling no BJJ... <br className="hidden md:block" /> mesmo começando <span className="text-white border-b-2 border-amber-500 pb-1">do zero.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Dúvidas */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col hover:bg-white/[0.04] transition-colors duration-300"
                        >
                            <h3 className="text-white font-semibold mb-6 flex items-center gap-3">
                                <XCircle className="text-red-500 w-6 h-6" /> <span className="text-lg">O que passa na sua cabeça:</span>
                            </h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Eu já tentei aprender antes e não consegui",
                                    "Minha academia não ensina quedas direito",
                                    "Tenho medo de me machucar nas quedas",
                                    "Será que funciona com o kimono?",
                                    "Não sei se vai valer a pena o investimento"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                        <span className="text-red-500/50 mt-0.5">✕</span>
                                        <span className="leading-relaxed">{text}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 text-sm text-zinc-300 bg-white/5 p-5 rounded-xl border border-white/5">
                                <span className="text-amber-500 font-bold block mb-1">Relaxa.</span> Eu já treinei mais de 3.000 alunos nos últimos 10 anos, e TODOS eles tiveram essas mesmas dúvidas.
                            </div>
                        </motion.div>

                        {/* Consequências */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col hover:bg-white/[0.04] transition-colors duration-300"
                        >
                            <h3 className="text-white font-semibold mb-6 flex items-center gap-3">
                                <AlertCircle className="text-orange-500 w-6 h-6" /> <span className="text-lg">O preço de adiar:</span>
                            </h3>
                            <p className="text-sm text-zinc-400 mb-6 font-medium">Entrar no tatame sem dominar as quedas significa:</p>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Entregar 2 pontos de graça pro adversário",
                                    "Começar a luta sempre em desvantagem",
                                    "Limitar seu jogo a apenas 50% do potencial",
                                    "Ficar vulnerável contra lutadores completos",
                                    "Perder medalhas que poderiam ser SUAS"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                        <span className="text-orange-500 mt-0.5">•</span>
                                        <span className="leading-relaxed">{text}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 text-sm text-zinc-300 bg-orange-500/10 p-5 rounded-xl border border-orange-500/20">
                                <span className="text-orange-500 font-bold block mb-1">A verdade dolorosa:</span> Enquanto você adia, seus adversários evoluem. E a cada campeonato, a diferença técnica aumenta.
                            </div>
                        </motion.div>

                        {/* Solução */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-8 flex flex-col relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 blur-[60px] pointer-events-none"></div>

                            <h3 className="text-white font-semibold mb-6 flex items-center gap-3 relative z-10">
                                <CheckCircle2 className="text-amber-500 w-6 h-6" /> <span className="text-lg">A solução definitiva:</span>
                            </h3>
                            <p className="text-sm text-zinc-400 mb-6 italic relative z-10">"Mas eu não tenho tempo pra treinar Wrestling em outra academia..."</p>

                            <ul className="space-y-4 flex-1 relative z-10">
                                {[
                                    "Assista de qualquer lugar, no seu próprio ritmo",
                                    "Metodologia testada e aprovada por 3.000+ alunos",
                                    "Do básico ao avançado em módulos progressivos",
                                    "Técnicas 100% adaptadas PARA O JIU-JITSU",
                                    "Funciona com maestria tanto no Gi quanto No-Gi"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                        <CheckCircle2 className="text-amber-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span className="leading-relaxed">{text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 text-sm text-zinc-200 bg-amber-500/20 backdrop-blur-sm p-5 rounded-xl border border-amber-500/30 relative z-10">
                                <span className="text-amber-500 font-bold block mb-1">Exato.</span> Por isso eu criei um método 100% online, direto ao ponto e sem enrolação.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div >
        </section >
    );
}