document.getElementById("sumar").addEventListener("click", function() {

    let NúmeroA = document.getElementById("Número 1").value;
  
    let NúmeroB = document.getElementById("Número 2").value;
  
    let resultado = sumar(parseInt(NúmeroA), parseInt(NúmeroB));
  
document.getElementById("resultado").innerHTML = resultado;
  
document.getElementById("contenedorResultado").style.display = "block"
    });
  
  
function sumar(a,b) {
      return a + b;
}