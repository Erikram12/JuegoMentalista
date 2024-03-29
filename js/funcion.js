var numerosecreto = 90;

var numeroDigitado = prompt("Ingresa un numero entre 1 y 1000");

//SI numero secreto es igual A numero dIGITADO
if (numerosecreto == numeroDigitado){
    alert("Acertaste");
}else if (numerosecreto > numeroDigitado){
    alert("Te equivocaste el numero secreto es mayor que el numero digitado");
}else if (numerosecreto < numeroDigitado){
    alert("Te equivocaste el numero secreto es menor que el numero digitado");
}