import { useState } from 'react';

export function Hero() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="home" className="relative overflow-hidden bg-black lg:h-screen min-h-screen flex items-center">
            <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                                PROTECH
                            </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors font-medium text-sm">Home</a>
                            <a href="#conteudo" className="text-gray-300 hover:text-amber-400 transition-colors font-medium text-sm">Conteúdo</a>
                            <button className="bg-amber-500 text-black px-5 py-2 rounded-full font-bold hover:bg-amber-400 transition-all text-sm">
                                Começar Agora
                            </button>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="relative w-full pt-32 pb-20 lg:pt-0 lg:pb-0 h-full flex items-center">

                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(circle at 50% -20%, rgba(251, 191, 36, 0.2), transparent 70%)",
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <div className="lg:col-span-5 text-left flex flex-col items-start">
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
                                Torne-se o lutador que <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">sempre coloca para baixo</span>
                            </h1>
                            <p className="text-base lg:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                                Descubra como dominar as quedas e finalmente impor seu jogo de jiu-jitsu com o <span className="text-amber-400 font-semibold">Campeão Brasileiro de Wrestling de 2018</span>.
                            </p>

                            <div className="flex flex-row flex-wrap gap-3 items-center w-full">
                                <button className="bg-amber-500 text-black px-5 py-3 rounded-lg text-xs lg:text-sm font-black uppercase tracking-tight hover:bg-amber-400 transition-all transform hover:scale-[1.02] shadow-lg shadow-amber-900/20 whitespace-nowrap">
                                    Quero me tornar uma máquina
                                </button>
                                <button className="bg-transparent text-white border border-white/20 px-5 py-3 rounded-lg text-xs lg:text-sm font-bold hover:bg-white/5 transition-all whitespace-nowrap">
                                    Conheça o conteúdo
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative group w-full">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                            <div className="relative bg-gray-900 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                                <video
                                    className="w-full aspect-video object-cover"
                                    controls
                                    poster="/videos/thumb-video.jpg"
                                >
                                    <source src="/videos/Portugues.mp4" type="video/mp4" />
                                </video>
                            </div>

                            <div className="absolute -bottom-4 -right-4 hidden sm:block bg-amber-500 text-black px-3 py-1.5 rounded-lg font-black rotate-3 shadow-xl z-20 text-[10px] uppercase">
                                Método Comprovado
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}