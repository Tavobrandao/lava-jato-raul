import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Droplets, Car, ShieldCheck } from 'lucide-react';
import PoliticaPrivacidade from './PoliticaPrivacidade';

function Home() {
  const whatsappNumber = "5592991663645";

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans">
      
      {/* HEADER / NAVEGAÇÃO */}
      <header className="border-b border-brand-gold/20 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-brand-dark/95 backdrop-blur-sm z-50">
        
        <div className="flex items-center gap-3">
          <img 
            src="/public/logo-lava-jato.jpeg" 
            alt="Logo Lava Jato Raul" 
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-brand-gold/50 object-cover"
          />
          <div className="font-bold text-xl md:text-2xl tracking-widest text-white">
            LAVA JATO DO <span className="text-brand-gold">RAUL</span>
          </div>
        </div>

        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-brand-gold text-brand-dark font-bold px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300"
        >
          <Phone size={18} />
          (92) 99166-3645
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="relative px-6 md:px-12 py-20 flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"></div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 z-10 leading-tight">
          Estética Automotiva <br/> <span className="text-brand-gold">Premium</span> em Manaus
        </h1>
        <p className="text-brand-light text-lg md:text-xl max-w-2xl mb-10 z-10">
          Cuidamos do seu carro e da sua moto com produtos de alta qualidade. Serviço de recolha e entrega no seu trabalho ou residência!
        </p>

        <a 
          href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar uma lavagem.`}
          target="_blank" 
          rel="noopener noreferrer"
          className="z-10 flex items-center gap-2 bg-brand-gold text-brand-dark text-lg font-bold px-8 py-4 rounded-full hover:scale-105 hover:bg-yellow-500 transition-all duration-300 shadow-[0_0_20px_rgba(197,154,92,0.4)]"
        >
          <Phone size={22} />
          Agendar Meu Horário
        </a>

        {/* Info Rápida */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl z-10">
          <div className="flex flex-col items-center p-4 border border-brand-gold/20 rounded-xl bg-brand-dark/50">
            <Clock className="text-brand-gold mb-2" size={32} />
            <h3 className="font-bold text-lg">Aberto Todos os Dias</h3>
            <p className="text-sm text-gray-400">Seg a Dom - 08h às 17h</p>
          </div>
          <div className="flex flex-col items-center p-4 border border-brand-gold/20 rounded-xl bg-brand-dark/50">
            <MapPin className="text-brand-gold mb-2" size={32} />
            <h3 className="font-bold text-lg">Serviço Leva e Traz</h3>
            <p className="text-sm text-gray-400">Buscamos onde você estiver</p>
          </div>
          <div className="flex flex-col items-center p-4 border border-brand-gold/20 rounded-xl bg-brand-dark/50">
            <ShieldCheck className="text-brand-gold mb-2" size={32} />
            <h3 className="font-bold text-lg">Qualidade Garantida</h3>
            <p className="text-sm text-gray-400">Cera premium e cuidado total</p>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-[#0B1120] sm:bg-brand-dark border-t border-brand-gold/20 pt-10 pb-6 flex flex-col items-center text-center text-gray-400 text-sm mt-20">
        <h4 className="text-white font-bold text-lg mb-3">Lava Jato do Raul</h4>
        
        <p className="mb-1">
          Serviço prestado de forma autônoma por <strong className="text-white">Rian Moreira Brandão</strong>.
        </p>
        
        <p className="mb-1">
          Documentação vinculada ao CPF: <strong className="text-white">703.***.***-**</strong> | Manaus - AM
        </p>
        
        <p className="mb-4">
          Contato: <strong className="text-white">(92) 99166-3645</strong>
        </p>

        {/* AQUI MUDÁMOS DE <a> PARA <Link> */}
        <Link to="/privacidade" className="text-brand-gold hover:underline mb-8 font-medium">
          Política de Privacidade
        </Link>

        <div className="w-full max-w-3xl border-t border-gray-800/50 pt-6 px-4 text-xs flex flex-col sm:flex-row justify-center items-center gap-1">
          <span>© 2026 Lava Jato do Raul - Todos os direitos reservados.</span>
          <span>Desenvolvido por <a href="https://github.com/Tavobrandao" target="_blank" rel="noopener noreferrer" className="text-brand-gold font-semibold hover:underline">Gustavo Brandão</a></span>
        </div>
      </footer>

    </div>
  );
}

// O COMPONENTE PRINCIPAL QUE GERE AS ROTAS
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<PoliticaPrivacidade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;