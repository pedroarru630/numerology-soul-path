
import { useState, useEffect } from 'react';
import { useQuizParams } from '@/hooks/useQuizParams';

const Question6 = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const { getParams, navigateWithParams } = useQuizParams();

  useEffect(() => {
    const params = getParams();
    if (params.mes) {
      setSelectedMonth(params.mes);
    }
  }, []);

  const handleNext = () => {
    if (selectedMonth === '') {
      alert('Por favor, selecione uma opção.');
      return;
    }
    navigateWithParams('/7', { mes: selectedMonth });
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && selectedMonth) {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedMonth]);

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-yellow-300 text-2xl font-bold mb-6">6➤</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Agora selecione abaixo o mês do nascimento: <span className="text-red-400">*</span>
          </h2>
          <p className="text-gray-300 mb-8">(Exemplo, se nasceu no dia 10 de fevereiro, selecione: Fevereiro)</p>
          
          <div className="mb-8">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full max-w-md mx-auto px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white text-center text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              <option value="" className="bg-gray-800">- Selecione Aqui -</option>
              {months.map((month) => (
                <option key={month} value={month} className="bg-gray-800">
                  {month}
                </option>
              ))}
            </select>
          </div>
          
          <button
            onClick={handleNext}
            disabled={selectedMonth === ''}
            className={`px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              selectedMonth === ''
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

export default Question6;
