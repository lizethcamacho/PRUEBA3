"use strict"
function validar(){
	var nombres = document.formu.nombres.value;
	var ap = document.formu.ap.value;
	var f = document.formu.genero[0].checked;
	var m = document.formu.genero[1].checked;

   /*Validar como dato obligatorio y dato correcto(letras y espacios en blanco)*/	
   if (!v1.test(nombres)){
   	  alert("Los nombres son incorrectos o estan vacios");
   	  document.formu.nombres.focus();
   	  return;
   }

   /*Valida datos correctos(lestras y espacios)*/
   if(ap != ""){
   	 if (!v1.test(ap)){
   	  alert("El ap es incorrecto");
   	  document.formu.ap.focus();
   	  return;
     }
   }   

   if ((f == "") && (m =="")){
      alert("El campo de genero esta vacio");
      return;
   }

   alert("DATOS CORRECTOS");
}