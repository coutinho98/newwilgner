import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { useRef } from "react";
import bannerImg from "../assets/img/banner.jpeg"; 

export function Hero() {
    const containerRef = useRef(null);

    return (
        <section
            ref={containerRef}
            id="home"
            // Removido o min-h-screen e o pb-20 para encurtar a seção
            className="font-inter relative bg-black flex flex-col items-center overflow-x-hidden no-scrollbar pb-10"
        >
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 50% -20%, rgba(251, 191, 36, 0.15), transparent 70%)",
                }}
            />

            <div className="relative w-full max-w-xl px-6 z-20 mt-24">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group w-full mx-auto shadow-2xl"
                >
                    <div className="relative bg-zinc-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <img 
                            src={bannerImg} 
                            alt="Banner Além do Jiu-Jitsu"
                            className="w-full h-auto block object-contain" 
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                // Reduzi o pb-10 para pb-2 para aproximar o botão do fim da seção
                className="relative z-10 w-full pt-12 pb-2 flex flex-col items-center text-center px-4"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter mb-6 leading-[1] max-w-4xl">
                    <span className="bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
                        Torne-se
                    </span> o lutador que sempre coloca para baixo.
                </h1>

                <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl font-medium">
                    Descubra como dominar as quedas e finalmente impor seu jogo de jiu-jitsu com o Campeão Brasileiro de Wrestling.
                </p>

                <div className="flex items-center justify-center">
                    <button className="group relative cursor-pointer bg-white text-black px-12 py-4 rounded-full font-extrabold text-xs flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-zinc-100 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                        <span className="relative z-10 uppercase tracking-[0.2em]">Dominar Agora</span>
                        <MoveUpRight className="relative z-10 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </div>
            </motion.div>

        </section>
    );
}