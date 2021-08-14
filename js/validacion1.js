"use strict"
function validar(){
	var nombres = document.formu.nombres.value;
	var ap = document.formu.ap.value;
	var am = document.formu.am.value;
	var ci = document.formu.ci.value;
  var direccion = document.formu.direccion.value;
  var profesion = document.formu.profesion.value;
  var correo = document.formu.correo.value;

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

   if(am != ""){
   	 if (!v1.test(am)){
   	  alert("El am es incorrecto");
   	  document.formu.am.focus();
   	  return;
     }
   }   
   /*Valida dato obligatorio de ap o am*/
   if ((ap =="") && (am =="")){
      alert("Uno de los dos apellidos tieneque ser registrado");
      document.formu.ap.focus();
      return;
   }

   /*Validar como dato obligatorio y dato correcto(numeros enteros positivos)*/	
   if (!v2.test(ci)){
   	  alert("El ci es incorrecto o esta vacio");
   	  document.formu.ci.focus();
   	  return;
   }
   
   /*Valida datos obligatorios*/ 
   if (direccion == ""){
      alert("La dirección esta vacía");
      document.formu.direccion.focus();
      return;
   }

    /*Valida datos correctos(lestras y espacios)*/
   if(profesion != ""){
     if (!v1.test(profesion)){
      alert("La profesion es incorrecta");
      document.formu.profesion.focus();
      return;
     }
   }
   /*Validar como dato obligatorio y dato correcto(correo)*/ 
   if (!v3.test(correo)){
      alert("El correo es incorrecto o esta vacio");
      document.formu.correo.focus();
      return;
   }

   alert("DATOS CORRECTOS\n"+"Nombres: "+nombres+"\n"+"Apellido Paterno: "+ap);

}
