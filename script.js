
//JS PABLO SECTION FOTOS
document.addEventListener('DOMContentLoaded', function() {
    var divs = document.getElementsByClassName('divSombreado');
    
    for (var i = 0; i < divs.length; i++) {
      divs[i].addEventListener('click', function() {
        // Removemos la clase 'sombreado' de todos los divs
        for (var j = 0; j < divs.length; j++) {
          divs[j].classList.remove('sombreado');
        }
        
        // Agregamos la clase 'sombreado' al div clickeado
        this.classList.add('sombreado');
      });
    }
  });