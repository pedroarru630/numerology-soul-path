
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/confirmacao');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleStart();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/1e571286-085e-4761-bd40-6d0ee007b4ab.png" 
              alt="Teste da Data de Nascimento" 
              className="mx-auto h-32 w-auto"
            />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            TESTE DA<br />
            DATA DE<br />
            NASCIMENTO
          </h1>
          
          <h2 className="text-2xl font-bold text-yellow-400 mb-8">
            O QUE ELA DIZ SOBRE O SEU DESTINO? ✨
          </h2>
          
          <div className="text-gray-300 text-lg leading-relaxed mb-8 space-y-2">
            <p>Tenho um teste rápido para propor...</p>
            <p>Responda a algumas perguntas, e veja o que está escrito no seu futuro deste ano...</p>
            <p>Do próximo mês... E quem sabe, dos próximos dias!</p>
          </div>
          
          <button
            onClick={handleStart}
            onKeyDown={handleKeyPress}
            className="px-12 py-4 rounded-2xl font-bold text-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            CLIQUE PARA INICIAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
