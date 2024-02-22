// Obtendo referências aos elementos do DOM
const incrementarBtn = document.getElementById('incrementarBtn');
const zerarBtn = document.getElementById('zerarBtn');
const contadorParagrafo = document.getElementById('contadorParagrafo');

// Inicializando o contador
let contador = 0;

// Função para atualizar o parágrafo com o valor atual do contador
function atualizarParagrafo() {
    contadorParagrafo.textContent = `O contador está com ${contador} clique${contador !== 1 ? 's' : ''}`;
}

// Event listener para o botão INCREMENTAR
incrementarBtn.addEventListener('click', () => {
    contador++;
    atualizarParagrafo();
});

// Event listener para o botão ZERAR CONTADOR
zerarBtn.addEventListener('click', () => {
    contador = 0;
    contadorParagrafo.style.display = 'none'; // Oculta o parágrafo
});

// Chamando a função para inicializar o parágrafo
atualizarParagrafo();
