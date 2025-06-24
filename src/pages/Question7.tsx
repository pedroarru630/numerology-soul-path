
import { useState, useEffect } from 'react';
import { useQuizParams } from '@/hooks/useQuizParams';

const Question7 = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const { getParams, navigateWithParams } = useQuizParams();

  useEffect(() => {
    const params = getParams();
    if (params.ano) {
      setSelectedYear(params.ano);
    }
  }, []);

  const calculateDestinyNumber = (day: string, month: string, year: string): number => {
    const reduceToSingleDigit = (num: number): number => {
      while (num > 9) {
        const sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
        num = sum;
      }
      return num;
    };

    const monthMap: { [key: string]: number } = {
      'Janeiro': 1, 'Fevereiro': 2, 'Março': 3, 'Abril': 4,
      'Maio': 5, 'Junho': 6, 'Julho': 7, 'Agosto': 8,
      'Setembro': 9, 'Outubro': 10, 'Novembro': 11, 'Dezembro': 12
    };

    const dayReduced = reduceToSingleDigit(parseInt(day, 10));
    const monthReduced = reduceToSingleDigit(monthMap[month] || 1);
    const yearReduced = reduceToSingleDigit(parseInt(year, 10));

    const sum = dayReduced + monthReduced + yearReduced;
    return reduceToSingleDigit(sum);
  };

  const handleNext = () => {
    if (selectedYear === '') {
      alert('Por favor, selecione uma opção.');
      return;
    }

    // Calculate destiny number
    const params = getParams();
    const day = params.dia || selectedYear;
    const month = params.mes || 'Janeiro';
    const year = selectedYear;
    
    const score = calculateDestinyNumber(day, month, year);
    
    navigateWithParams('/analise1', { 
      ano: selectedYear,
      score: score.toString()
    });
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && selectedYear) {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedYear]);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1919 }, (_, i) => currentYear - i);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-yellow-300 text-2xl font-bold mb-6">7➤</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Por fim, para o cálculo completo do seu nascimento... Qual o ano em que nasceu? <span className="text-red-400">*</span>
          </h2>
          <p className="text-gray-300 mb-8">(Exemplo, se nasceu em 1985, selecione a opção: 1985)</p>
          
          <div className="mb-8">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full max-w-md mx-auto px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white text-center text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            >
              <option value="" className="bg-gray-800">- Selecione Aqui -</option>
              {years.map((year) => (
                <option key={year} value={year} className="bg-gray-800">
                  {year}
                </option>
              ))}
            </select>
          </div>
          
          <button
            onClick={handleNext}
            disabled={selectedYear === ''}
            className={`px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              selectedYear === ''
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

export default Question7;
