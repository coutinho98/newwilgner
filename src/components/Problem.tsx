import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export function ProblemAnimated() {
    const frustrations = [
        "Cansado de depender só de puxar pra guarda e nunca impor seu jogo?",
        "Sempre por baixo, sendo dominado pelos adversários mais experientes?",
        "Frustrado por não conseguir derrubar ninguém, mesmo treinando há meses?",
        "Envergonhado quando você simplesmente não consegue tirar o cara do pé?",
        "Perdendo lutas que poderia ganhar se soubesse controlar a luta em pé?"
    ];

    return (
        <section className="bg-black py-24 relative overflow-hidden">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 -left-20 w-96 h-96 bg-amber-500/20 blur-[120px] rounded-full"
            />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                        O tatame não <span className="text-amber-500">perdoa erros</span>
                    </h2>
                    <p className="text-gray-500 font-bold tracking-[0.2em] uppercase text-sm">Identifique-se com algum desses problemas?</p>
                </motion.div>

                <div className="grid gap-4">
                    {frustrations.map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="relative group cursor-default"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />

                            <div className="relative bg-zinc-900/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex items-center gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                                    <AlertCircle className="w-6 h-6 text-amber-500 group-hover:animate-pulse" />
                                </div>

                                <p className="text-lg lg:text-xl text-gray-400 group-hover:text-white transition-colors font-medium">
                                    {text}
                                </p>

                                <div className="absolute bottom-0 left-0 h-[2px] bg-amber-500 w-0 group-hover:w-full transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}