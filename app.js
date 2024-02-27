function sortearNumero (){
    //let btnSortearNumero = document.querySelector ('btn-sortear');
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroInical = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numeros;

    for(let i = 0; i < quantidadeNumeros; i++){
        numeros = sortearNumeroAleatorio(numeroInical, numeroFinal);
        numerosSorteados.push(numeros);
    }
    console.log(numerosSorteados);
}

//let sortearNumero = parseInt(Math.random() * +1);
function sortearNumeroAleatorio(min, max){
    return  Math.floor(Math.random() * (max - min + 1)) + min;

}