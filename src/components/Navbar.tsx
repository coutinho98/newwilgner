import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              PROTECH
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Serviços</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sobre</a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Começar Agora
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#home" className="block px-3 py-4 text-gray-700 font-medium">Home</a>
            <a href="#servicos" className="block px-3 py-4 text-gray-700 font-medium">Serviços</a>
            <a href="#sobre" className="block px-3 py-4 text-gray-700 font-medium">Sobre</a>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold mb-4">
              Começar Agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}