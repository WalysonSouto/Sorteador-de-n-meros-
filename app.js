function sortearNumero (){
    //let btnSortearNumero = document.querySelector ('btn-sortear');
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroInical = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);

    //if (numeroInical > numeroFinal && numeroFinal >= quantidadeNumeros){
        //alert ('Ocorreu um erro! Revise os numeros que foram solucionados.');
      
    //}
    
    let numerosSorteados = [];
    let numeros;

    for(let i = 0; i < quantidadeNumeros; i++){
        numeros = sortearNumeroAleatorio(numeroInical, numeroFinal);
        
        while(numerosSorteados.includes(numeros)){
            numeros = sortearNumeroAleatorio(numeroInical, numeroFinal);
        }
        numerosSorteados.push(numeros);   
    }
  
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
    //console.log(numerosSorteados);
    alterarStatusBotao();
}

//let sortearNumero = parseInt(Math.random() * +1);
function sortearNumeroAleatorio(min, max){
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')){
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');


    }else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciarJogo(){
    let botaoReiniciar = document.getElementById('btn-reiniciar'); 

    if (botaoReiniciar.classList.contains('container__botao')) {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
        ;
        alterarStatusBotao();
    }    
}

//function (){}