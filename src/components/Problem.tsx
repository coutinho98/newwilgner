import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
    Target,
    Zap,
    Settings2,
    Flame,
    ShieldCheck,
    Trophy
} from "lucide-react";

const items = [
    {
        title: "Pânico no Início da Luta",
        text: "Você entra em pânico quando o juiz autoriza a luta e seu adversário tem uma base de judoca agressiva.",
        icon: <Zap className="w-5 h-5 text-amber-500" />
    },
    {
        title: "Alvo Fácil nos Treinos",
        text: "Seus parceiros de treino já sabem que podem te atacar facilmente porque a sua defesa de quedas é inexistente.",
        icon: <Target className="w-5 h-5 text-amber-500" />
    },
    {
        title: "Trabalho Desperdiçado",
        text: "Você gasta meses treinando guarda, mas perde em campeonatos estúpidos porque tomou 2 pontos logo de cara.",
        icon: <Flame className="w-5 h-5 text-amber-500" />
    },
    {
        title: "Sempre Reagindo",
        text: "Você se sente refém do jogo do oponente, sempre esperando ele ditar onde e quando a luta vai pro chão.",
        icon: <Settings2 className="w-5 h-5 text-amber-500" />
    },
    {
        title: "Insegurança em Campeonatos",
        text: "O nervosismo bate mais forte porque você sabe que só tem aquele segundo perfeito para tentar puxar pra guarda.",
        icon: <ShieldCheck className="w-5 h-5 text-amber-500" />
    },
    {
        title: "A Dura Escolha",
        text: "Continuar sendo a 'mochila' da academia, ou aprender de vez a amassar no primeiro instante com Luta Olímpica.",
        icon: <Trophy className="w-5 h-5 text-amber-500" />
    }
];

export function ProblemAnimated() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.8", "start 0.3"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

    return (
        <section
            ref={sectionRef}
            id="conteudo"
            className="py-32 md:py-40 bg-black relative"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="mb-24">
                    <motion.h2
                        style={{ opacity }}
                        className="font-inter text-4xl md:text-5xl lg:text-5xl text-white mb-8 max-w-5xl font-bold tracking-tight leading-tight"
                    >
                        Sejamos honestos: Até quando você vai terminar os treinos <span className="text-red-500">frustrado</span> porque não sabe aplicar uma queda sequer?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#9c9c9c] text-sm font-bold uppercase tracking-[0.2em]"
                    >
                        A DURA VERDADE QUE NINGUÉM TE FALA NO TATAME:
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-4 -ml-4 rounded-xl transition-colors hover:bg-white/[0.02]"
                        >
                            <div className="flex-shrink-0 pt-1">
                                {item.icon}
                            </div>

                            <div className="flex flex-col items-start text-left">
                                <h3 className="text-white font-bold text-lg tracking-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="font-medium text-[#7a7a7a] text-sm leading-relaxed max-w-xs">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}