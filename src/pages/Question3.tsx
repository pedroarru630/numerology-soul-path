
import { useState, useEffect } from 'react';
import { useQuizParams } from '@/hooks/useQuizParams';

const Question3 = () => {
  const [selectedRelationship, setSelectedRelationship] = useState('');
  const { getParams, navigateWithParams } = useQuizParams();

  useEffect(() => {
    const params = getParams();
    if (params.relacionamento) {
      setSelectedRelationship(params.relacionamento);
    }
  }, []);

  const handleNext = () => {
    if (selectedRelationship === '') {
      alert('Por favor, selecione uma opção.');
      return;
    }
    navigateWithParams('/4', { relacionamento: selectedRelationship });
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && selectedRelationship) {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedRelationship]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-yellow-300 text-2xl font-bold mb-6">3➤</div>
          <h2 className="text-3xl font-bold text-white mb-8">
            Para uma leitura precisa dos seus relacionamentos... Qual estado melhor te define no momento? <span className="text-red-400">*</span>
          </h2>
          
          <div className="space-y-4 mb-8">
            <div
              onClick={() => setSelectedRelationship('casamento')}
              className={`flex items-center justify-start p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedRelationship === 'casamento'
                  ? 'bg-yellow-400 text-black border-2 border-yellow-300'
                  : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center text-white font-bold text-lg mr-4">
                A
              </div>
              <div className="text-xl font-semibold">casamento</div>
            </div>
            
            <div
              onClick={() => setSelectedRelationship('solteirismo')}
              className={`flex items-center justify-start p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedRelationship === 'solteirismo'
                  ? 'bg-yellow-400 text-black border-2 border-yellow-300'
                  : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center text-white font-bold text-lg mr-4">
                B
              </div>
              <div className="text-xl font-semibold">solteirismo</div>
            </div>
            
            <div
              onClick={() => setSelectedRelationship('separei')}
              className={`flex items-center justify-start p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedRelationship === 'separei'
                  ? 'bg-yellow-400 text-black border-2 border-yellow-300'
                  : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center text-white font-bold text-lg mr-4">
                C
              </div>
              <div className="text-xl font-semibold">separei</div>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">Escolha uma Opção</p>
          
          <button
            onClick={handleNext}
            disabled={selectedRelationship === ''}
            className={`px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              selectedRelationship === ''
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

export default Question3;
