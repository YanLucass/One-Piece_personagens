
const botoes = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => { 
    desscelecionarBotao(); 
    botao.classList.add("selecionado"); 
    desscelecionarPersonagem();
    personagem[indice].classList.add("selecionado"); 

    })
})

function desscelecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove("selecionado");
}

function desscelecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove('selecionado');
}



