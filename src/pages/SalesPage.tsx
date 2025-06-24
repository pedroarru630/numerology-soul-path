
import { useQuizParams } from '@/hooks/useQuizParams';

const SalesPage = () => {
  const { getParams } = useQuizParams();
  const params = getParams();

  const nome = params.nome || 'João';
  const dia = params.dia || '3';
  const mes = params.mes || 'Março';
  const ano = params.ano || '1931';
  const area = params.area || 'dinheiro';
  const score = params.score || '7';

  const destinyImages: { [key: string]: string } = {
    '1': '/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png',
    '2': '/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png',
    '3': '/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png',
    '4': '/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png',
    '5': '/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png',
    '6': '/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png',
    '7': '/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png',
    '8': '/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png',
    '9': '/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png" 
              alt="Teste da Data de Nascimento" 
              className="mx-auto h-20 w-auto"
            />
          </div>

          {/* Personalized Content */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {nome}, Seu Número do Destino é: <span className="text-yellow-400 text-6xl block mt-4">{score}</span>
            </h1>
            
            <div className="bg-white/20 rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Sua Data de Nascimento:</h2>
              <p className="text-xl text-gray-300">{dia}/{mes}/{ano}</p>
            </div>

            <div className="bg-white/20 rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Como Calculamos Seu Número:</h2>
              <div className="text-gray-300 space-y-2">
                <p>Dia: {dia}</p>
                <p>Mês: {mes}</p>
                <p>Ano: {ano}</p>
                <p className="text-yellow-400 font-bold">Número do Destino: {score}</p>
              </div>
            </div>

            <div className="bg-white/20 rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Sua Área de Foco:</h2>
              <p className="text-xl text-yellow-400 capitalize font-bold">{area}</p>
            </div>
          </div>

          {/* Destiny Image */}
          <div className="text-center mb-8">
            <img 
              src={destinyImages[score] || destinyImages['7']} 
              alt={`Número do Destino ${score}`}
              className="mx-auto max-w-md w-full rounded-2xl"
            />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-black">
              <h3 className="text-3xl font-bold mb-4">🔮 Revelação Completa do Seu Destino</h3>
              <p className="text-xl mb-6">Descubra todos os segredos ocultos na sua data de nascimento...</p>
              <button className="bg-black text-white px-12 py-4 rounded-2xl font-bold text-xl hover:bg-gray-800 transition-all duration-300">
                QUERO MEU RELATÓRIO COMPLETO
              </button>
            </div>
          </div>

          {/* Debug Info */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>Parâmetros recebidos: nome={nome}, dia={dia}, mes={mes}, ano={ano}, area={area}, score={score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
