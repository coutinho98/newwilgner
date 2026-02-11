import { motion, useScroll, useTransform } from "framer-motion";
import { MoveUpRight, MoveRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <section
            ref={containerRef}
            id="home"
            className="font-inter relative bg-black min-h-[150vh] flex flex-col items-center overflow-x-hidden no-scrollbar"
        >
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 50% -20%, rgba(251, 191, 36, 0.15), transparent 70%)",
                }}
            />

            <motion.div
                style={{ opacity }}
                className="relative z-10 w-full pt-32 pb-10 flex flex-col items-center text-center px-4"
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter mb-8 leading-[0.9] max-w-5xl  ">
                    <span className="bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
                        Torne-se
                    </span> o lutador que sempre coloca para baixo.
                </h1>

                <p className="text-base lg:text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl font-medium">
                    Descubra como dominar as quedas e finalmente impor seu jogo de jiu-jitsu com o Campeão Brasileiro de Wrestling.
                </p>

                <div className="font-inter flex flex-col sm:flex-row gap-4 items-center justify-center mb-30">
                    <button className="group relative cursor-pointer bg-white text-black px-4 py-4 rounded-full font-bold text-xs w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/90 ">
                        <span className="relative z-10">Dominar Agora</span>
                        <MoveUpRight className="relative z-10 w-3 h-3" />
                    </button>

                    <button className="group relative cursor-pointer bg-black/40 backdrop-blur-md text-white border border-white/10 px-4 py-4 rounded-full font-bold  text-xs transition-all duration-300 hover:bg-white/10 hover:border-white/30 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2">
                        <span>Conhecer Conteúdo</span>
                        <MoveRight className="w-3 h-3 transition-transform duration-300 text-gray-400 group-hover:text-white" />
                    </button>
                </div>
            </motion.div>

            <div className="sticky top-1/4 w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-20">
                <motion.div
                    style={{ scale, y }}
                    className="relative group w-full mx-auto shadow-2xl"
                >
                    <div className="absolute opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div
                        className="relative bg-gray-900 rounded-xl border border-white/10 overflow-hidden"
                        style={{
                            WebkitMaskImage: 'radial-gradient(circle, black 70%, transparent 100%)',
                            maskImage: 'radial-gradient(circle, black 70%, transparent 100%)',
                        }}
                    >
                        <video
                            className="w-full aspect-video object-cover"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/videos/Portugues.mp4" type="video/mp4" />
                        </video>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}