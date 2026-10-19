const numeroCalc = document.getElementById("numero-calc"); 
const botonCalcular = document.getElementById("btn-calcular");
const campoResultado = document.getElementById("resultado");
const campoNumeroFact = document.getElementById("numero-factorial");

function calcularFactorial(){
    let resultado = 1; 
    for(let i=1; i<=numeroCalc.value; i++){
        resultado = resultado * i;
    }
    return resultado;
}


function mostrarResultado(){
    if(numeroCalc.value.trim()===""){
        campoResultado.classList.add("mensaje-error");
        campoResultado.textContent = "Por favor ingresa un número";
    return;   
    }

    if(numeroCalc.value<0) {
        campoResultado.classList.add("mensaje-error");
        campoResultado.textContent = "No se permiten números negativos";
    return;
    }else if(numeroCalc.value>170) {
        campoResultado.classList.add("mensaje-error");
        campoResultado.textContent = "El número es demasiado grande";
    return;
    }
    campoResultado.classList.remove("mensaje-error");
    campoResultado.textContent = calcularFactorial();
    campoNumeroFact.textContent = numeroCalc.value + "!";

}

botonCalcular.addEventListener("click", mostrarResultado)


