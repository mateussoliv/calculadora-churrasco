// Carne 600 Gr por pessoa + de 6 hrs = 850 gr
// Cerveja - 2000 Ml por pessoas + 6hrs 3000 ml
// Refrigerante/Agua - 2000ml por pessoas + 6hrs 3000ml


// criança valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){

    console.log("Calculando")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne /1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Litros de Bebidas</p>`

}

function carnePP(duracao)
{
    if (duracao >= 6) {
        return  850;
    }else{
        return 600;
    }
}

function cervejaPP(duracao)
{
    if (duracao >= 6) {
        return  3000;
    }else{
        return 2000;
    }
}

function bebidasPP(duracao)
{
    if (duracao >= 6) {
        return  3000;
    }else{
        return 2000;
    }
}