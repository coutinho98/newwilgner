import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import wilgnerVideo from "../assets/video/wilgner.mp4";

gsap.registerPlugin(ScrollTrigger);

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const texts = gsap.utils.toArray(".about-text-block");

        texts.forEach((text: any) => {
            gsap.fromTo(text,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full bg-black font-inter text-white">
            <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto min-h-screen">

                <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 bg-zinc-950 overflow-hidden">
                    <video
                        src={wilgnerVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 lg:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black hidden lg:block" />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-20 lg:py-40 lg:px-16 xl:px-24">
                    <div className="max-w-xl mx-auto lg:mx-0">

                        <div className="about-text-block mb-12">
                            <span className="text-zinc-500 font-semibold tracking-wider text-sm mb-4 block uppercase">
                                Biografia
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
                                Muito prazer,
                                <br />
                                Sou <span className="bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">Wilgner Silva</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-amber-500 font-medium tracking-wide">
                                Campeão Brasileiro de Wrestling
                            </p>
                        </div>

                        <div className="about-text-block mb-8">
                            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
                                Sou uma das maiores referências no Wrestling Nacional. Atleta campeão nacional, nº1 do Brasil e diversas vezes medalhista nacional na modalidade, dentre outros títulos.
                            </p>
                        </div>

                        <div className="about-text-block mb-8">
                            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
                                Sou professor de vários atletas de ponta no Jiu-Jítsu e ensino quedas para os líderes das maiores academias no Brasil.
                            </p>
                        </div>

                        <div className="about-text-block mb-12">
                            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
                                Todos os meus alunos tiveram uma mudança notória através dos meus ensinamentos em Luta Olímpica. A evolução rápida e a didática de ensino para os mais variados tipos de alunos são a minha marca pessoal.
                            </p>
                        </div>

                        <div className="about-text-block mt-8">
                            <h3 className="text-2xl md:text-3xl text-white font-semibold tracking-tight mb-8">
                                Venha fazer parte deste time você também.
                            </h3>
                            <a
                                href="#pricing"
                                className="inline-block hover:text-amber-500 text-white font-medium uppercase tracking-widest transition-colors decoration-amber-500 underline decoration-2 underline-offset-8"
                            >
                                Quero ser aluno
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
