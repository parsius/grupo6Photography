
//JS PABLO SECTION FOTOS
//Consulta a API







const pdfGenerator=()=>{
  // Cargar el contenido del archivo HTML externo
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'pdf.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Crear un elemento div para renderear el contenido HTML en un canvas
      var div = document.createElement('div');
      div.innerHTML = xhr.responseText;
      document.body.appendChild(div);

      // Usar html2canvas para convertir el contenido HTML en una imagen
      html2canvas(div).then(function(canvas) {
        // Crear un nuevo documento PDF
        var doc = new jsPDF();

        // Agregar la imagen al PDF
        var imgData = canvas.toDataURL('image/jpeg');
        doc.addImage(imgData, 'JPEG', 10, 10, 190, 0);


        
        // Guardar el PDF
        doc.save('documento.pdf');

        // Remover el elemento div creado para renderear el contenido HTML
        document.body.removeChild(div);
      });
    }
  };
  xhr.send();
;

}
document.getElementById("pdf").addEventListener("click", pdfGenerator);


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
        let imagenesCarrusel= $(".mio img")
        const fotosCarrusel1=["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"]
        let carruselContainer=$("#carruselContainer")
        //let arrayFotosCarrusel=[]
        console.log(imagenesCarrusel);
        
        // Ocultar las imágenes actuales con animación de desvanecimiento hacia la izquierda
        
        imagenesCarrusel.animate({
            
            opacity: 0,
            marginLeft: "-100%"
        }, 1000, function() {
            // Cambiar las rutas de las imágenes y establecer la opacidad en 0
            for (let j = 0; j < imagenesCarrusel.length; j++) {
              console.log(j);
              console.log(imagenesCarrusel);
            let nuevoPath = "fotos/carrusel" + numero + "/" + fotosCarrusel1[j];
            
            imagenesCarrusel.eq(j)
                .attr("src", nuevoPath)
                .css({
                opacity: 0,
                marginLeft: "100%"
                });
            }
        
            // Mostrar las nuevas imágenes con animación de aparición desde la derecha
            imagenesCarrusel.animate({
            opacity: 1,
            marginLeft: 0
            }, 1000);
            
        });   
        
      });
    }
  });








  /*----------------------------Contacto-------------------------------*/
const basico = document.getElementById("basico");
const standar = document.getElementById("standar");
const premium = document.getElementById("premium");
const mensaje = document.getElementById("mensaje-contacto");
const check = document.getElementById("check");
const redes = document.getElementById("redes")


basico.addEventListener("click", function(){
    mensaje.textContent="Elegiste el plan Basico! Por favor dejanos tus datos asi te contactamos!" 
    check.classList.remove("no-display")
    check.classList.add("display")
    window.location.href = "#contacto"
})
standar.addEventListener("click", function(){
    mensaje.textContent="Elegiste el plan Standar! Por favor dejanos tus datos asi te contactamos!" 
    check.classList.remove("no-display")
    check.classList.add("display")
    window.location.href = "#contacto"
})
premium.addEventListener("click", function(){
    mensaje.textContent="Elegiste el plan Premium! Por favor dejanos tus datos asi te contactamos!" 
    check.classList.remove("no-display")
    check.classList.add("display")
    window.location.href = "#contacto"
})

window.sr = ScrollReveal();
  
  sr.reveal('#card',{
    duration: 2000,
    origin: 'top',
    distance: '-100px',
    reset:true
  });
  sr.reveal('.form__input',{
    duration: 2500,
    origin: 'top',
    distance: '-100px',
    reset:true
  });
  sr.reveal('#redes',{
    duration:2000,
    origin:'top',
    distance: '-100px',
    reset:true
  });
  sr.reveal('#container-nosotros',{
    duration:2000,
    origin:'top',
    distance:'-100px',
    reset:true
  })