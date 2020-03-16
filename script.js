function uniao() {
    //Recebendo elementos dos conjuntos
    let ent = document.getElementById('entrada')
    let ent1 = document.getElementById('entrada1')
    let respuni = document.getElementById('resp')

    //Armazenando os valores de entrada
    let str = [];                           //Variavel que guarda os valores como vetor
    let str1 = [];                          //Variavel que guarda os valores como string
    str1 = ent.value + ',' + ent1.value;    //Junçao das entradas como string
    str = str1.split(",");                  //Armazenamento das entradas unidas como vetor

    //Eliminaço de numeros repetidos quando a uniao ja foi feita
    for (c = 0; c < str.length; c++) {
        for (i = c + 1; i < str.length; i++) {
            if (str[c] == str[i])
                str.splice(i, 1);
        }
    }

    //Impresso do resultado da Uniao
    respuni.innerHTML = `C = {${str}}`;
}

function inter() {
    //Recebendo elementos dos conjuntos
    let ent = document.getElementById('entrada')
    let ent1 = document.getElementById('entrada1')
    let respinter = document.getElementById('resp')

    //Variaveis usadas para armazenar dados e tratalos
    let Cint = [];
    let str = [];
    let str1 = [];
    str = ent.value.split(",");
    str1 = ent1.value.split(",");

    //Comparação dos elementos da string e armazenamento do mesmo caso esteja nos dois conjuntos
    for (c = 0; c < str.length; c++) {
        for (i = 0; i < str1.length; i++) {
            if (str[c] === str1[i]) {
                Cint.push(str[c]);
            }
        }
    }
    //Eliminaço de numeros repetidos quando a uniao ja foi feita
    for (c = 0; c < Cint.length; c++) {
        for (i = c + 1; i < Cint.length; i++) {
            if (Cint[c] == Cint[i])
                Cint.splice(i, 1);
        }
    }
    //Impressão dos resultados da intersecção
    respinter.innerHTML = `C = {${Cint}}`;
}

function difer() {
    //Recebendo elementos dos conjuntos
    let ent = document.getElementById('entrada')
    let ent1 = document.getElementById('entrada1')
    let respdifer = document.getElementById('resp')


    //Variaveis usada para armazenar os dados e fazer o tratamento dos mesmo
    let Cdife = [];
    let str = [];
    let str1 = [];
    str = ent.value.split(",");
    str1 = ent1.value.split(",");

    //Armazenamento de elementos
    control = false;
    for (c = 0; c < str.length; c++) {
        for (i = 0; i < str1.length; i++) {
            if (str[c] == str1[i]) {			//Comparação do elemento na posição C
                control = false;				//Se tiver elemento igual na str1 é atribuido falso
                i = str.length;
            } else {
                control = true;					//Se tiver o elemento apenas no primeiro conjunto é atribuido true
            }
        }
        if (control == true) {
            Cdife.push(str[c]);					//Subindo o elemento para o conjunto resposta caso a variavel seja verdadeira
        }
    }
    //Eliminaço de numeros repetidos quando a uniao ja foi feita
    for (c = 0; c < Cdife.length; c++) {
        for (i = c + 1; i < Cdife.length; i++) {
            if (Cdife[c] == Cdife[i])
                Cdife.splice(i, 1);
        }
    }
    respdifer.innerHTML = `C = {${Cdife}}`;
}
