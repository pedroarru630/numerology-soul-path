
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
              <strong className="text-yellow-400">{nome}</strong>... Você consegue sentir?
            </p>

            <p className="text-gray-300">
              Aquela sensação de que algo está diferente hoje?
            </p>

            <p className="text-gray-300">
              Não é coincidência você estar aqui agora, neste exato momento.
            </p>

            <p className="text-gray-300">
              As energias do Universo te guiaram até mim.
            </p>

            <p className="text-gray-300">
              Nos próximos minutos, vou te contar um segredo sobre você que pode mudar tudo na sua vida.
            </p>

            <p className="text-blue-400">
              É algo tão verdadeiro sobre quem você é, que você vai se perguntar: "Como ele sabe tanto sobre mim?"
            </p>

            <p className="text-gray-300">
              Você já parou pra pensar por que algumas pessoas parecem nascer com sorte...
            </p>

            <p className="text-gray-300">
              Enquanto outras, vivem batendo cabeça, com problemas que nunca acabam?
            </p>

            <p className="text-gray-300">
              A resposta está mais perto do que você pensa.
            </p>

            <p className="text-gray-300">
              Na verdade, está bem aí... Codificada no seu nome e na data do seu nascimento.
            </p>

            <p className="text-gray-300">
              É aí que entra a numerologia, a ciência antiga que celebridades e pessoas de sucesso sempre consultam, antes de tomar decisões importantes.
            </p>

            <p className="text-gray-300">
              E hoje, os números estão mostrando algo incrível sobre VOCÊ.
            </p>

            <p className="text-gray-300">
              Eu sou Artam Ferreira, numerólogo e clarividente há mais de 20 anos.
            </p>

            <p className="text-gray-300">
              E algo muito raro aconteceu quando você informou sua data de nascimento, em nosso teste online de numerologia.
            </p>

            <p className="text-gray-300">
              Vi que os números da sua vida estão finalmente se alinhando, depois de ficarem travados por muito tempo.
            </p>

            <p className="text-gray-300">
              Isso explica TUDO o que está acontecendo com você agora.
            </p>

            <p className="text-gray-300">
              Eu vou começar revelando o primeiro deles: O seu Número do Destino...
            </p>

            <div className="text-center my-8">
              <h3 className="text-yellow-400 text-2xl font-bold mb-4">
                {nome}, Seu Número de Destino Tem Uma Mensagem Urgente...
              </h3>
            </div>

            <p className="text-gray-300">
              Existem 11 números importantes no seu Mapa Numerológico pessoal.
            </p>

            <p className="text-gray-300">
              Desses todos, o Número de Destino é considerado um dos mais poderosos e reveladores.
            </p>

            <p className="text-gray-300">
              Para descobrir qual é o seu, precisamos usar o dia, o mês e o ano em que você nasceu.
            </p>

            <p className="text-blue-400">
              Este número é como um mapa do tesouro da sua vida. Ele mostra:
            </p>

            <div className="space-y-2 ml-6">
              <p className="text-orange-400">🟡 O caminho que você deve seguir</p>
              <p className="text-orange-400">🔴 Os talentos que você nem sabe que tem</p>
              <p className="text-blue-400">🔵 Por que algumas coisas ficam se repetindo na sua vida</p>
              <p className="text-purple-400">🔵⚫ E os problemas que você veio para resolver</p>
            </div>

            <p className="text-gray-300">
              Vamos descobrir o seu Número de Destino agora:
            </p>

            {/* Calculation Grid */}
            <div className="bg-white/10 rounded-2xl p-6 text-center my-8">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-600 text-white p-4 rounded">{dia}</div>
                <div className="bg-purple-600 text-white p-4 rounded">→</div>
                <div className="bg-green-600 text-white p-4 rounded">{dia}</div>
                <div className="bg-blue-600 text-white p-4 rounded">{mes}</div>
                <div className="bg-purple-600 text-white p-4 rounded">→</div>
                <div className="bg-green-600 text-white p-4 rounded">4</div>
                <div className="bg-blue-600 text-white p-4 rounded">{ano}</div>
                <div className="bg-purple-600 text-white p-4 rounded">→</div>
                <div className="bg-green-600 text-white p-4 rounded">2</div>
              </div>
              <div className="text-white text-lg mb-2">Somando tudo: {dia} + 4 + 2 = {score}</div>
              <div className="text-white text-lg mb-4">Seu Número de Destino é:</div>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">{score}</span>
              </div>
            </div>

            {/* Main Sales Copy */}
            <div className="space-y-4">
              <p className="text-gray-300">
                Então, seu Número de Destino é <strong className="text-yellow-400">{score}!</strong>
              </p>

              <p className="text-gray-300">
                Você nasceu com o arquétipo do <strong>MANIFESTADOR PRÓSPERO</strong>, um dos perfis mais influentes e abundantes do universo numerológico!
              </p>

              <p className="text-gray-300">
                Já notou como você naturalmente assume posições de autoridade e liderança? Como as pessoas instintivamente respeitam sua opinião em assuntos importantes?
              </p>

              <p className="text-gray-300">
                Não é coincidência. É seu número {score} em ação!
              </p>

              <p className="text-gray-300">
                Você possui uma energia de comando que naturalmente atrai respeito e reconhecimento.
              </p>

              <p className="text-gray-300">
                Sua visão estratégica e capacidade de tomar decisões importantes fazem com que outros confiem em sua orientação, reconhecendo uma autoridade natural que você carrega sem esforço.
              </p>

              <p className="text-gray-300">
                É enquanto outros hesitam diante de grandes desafios, você os enfrenta com confiança!
              </p>

              <p className="text-gray-300">
                Você tem uma capacidade extraordinária de visualizar o sucesso em grande escala, enxergando o potencial máximo onde a maioria apenas vê obstáculos intransponíveis.
              </p>

              <p className="text-gray-300">
                Este é seu verdadeiro superpoder!
              </p>

              <p className="text-gray-300">
                Além disso, você domina a arte da manifestação material.
              </p>

              <p className="text-gray-300">
                Onde muitos sonham com prosperidade, você possui a determinação e o senso prático para transformar ambições em resultados concretos, com uma eficiência natural e força de vontade que impressionam todos ao seu redor.
              </p>

              <p className="text-gray-300">
                Pense bem: Não é verdade que você se sente completamente realizado quando está gerenciando recursos, liderando projetos importantes ou construindo algo de valor duradouro?
              </p>

              <p className="text-gray-300">
                Que situações onde você pode exercer controle ou influência parecem contrastar sua natureza empreendedora?
              </p>

              <p className="text-gray-300">
                Você nasceu para liderar, manifestar e prosperar!
              </p>

              <p className="text-gray-300">
                E esta é precisamente a razão pela qual este momento é tão importante na sua vida...
              </p>

              <h3 className="text-yellow-400 text-2xl font-bold text-center my-8">
                Por que o dinheiro CONTINUA escapando?
              </h3>

              <p className="text-gray-300">
                {nome}, você já se perguntou por que, mesmo com sua visão estratégica e capacidade executiva, o dinheiro parece nunca ficar nas suas mãos?
              </p>

              <p className="text-red-400">
                É como se existisse um ponto cego na sua energia, invisível para você, mas <strong>GRITANTE</strong> na sua análise numerológica.
              </p>

              <p className="text-gray-300">
                Seu número {score} tem uma característica única:
              </p>

              <div className="bg-orange-100 text-black p-6 rounded-2xl my-6">
                <p className="font-semibold">
                  ✅ <strong>Quando DESBLOQUEADO:</strong> atrai abundância de forma magnética, como um ímã
                </p>
                <p className="font-semibold">
                  ❌ <strong>Quando BLOQUEADO:</strong> sabota seus melhores esforços financeiros
                </p>
              </div>

              <p className="text-gray-300">
                E aqui está a verdade que preciso te contar: seu número {score} está bloqueado há mais de 2 anos.
              </p>

              <p className="text-gray-300">
                Isso explica por que:
              </p>

              <div className="space-y-2 ml-4">
                <p className="text-gray-300">→ Você vive <strong>ciclos de altos e baixos</strong> em sua vida financeira...</p>
                <p className="text-gray-300">→ Mesmo em posições de liderança, você enfrenta mais resistência do que seria natural, para que as outras pessoas abracem suas ideias</p>
                <p className="text-gray-300">→ Sua necessidade de gerenciar todos os detalhes às vezes impede que você delegue o que é preciso, para o crescimento</p>
                <p className="text-gray-300">→ Seu foco no sucesso externo ocasionalmente compromete relacionamentos importantes</p>
                <p className="text-gray-300">→ Quando está perto de grandes avanços, surgem "coincidências" que atrasam sua ascensão</p>
              </div>

              <p className="text-gray-300">
                E eu estou certo de que você se identifica com essas situações, não é?
              </p>

              <p className="text-gray-300">
                Afinal, este ponto cego do Destino {score} é como uma âncora pesada que você carrega.
              </p>

              <p className="text-gray-300">
                Por isso, mesmo tendo potencial para abundância, o Universo tem respondido seus pedidos de prosperidade com um grande NÃO.
              </p>

              <p className="text-gray-300">
                O que você ainda não sabe é que seu Destino {score} acabou de entrar em um período raro de transformação...
              </p>

              <p className="text-gray-300">
                Estou falando de uma janela energética que se abre apenas uma vez a cada 9 anos da sua vida.
              </p>

              <p className="text-gray-300">
                E por esse motivo, o que acontecer nos próximos meses determinará seu futuro para os próximos anos!
              </p>

              <h3 className="text-yellow-400 text-2xl font-bold text-center my-8">
                Você está na encruzilhada do seu destino, {nome}!
              </h3>

              <p className="text-gray-300">
                Todo número {score} chega a esse momento decisivo. É quando o Universo força uma escolha:
              </p>

              <div className="space-y-4 my-6">
                <p className="text-orange-400">
                  🟡 Continuar no mesmo padrão bloqueado, assistindo outros realizarem o que você sempre sonhou...
                </p>
                <p className="text-blue-400">
                  🔵 Ou finalmente desbloquear seu código de abundância e assumir o controle do seu destino
                </p>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-white/10 rounded-2xl p-6 my-8">
              <h4 className="text-white text-xl font-bold mb-4 text-center">
                O segredo que está transformando destinos n°{score}
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-3"></div>
                  <h5 className="text-purple-400 font-bold mb-2">Rui Betini</h5>
                  <p className="text-gray-300 text-sm">
                    <small>(também número {score})</small>
                  </p>
                  <p className="text-gray-300 text-sm italic">
                    "Eu vivia pulando de emprego em emprego, sempre insatisfeito. Depois que Artam identificou meu bloqueio do número {score}, consegui focar minha energia. Em 47 dias, paguei todas minhas dívidas e ainda comecei meu próprio negócio!"
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-3"></div>
                  <h5 className="text-purple-400 font-bold mb-2">Lúcia Castilho</h5>
                  <p className="text-gray-300 text-sm">
                    <small>(também número {score})</small>
                  </p>
                  <p className="text-gray-300 text-sm italic">
                    "Estava prestes a desistir do meu sonho quando descobri meu ponto cego. Apliquei a técnica de desbloqueio e, em menos de um mês, recebi três propostas de trabalho. Minha renda mais que dobrou!"
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-yellow-400 text-2xl font-bold text-center my-8">
              Aceita desbloquear seu verdadeiro potencial?
            </h3>

            <p className="text-gray-300">
              {nome}, os números que regem a sua vida escondem segredos ainda mais profundos, que quero revelar a você.
            </p>

            <p className="text-gray-300">
              Existe um segundo número na sua numerologia pessoal, que diz qual é o seu maior poder interno, e qual o seu potencial para o futuro.
            </p>

            <p className="text-gray-300">
              Enquanto o seu Número de Destino {score} apontou o seu caminho, este segundo número revela como chegar lá mais rápido, e sem errar.
            </p>

            <p className="text-gray-300">
              Ele também explica qual é o caminho mais fácil para ganhar dinheiro, e porque alguns trabalhos nunca deram certo para você.
            </p>

            <p className="text-gray-300">
              E o mais incrível... Esse número mostra qual é a grande oportunidade que está chegando na sua vida, nos próximos meses, e como se preparar para ela.
            </p>

            <p className="text-gray-300">
              Para acessar tudo isso, preciso calcular seu <strong>Número de Expressão</strong>, que é extraído das letras do seu nome completo de nascimento, igual está na sua certidão.
            </p>

            <p className="text-gray-300">
              Este é o número que os maiores empresários e líderes mundiais consultam antes de grandes decisões...
            </p>

            <p className="text-gray-300">
              Então preste atenção:
            </p>

            <p className="text-gray-300">
              Ao clicar no botão abaixo, um formulário aparecerá em sua tela.
            </p>

            <p className="text-gray-300">
              Para que eu possa revelar seu número de expressão, é só você digitar seu nome completo de nascimento, igual está na sua certidão. É só clicar...
            </p>

            {/* Celebrity Images Section */}
            <div className="bg-white/10 rounded-2xl p-6 my-8">
              <img 
                src="/lovable-uploads/1d5c84df-8e61-4d54-9a70-4676148ced74.png"
                alt="Celebridades e numerologia" 
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-16 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl mb-4">
              REVELAR NÚMERO DE EXPRESSÃO
              <div className="text-sm font-normal">(Clique aqui para continuar)</div>
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
              A sua janela de leitura está aberta só por alguns minutos.
            </p>

            <p className="text-gray-300 text-sm">
              Se fechar essa página ou demorar para clicar no botão verde, você perdera a revelação do seu código da prosperidade, que pode desbloquear todo o seu potencial...
            </p>

            <p className="text-gray-300 text-sm">
              Isso inclui o segredo para reconhecer os sinais do universo antes que seja tarde, e como aproveitar os momentos decisivos que estão por vir no futuro.
            </p>

            <p className="text-blue-400 text-sm underline cursor-pointer hover:text-blue-300">
              » Clique para revelar a análise do seu Número de Expressão «
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
