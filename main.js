var entrada01, entrada02, resposta;
function soma(){
    entrada01 = parseFloat(document.getElementById("entrada01").value)
    entrada02 = parseFloat(document.getElementById("entrada02").value)
    resposta = entrada01 + entrada02;
    document.getElementById("resposta").value = resposta;
}
function subtracao(){
    entrada01 = parseFloat(document.getElementById("entrada01").value)
    entrada02 = parseFloat(document.getElementById("entrada02").value)
    resposta = entrada01 - entrada02;
    document.getElementById("resposta").value = resposta;
}
function multiplicacao(){
    entrada01 = parseFloat(document.getElementById("entrada01").value)
    entrada02 = parseFloat(document.getElementById("entrada02").value)
    resposta = entrada01 * entrada02;
    document.getElementById("resposta").value = resposta;
}
function divisao(){
    entrada01 = parseFloat(document.getElementById("entrada01").value)
    entrada02 = parseFloat(document.getElementById("entrada02").value)
    if (entrada02 != 0){
        resposta = entrada01 / entrada02;
        document.getElementById("resposta").value = resposta;
    }
    else{
        document.getElementById("resposta").value = "Não pode dividir por 0"
    }
}