function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Cálculo da Taxa Metabólica Basal');
}

exibirMensagemInicial();


function calcularTMB(peso, altura, idade, sexo) {
    if (sexo === 'M') {
        return 88.36 + (13.4 * peso) + (4.8 * altura * 100) - (5.7 * idade)
    } else {
        return 447.6+ (9.2 * peso)+(3.1 * altura * 100) - (4.3 * idade) ; 
    }
} 

function solicitarDadosUsuario() {
    let peso = parseFloat(document.getElementById('peso').value); 
    let altura = parseFloat(document.getElementById('altura').value);
    let idade = parseInt(document.getElementById('idade').value);
    let sexo = document.getElementById('sexo').value;

    if (isNaN(peso) || isNaN(altura) || isNaN(idade) || (sexo !== 'M' && sexo !== 'F')) {
        alert('Por favor, insira valores válidos');
        return;
    }

    let tmb = Math.round(calcularTMB(peso, altura, idade, sexo));

    let mensagem = `
    <p>Sua <strong> Taxa Metabólica Basal</strong> é aproximadamente: </p>
    <h2>${tmb} calorias/dia</h2>
    <p>Isso significa que, em repouso, seu corpo gasta cerca de ${tmb} calorias por dia apenas para manter funções vitais, como circulação e respiração.</p>
    <p>Se você deseja manter seu peso, deve consumir cerca dessa quantidade de calorias diariamente. </p>
    `;
    
    exibirTextoNaTela('#resultado', mensagem);

    document.getElementById('reiniciar').disabled = false; 
}

function reiniciarDados() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('sexo').value = 'M';

    exibirTextoNaTela('#resultado', '');
    exibirMensagemInicial();
    document.getElementById('reiniciar').disabled = true;
}

