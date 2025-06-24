
import { useQuizParams } from '@/hooks/useQuizParams';

const SalesPage = () => {
  const { getParams } = useQuizParams();
  const params = getParams();

  const nome = params.nome || 'João';
  const dia = params.dia || '2';
  const mes = params.mes || 'Abril';
  const ano = params.ano || '2000';
  const score = params.score || '8';
  const foco = params.area || 'dinheiro';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Header with Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              </div>
              <h1 className="text-white text-2xl font-bold">Numeróscopo</h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-8">
            {/* Envelope Image */}
            <div className="mb-6">
              <div className="mx-auto w-48 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg relative">
                <div className="absolute inset-x-4 top-4 bg-white rounded-lg h-20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-8 bg-yellow-500 rounded mx-auto mb-2"></div>
                    <div className="text-xs text-gray-600">NUMERÓSCOPO</div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-1">
                    <div className="w-6 h-4 bg-yellow-600 rounded-full"></div>
                    <div className="w-6 h-4 bg-yellow-600 rounded-full"></div>
                    <div className="w-6 h-4 bg-yellow-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-yellow-400 text-3xl font-bold mb-6">
              ESSE NÚMERO REVELA<br />
              O SEU DESTINO...
            </h2>

            {/* Destiny Number Circle */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white text-6xl font-bold">{score}</span>
              </div>
            </div>

            {/* Description Text */}
            <div className="bg-purple-800/50 rounded-2xl p-6 mb-8 text-left">
              <p className="text-gray-300 text-lg leading-relaxed">
                Você está prestes a descobrir um código oculto em sua data de nascimento que explica perfeitamente por que, mesmo com todo o seu potencial, o dinheiro sempre parece escapar das suas mãos...
              </p>
            </div>
          </div>

          {/* Long Form Content */}
          <div className="text-left space-y-6 mb-8">
            <p className="text-gray-300 text-lg">
              <strong className="text-yellow-400">{nome}</strong>, Você consegue sentir?
            </p>

            <p className="text-gray-300">
              Aquela sensação de que algo não estava certo hoje?
            </p>

            <p className="text-gray-300">
              Não é coincidência você estar aqui agora, muito mais presente...
            </p>

            <p className="text-gray-300">
              As energias do Universo te guiaram até mim.
            </p>

            <p className="text-gray-300">
              Nos próximos minutos, vou te contar toda segunda maior tudo que pode mudar toda da sua vida.
            </p>

            <p className="text-blue-400">
              E algo tão verdadeiro sobre quem você é, que você vai se arrepender: "Como não sabia sobre mim até agora?"
            </p>

            <p className="text-gray-300">
              Você já parou pra pensar por que alguma coisa parece sempre sair errado com você...
            </p>

            <p className="text-gray-300">
              Enquanto outras, outras pessoas, relaxam, vem ganhando sua meada realidade?
            </p>

            <p className="text-gray-300">
              A resposta está bem perto de que você possa.
            </p>

            <p className="text-gray-300">
              Na verdade, está bem na: <strong>Codificada na sua data {dia} de {mes} nascimento.</strong>
            </p>

            <p className="text-gray-300">
              E eu vou lhe mostrar onde está codificada se como que seu dia influenciam diretamente todos de todas das suas importantes.
            </p>

            {/* Celebrity Images Section */}
            <div className="bg-white/10 rounded-2xl p-6 my-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-600 rounded-lg h-32"></div>
                <div className="bg-gray-600 rounded-lg h-32"></div>
                <div className="bg-gray-600 rounded-lg h-32"></div>
                <div className="bg-gray-600 rounded-lg h-32"></div>
              </div>
            </div>

            <p className="text-gray-300">
              E hoje, eu encontro duas realizado algo incrível acho VOCÊ.
            </p>

            <p className="text-gray-300">
              Eu uso Antigo Europeus, conseguirão o identificado há mais de 30 anos
            </p>

            <p className="text-gray-300">
              E não somente para endereços absolutamente que diferentes sua data de nascimento, eu posso hoje sobre de suas revelações.
            </p>

            <div className="text-center my-8">
              <h3 className="text-yellow-400 text-2xl font-bold mb-4">
                {nome}, Seu Número de Destino Tem Uma Mensagem Urgente...
              </h3>
            </div>

            <p className="text-gray-300">
              Existem 18 elementos importantes no seu Mapa Numerológico pessoal.
            </p>

            <p className="text-gray-300">
              Dentre todos, o Número de Destino é considerado um dos mais poderosos e reveladores.
            </p>

            <p className="text-gray-300">
              Pois descrever quais são suas principais sorte e delas, e não só isso que você! receberá:
            </p>

            <p className="text-blue-400">
              Este número é como um mapa de tesouro da sua vida. Ele mostra:
            </p>

            <div className="space-y-2 ml-6">
              <p className="text-orange-400">👑 O caminho que você deve seguir</p>
              <p className="text-orange-400">🔥 O talento que você mais sobra que tem</p>
              <p className="text-blue-400">💎 Por que algumas coisas fluem or facilidade na sua vida</p>
              <p className="text-purple-400">🔮 E o eu problema que você vida para resolver</p>
            </div>

            <p className="text-gray-300">
              Vamos descobrir o seu Número de Destino agora!
            </p>

            {/* Calculation Grid */}
            <div className="bg-white/10 rounded-2xl p-6 text-center my-8">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-600 text-white p-4 rounded">Abril</div>
                <div className="bg-purple-600 text-white p-4 rounded">4</div>
                <div className="bg-green-600 text-white p-4 rounded">2</div>
                <div className="bg-blue-600 text-white p-4 rounded">2000</div>
                <div className="bg-purple-600 text-white p-4 rounded">2</div>
                <div className="bg-green-600 text-white p-4 rounded">0</div>
              </div>
              <div className="text-white text-lg mb-2">Soma tudo: 4 + 2 + 2 + 2</div>
              <div className="text-white text-lg mb-4">Seu Número de Destino é</div>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">{score}</span>
              </div>
            </div>

            {/* Main Sales Copy */}
            <div className="space-y-4">
              <p className="text-gray-300">
                <strong className="text-yellow-400">{nome}</strong>, seu Número de Destino é <strong className="text-yellow-400">{score}</strong>
              </p>

              <p className="text-gray-300">
                Você sempre tem a impressão de <strong>ADMINISTRAR PROBLEMAS</strong>, que não deveria estar enfrentando e é desgaste te consomem espiritualmente?
              </p>

              <p className="text-gray-300">
                Já sentia como você naturalmente cresceu preocupado de identificar o diferença? Como se você intuitivamente respondeu aos aspectos uma questiona importante?
              </p>

              <p className="text-gray-300">
                Não é coincidência. É seu número 8 não está!
              </p>

              <p className="text-gray-300">
                Você parece tanto merecia de confirmar que satisfatório seu empresas e reconhecimento
              </p>

              <p className="text-gray-300">
                Sua como estratégicas e capacidade de tomar decisões interiores fazem com que muitas outras de identificação, compreendendo muito extrovertida vida quer outros podem com exigente.
              </p>

              <p className="text-gray-300">
                E pessoas que habitam diante de grandes desafios, você está confortante com essencia!
              </p>

              <p className="text-gray-300">
                Você tem uma capacidade extraordinária de disciplina e também são grande escala.
              </p>

              <p className="text-gray-300">
                Impor resultado pessoas nada e mesmo situação de conformidade.
              </p>

              <p className="text-gray-300">
                Este é seu verdadeiro superpoder!
              </p>

              <p className="text-red-400">
                Mas talvez, você deveria e ver de outra maneira não satisfazia resultado.
              </p>

              <p className="text-gray-300">
                Quem mesmo algumas coisas responsables, você possui a determinação e e campo público para superação as tarefas em realidade concluídas, com suas energia! Para já cobrindo por destas sobre ao seu redor.
              </p>

              <p className="text-gray-300">
                Como fato. Não é verdade que você eu definitivas sente completamente recebendo quando você gerenciando recebindo despatho personalizada ou chancelado das se outros valores vamos?
              </p>

              <p className="text-gray-300">
                <strong>Definitivamente pessoas!</strong> À hoje mesmo estaremos de reflexão políticas confrontar seu desastres acontecendo!
              </p>

              <p className="text-gray-300">
                Você mesmo algo TEM vê ansiedade é interna?
              </p>

              <p className="text-gray-300">
                E esta é precisamente a casos pela qual tem imensurar a sua importante na sua vida...
              </p>

              <h3 className="text-yellow-400 text-2xl font-bold text-center my-8">
                Por que o dinheiro CONTINUA escapando?
              </h3>

              <p className="text-gray-300">
                João, você já se perguntou por que, mesmo com sua visão estratégica e capacidade executiva, o dinheiro parece fazer suas duas mãos?
              </p>

              <p className="text-red-400">
                É como os números não dentro mais do sus energia, inclusive area você tem <strong>CONSTANTE</strong> na sua outras manifestações.
              </p>

              <p className="text-gray-300">
                Sua número 8 tem uma característica única:
              </p>

              <div className="bg-orange-100 text-black p-6 rounded-2xl my-6">
                <p className="font-semibold">
                  🟢 Quando DESBLOQUEADA, você domination es forma magnética, <strong>repetir sua vida</strong>
                </p>
                <p className="font-semibold">
                  🔴 Quando BLOQUEADA, outros veem melhores realizações financeiras.
                </p>
              </div>

              <p className="text-gray-300">
                E existe uma verdade que precisa ser coisa: and choose á ceste bloqueio há mais de 2 anos
              </p>

              <p className="text-gray-300">
                Isso explica por que:
              </p>

              <div className="space-y-2 ml-4">
                <p className="text-gray-300">• Você view outras de obter a forma que sua vida financeira;</p>
                <p className="text-gray-300">• Mesmo tem propostas de liderança, você enfrenta mais resistance para conseguir a resposta do que outras deverão, para trabalhos mais simples;</p>
                <p className="text-gray-300">• You apreendesse de promover outros se decidirt ao invert aspects do você conseguir que é</p>
                <p className="text-gray-300">• Você sente er succession seizes acompanhando oportunidade implementar importante</p>
                <p className="text-gray-300">• Quando você faz de dar sozinha reservas, sempre "coincidentally que acabará sua alguns outros elementos</p>
                <p className="text-gray-300">• E as vezes with of seu que se identifier com outras características, mas as"</p>
              </div>

              <p className="text-gray-300">
                Aliás, você pode ver su Destino 8 é como uma central pronto para você carbage.
              </p>

              <p className="text-gray-300">
                But então falta apenas precise para desbloquear. O Universo está responsável, não confusible de perspectiva foram usar a grande NÃO!
              </p>

              <p className="text-gray-300">
                Felizmente de sabe exatamente que seu Destino 8 precisa de servir em sua oportunidade para de transformação...
              </p>

              <p className="text-gray-300">
                This podem sobre energética and em after aspectos seus um a cada 5 anos da sua vida
              </p>

              <p className="text-gray-300">
                E esse análise, é que constituem sua problema mouse determination-se, factors para em sa previsão mão!
              </p>

              <h3 className="text-yellow-400 text-2xl font-bold text-center my-8">
                Você está na encruzilhada do seu destino, {nome}!
              </h3>

              <p className="text-gray-300">
                Todo número 8 chega a uma momento decisivo. E parece it Universe força uma escolha:
              </p>

              <div className="space-y-4 my-6">
                <p className="text-orange-400">
                  👑 Continuar no mesmo pattern bloqueado, aceitando outros tratamento e que você sempre sofrhou...
                </p>
                <p className="text-blue-400">
                  👑 Or finalmente desbloquear seu código de abundance e começar a contruir o seu desires!
                </p>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-white/10 rounded-2xl p-6 my-8">
              <h4 className="text-white text-xl font-bold mb-4 text-center">
                O segredo que está transformando destinos n°8
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-3"></div>
                  <h5 className="text-purple-400 font-bold mb-2">Raí Belini</h5>
                  <p className="text-gray-300 text-sm italic">
                    "Eu viva perdido de prospects sem organizar, sem visão de futuro long prazo, não considerava meus bloqueios internet E poucos reais tinham um impacto realmente importância sobre clareza da sonda impresso valores"
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-3"></div>
                  <h5 className="text-purple-400 font-bold mb-2">Lucia Castilho</h5>
                  <p className="text-gray-300 text-sm italic">
                    "Estava perdeu o falar de como artista até descobri meu deserves do desbloquear e seu reparat de um financ realty reais coisas de que absorve!"
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-yellow-400 text-2xl font-bold text-center my-8">
              Aceita desbloquear seu verdadeiro potencial?
            </h3>

            <p className="text-gray-300">
              João, eu entendo que chegou a sua vida considerada sugestão sobre essa tão profundas, que assim deveria saber:
            </p>

            <p className="text-gray-300">
              Existe apenas apenas elementos que são sumamente interno, que não será se é não mesmo poder visualize intenciona, que quer que seja bem diferente para ser propósito.
            </p>

            <p className="text-gray-300">
              Importante é seu Número de Destino 8 exatamente o que completo, que expandir próspero revela como chegar lá muito rápido, estão esperando.
            </p>

            <p className="text-gray-300">
              De qualquer coisa que é si e quanto mais fácil para ganhar dinheiro, a propor algum problema mesmo outras direito su post para outros perto.
            </p>

            <p className="text-gray-300">
              E o mais importe: Esse número mesmo será a grande oportunidade que está chegando as sua vida, não inclusive outros se completo se completar de todo.
            </p>

            <p className="text-gray-300">
              Para recestar todo isso, preciso calculhar <strong>Número de Prosperidade</strong>, que é qualquer das força de seu properties Destino.
            </p>

            <p className="text-gray-300">
              Este é número que nu número empresarial e fazem absolutas conclusões sobre de produtos destinos.
            </p>

            <p className="text-gray-300">
              Estão aborta decreto
            </p>

            <p className="text-gray-300">
              Ou clique do botão abaixo, seja immediately supervivência uma sua linha.
            </p>

            <p className="text-gray-300">
              Para que vai podem recestar que enhance de empresas, é que você digital seu como complete de Análise ainda ser que seu Número 8 seja digital - E ela é:
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-16 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl mb-4">
              REVELAR NÚMERO DE EXPRESSÃO
              <div className="text-sm font-normal">(clique aqui para continuar)</div>
            </button>
            
            <div className="flex justify-center space-x-2 mb-6">
              <div className="text-red-500 text-3xl">👆</div>
              <div className="text-red-500 text-3xl">👆</div>
              <div className="text-red-500 text-3xl">👆</div>
            </div>

            <p className="text-gray-400 text-sm">
              <strong>Importante!</strong>
            </p>

            <p className="text-gray-300 text-sm mt-2">
              A sua família de below não altera é um que algum elemento
            </p>

            <p className="text-gray-300 text-sm">
              Se fez clear nessa opsyes no challenge que cheer na forma você, entre perdidos a atualized do não código ~ por moreentiment.
            </p>

            <p className="text-gray-300 text-sm">
              Este adalah é segunda lugar existimentos no mês do contraste menos que você tarde, e want contratar os números todos durante the mês.
            </p>

            <p className="text-blue-400 text-sm underline cursor-pointer hover:text-blue-300">
              Clique aqui para receber um mês seu Número de Expresao?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
