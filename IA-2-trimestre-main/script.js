const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "O que significa a sigla MPB?",
        alternativas: [
        "Música Particular Bandeirante", 
        "Música Popular Brasileira."
        ]
    },
    {
        enunciado: "Quando o MPB surgiu?",
        alternativas: [
        "Surgiu durante a Ditadura Militar no Brasil, na década de 60, como uma nova opção de estilo musical, que procedeu à Bossa Nova.", 
        "Surgiu durante o começo da Semana da Arte Moderna no Brasil, em 1922, como uma das formas de manifestações e busca de cultura própria contra o Eurocentrismo da época."
        ]
    },
    {
        enunciado: "O que o MPB busca?",
        alternativas: [
        "O MPB, busca refletir a reunião de ritmos e movimentos musicais já no presentes no país, apresentando um novo conceito de música nacional.", 
        "O MPB busca resgatar os ritmos e canções esquecidas e escondidas dos povos originários brasileiros."
        ]
    },{
        enunciado: "Qual o instrumento mais constante nas músicas do MPB?",
        alternativas: [
        "O instrumento mais constante é o pandeiro.", 
        "O instrumento mais constante é o violão."
        ]
    },{
        enunciado: "Quais foram as músicas mais marcantes do movimento?",
        alternativas: [
        "Gilberto Gil - Aquele abraço; Raul Seixas - Metamorfose Ambulante; Caetano Veloso - Alegria, Alegria; Chico Buarque - Apesar de você; Maria Bethânia - Carcará.", 
        "Gilberto Gil - Aquele beijo; Pitty - Teto de Vidro; Veloso Caetano - Alegria, Alegria; Péricles - Até que durou; Alcione - Carcará."
        ]
    },       
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement ("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();
