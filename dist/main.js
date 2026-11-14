"use strict";
// Elementos da Interface
const volumeFinal = document.getElementById("volume-final");
const fatorDiluicao = document.getElementById("fator-diluicao");
const botaoCalcular = document.querySelector(".botao-calcular");
const resultadoAmostra = document.getElementById("resultado-amostra");
const resultadoSolvente = document.getElementById("resultado-solvente");
const resultadoVolume = document.getElementById("resultado-volume");
// Cálculo da Diluição
function calcularDiluicao() {
    // Converte os valores selecionados para números.
    const volume = Number(volumeFinal.value);
    const fator = Number(fatorDiluicao.value);
    // O cálculo é feito em ml.
    const amostra = volume / fator;
    const solvente = volume - amostra;
    // Converte os resultados para µL para facilitar o preparo na bancada.
    const amostraMicrolitros = amostra * 1000;
    const solventeMicrolitros = solvente * 1000;
    // Mostra os resultados na interface.
    resultadoAmostra.textContent = `${amostraMicrolitros} µL`;
    resultadoSolvente.textContent = `${solventeMicrolitros} µL`;
    resultadoVolume.textContent = `${volume} mL`;
}
// Evento do botão
botaoCalcular.addEventListener("click", calcularDiluicao);
