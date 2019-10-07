 function FEspecialidades() {
     var cod = document.getElementById("OS").value;
     if (cod == 2) {
         //document.getElementById('text1').style.display = 'none'; //Esto ocultario el objeto
         //Cambiamos el texto del p 
         document.getElementById("text1").innerHTML = " La odontología es una de las ciencias de la salud que se encarga del diagnóstico, tratamiento y prevención de las enfermedades del aparato estomatognático, el cual incluye además de los dientes, las encías, el tejido periodontal, el maxilar superior, el maxilar inferior y la articulación temporomandibular."
         //Cambiamos la direccion del img
         document.getElementById("img1").src = "img/odontologia.jpg"
     } else if (cod == 3) {
         document.getElementById("text1").innerHTML = "La pediatría es la especialidad médica que estudia al niño y sus enfermedades. El término procede del griego paidos e iatrea, ​ pero su contenido es mucho mayor que la curación de las enfermedades de los niños, ya que la pediatría estudia tanto al niño sano como al enfermo."
         document.getElementById("img1").src = "img/pediatria.jpg"
     } else if (cod == 1) {
         document.getElementById("text1").innerHTML = " Se denomina cirugía a la práctica que implica la manipulación mecánica de las estructuras anatómicas con un fin médico, bien sea diagnóstico, terapéutico o pronóstico."
         document.getElementById("img1").src = "img/CirugiaInterna.jpg"
     } else {
         document.getElementById("text1").innerHTML = "Ofrecemos el mejor servicio en Medicina de todo el Pais, contando con doctores de todas la especialidades y estudios en el extrangero, con altos conociminetos de la tecnologia en vanguardia"
     }
 }

 function FDocs() {
     var cod = document.getElementById("OSS").value;
     if (cod == 2) {
         //document.getElementById('text1').style.display = 'none'; //Esto ocultario el objeto
         document.getElementById("text1").innerHTML = " El Doctor Jose cuenta con estudios en Alemania y es experto en cirugia de corazon abierto."
         document.getElementById("img1").src = "img/DocManuel.jpg"
     } else if (cod == 3) {
         document.getElementById("text1").innerHTML = "La Doctora Nicol esperta en el trato de cirugias cerebrales tanto en ninos como en personas de estado critico, cuenta con una especialidad otorgada por Tokyo University de Japon."
         document.getElementById("img1").src = "img/DocNicol.jpg"
     } else if (cod == 1) {
         document.getElementById("text1").innerHTML = "El Doctor Manuel cuenta con 15 anos de esperiencia en el trato de ninos entre 5 a 15 anos de edad, con una especialidad en la aplicacion de la medicina para menores eddad"
         document.getElementById("img1").src = "img/DocJose.jpg"
     } else {
         document.getElementById("text1").innerHTML = "Ofrecemos el mejor servicio en Medicina de todo el Pais, contando con doctores de todas la especialidades y estudios en el extrangero, con altos conociminetos de la tecnologia en vanguardia."
     }
 }

 function FAumentoLetra(x){
 //   x.style.height = '30px';
  //  x.style.width = '180px';
 }
 function FDisminuyeLetra(x){
    //x.style.height = '20px';
  //  x.style.width = '150px';
 //   x.style.display = 'block';
  
 }