$(function(){

mostrarNombre()
mostrarObjeto()

})


function mostrarNombre(){


  

    $("#aceptar").click(function(){
      var nombre= Number( $("#nombre").val())
    
     
      var numero= Number($("#numero").val()) 
 sumar(nombre, numero)

   
    })
    

}

function sumar(a,b){

    var sum= a + b

console.log(sum)
}


function mostrarObjeto(){

var empleado= {

    edad : 20,
    nombre : "camilo"

}
empleado.nombre="juan"
console.log(empleado)

}