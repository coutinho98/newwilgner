import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              W
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors font-medium text-sm">Home</a>
            <a href="#conteudo" className="text-gray-300 hover:text-amber-400 transition-colors font-medium text-sm">Conteúdo</a>
            <button className="bg-amber-500 text-black px-5 py-2 rounded-full font-bold">
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

      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#home" className="block px-3 py-4 text-gray-300 font-medium">Home</a>
            <a href="#conteudo" className="block px-3 py-4 text-gray-300 font-medium">Conteúdo</a>
            <button className="w-full bg-amber-500 text-black px-6 py-3 rounded-xl font-bold mb-4">
              Começar Agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}