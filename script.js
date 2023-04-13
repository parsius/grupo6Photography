
//JS PABLO SECTION FOTOS
document.addEventListener('DOMContentLoaded', function() {
    var divs = document.getElementsByClassName('divSombreado');
    
    
    for (var i = 0; i < divs.length; i++) {
      divs[i].addEventListener('click', function() {
        // Removemos la clase 'sombreado' de todos los divs
        for (var j = 0; j < divs.length; j++) {
          divs[j].classList.remove('sombreado');
          divs[j].classList.remove('bgGrey');
        }
        
        // Agregamos la clase 'sombreado' al div clickeado
        this.classList.add('sombreado');
        this.getElementsByClassName("card-text").classList.add("sombreado")
        
        
      });
    }
  });








  /*----------------------------Contacto-------------------------------*/
const basico = document.getElementById("basico");
const standar = document.getElementById("standar");
const premium = document.getElementById("premium");
const mensaje = document.getElementById("mensaje-contacto");
const check = document.getElementById("check")


basico.addEventListener("click", function(){
    mensaje.textContent="Elegiste el plan Basico! Por favor dejanos tus datos asi te contactamos!" 
})
standar.addEventListener("click", function(){
    mensaje.textContent="Elegiste el plan Standar! Por favor dejanos tus datos asi te contactamos!" 
})
premium.addEventListener("click", function(){
    mensaje.textContent="Elegiste el plan Premium! Por favor dejanos tus datos asi te contactamos!" 
})