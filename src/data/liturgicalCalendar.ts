export interface DailyReading {
  date: string;
  liturgicalSeason: string;
  color: string;
  firstReading: {
    title: string;
    reference: string;
    text: string;
  };
  psalm: {
    title: string;
    reference: string;
    text: string;
    response: string;
  };
  secondReading?: {
    title: string;
    reference: string;
    text: string;
  };
  gospel: {
    title: string;
    reference: string;
    text: string;
  };
  reflection: string;
  saint: string;
  feast?: string;
}

// Calendário litúrgico com leituras específicas
export const liturgicalCalendar: { [key: string]: DailyReading } = {
  // 25 de dezembro - Natal
  '12-25': {
    date: '',
    liturgicalSeason: 'Natal',
    color: 'Branco',
    firstReading: {
      title: 'Primeira Leitura',
      reference: 'Isaías 9,1-6',
      text: 'O povo que andava nas trevas viu uma grande luz; para os que habitavam nas sombras da morte, uma luz resplandeceu. Multiplicaste a alegria, aumentaste o júbilo; eles se regozijam na tua presença, como se regozijam na colheita, como exultam quando repartem os despojos. Porque o jugo que oprimia o povo, a carga que pesava sobre seus ombros, o cetro do opressor, tu os quebraste como no dia de Madiã. Porque toda bota de guerreiro que marchava no tumulto e toda veste manchada de sangue serão queimadas, servirão de alimento ao fogo. Porque um menino nos nasceu, um filho nos foi dado; o poder está sobre seus ombros, e seu nome é: Conselheiro admirável, Deus forte, Pai para sempre, Príncipe da paz. Seu poder será grande, e a paz não terá fim sobre o trono de Davi e sobre seu reino, para estabelecê-lo e consolidá-lo pelo direito e pela justiça, desde agora e para sempre. O zelo do Senhor dos exércitos fará isso.'
    },
    psalm: {
      title: 'Salmo Responsorial',
      reference: 'Salmo 95(96)',
      response: 'Hoje nasceu para nós o Salvador, que é Cristo, o Senhor.',
      text: 'Cantai ao Senhor um canto novo, cantai ao Senhor, terra inteira! Cantai ao Senhor, bendizei seu nome, anunciai dia a dia sua salvação! Publicai entre as nações sua glória, e entre os povos do universo seus prodígios! Pois o Senhor é grande e muito digno de louvor, mais terrível que todos os deuses. Os deuses dos povos são apenas ídolos, mas o Senhor fez os céus. Majestade e esplendor o precedem, poder e glória habitam em seu santuário. Tributai ao Senhor, famílias dos povos, tributai ao Senhor glória e poder! Tributai ao Senhor a glória de seu nome, trazei oferendas e entrai em seus átrios! Adorai o Senhor em seu santo esplendor, trema diante dele toda a terra! Dizei entre as nações: "O Senhor reina! Ele firmou o universo inabalável, e governa os povos com justiça".'
    },
    gospel: {
      title: 'Evangelho',
      reference: 'Lucas 2,1-14',
      text: 'Naqueles dias, César Augusto publicou um decreto, ordenando o recenseamento de toda a terra. Este primeiro recenseamento foi feito quando Quirino era governador da Síria. Todos iam registrar-se, cada um na sua cidade natal. José também subiu da Galileia, da cidade de Nazaré, para a Judeia, à cidade de Davi, chamada Belém, porque era da casa e da família de Davi, para registrar-se com Maria, sua esposa, que estava grávida. Enquanto estavam em Belém, completaram-se os dias para o parto, e Maria deu à luz o seu filho primogênito. Ela o enfaixou e o colocou na manjedoura, pois não havia lugar para eles na hospedaria. Havia naquela região alguns pastores que passavam a noite nos campos, guardando seus rebanhos. O anjo do Senhor apareceu-lhes e a glória do Senhor resplandeceu ao redor deles, e ficaram com muito medo. O anjo disse-lhes: "Não tenhais medo! Eis que vos anuncio uma grande alegria, que será para todo o povo: hoje, na cidade de Davi, nasceu-vos um Salvador, que é o Cristo Senhor. Isto vos servirá de sinal: encontrareis um recém-nascido envolto em faixas e deitado numa manjedoura". E, de repente, juntou-se ao anjo uma multidão do exército celeste, que louvava a Deus, dizendo: "Glória a Deus no mais alto dos céus, e paz na terra aos homens por ele amados!"'
    },
    reflection: 'O Natal é a festa do amor de Deus que se fez homem para estar conosco. Jesus, o Verbo de Deus, nasce como uma criança frágil em Belém, mostrando que Deus escolheu o caminho da humildade e da simplicidade para nos salvar. Este mistério nos ensina que a verdadeira grandeza está no amor e no serviço, não no poder e na riqueza.',
    saint: 'Natal do Senhor',
    feast: 'Natal'
  },

  // 1º de maio - São José Operário
  '5-1': {
    date: '',
    liturgicalSeason: 'Tempo Comum',
    color: 'Branco',
    firstReading: {
      title: 'Primeira Leitura',
      reference: 'Gênesis 1,26-2,3',
      text: 'Disse Deus: "Façamos o homem à nossa imagem e semelhança. Que ele reine sobre os peixes do mar, sobre as aves dos céus, sobre os animais domésticos e sobre todos os répteis que rastejam sobre a terra". Deus criou o homem à sua imagem, à imagem de Deus o criou. Homem e mulher os criou. Deus os abençoou e lhes disse: "Sede fecundos e multiplicai-vos, enchei a terra e submetei-a. Dominai sobre os peixes do mar, sobre as aves dos céus e sobre todos os animais que rastejam sobre a terra". Deus disse: "Eis que vos dou toda a erva que dá semente sobre a terra e todas as árvores que dão frutos com semente para que vos sirvam de alimento. E a todos os animais da terra, a todas as aves dos céus, a tudo o que rasteja sobre a terra e que é animado de vida, eu dou toda a erva verde por alimento". E assim se fez. Deus viu tudo o que tinha feito: e era muito bom. Veio a tarde e depois a manhã: foi o sexto dia. Assim foram acabados o céu e a terra com todo o seu exército. No sétimo dia, Deus acabou a obra que tinha feito e cessou no sétimo dia de toda a obra que fizera. Deus abençoou o sétimo dia e o santificou, porque nele cessou de toda a obra da criação.'
    },
    psalm: {
      title: 'Salmo Responsorial',
      reference: 'Salmo 89(90)',
      response: 'Senhor, vós fostes sempre um refúgio para nós.',
      text: 'Senhor, vós fostes sempre um refúgio para nós. Antes que nascessem os montes e a terra e o mundo fossem gerados, desde sempre e para sempre vós sois Deus. Vós fazeis voltar ao pó os filhos dos homens, vós dizeis: "Voltai, filhos de Adão!" Pois mil anos aos vossos olhos são como o dia de ontem que passou, como uma vigília da noite. Vós os arrebatais como um sonho, como a erva que de manhã reverdece; pela manhã floresce e reverdece, à tarde murcha e seca. Ensinai-nos a contar os nossos dias, e dai ao nosso coração a sabedoria. Voltai, Senhor! Até quando? Tende piedade dos vossos servos! Saciai-nos desde a manhã com a vossa bondade, e nós exultaremos e nos alegraremos todos os nossos dias. Desça sobre nós a graça do Senhor, nosso Deus. Confirmai em nós a obra de nossas mãos, sim, confirmai a obra de nossas mãos!'
    },
    gospel: {
      title: 'Evangelho',
      reference: 'Mateus 13,54-58',
      text: 'Naquele tempo, dirigindo-se para a sua terra, Jesus ensinava na sinagoga, de modo que ficavam admirados e diziam: "Donde lhe vem esta sabedoria e estes milagres? Não é ele o filho do carpinteiro? Sua mãe não se chama Maria, e seus irmãos não são Tiago, José, Simão e Judas? E suas irmãs não estão todas entre nós? Donde lhe vem, pois, tudo isso?" E ficavam perplexos a seu respeito. Jesus, porém, lhes disse: "Um profeta só é desprezado em sua pátria e em sua casa". E não fez ali muitos milagres, por causa da incredulidade deles.'
    },
    reflection: 'A liturgia de hoje nos recorda a dignidade do trabalho humano. Deus criou o homem para trabalhar e cultivar a terra, e o próprio Jesus trabalhou como carpinteiro. O trabalho não é uma maldição, mas uma forma de participar da obra criadora de Deus. São José, o trabalhador, nos ensina que o trabalho honesto é um caminho de santificação e que através dele podemos glorificar a Deus e servir ao próximo.',
    saint: 'São José Operário',
    feast: 'São José Operário'
  },

  // 15 de agosto - Assunção de Nossa Senhora
  '8-15': {
    date: '',
    liturgicalSeason: 'Tempo Comum',
    color: 'Branco',
    firstReading: {
      title: 'Primeira Leitura',
      reference: 'Apocalipse 11,19a;12,1.3-6a.10ab',
      text: 'Abriu-se o templo de Deus que está no céu e apareceu no templo a arca da aliança. Apareceu no céu um sinal grandioso: uma mulher vestida com o sol, tendo a lua debaixo dos pés e sobre a cabeça uma coroa de doze estrelas. Apareceu então outro sinal no céu: um grande dragão, cor de fogo, com sete cabeças e dez chifres, e nas cabeças sete coroas. Com a cauda, varreu a terça parte das estrelas do céu e atirou-as sobre a terra. O dragão parou diante da mulher que estava para dar à luz, pronto para devorar o filho quando ela o desse à luz. Ela deu à luz um filho varão, aquele que há de reger todas as nações com cetro de ferro. Mas o filho foi levado para junto de Deus e do seu trono. A mulher fugiu para o deserto, onde Deus lhe tinha preparado um lugar. Ouvi então uma voz forte no céu, proclamando: "Agora realizou-se a salvação, a força e a realeza do nosso Deus, e o poder do seu Cristo".'
    },
    psalm: {
      title: 'Salmo Responsorial',
      reference: 'Salmo 44(45)',
      response: 'À vossa direita se encontra a rainha, com veste esplendente de ouro.',
      text: 'Filhas de reis vêm ao vosso encontro, à vossa direita se encontra a rainha, com veste esplendente de ouro. Escutai, minha filha, olhai, ouvi isto: "Esquecei vosso povo e a casa paterna! Que o Rei se apaixone pela vossa beleza! Prestai-lhe homenagem, porque ele é vosso Senhor!" As filhas de Tiro também vêm com presentes, os ricos do povo imploram o vosso favor. Cheia de glória entra a filha do Rei, vestida de tecidos preciosos. Conduzida entre alegria e regozijo, penetra no palácio real.'
    },
    gospel: {
      title: 'Evangelho',
      reference: 'Lucas 1,39-56',
      text: 'Naqueles dias, Maria partiu para a região montanhosa, dirigindo-se, apressadamente, a uma cidade da Judeia. Entrou na casa de Zacarias e cumprimentou Isabel. Ora, quando Isabel ouviu a saudação de Maria, a criança estremeceu no seu ventre; e Isabel ficou cheia do Espírito Santo. Com um grande grito, exclamou: "Bendita és tu entre as mulheres e bendito é o fruto do teu ventre! Donde me vem que a mãe do meu Senhor me visite? Pois, logo que a tua saudação chegou aos meus ouvidos, a criança estremeceu de alegria no meu ventre. Feliz daquela que acreditou, pois o que lhe foi dito da parte do Senhor será cumprido!" Maria disse: "A minha alma engrandece ao Senhor e se alegrou o meu espírito em Deus, meu Salvador, pois ele viu a pequenez de sua serva, desde agora as gerações hão de chamar-me de bendita. O Poderoso fez por mim maravilhas e Santo é o seu nome! Seu amor, de geração em geração, chega a todos que o respeitam. Manifestou o poder do seu braço, dispersou os orgulhosos. Derrubou os poderosos de seus tronos e elevou os humildes. Encheu de bens os famintos e despediu, sem nada, os ricos. Acolheu Israel, seu servidor, fiel ao seu amor, como havia prometido aos nossos pais, em favor de Abraão e de sua descendência, para sempre." Maria ficou três meses com Isabel; depois voltou para casa.'
    },
    reflection: 'A Assunção de Nossa Senhora é um dogma da Igreja que nos recorda que Maria, por um privilégio especial de Deus, foi elevada ao céu em corpo e alma. Esta festa nos ensina que o corpo humano, criado por Deus, é digno e será glorificado. Maria, como primeira cristã, nos mostra o destino que nos espera: a ressurreição dos mortos e a vida eterna com Deus.',
    saint: 'Assunção de Nossa Senhora',
    feast: 'Assunção de Nossa Senhora'
  },

  // 8 de dezembro - Imaculada Conceição
  '12-8': {
    date: '',
    liturgicalSeason: 'Advento',
    color: 'Branco',
    firstReading: {
      title: 'Primeira Leitura',
      reference: 'Gênesis 3,9-15.20',
      text: 'Depois que o homem comeu do fruto da árvore, o Senhor Deus chamou o homem e lhe perguntou: "Onde estás?" Ele respondeu: "Ouvi tua voz no jardim, mas fiquei com medo, porque estava nu, e me escondi". Deus perguntou: "Quem te disse que estavas nu? Então comeste da árvore, da qual te proibi comer?" O homem respondeu: "A mulher que tu me deste por companheira, foi ela que me deu do fruto da árvore, e eu comi". O Senhor Deus perguntou à mulher: "Por que fizeste isso?" A mulher respondeu: "A serpente enganou-me, e eu comi". Então o Senhor Deus disse à serpente: "Porque fizeste isso, serás maldita entre todos os animais domésticos e entre todos os animais selvagens! Rastejarás sobre o ventre e comerás pó todos os dias da tua vida. Porei inimizade entre ti e a mulher, entre a tua descendência e a descendência dela. Esta te ferirá a cabeça, e tu ferirás o calcanhar dela". O homem chamou sua mulher de Eva, porque ela é a mãe de todos os viventes.'
    },
    psalm: {
      title: 'Salmo Responsorial',
      reference: 'Salmo 97(98)',
      response: 'Cantai ao Senhor Deus um canto novo, porque ele fez prodígios!',
      text: 'Cantai ao Senhor Deus um canto novo, porque ele fez prodígios! Sua mão e seu braço forte e santo alcançaram-lhe a vitória. O Senhor fez conhecer a salvação, e às nações, sua justiça; recordou o seu amor sempre fiel pela casa de Israel. Os confins do universo contemplaram a salvação do nosso Deus. Aclamai o Senhor Deus, ó terra inteira, manifestai a alegria e regozijo!'
    },
    gospel: {
      title: 'Evangelho',
      reference: 'Lucas 1,26-38',
      text: 'No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré, a uma virgem desposada com um homem que se chamava José, da casa de Davi; e o nome da virgem era Maria. Entrando, o anjo disse-lhe: "Ave, cheia de graça, o Senhor está contigo!" Perturbou-se ela com estas palavras e pôs-se a pensar no que significaria semelhante saudação. O anjo disse-lhe: "Não temas, Maria, pois encontraste graça diante de Deus. Eis que conceberás e darás à luz um filho, e lhe porás o nome de Jesus. Ele será grande e chamar-se-á Filho do Altíssimo. O Senhor Deus lhe dará o trono de seu pai Davi; e reinará eternamente na casa de Jacó, e o seu reino não terá fim". Maria perguntou ao anjo: "Como se fará isso, pois não conheço homem?" Respondeu-lhe o anjo: "O Espírito Santo descerá sobre ti, e a força do Altíssimo te envolverá com a sua sombra. Por isso o ente santo que nascer de ti será chamado Filho de Deus. Também Isabel, tua parenta, até ela concebeu um filho na sua velhice; e já está no sexto mês aquela que é tida por estéril, porque a Deus nada é impossível". Então disse Maria: "Eis aqui a serva do Senhor. Faça-se em mim segundo a tua palavra". E o anjo afastou-se dela.'
    },
    reflection: 'A Imaculada Conceição de Maria é o dogma que proclama que ela foi preservada do pecado original desde o primeiro momento de sua concepção. Esta graça especial foi dada a Maria em vista de sua missão de ser a Mãe do Salvador. Maria, cheia de graça, nos mostra que Deus tem um plano de amor para cada um de nós e que podemos confiar totalmente em sua vontade.',
    saint: 'Imaculada Conceição de Nossa Senhora',
    feast: 'Imaculada Conceição'
  },

  // Domingo (exemplo)
  '0': {
    date: '',
    liturgicalSeason: 'Tempo Comum',
    color: 'Verde',
    firstReading: {
      title: 'Primeira Leitura',
      reference: 'Atos dos Apóstolos 15,1-2.22-29',
      text: 'Naqueles dias, alguns homens desceram da Judeia e puseram-se a ensinar aos irmãos: "Se não vos circuncidardes segundo o costume de Moisés, não podereis ser salvos". Isto provocou muita agitação e discussão de Paulo e Barnabé com eles. Decidiu-se então que Paulo, Barnabé e alguns outros fossem a Jerusalém, para tratar desta questão com os apóstolos e anciãos. Então os apóstolos e anciãos, de acordo com toda a Igreja, resolveram escolher alguns homens entre eles e enviá-los a Antioquia com Paulo e Barnabé. Escolheram Judas, chamado Barsabás, e Silas, homens respeitados entre os irmãos, e enviaram-nos com a seguinte carta: "Os apóstolos e anciãos, vossos irmãos, aos irmãos de Antioquia, Síria e Cilícia, de origem pagã, saudações! Ficamos sabendo que alguns dos nossos, sem nossa autorização, foram até vós e perturbaram-vos com palavras que vos confundiram. Decidimos então, de comum acordo, escolher alguns homens e enviá-los até vós, junto com nossos queridos Barnabé e Paulo, que arriscaram suas vidas pelo nome de nosso Senhor Jesus Cristo. Enviamos Judas e Silas, que vos transmitirão de viva voz a mesma mensagem. O Espírito Santo e nós decidimos não vos impor nenhum fardo além destas obrigações necessárias: abster-se de carnes sacrificadas aos ídolos, do sangue, das carnes de animais sufocados e das uniões ilegítimas. Fareis bem se vos guardardes de tudo isso. Passai bem!"'
    },
    psalm: {
      title: 'Salmo Responsorial',
      reference: 'Salmo 66(67)',
      response: 'Que Deus nos dê a sua graça e sua bênção.',
      text: 'Que Deus nos dê a sua graça e sua bênção, e sua face resplandeça sobre nós! Que na terra se conheça o seu caminho e a sua salvação por entre os povos. Exulte de alegria a terra inteira, pois julgais o universo com justiça; os povos governais com retidão, e guiais as nações sobre a terra. Que as nações vos glorifiquem, ó Deus, que todas as nações vos glorifiquem! Que Deus nos dê a sua graça e sua bênção, e sua face resplandeça sobre nós!'
    },
    secondReading: {
      title: 'Segunda Leitura',
      reference: 'Apocalipse 21,10-14.22-23',
      text: 'O anjo me levou em espírito a uma montanha grande e alta, e mostrou-me a cidade santa, Jerusalém, que descia do céu, de junto de Deus, brilhando com a glória de Deus. Seu brilho era semelhante ao de uma pedra preciosíssima, como o brilho de jaspe cristalino. Tinha uma muralha grande e alta, com doze portas, e sobre as portas doze anjos, e nomes gravados, que são os nomes das doze tribos dos filhos de Israel. Havia três portas do lado do oriente, três portas do lado norte, três portas do lado sul e três portas do lado ocidente. A muralha da cidade tinha doze alicerces, e sobre eles estavam gravados os nomes dos doze apóstolos do Cordeiro. Não vi templo algum na cidade, pois o Senhor Deus todo-poderoso é o seu templo, assim como o Cordeiro. A cidade não precisa de sol nem de lua para iluminá-la, pois a glória de Deus é a sua luz, e o Cordeiro é a sua lâmpada.'
    },
    gospel: {
      title: 'Evangelho',
      reference: 'João 14,23-29',
      text: 'Naquele tempo, disse Jesus a seus discípulos: "Se alguém me ama, guardará a minha palavra, e meu Pai o amará, e nós viremos e faremos nele a nossa morada. Quem não me ama não guarda as minhas palavras. E a palavra que estais ouvindo não é minha, mas do Pai que me enviou. Disse-vos estas coisas enquanto estou convosco. Mas o Defensor, o Espírito Santo, que o Pai enviará em meu nome, ele vos ensinará tudo e vos recordará tudo o que eu vos tenho dito. Deixo-vos a paz, a minha paz vos dou; mas não a dou como o mundo a dá. Não se perturbe nem se intimide o vosso coração. Ouvistes que eu vos disse: Vou embora, mas voltarei a vós. Se me amásseis, ficaríeis alegres por eu ir para o Pai, pois o Pai é maior do que eu. Disse-vos agora, antes que aconteça, para que, quando acontecer, vós acrediteis."'
    },
    reflection: 'Jesus promete aos seus discípulos que não os deixará órfãos. Ele enviará o Espírito Santo, o Defensor, que os ensinará tudo e recordará suas palavras. Esta promessa se cumpre na Igreja, onde o Espírito Santo continua a guiar e iluminar os fiéis. A paz que Jesus oferece não é como a do mundo - é uma paz que vem da certeza de sua presença constante através do Espírito Santo.',
    saint: 'Domingo'
  }
};

// Função para obter o tempo litúrgico baseado na data
export const getLiturgicalSeason = (date: Date): { season: string; color: string } => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  
  // Calcular a data da Páscoa (algoritmo simplificado)
  const getEasterDate = (year: number): Date => {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    
    return new Date(year, month - 1, day);
  };

  const easterDate = getEasterDate(year);
  const currentDate = new Date(year, month - 1, day);
  
  // Advento (4 semanas antes do Natal)
  if ((month === 12 && day >= 1) || (month === 11 && day >= 29)) {
    return { season: 'Advento', color: 'Roxo' };
  }
  
  // Natal (25 de dezembro até 6 de janeiro)
  if ((month === 12 && day >= 25) || (month === 1 && day <= 6)) {
    return { season: 'Natal', color: 'Branco' };
  }
  
  // Quaresma (40 dias antes da Páscoa)
  const ashWednesday = new Date(easterDate);
  ashWednesday.setDate(easterDate.getDate() - 46);
  
  if (currentDate >= ashWednesday && currentDate < easterDate) {
    return { season: 'Quaresma', color: 'Roxo' };
  }
  
  // Páscoa (50 dias após a Páscoa)
  const pentecost = new Date(easterDate);
  pentecost.setDate(easterDate.getDate() + 50);
  
  if (currentDate >= easterDate && currentDate <= pentecost) {
    return { season: 'Páscoa', color: 'Branco' };
  }
  
  // Tempo Comum
  return { season: 'Tempo Comum', color: 'Verde' };
};

// Função para obter a liturgia do dia
export const getLiturgyForDate = (date: Date): DailyReading => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const dayOfWeek = date.getDay();
  
  // Tentar encontrar leituras específicas para a data
  const dateKey = `${month}-${day}`;
  const dayKey = dayOfWeek.toString();
  
  if (liturgicalCalendar[dateKey]) {
    const reading = { ...liturgicalCalendar[dateKey] };
    reading.date = date.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    return reading;
  } else if (liturgicalCalendar[dayKey]) {
    const reading = { ...liturgicalCalendar[dayKey] };
    reading.date = date.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    return reading;
  }

  // Fallback para leituras padrão
  const { season, color } = getLiturgicalSeason(date);
  
  return {
    date: date.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    liturgicalSeason: season,
    color: color,
    firstReading: {
      title: 'Primeira Leitura',
      reference: '1 João 5,1-6',
      text: 'Caríssimos: Todo aquele que crê que Jesus é o Cristo nasceu de Deus; e todo aquele que ama quem gerou, ama também quem foi gerado por ele. Nisto conhecemos que amamos os filhos de Deus: quando amamos a Deus e observamos os seus mandamentos. Porque o amor de Deus consiste nisto: em observarmos os seus mandamentos. E os seus mandamentos não são pesados, porque todo aquele que nasceu de Deus vence o mundo. E esta é a vitória que vence o mundo: a nossa fé. Quem é que vence o mundo, senão aquele que crê que Jesus é o Filho de Deus? Este é aquele que veio pela água e pelo sangue: Jesus Cristo. Não só pela água, mas pela água e pelo sangue. E o Espírito é que dá testemunho, porque o Espírito é a verdade.'
    },
    psalm: {
      title: 'Salmo Responsorial',
      reference: 'Salmo 23(24)',
      response: 'Senhor, quem habitará em vossa casa?',
      text: 'Senhor, quem habitará em vossa casa e no vosso monte santo descansará? Quem procede corretamente e pratica a justiça, quem fala a verdade que sente no seu coração; quem não fala mal do seu próximo, nem prejudica o companheiro, nem aceita calúnias contra o vizinho; quem despreza aquele que Deus reprova, mas honra os que temem ao Senhor; quem não se desdiz ao fazer juramento, mesmo em prejuízo seu; quem não empresta o seu dinheiro com usura, nem aceita presentes contra o inocente. Quem procede assim ficará sempre firme!'
    },
    gospel: {
      title: 'Evangelho',
      reference: 'João 15,1-8',
      text: 'Naquele tempo, disse Jesus aos seus discípulos: "Eu sou a videira verdadeira, e meu Pai é o agricultor. Todo ramo que não dá fruto em mim, ele o corta; e todo ramo que dá fruto, ele o limpa, para que dê mais fruto ainda. Vós já estais limpos pela palavra que vos anunciei. Permanecem em mim, como eu permaneço em vós. Como o ramo não pode dar fruto por si mesmo, se não permanecer na videira, assim também vós não podeis dar fruto, se não permanecerdes em mim. Eu sou a videira, vós sois os ramos. Quem permanece em mim e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer. Quem não permanece em mim é lançado fora, como o ramo, e seca. Tais ramos são recolhidos, lançados ao fogo e queimados. Se permanecerdes em mim, e as minhas palavras permanecerem em vós, pedi o que quiserdes e vos será feito. Nisto meu Pai é glorificado: que deis muito fruto e vos torneis meus discípulos."'
    },
    reflection: 'Jesus se apresenta como a videira verdadeira e nós como os ramos. Esta imagem nos ensina sobre a importância da união com Cristo. Assim como o ramo precisa permanecer ligado à videira para dar frutos, nós precisamos permanecer unidos a Jesus para que nossa vida produza frutos de amor, paz, justiça e bondade.',
    saint: 'Santo do Dia'
  };
}; 