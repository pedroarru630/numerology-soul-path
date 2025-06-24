
import { useState, useEffect } from 'react';
import { useQuizParams } from '@/hooks/useQuizParams';

const Email = () => {
  const [email, setEmail] = useState('');
  const { getParams, navigateWithParams } = useQuizParams();

  useEffect(() => {
    const params = getParams();
    if (params.email) {
      setEmail(params.email);
    }
  }, []);

  const nome = getParams().nome || 'João';

  const handleSubmit = () => {
    if (email.trim()) {
      navigateWithParams('/pv', { email: email.trim() });
    } else {
      navigateWithParams('/pv');
    }
  };

  const handleSkip = () => {
    navigateWithParams('/pv');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png" 
              alt="Teste da Data de Nascimento" 
              className="mx-auto h-16 w-auto"
            />
          </div>
          
          <p className="text-yellow-300 text-xl font-bold mb-6">10➤ 💌</p>
          
          <div className="text-gray-300 text-lg leading-relaxed mb-8 space-y-4">
            <p>✨ Ótimo, <span className="text-white">{nome}</span>! Para qual endereço de e-mail devo enviar uma cópia do seu <strong className="text-white">Relatório Personalizado Gratuito</strong>? <span className="text-red-400">*</span></p>
            <p>🔮 <em>Seu destino será revelado através de um relatório completo, criado especialmente para você com base na energia única do seu nascimento...</em></p>
            <p>(Digite abaixo e depois clique no botão para liberar o relatório, agora mesmo)</p>
          </div>
          
          <div className="mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full max-w-md mx-auto px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-gray-300 text-center text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="✉️ Seu melhor e-mail aqui..."
            />
          </div>
          
          <div className="space-y-4">
            <button
              onClick={handleSubmit}
              className="px-12 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 hover:scale-105 transition-all duration-300 block mx-auto"
            >
              » LIBERAR RELATÓRIO MÍSTICO
            </button>
            
            <button
              onClick={handleSkip}
              className="px-8 py-2 rounded-xl font-medium text-sm bg-white/20 text-gray-300 hover:bg-white/30 transition-all duration-300"
            >
              Continuar sem email
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">Pressione Enter ↵</p>
        </div>
      </div>
    </div>
  );
};

export default Email;
