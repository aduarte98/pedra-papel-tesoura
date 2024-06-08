function abrirModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
}

function fecharModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

var pontuacao_final = 0;

function iniciarAnimacao(idElemento) {

    if(idElemento == 'papel'){
        var elemento = document.getElementById(idElemento);
        elemento.classList.add('animate-bola_papel');
        var imgTriangulo = document.getElementById('img_triangulo')
        imgTriangulo.classList.add('animate-desaparecer');
        var elemento1 = document.getElementById('pedra');
        var elemento2 = document.getElementById('tesoura');
        var circulo = document.querySelector('.circulo_preto');
        circulo.style.display = 'flex';
        elemento1.style.top = '0';
        elemento1.style.left = '0';
        elemento2.style.top = '0';
        elemento2.style.left = '0';
        elemento1.classList.add('animate-direita');
        elemento2.classList.add('animate-direita');
        setTimeout(() => {
            elemento.classList.remove('animate-bola_papel');
            elemento1.classList.remove('animate-direita');
            elemento2.classList.remove('animate-direita');
            imgTriangulo.classList.remove('animate-desaparecer');
            elemento1.style.removeProperty('top');
            elemento1.style.removeProperty('left');
            elemento2.style.removeProperty('top');
            elemento2.style.removeProperty('left');
            circulo.style.display = 'none';
                escolhaUsuario(idElemento);
        }, 700);
    }else if(idElemento == 'tesoura'){
        var elemento = document.getElementById(idElemento);
        elemento.classList.add('animate-bola_tesoura');
        var imgTriangulo = document.getElementById('img_triangulo')
        imgTriangulo.classList.add('animate-desaparecer');
        var elemento1 = document.getElementById('pedra');
        var elemento2 = document.getElementById('papel');
        var circulo = document.querySelector('.circulo_preto');
        circulo.style.display = 'flex';
        elemento1.style.top = '0';
        elemento1.style.left = '0';
        elemento2.style.top = '0';
        elemento2.style.left = '0';
        elemento1.classList.add('animate-direita');
        elemento2.classList.add('animate-direita');
        setTimeout(() => {
            elemento.classList.remove('animate-bola_tesoura');
            elemento1.classList.remove('animate-direita');
            elemento2.classList.remove('animate-direita');
            imgTriangulo.classList.remove('animate-desaparecer');
            elemento1.style.removeProperty('top');
            elemento1.style.removeProperty('left');
            elemento2.style.removeProperty('top');
            elemento2.style.removeProperty('left');
            circulo.style.display = 'none';
                escolhaUsuario(idElemento);
        }, 700);
    }else{
        var elemento = document.getElementById(idElemento);
        elemento.classList.add('animate-bola_pedra');
        var imgTriangulo = document.getElementById('img_triangulo')
        imgTriangulo.classList.add('animate-desaparecer');
        var elemento1 = document.getElementById('tesoura');
        var elemento2 = document.getElementById('papel');
        var circulo = document.querySelector('.circulo_preto');
        circulo.style.display = 'flex';
        elemento1.style.top = '0';
        elemento1.style.left = '0';
        elemento2.style.top = '0';
        elemento2.style.left = '0';
        elemento1.classList.add('animate-direita');
        elemento2.classList.add('animate-direita');
        setTimeout(() => {
            elemento.classList.remove('animate-bola_pedra');
            elemento1.classList.remove('animate-direita');
            elemento2.classList.remove('animate-direita');
            imgTriangulo.classList.remove('animate-desaparecer');
            elemento1.style.removeProperty('top');
            elemento1.style.removeProperty('left');
            elemento2.style.removeProperty('top');
            elemento2.style.removeProperty('left');
            circulo.style.display = 'none';
                escolhaUsuario(idElemento);
        }, 700);
    }   
}

function escolhaUsuario(idElemento) {
    var escolha_usuario = idElemento;

    var gradientes_usuario;
    var gradientes_maquina;

    if (escolha_usuario === 'papel') {
        escolha_usuario = 'paper';
        gradientes_usuario = 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))';
    } else if (escolha_usuario === 'tesoura') {
        escolha_usuario = 'scissors';
        gradientes_usuario = 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))';
    } else {
        escolha_usuario = 'rock';
        gradientes_usuario = 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))';
    }

    do {
        var possiveisEscolhas = ['paper', 'scissors', 'rock'];
        var numeroAleatorio = Math.floor(Math.random() * 3);
        var escolha_maquina = possiveisEscolhas[numeroAleatorio];

        if (escolha_maquina === 'paper') {
            gradientes_maquina = 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))';
        } else if (escolha_maquina === 'scissors') {
            gradientes_maquina = 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))';
        } else {
            escolha_maquina = 'rock';
            gradientes_maquina = 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))';
        }
    } while (escolha_usuario == escolha_maquina);

    var triangulo = document.querySelector('.triangulo');
    var regra = document.querySelector('.regra');
    triangulo.style.display = 'none';
    regra.style.display = 'none';

    var resultado_final;

    if (
        escolha_usuario === 'paper' && escolha_maquina === 'scissors' ||
        escolha_usuario === 'rock' && escolha_maquina === 'paper' ||
        escolha_usuario === 'scissors' && escolha_maquina === 'rock'
    ) {
        resultado_final = "Perdeu";
        if (pontuacao_final > 0) {
            pontuacao_final -= 1;
        }
    } else if (
        escolha_usuario === 'rock' && escolha_maquina === 'scissors' ||
        escolha_usuario === 'scissors' && escolha_maquina === 'paper' ||
        escolha_usuario === 'paper' && escolha_maquina === 'rock'
    ) {
        resultado_final = "Ganhou";
        if (pontuacao_final >= 0) {
            pontuacao_final += 1;
        }
    }
  
    console.log(pontuacao_final);

    var resultadoGeral = document.createElement('div');
    resultadoGeral.classList.add('resultado_geral');

    var novoResultado = document.createElement('div');
    novoResultado.classList.add('calculando_resultado');

    var circuloGrande, circuloMedio, circuloPequeno;
    if (resultado_final === 'Ganhou') {
        circuloGrande = document.createElement('div');
        circuloGrande.classList.add('circulo_grande');
        circuloMedio = document.createElement('div');
        circuloMedio.classList.add('circulo_medio');
        circuloPequeno = document.createElement('div');
        circuloPequeno.classList.add('circulo_pequeno');
    } else {
        circuloGrande = document.createElement('div');
        circuloGrande.classList.add('circulo_grande1');
        circuloMedio = document.createElement('div');
        circuloMedio.classList.add('circulo_medio1');
        circuloPequeno = document.createElement('div');
        circuloPequeno.classList.add('circulo_pequeno1');
    }
 
    var usuariodiv = document.createElement('div');
    usuariodiv.classList.add('usuario');
    var usuarioSpan = document.createElement('span');
    usuarioSpan.textContent = 'Usuario';
    var fundoEscolhidoDiv = document.createElement('div');
    fundoEscolhidoDiv.classList.add('fundo-escolhido');
    fundoEscolhidoDiv.style.background = gradientes_usuario;
    var escolhidoUserDiv = document.createElement('div');
    escolhidoUserDiv.classList.add('escolhido_user');
    var userImg = document.createElement('img');
    userImg.src = `./images/icon-${escolha_usuario}.svg`;

    escolhidoUserDiv.appendChild(userImg);
    fundoEscolhidoDiv.appendChild(escolhidoUserDiv);
    usuariodiv.appendChild(usuarioSpan);
    usuariodiv.appendChild(fundoEscolhidoDiv);
    
    if (resultado_final === 'Ganhou') {
        escolhidoUserDiv.appendChild(circuloPequeno);
        escolhidoUserDiv.appendChild(circuloMedio);
        escolhidoUserDiv.appendChild(circuloGrande);
    }

    var resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('resultado');
    var resultadoSpan = document.createElement('span');
    resultadoSpan.classList.add('resultado_texto');
    resultadoSpan.textContent = `Você ${resultado_final}`;
    var jogarNovamenteBtn = document.createElement('div');
    jogarNovamenteBtn.classList.add('recomecar');
    jogarNovamenteBtn.onclick = function() {
        jogar_novamente();
    };
    jogarNovamenteBtn.textContent = 'Recomeçar';

    resultadoDiv.appendChild(resultadoSpan);
    resultadoDiv.appendChild(jogarNovamenteBtn);

    var maquinaDiv = document.createElement('div');
    maquinaDiv.classList.add('maquina');
    var maquinaSpan = document.createElement('span');
    maquinaSpan.textContent = 'Máquina';
    var fundoMaquinaDiv = document.createElement('div');
    fundoMaquinaDiv.classList.add('fundo-maquina');
    fundoMaquinaDiv.style.background = gradientes_maquina;
    var escolhidoMaquinaDiv = document.createElement('div');
    escolhidoMaquinaDiv.classList.add('escolhido_maquina');
    var maquinaImg = document.createElement('img');
    maquinaImg.src = `./images/icon-${escolha_maquina}.svg`;

    escolhidoMaquinaDiv.appendChild(maquinaImg);
    fundoMaquinaDiv.appendChild(escolhidoMaquinaDiv);
    maquinaDiv.appendChild(maquinaSpan);
    maquinaDiv.appendChild(fundoMaquinaDiv);
    
    if (resultado_final === 'Perdeu') {
        escolhidoMaquinaDiv.appendChild(circuloPequeno);
        escolhidoMaquinaDiv.appendChild(circuloMedio);
        escolhidoMaquinaDiv.appendChild(circuloGrande);
    }

    novoResultado.appendChild(usuariodiv);
    novoResultado.appendChild(resultadoDiv);
    novoResultado.appendChild(maquinaDiv);

    var regraDiv = document.createElement('div');
    regraDiv.classList.add('regra');
    var regraSpan = document.createElement('span');
    regraSpan.textContent = 'Regra';
    regraDiv.onclick = abrirModal;
    regraDiv.appendChild(regraSpan);
    regraDiv.style.left = ('120%');

    var footer = document.createElement('footer');
    footer.classList.add('footer_pagina');

    resultadoGeral.appendChild(novoResultado);
    resultadoGeral.appendChild(footer);
    footer.appendChild(regraDiv);

    
    var previousResult = document.querySelector('.resultado_geral');
    if (previousResult) {
        previousResult.remove();
    }

    document.body.appendChild(resultadoGeral);

    novoResultado.classList.add('animate-completa');
    usuariodiv.classList.add('animate-bolaCompleta');
    maquinaDiv.classList.add('animate-bolaCompleta');
    circuloGrande.classList.add('animate-circuloShow');
    circuloMedio.classList.add('animate-circuloShow');
    circuloPequeno.classList.add('animate-circuloShow');

    setTimeout(() => {
        novoResultado.classList.remove('animate-completa');
    }, 700);

    var pontuacaoSpan = document.querySelector('.pontuacao');
    pontuacaoSpan.textContent = pontuacao_final;
}

function jogar_novamente() {
    var triangulo = document.querySelector('.triangulo');
    var resultadoGeral = document.querySelector('.resultado_geral');
    var regra = document.querySelector('.regra');
    if (resultadoGeral) {
        resultadoGeral.remove();
    }
    triangulo.style.display = 'flex';
    regra.style.display = 'flex';
}
