
//JS PABLO SECTION FOTOS
document.addEventListener('DOMContentLoaded', function() {
    var divs = document.getElementsByClassName('divSombreado');
    
    let frase1="Fotografa experta en fiestas de quince"
    let frase2="Fotrografo especializado en bodas y eventos formales"
    let frase3="Fotografa de exteriores y zonas urbanas"
    let frase4="Fotografa de eventos deportivos y campeonatos"

    let arrayFrases=[frase1,frase2,frase3,frase4]
    console.log(arrayFrases);
    for (var i = 0; i < divs.length; i++) {
      divs[i].addEventListener('click', function() {
        // Removemos la clase 'sombreado' de todos los divs
        for (var j = 0; j < divs.length; j++) {
          divs[j].classList.remove('sombreado');
          divs[j].classList.remove('bgGrey');

        }
        // Identifico que div llamo el evento
        numero = this.id.split("")[(this.id.split("").length)-1]
        
        p= $("#fraseFotografo")
        //p.text(arrayFrases[numero]).fadeIn(200)


        p.fadeOut(500, function() {
            $(this).text(arrayFrases[numero]).fadeIn(500);
        });

        // Agregamos la clase 'sombreado' al div clickeado
        this.classList.add('sombreado');
        
        //Cambiare las fotos
        let imagenesCarrusel= $(".carousel-item img")
        let fotosCarrusel1=["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"]
        
        //let arrayFotosCarrusel=[]
        console.log(imagenesCarrusel);
        
        imagenesCarrusel.fadeOut(1000, function() {
            for (var k = 0; k < imagenesCarrusel.length; k++) {
                let nuevoPath= "fotos/"+"carrusel"+numero+"/"+fotosCarrusel1[k]
                imagenesCarrusel.eq(k).attr("src",nuevoPath)
              }
            
            // Muestra las nuevas imágenes de forma animada
            imagenesCarrusel.fadeIn(1000);
          });
        
        
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
    check.classList.remove("no-display")
    check.classList.add("display")
})
standar.addEventListener("click", function(){
    mensaje.textContent="Elegiste el plan Standar! Por favor dejanos tus datos asi te contactamos!" 
    check.classList.remove("no-display")
    check.classList.add("display")
})
premium.addEventListener("click", function(){
    mensaje.textContent="Elegiste el plan Premium! Por favor dejanos tus datos asi te contactamos!" 
    check.classList.remove("no-display")
    check.classList.add("display")
})