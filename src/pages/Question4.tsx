
import { useState, useEffect } from 'react';
import { useQuizParams } from '@/hooks/useQuizParams';

const Question4 = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const { getParams, navigateWithParams } = useQuizParams();

  useEffect(() => {
    const params = getParams();
    if (params.area) {
      setSelectedArea(params.area);
    }
  }, []);

  const handleNext = () => {
    if (selectedArea === '') {
      alert('Por favor, selecione uma opção.');
      return;
    }
    navigateWithParams('/5', { area: selectedArea });
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && selectedArea) {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedArea]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-yellow-300 text-2xl font-bold mb-6">4➤</div>
          <h2 className="text-3xl font-bold text-white mb-8">
            Qual área da sua vida você mais gostaria de destravar? <span className="text-red-400">*</span>
          </h2>
          
          <div className="space-y-4 mb-8">
            <div
              onClick={() => setSelectedArea('dinheiro')}
              className={`flex items-center justify-start p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedArea === 'dinheiro'
                  ? 'bg-yellow-400 text-black border-2 border-yellow-300'
                  : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center text-white font-bold text-lg mr-4">
                A
              </div>
              <div className="text-xl font-semibold">dinheiro</div>
            </div>
            
            <div
              onClick={() => setSelectedArea('amor')}
              className={`flex items-center justify-start p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedArea === 'amor'
                  ? 'bg-yellow-400 text-black border-2 border-yellow-300'
                  : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center text-white font-bold text-lg mr-4">
                B
              </div>
              <div className="text-xl font-semibold">amor</div>
            </div>
            
            <div
              onClick={() => setSelectedArea('saúde')}
              className={`flex items-center justify-start p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedArea === 'saúde'
                  ? 'bg-yellow-400 text-black border-2 border-yellow-300'
                  : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center text-white font-bold text-lg mr-4">
                C
              </div>
              <div className="text-xl font-semibold">saúde</div>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">Escolha uma Opção</p>
          
          <button
            onClick={handleNext}
            disabled={selectedArea === ''}
            className={`px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              selectedArea === ''
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

export default Question4;
