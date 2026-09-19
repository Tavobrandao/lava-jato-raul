import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light font-sans py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-brand-gold hover:text-yellow-500 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Voltar à página inicial
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 border-b border-brand-gold/30 pb-4">
          Política de Privacidade
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            No <strong>Lava Jato do Raul</strong>, a privacidade e a segurança das suas informações são prioridades para nós. Esta Política de Privacidade descreve como recolhemos, utilizamos e protegemos os seus dados.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">1. Recolha de Dados</h2>
          <p>
            Recolhemos apenas as informações estritamente necessárias para a prestação dos nossos serviços de estética automotiva. Ao contactar-nos via WhatsApp, podemos guardar temporariamente o seu número de telefone, nome e endereço para efeitos de agendamento e prestação do serviço "Leva e Traz".
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">2. Utilização das Informações</h2>
          <p>
            Os dados fornecidos são utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Agendamento e confirmação de serviços de lavagem;</li>
            <li>Comunicação direta sobre o estado do seu veículo;</li>
            <li>Localização para a recolha e entrega do automóvel ou moto.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">3. Partilha e Segurança</h2>
          <p>
            Garantimos que as suas informações pessoais não serão vendidas, alugadas ou partilhadas com terceiros. Os dados são acedidos apenas pelos profissionais diretamente envolvidos na prestação do seu serviço.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">4. Os Seus Direitos</h2>
          <p>
            Tem o direito de solicitar a eliminação do seu contacto da nossa base de dados após a conclusão do serviço. Para qualquer pedido ou dúvida, contacte-nos através do nosso WhatsApp oficial: <strong>(92) 99166-3645</strong>.
          </p>
          
          <p className="text-sm text-gray-500 mt-12 pt-6 border-t border-gray-800">
            Última atualização: Setembro de 2026.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PoliticaPrivacidade;