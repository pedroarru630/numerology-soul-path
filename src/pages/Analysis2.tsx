
import { useQuizParams } from '@/hooks/useQuizParams';

const Analysis2 = () => {
  const { getParams, navigateWithParams } = useQuizParams();
  const params = getParams();
  const score = params.score || '7';

  const handleNext = () => {
    navigateWithParams('/pergunta-final');
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
          
          <p className="text-yellow-300 text-xl font-bold mb-6">8➤ 💎</p>
          
          <div className="text-gray-300 text-lg leading-relaxed mb-8 space-y-4">
            <p>Vejo também que o número abaixo está ligado diretamente ao seu destino e aos desafios que vêm surgindo repetidamente em sua vida...</p>
            <p>(Clique em continuar 👇)</p>
          </div>
          
          <div className="mb-8">
            <span className="text-8xl font-bold text-yellow-400 bg-white/20 rounded-full w-32 h-32 flex items-center justify-center mx-auto">{score}</span>
          </div>
          
          <button
            onClick={handleNext}
            className="px-12 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 hover:scale-105 transition-all duration-300"
          >
            » CONTINUAR
          </button>
          <p className="text-gray-400 text-sm mt-4">Pressione Enter ↵</p>
        </div>
      </div>
    </div>
  );
};

export default Analysis2;
