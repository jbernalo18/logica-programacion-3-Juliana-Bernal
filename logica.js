const numeroCalc = document.getElementById("numero-calc"); 
const botonCalcular = document.getElementById("btn-sumar");
const campoResultado = document.getElementById("resultado");

function calcularFactorial(){
    let resultado = 1; 
    for (let i=1; i<=numeroCalc.value; i++){
        resultado = resultado * i;
    }
    return resultado;
}


function mostrarResultado(){
    campoResultado.textContent = calcularFactorial();
}

botonCalcular.addEventListener("click", mostrarResultado)


