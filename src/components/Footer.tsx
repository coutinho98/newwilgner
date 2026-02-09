import { Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-zinc-900 pt-16 pb-8 font-inter">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold tracking-tighter text-xl mb-4 uppercase">
                            Wrestling <span className="text-amber-500">Pro</span>
                        </h4>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                            Metodologia definitiva para dominar o combate em pé e elevar o seu nível no Jiu-Jitsu.
                            Transforme a sua performance com quem entende do assunto.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-white text-sm tracking-widest mb-6">Navegação</h5>
                        <ul className="space-y-4">
                            <li><a href="#hero" className="text-zinc-500 hover:text-amber-500 transition-colors text-sm">Início</a></li>
                            <li><a href="#course" className="text-zinc-500 hover:text-amber-500 transition-colors text-sm">O Curso</a></li>
                            <li><a href="#pricing" className="text-zinc-500 hover:text-amber-500 transition-colors text-sm">Investimento</a></li>
                            <li><a href="#faq" className="text-zinc-500 hover:text-amber-500 transition-colors text-sm">Dúvidas</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-white text-sm tracking-widest mb-6">Contato</h5>
                        <div className="flex gap-5">
                            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
                        © {currentYear} Todos os direitos reservados.
                    </p>
                    <a
                        href="https://coutinho98.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-2 text-[10px] tracking-[0.3em] transition-all duration-300"
                    >
                        <div className="flex items-center gap-1.5  text-zinc-400 group-hover:text-amber-500 transition-colors">
                            <span className="relative font-inter">
                                by coutinho98
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
}