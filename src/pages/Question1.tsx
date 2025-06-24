
import { useState, useEffect } from 'react';
import { useQuizParams } from '@/hooks/useQuizParams';

const Question1 = () => {
  const [name, setName] = useState('');
  const { getParams, navigateWithParams } = useQuizParams();

  useEffect(() => {
    const params = getParams();
    if (params.nome) {
      setName(params.nome);
    }
  }, []);

  const handleNext = () => {
    if (name.trim() === '') {
      alert('Por favor, preencha seu nome.');
      return;
    }
    navigateWithParams('/2', { nome: name.trim() });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-yellow-300 text-2xl font-bold mb-6">1➤</div>
          <h2 className="text-3xl font-bold text-white mb-8">
            Para começar, qual é o seu primeiro nome? <span className="text-red-400">*</span>
          </h2>
          
          <div className="mb-8">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu primeiro nome aqui..."
              className="w-full max-w-md mx-auto px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white text-center text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={handleNext}
            disabled={name.trim() === ''}
            className={`px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              name.trim() === ''
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 hover:scale-105 cursor-pointer'
            }`}
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question1;
