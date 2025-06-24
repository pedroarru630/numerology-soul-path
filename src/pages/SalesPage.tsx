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

  const getArchetypeText = (scoreValue: string) => {
    switch (scoreValue) {
      case '1':
        return (
          <>
            <p className="text-gray-300">
              Você nasceu com o arquétipo do <strong>LÍDER PIONEIRO</strong>, um dos perfis mais poderosos e determinados do universo numerológico!
            </p>

            <p className="text-gray-300">
              Já notou como você frequentemente se encontra assumindo a liderança em situações, mesmo quando não planejou fazê-lo?
            </p>

            <p className="text-gray-300">
              Como suas ideias originais tendem a abrir novos caminhos?
            </p>

            <p className="text-gray-300">
              Não é coincidência. É seu número {scoreValue} em ação!
            </p>

            <p className="text-gray-300">
              Você possui uma energia independente que naturalmente comanda respeito e atenção.
            </p>

            <p className="text-gray-300">
              Sua determinação inabalável e visão clara fazem com que outros busquem sua orientação e conselhos, reconhecendo uma força interior que você às vezes subestima.
            </p>

            <p className="text-gray-300">
              E enquanto outros hesitam diante de novos territórios, você avança com coragem!
            </p>

            <p className="text-gray-300">
              Você tem uma capacidade extraordinária de traçar seu próprio caminho, enxergando soluções originais onde a maioria apenas segue fórmulas estabelecidas.
            </p>

            <p className="text-gray-300">
              Este é seu verdadeiro superpoder!
            </p>

            <p className="text-gray-300">
              Além disso, você domina a arte de transformar ideias em realidade.
            </p>

            <p className="text-gray-300">
              Onde muitos permanecem no reino dos sonhos e teorias, você possui a iniciativa e força de vontade para materializar seus planos com uma determinação que poucos conseguem igualar.
            </p>

            <p className="text-gray-300">
              Pense bem: Não é verdade que você sente muita realização quando está criando algo novo, liderando um projeto ou seguindo seu próprio caminho?
            </p>

            <p className="text-gray-300">
              Que depender das decisões dos outros ou seguir regras impostas por terceiros parece sufocar sua verdadeira natureza?
            </p>

            <p className="text-gray-300">
              Você nasceu para iniciar, liderar e conquistar!
            </p>

            <p className="text-gray-300">
              E esta é precisamente a razão pela qual este momento é tão crucial na sua vida...
            </p>
          </>
        );

      case '3':
        return (
          <>
            <p className="text-gray-300">
              Então, seu Número de Destino é <strong className="text-yellow-400">{scoreValue}!</strong>
            </p>

            <p className="text-gray-300">
              Você nasceu com o arquétipo do <strong>COMUNICADOR CRIATIVO</strong>, um dos perfis mais expressivos e inspiradores do universo numerológico!
            </p>

            <p className="text-gray-300">
              Já notou como você frequentemente se torna o centro das atenções em grupos sociais?
            </p>

            <p className="text-gray-300">
              Como as pessoas naturalmente sorriem e se animam em sua presença?
            </p>

            <p className="text-gray-300">
              Não é coincidência. É seu número {scoreValue} em ação!
            </p>

            <p className="text-gray-300">
              Você possui uma energia vibrante que naturalmente ilumina ambientes e eleva o humor das pessoas.
            </p>

            <p className="text-gray-300">
              Seu charme natural e habilidade de expressão fazem com que outros se sintam instantaneamente confortáveis ao seu lado, absorvendo a alegria que você transmite sem esforço.
            </p>

            <p className="text-gray-300">
              E enquanto outros lutam para encontrar as palavras certas, você se comunica com fluidez e criatividade!
            </p>

            <p className="text-gray-300">
              Você tem uma capacidade extraordinária de transformar ideias em histórias cativantes, encontrando o humor e a beleza em situações onde a maioria só vê o comum.
            </p>

            <p className="text-gray-300">
              Este é seu verdadeiro superpoder!
            </p>

            <p className="text-gray-300">
              Além disso, você domina a arte da expressão criativa.
            </p>

            <p className="text-gray-300">
              Onde muitos reprimem seus talentos artísticos, você possui uma capacidade natural de manifestar sua imaginação de formas que inspiram e encantam aqueles ao seu redor.
            </p>

            <p className="text-gray-300">
              Pense bem: Não é verdade que você sente muito mais realização quando está expressando suas ideias, fazendo os outros rirem ou criando algo que toca emocionalmente as pessoas?
            </p>

            <p className="text-gray-300">
              Que ambientes rígidos e sérios parecem sufocar sua verdadeira natureza radiante?
            </p>

            <p className="text-gray-300">
              Você nasceu para inspirar, criar e iluminar!
            </p>

            <p className="text-gray-300">
              E esta é precisamente a razão pela qual este momento é tão decisivo na sua vida...
            </p>
          </>
        );

      case '4':
        return (
          <>
            <p className="text-gray-300">
              Então, seu Número de Destino é <strong className="text-yellow-400">{scoreValue}!</strong>
            </p>

            <p className="text-gray-300">
              Você nasceu com o arquétipo do <strong>CONSTRUTOR METÓDICO</strong>, um dos perfis mais confiáveis e fundamentais do universo numerológico!
            </p>

            <p className="text-gray-300">
              Já notou como você frequentemente se torna a pessoa em quem todos confiam para concretizar projetos importantes?
            </p>

            <p className="text-gray-300">
              Como as pessoas naturalmente recorrem a você quando precisam de soluções práticas e confiáveis?
            </p>

            <p className="text-gray-300">
              Não é coincidência. É seu número {scoreValue} em ação!
            </p>

            <p className="text-gray-300">
              Você possui uma energia estável que naturalmente transmite segurança e confiabilidade.
            </p>

            <p className="text-gray-300">
              Sua atenção aos detalhes e capacidade de criar sistemas eficientes fazem com que outros dependam do seu senso prático, reconhecendo uma solidez que poucos conseguem oferecer.
            </p>

            <p className="text-gray-300">
              E enquanto outros se perdem em sonhos e teorias, você transforma ideias em realidade concreta!
            </p>

            <p className="text-gray-300">
              Você tem uma capacidade extraordinária de estabelecer fundações sólidas e estruturas duradouras, enxergando cada etapa necessária onde a maioria só vê o resultado final.
            </p>

            <p className="text-gray-300">
              Este é seu verdadeiro superpoder!
            </p>

            <p className="text-gray-300">
              Além disso, você domina a arte da persistência disciplinada.
            </p>

            <p className="text-gray-300">
              Onde muitos desistem diante dos primeiros obstáculos, você mantém um comprometimento inabalável com seus objetivos, com uma determinação e ética de trabalho que impressiona todos ao seu redor.
            </p>

            <p className="text-gray-300">
              Pense bem: Não é verdade que você sente grande satisfação quando completa um projeto meticulosamente planejado, quando estabelece uma rotina eficiente ou quando cria algo de valor duradouro?
            </p>

            <p className="text-gray-300">
              Que ambientes desorganizados e planos mal definidos parecem contrariar sua natureza estruturada?
            </p>

            <p className="text-gray-300">
              Você nasceu para construir, organizar e estabilizar!
            </p>

            <p className="text-gray-300">
              E esta é precisamente a razão pela qual este momento é tão importante na sua vida...
            </p>
          </>
        );

      case '5':
        return (
          <>
            <p className="text-gray-300">
              Então, seu Número de Destino é <strong className="text-yellow-400">{scoreValue}!</strong>
            </p>

            <p className="text-gray-300">
              Isso significa que você nasceu com o arquétipo do <strong>AVENTUREIRO</strong>, um dos perfis mais poderosos e abundantes do universo numerológico!
            </p>

            <p className="text-gray-300">
              Já notou como a vida parece te trazer constantemente novas experiências e oportunidades?
            </p>

            <p className="text-gray-300">
              Como as pessoas são naturalmente atraídas pela sua energia?
            </p>

            <p className="text-gray-300">
              Não é coincidência. É seu número {scoreValue} em ação!
            </p>

            <p className="text-gray-300">
              Você tem uma energia magnética que naturalmente atrai pessoas interessantes e situações estimulantes.
            </p>

            <p className="text-gray-300">
              Sua curiosidade insaciável e forma única de ver o mundo fazem com que outros gravitem ao seu redor, absorvendo um pouco dessa vibração especial que você irradia naturalmente.
            </p>

            <p className="text-gray-300">
              E enquanto outros resistem a mudanças, você prospera nelas!
            </p>

            <p className="text-gray-300">
              Você tem uma capacidade extraordinária de transformar caos em oportunidade, enxergando possibilidades onde a maioria só vê problemas.
            </p>

            <p className="text-gray-300">
              Este é o seu verdadeiro superpoder!
            </p>

            <p className="text-gray-300">
              Além disso, você domina a arte de equilibrar múltiplas responsabilidades ao mesmo tempo.
            </p>

            <p className="text-gray-300">
              Onde muitos se sentiriam sobrecarregados com tantas tarefas, você navega entre diferentes projetos com uma facilidade que impressiona.
            </p>

            <p className="text-gray-300">
              Pense bem: Não é verdade que você se sente muito bem quando está conhecendo pessoas novas, visitando lugares diferentes ou embarcando em uma nova aventura?
            </p>

            <p className="text-gray-300">
              Que rotina e repetição são quase como prisões para seu espírito livre?
            </p>

            <p className="text-gray-300">
              Você nasceu para explorar, descobrir e transformar!
            </p>

            <p className="text-gray-300">
              E esta é precisamente a razão pela qual este momento é tão crucial na sua vida...
            </p>
          </>
        );

      case '6':
        return (
          <>
            <p className="text-gray-300">
              Então, seu Número de Destino é <strong className="text-yellow-400">{scoreValue}!</strong>
            </p>

            <p className="text-gray-300">
              Você nasceu com o arquétipo do <strong>GUARDIÃO</strong>, um dos perfis mais amorosos e responsáveis do universo numerológico!
            </p>

            <p className="text-gray-300">
              Já notou como você frequentemente se torna o pilar de apoio para família e amigos? Como as pessoas naturalmente compartilham seus problemas com você, buscando seu conselho e orientação?
            </p>

            <p className="text-gray-300">
              Não é coincidência. É seu número {scoreValue} em ação!
            </p>

            <p className="text-gray-300">
              Você possui uma energia nutriente que naturalmente cria harmonia e beleza ao seu redor.
            </p>

            <p className="text-gray-300">
              Seu senso inato de responsabilidade e capacidade de cuidar dos outros fazem com que as pessoas se sintam seguras e amparadas em sua presença, reconhecendo uma sabedoria amorosa que emana naturalmente de você.
            </p>

            <p className="text-gray-300">
              E enquanto outros fogem de compromissos e responsabilidades, você os abraça com dignidade!
            </p>

            <p className="text-gray-300">
              Você tem uma capacidade extraordinária de equilibrar as necessidades de todos à sua volta, criando ambientes onde as pessoas se sentem valorizadas e compreendidas. Este é seu verdadeiro superpoder!
            </p>

            <p className="text-gray-300">
              Além disso, você domina a arte de transformar casas em lares. Onde muitos criam apenas espaços funcionais, você cria santuários de harmonia e beleza, com uma sensibilidade estética e atenção aos detalhes que tornam tudo mais especial e acolhedor.
            </p>

            <p className="text-gray-300">
              Pense bem: Não é verdade que você se sente profundamente realizado quando consegue resolver os problemas dos outros, quando cria ambientes harmoniosos ou quando vê as pessoas que ama felizes e bem cuidadas?
            </p>

            <p className="text-gray-300">
              Que ambientes de conflito e desarmonia parecem afrontar sua natureza conciliadora?
            </p>

            <p className="text-gray-300">
              Você nasceu para nutrir, harmonizar e proteger!
            </p>

            <p className="text-gray-300">
              E esta é precisamente a razão pela qual este momento é tão importante na sua vida...
            </p>
          </>
        );

      case '7':
        return (
          <>
            <p className="text-gray-300">
              Então, seu Número de Destino é <strong className="text-yellow-400">{scoreValue}!</strong>
            </p>

            <p className="text-gray-300">
              Você nasceu com o arquétipo do <strong>SÁBIO ANALÍTICO</strong>, um dos perfis mais intuitivos e perspicazes do universo numerológico!
            </p>

            <p className="text-gray-300">
              Já notou como você frequentemente percebe verdades e padrões ocultos que passam despercebidos para os outros?
            </p>

            <p className="text-gray-300">
              Como as pessoas naturalmente buscam sua opinião sobre questões complexas e profundas?
            </p>

            <p className="text-gray-300">
              Não é coincidência. É seu número {scoreValue} em ação!
            </p>

            <p className="text-gray-300">
              Você possui uma energia contemplativa que naturalmente penetra além das aparências superficiais.
            </p>

            <p className="text-gray-300">
              Sua mente analítica e intuição refinada fazem com que outros respeitem sua visão única, reconhecendo uma profundidade intelectual e espiritual que poucos conseguem acessar.
            </p>

            <p className="text-gray-300">
              E enquanto outros se contentam com explicações superficiais, você busca incansavelmente a verdade essencial!
            </p>

            <p className="text-gray-300">
              Você tem uma capacidade extraordinária de conectar pontos aparentemente desconexos, revelando significados ocultos onde a maioria apenas vê eventos aleatórios. Este é seu verdadeiro superpoder!
            </p>

            <p className="text-gray-300">
              Além disso, você domina a arte da introspecção consciente. Onde muitos temem a solidão, você encontra clareza e força no silêncio, com uma riqueza de vida interior que surpreenderia a maioria das pessoas que conhece apenas seu lado exterior.
            </p>

            <p className="text-gray-300">
              Pense bem: Não é verdade que você se sente profundamente satisfeito quando está investigando mistérios, desvendando conhecimentos complexos ou dedicando tempo à reflexão e ao autoconhecimento?
            </p>

            <p className="text-gray-300">
              Que ambientes superficiais e conversas triviais parecem drenar sua energia natural?
            </p>

            <p className="text-gray-300">
              Você nasceu para analisar, compreender e iluminar!
            </p>

            <p className="text-gray-300">
              E esta é precisamente a razão pela qual este momento é tão importante na sua vida...
            </p>
          </>
        );

      case '9':
        return (
          <>
            <p className="text-gray-300">
              Então, seu Número de Destino é <strong className="text-yellow-400">{scoreValue}!</strong>
            </p>

            <p className="text-gray-300">
              Você nasceu com o arquétipo do <strong>HUMANITÁRIO ILUMINADO</strong>, um dos perfis mais compassivos e universais do universo numerológico!
            </p>

            <p className="text-gray-300">
              Já notou como você naturalmente enxerga além das aparências e conecta-se com a essência das pessoas?
            </p>

            <p className="text-gray-300">
              Como frequentemente sente as dores e alegrias dos outros como se fossem suas próprias?
            </p>

            <p className="text-gray-300">
              Não é coincidência. É seu número {scoreValue} em ação!
            </p>

            <p className="text-gray-300">
              Você possui uma energia elevada que naturalmente inspira e transforma.
            </p>

            <p className="text-gray-300">
              Sua visão abrangente e capacidade de perdoar fazem com que outros se sintam compreendidos em um nível profundo, reconhecendo uma sabedoria compassiva que você transmite mesmo sem palavras.
            </p>

            <p className="text-gray-300">
              E enquanto outros se prendem a mágoas e ressentimentos, você tem a capacidade de soltar e transcender!
            </p>

            <p className="text-gray-300">
              Você possui uma habilidade extraordinária de enxergar o quadro completo da vida, percebendo conexões e significados onde a maioria apenas vê eventos isolados. Este é seu verdadeiro superpoder!
            </p>

            <p className="text-gray-300">
              Além disso, você domina a arte da inspiração altruísta.
            </p>

            <p className="text-gray-300">
              Onde muitos buscam apenas benefícios pessoais, você encontra profunda satisfação em contribuir para algo maior que você mesmo, com uma generosidade e idealismo que elevam todos ao seu redor.
            </p>

            <p className="text-gray-300">
              Pense bem: Não é verdade que você sente muito mais satisfação quando está ajudando os outros, expressando sua criatividade ou contribuindo para uma causa que transcende interesses individuais?
            </p>

            <p className="text-gray-300">
              Que ambientes de competição egoísta e materialismo vazio parecem contradizer sua natureza elevada?
            </p>

            <p className="text-gray-300">
              Você nasceu para inspirar, transformar e transcender!
            </p>

            <p className="text-gray-300">
              E esta é precisamente a razão pela qual este momento é tão importante na sua vida...
            </p>
          </>
        );

      case '11':
        return (
          <>
            <p className="text-gray-300">
              Então, seu Número de Destino é <strong className="text-yellow-400">{scoreValue}!</strong>
            </p>

            <p className="text-gray-300">
              Você nasceu com o arquétipo do <strong>VISIONÁRIO INTUITIVO</strong>, um dos perfis mais raros e iluminados do universo numerológico!
            </p>

            <p className="text-gray-300">
              Já notou como você frequentemente tem insights ou pressentimentos que depois se confirmam?
            </p>

            <p className="text-gray-300">
              Como as pessoas são naturalmente atraídas pela sua energia elevada e perspectivas inspiradoras?
            </p>

            <p className="text-gray-300">
              Não é coincidência. É seu número {scoreValue} em ação!
            </p>

            <p className="text-gray-300">
              Você possui uma energia altamente intuitiva que naturalmente conecta os mundos material e espiritual.
            </p>

            <p className="text-gray-300">
              Sua sensibilidade amplificada e capacidade de inspirar fazem com que outros busquem sua orientação nos momentos mais importantes, reconhecendo uma sabedoria que transcende o conhecimento comum.
            </p>

            <p className="text-gray-300">
              E enquanto outros permanecem presos à visão convencional da realidade, você acessa dimensões mais sutis!
            </p>

            <p className="text-gray-300">
              Você tem uma capacidade extraordinária de receber inspiração e visões do futuro, percebendo possibilidades elevadas onde a maioria apenas enxerga o óbvio e o material. Este é seu verdadeiro superpoder!
            </p>

            <p className="text-gray-300">
              Além disso, você domina a arte da inspiração transformadora.
            </p>

            <p className="text-gray-300">
              Onde muitos simplesmente comunicam informações, você transmite energia e luz através das suas palavras e presença, com uma capacidade natural de elevar a consciência daqueles que entram em contato com você.
            </p>

            <p className="text-gray-300">
              Pense bem: Não é verdade que você se sente uma maior sintonia quando está compartilhando sua visão com os outros, quando segue sua intuição profunda ou quando serve como ponte entre diferentes níveis de compreensão?
            </p>

            <p className="text-gray-300">
              Que ambientes puramente materialistas e céticos parecem sufocar sua verdadeira natureza visionária?
            </p>

            <p className="text-gray-300">
              Você nasceu para iluminar, inspirar e elevar!
            </p>

            <p className="text-gray-300">
              E esta é precisamente a razão pela qual este momento é tão importante na sua vida...
            </p>
          </>
        );

      case '22':
        return (
          <>
            <p className="text-gray-300">
              Então, seu Número de Destino é <strong className="text-yellow-400">{scoreValue}!</strong>
            </p>

            <p className="text-gray-300">
              Você nasceu com o arquétipo do <strong>CONSTRUTOR MESTRE</strong>, o mais raro e poderoso de todos os perfis do universo numerológico!
            </p>

            <p className="text-gray-300">
              Já notou como você naturalmente concebe ideias e projetos em escala grandiosa?
            </p>

            <p className="text-gray-300">
              Como as pessoas instintivamente reconhecem seu potencial para realizar coisas realmente extraordinárias?
            </p>

            <p className="text-gray-300">
              Não é coincidência. É seu número {scoreValue} em ação!
            </p>

            <p className="text-gray-300">
              Você possui uma energia monumental que naturalmente combina visão idealista com pragmatismo excepcional.
            </p>

            <p className="text-gray-300">
              Sua capacidade única de materializar sonhos ambiciosos faz com que outros confiem em seu julgamento, reconhecendo uma força construtora que pouquíssimas pessoas no mundo manifestam.
            </p>

            <p className="text-gray-300">
              E enquanto outros se limitam a pequenas realizações, você visualiza monumentos!
            </p>

            <p className="text-gray-300">
              Você tem uma capacidade extraordinária de transformar visões inspiradas em realidades concretas, criando estruturas e sistemas onde a maioria apenas vê possibilidades vagas. Este é seu verdadeiro superpoder!
            </p>

            <p className="text-gray-300">
              Além disso, você domina a arte de manifestação em larga escala.
            </p>

            <p className="text-gray-300">
              Onde muitos se contentam com realizações modestas, você possui a disciplina e a visão para criar legados duradouros, com uma capacidade de planejamento e execução que impressiona mesmo os mais bem-sucedidos ao seu redor.
            </p>

            <p className="text-gray-300">
              Pense bem: Não é verdade que você se sente um maior nível de realização quando está criando algo de impacto significativo, quando trabalha em projetos que beneficiam muitas pessoas ou quando transforma uma visão ambiciosa em realidade tangível?
            </p>

            <p className="text-gray-300">
              Que empreendimentos pequenos e sem visão maior parecem desperdiçar seu potencial inato?
            </p>

            <p className="text-gray-300">
              Você nasceu para conceber, construir e transformar em escala magistral!
            </p>

            <p className="text-gray-300">
              E esta é precisamente a razão pela qual este momento é tão importante na sua vida...
            </p>
          </>
        );

      default: // case '8' as default
        return (
          <>
            <p className="text-gray-300">
              Então, seu Número de Destino é <strong className="text-yellow-400">{scoreValue}!</strong>
            </p>

            <p className="text-gray-300">
              Você nasceu com o arquétipo do <strong>MANIFESTADOR PRÓSPERO</strong>, um dos perfis mais influentes e abundantes do universo numerológico!
            </p>

            <p className="text-gray-300">
              Já notou como você naturalmente assume posições de autoridade e liderança? Como as pessoas instintivamente respeitam sua opinião em assuntos importantes?
            </p>

            <p className="text-gray-300">
              Não é coincidência. É seu número {scoreValue} em ação!
            </p>

            <p className="text-gray-300">
              Você possui uma energia de comando que naturalmente atrai respeito e reconhecimento.
            </p>

            <p className="text-gray-300">
              Sua visão estratégica e capacidade de tomar decisões importantes fazem com que outros confiem em sua orientação, reconhecendo uma autoridade natural que você carrega sem esforço.
            </p>

            <p className="text-gray-300">
              E enquanto outros hesitam diante de grandes desafios, você os enfrenta com confiança!
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
              Onde muitos sonham com prosperidade, você possui a determinação e o senso prático para transformar ambições em resultados concretos, com uma eficiência e força de vontade que impressionam todos ao seu redor.
            </p>

            <p className="text-gray-300">
              Pense bem: Não é verdade que você se sente completamente realizado quando está gerenciando recursos, liderando projetos importantes ou construindo algo de valor duradouro?
            </p>

            <p className="text-gray-300">
              Que situações onde você não pode exercer controle ou influência parecem contrariar sua natureza empreendedora?
            </p>

            <p className="text-gray-300">
              Você nasceu para liderar, manifestar e prosperar!
            </p>

            <p className="text-gray-300">
              E esta é precisamente a razão pela qual este momento é tão importante na sua vida...
            </p>
          </>
        );
    }
  };

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

            {/* Dynamic Archetype Text Block */}
            <div className="space-y-4">
              {getArchetypeText(score)}

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
              Ele também explica qual é o caminho mais fácil para ganhar dinheiro, e porque algumas trabalhos nunca deram certo para você.
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
