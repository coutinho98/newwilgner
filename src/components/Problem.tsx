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
        title: "Dominar a luta",
        text: "Domine a luta desde o primeiro contato com técnica superior.",
        icon: <Target className="w-5 h-5 text-white" />
    },
    {
        title: "Confiança total",
        text: "Derrube qualquer adversário com confiança e precisão técnica.",
        icon: <Zap className="w-5 h-5 text-white" />
    },
    {
        title: "Controle absoluto",
        text: "Controle onde a luta acontece – seja em pé ou no chão.",
        icon: <Settings2 className="w-5 h-5 text-white" />
    },
    {
        title: "Imposição de ritmo",
        text: "Imponha seu ritmo e sua estratégia desde o primeiro segundo.",
        icon: <Flame className="w-5 h-5 text-white" />
    },
    {
        title: "Respeito no tatame",
        text: "Ganhe respeito de todos na academia pelo seu nível de wrestling.",
        icon: <ShieldCheck className="w-5 h-5 text-white" />
    },
    {
        title: "Vantagem real",
        text: "Compita com vantagem real sobre 90% dos seus adversários.",
        icon: <Trophy className="w-5 h-5 text-white" />
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
            className="py-32 bg-black relative"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="mb-24">
                    <motion.h2
                        style={{ opacity }}
                        className="font-inter text-4xl md:text-5xl lg:text-6xl text-white mb-8 max-w-5xl font-bold tracking-tight leading-tight"
                    >
                        O <span className="bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">único método</span> no Brasil que transforma lutadores de Jiu-Jitsu em máquinas de derrubar.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#9c9c9c] text-sm font-bold uppercase tracking-[0.2em]"
                    >
                        Aqui você vai aprender
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
                            className="flex items-start gap-4" 
                        >
                            <div className="flex-shrink-0 pt-1 text-white">
                                {item.icon}
                            </div>

                            <div className="flex flex-col items-start text-left">
                                <h3 className="text-white font-semibold text-lg tracking-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[#9c9c9c] text-sm leading-relaxed max-w-xs">
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