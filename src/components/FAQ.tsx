import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  Plus } from "lucide-react";

const faqs = [
    {
        question: "Quanto tempo de acesso eu tenho?",
        answer: "O acesso ao curso é vitalício, portanto, você pagará apenas uma vez e poderá acessar o conteúdo quando quiser."
    },
    {
        question: "Tem certificado?",
        answer: "Sim, ao finalizar todo o conteúdo do curso, você conseguirá emitir o certificado."
    },
    {
        question: "Por onde poderei acessar o curso?",
        answer: "Seu acesso será pela Kiwify."
    },
    {
        question: "Como vou receber meu acesso?",
        answer: "Você receberá um e-mail no seu e-mail cadastrado no ato da compra com todas as informações de acesso."
    },
    {
        question: "As aulas são online?",
        answer: "Sim, todo o conteúdo do curso é 100% online."
    }
];

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-black relative font-inter overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-amber-600/5 blur-[100px] pointer-events-none" />
            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <header className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl text-white font-bold mb-12 text-center tracking-tighter">
                        Perguntas <span className="bg-gradient-to-r from-amber-200 to-yellow-600 bg-clip-text text-transparent">Frequentes</span>
                    </h3>
                </header>
                <div className="divide-y divide-zinc-800/50">

                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div key={index} className="py-6">
                                <button
                                    onClick={() => setActiveIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between text-left group transition-all"

                                >
                                    <span className={`cursor-pointer text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-amber-400' : 'text-zinc-300 group-hover:text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className={`flex-shrink-0 ml-4 transition-colors ${isOpen ? 'text-amber-500' : 'text-zinc-600'}`}
                                    >

                                        <Plus className="w-5 h-5" />

                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="pt-4 pr-8">
                                                <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                <footer className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-zinc-600 text-sm">
                        Ainda tem alguma dúvida específica?
                    </p>
                    <a
                        href="https://wa.me/SEU_NUMERO"
                        className="text-white text-sm font-medium hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                        Conversar com nossa equipe
                        <span className="text-amber-500">→</span>
                    </a>
                </footer>
            </div>
        </section>
    );

}