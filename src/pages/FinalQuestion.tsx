import { useState, useEffect } from 'react';
import { useQuizParams } from '@/hooks/useQuizParams';

const FinalQuestion = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const { getParams, navigateWithParams } = useQuizParams();

  useEffect(() => {
    const params = getParams();
    if (params.confirmacao) {
      setSelectedOption(params.confirmacao);
    }
  }, []);

  const handleNext = () => {
    if (selectedOption === '') {
      alert('Por favor, selecione uma opção.');
      return;
    }
    navigateWithParams('/email', { confirmacao: selectedOption });
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && selectedOption) {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedOption]);

  const params = getParams();
  const firstName = params.nome || 'João';
  const birthDay = params.dia || '4';
  const birthMonth = params.mes || 'Março';
  const birthYear = params.ano || '1937';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-yellow-300 text-2xl font-bold mb-6">9➤</div>
          <h2 className="text-2xl font-bold text-white mb-4 text-left">
            Mas aqui está o mais importante, {firstName}... Sua data de nascimento {birthDay}/{birthMonth}/{birthYear} também revela como destravar sua prosperidade! Então eu vou liberar, aqui e agora... 📊Um Relatório Personalizado e sob medida, com as respostas de que precisa... Por favor me confirme se você quer. <span className="text-red-400">*</span>
          </h2>
          <p className="text-gray-300 mb-8 text-left">(confirme seu interesse e clique em continuar 👇)</p>
          
          <div className="space-y-4 mb-8">
            <div
              onClick={() => setSelectedOption('sim')}
              className={`flex items-center justify-start p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedOption === 'sim'
                  ? 'bg-blue-500/30 text-white border-2 border-blue-400'
                  : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                A
              </div>
              <div className="text-xl font-semibold">SIM, QUERO</div>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">Escolha uma Opção</p>
          
          <button
            onClick={handleNext}
            disabled={selectedOption === ''}
            className={`px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              selectedOption === ''
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 hover:scale-105 cursor-pointer'
            }`}
          >
            » CONTINUAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalQuestion;
