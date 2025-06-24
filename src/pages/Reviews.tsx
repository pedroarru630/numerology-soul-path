
import { useQuizParams } from '@/hooks/useQuizParams';

const Reviews = () => {
  const { navigateWithParams } = useQuizParams();

  const handleNext = () => {
    navigateWithParams('/1');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">Avaliações ⭐⭐⭐⭐⭐</h2>
          <p className="text-gray-300 mb-8">168.626 pessoas já fizeram esse teste. Veja o que dizem:</p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white/20 rounded-2xl p-6">
              <p className="text-gray-300 italic">"Como pode saber tanto sobre mim só de olhar o dia em que nasci? Fantástico!" — Sônia P.</p>
            </div>
            
            <div className="bg-white/20 rounded-2xl p-6">
              <p className="text-gray-300 italic">"Mentalizei o meu número da sorte e um pagamento atrasado caiu!" — Fábio O.</p>
            </div>
            
            <div className="bg-white/20 rounded-2xl p-6">
              <p className="text-gray-300 italic">"Vi uma reviravolta no amor... No dia seguinte, meu ex me mandou mensagem!" — Cristina S.</p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">(Clique em "Próximo" para fazer o teste 👇)</p>
          
          <button
            onClick={handleNext}
            className="px-12 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 hover:scale-105 transition-all duration-300"
          >
            Próximo
          </button>
          <p className="text-gray-400 text-sm mt-4">Pressione Enter ↵</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
