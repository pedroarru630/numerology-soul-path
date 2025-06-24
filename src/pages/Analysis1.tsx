
import { useQuizParams } from '@/hooks/useQuizParams';

const Analysis1 = () => {
  const { getParams, navigateWithParams } = useQuizParams();
  const params = getParams();

  const nome = params.nome || 'João';
  const dia = params.dia || '3';
  const mes = params.mes || 'Março';
  const ano = params.ano || '1931';
  const area = params.area || 'dinheiro';

  const handleNext = () => {
    navigateWithParams('/analise2');
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
          
          <p className="text-yellow-300 text-xl font-bold mb-6">🔒 {nome}, estou surpreso!</p>
          
          <div className="text-gray-300 text-lg leading-relaxed mb-8 space-y-4">
            <p>O fato de ter nascido no dia <strong className="text-white">{dia}/{mes}/{ano}</strong> diz muito sobre você...</p>
            <p>Não é coincidência que sua maior dificuldade hoje seja <strong className="text-white">{area}</strong>!</p>
            <p>🔮 Há um padrão oculto que precisa ser destravado.</p>
            <p>(Clique em continuar 👇)</p>
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

export default Analysis1;
