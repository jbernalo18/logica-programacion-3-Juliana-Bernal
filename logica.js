const numeroCalc = document.getElementById("numero-calc"); 
const botonCalcular = document.getElementById("btn-calcular");
const campoResultado = document.getElementById("resultado");
const campoNumeroFact = document.getElementById("numero-factorial");

function calcularFactorial(){
    let resultado = 1; 
    for (let i=1; i<=numeroCalc.value; i++){
        resultado = resultado * i;
    }
    return resultado;
}


function mostrarResultado(){
    campoResultado.textContent = calcularFactorial();
    campoNumeroFact.textContent = numeroCalc.value + "!";

}

botonCalcular.addEventListener("click", mostrarResultado)


