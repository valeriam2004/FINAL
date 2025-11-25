let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()


    let cajaUsuario=document.getElementById("cajausuario")
    let cajaCorreo=document.getElementById("cajacorreo")
    let cajaCiudad=document.getElementById("cajaciudad")
    let cajaTelefono=document.getElementById("cajatelefono")
    let cajaContraseña=document.getElementById("cajacontraseña")                   
    
    let datosDelFormulario={
        usuario:cajaUsuario.valvue,
        correo:cajaCorreo.valvue,
        ciudad:cajaCiudad.valvue,
        telefono:cajaTelefono.valvue,
        contraseña:cajaContraseña.valvue,
    }
    Swal.fire({
  title: "Bienvenkido!",
  text: "Has sido registrado!",
  icon: "success"
});

})