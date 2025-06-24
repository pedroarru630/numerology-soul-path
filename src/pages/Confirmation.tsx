
import { useQuizParams } from '@/hooks/useQuizParams';

const Confirmation = () => {
  const { navigateWithParams } = useQuizParams();

  const handleNext = () => {
    navigateWithParams('/avaliacoes');
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
          <div className="text-6xl mb-6">✨</div>
          <h2 className="text-3xl font-bold text-white mb-8">
            COMPROVADO: Seu Destino é Influenciado Pelo Dia em que Nasceu.
          </h2>
          
          <div className="text-gray-300 text-lg leading-relaxed mb-8 space-y-4">
            <p>Para entender a <strong className="text-white">energia única</strong> do seu dia, farei 7 perguntas rápidas...</p>
            <p>Depois, vou <strong className="text-white">te entregar um relatório 100% Personalizado e Gratuito</strong>, onde vou revelar tudo o que você precisa saber!</p>
            <p>🔮 <em>Prepare-se para descobrir os segredos ocultos do universo que estão escritos na sua data de nascimento...</em></p>
            <p>(Clique em "Próximo" 👇)</p>
          </div>
          
          <button
            onClick={handleNext}
            onKeyDown={handleKeyPress}
            className="px-12 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            » PRÓXIMO
          </button>
          <p className="text-gray-400 text-sm mt-4">Pressione Enter ↵</p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
