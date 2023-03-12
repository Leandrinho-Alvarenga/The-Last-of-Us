/*
OBEJTIVO - quando clicarmos no botã temos que mostrar a imagem de fundo correspondente

- passo 1 - dar um jeito de pegar o elemento HTML dos botões 
- passo 2 - dar um jeito de indentificar o clique do usruário no botão
- passo 3 - desmarcar o botão selecionado anterior 
- passo 4 - marcar o botão clicando como se estivesse selecionada 
- passo 5 - esconder a imagem de fundo anterior 
- passo 6 - fazer aparecer a imagem correspondente ao botão clicando    
*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemaAtiva();

       
        mostrarImagemDeFundo(indice);

    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemaAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
