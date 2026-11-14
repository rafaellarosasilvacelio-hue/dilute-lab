// Elementos da Interface

const volumeFinal = document.getElementById("volume-final") as HTMLSelectElement;
const fatorDiluicao = document.getElementById("fator-diluicao") as HTMLSelectElement;
const botaoCalcular = document.querySelector(".botao-calcular") as HTMLButtonElement;

const resultadoAmostra = document.getElementById("resultado-amostra") as HTMLElement;
const resultadoSolvente = document.getElementById("resultado-solvente") as HTMLElement;
const resultadoVolume = document.getElementById("resultado-volume") as HTMLElement;

// Cálculo da Diluição

function calcularDiluicao(): void {
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
