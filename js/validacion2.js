"use strict"
function validar(){
	var nombres = document.formu.nombres.value;
	var ap = document.formu.ap.value;
	var date = document.formu.date.value;
	
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
   /*Valida datos obligatorios*/ 
   if (date == ""){
      alert("La fecha esta vacía");
      document.formu.date.focus();
      return;
   }
   alert("DATOS CORRECTOS");
}