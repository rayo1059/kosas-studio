
// let correo = document.querySelector('#correo').value;
// let clave = document.querySelector('#clave').value;

// let btnIniciarSesion = document.querySelector('#btn-iniciar-sesion');
// btnIniciarSesion.addEventListener('click', (e) => {
//   e.preventDefault();
//   correo = document.querySelector('#correo').value;
//   clave = document.querySelector('#clave').value;

//   if (correo === '' || clave === '') {
//     alert('Por favor, complete todos los campos.');
//   }else {
//     alert('Inicio de sesión exitoso. Redirigiendo a la página de catálogo...');
//     window.location.href = '/pages/catalogo.html';
//   }

//   console.log('Correo:', correo);
//   console.log('Clave:', clave);
// });



//otra parte 
// // Se trabaja con el objeto document para acceder a los elementos del DOM|
// console.log(document.all[41]);
// console.log(document.getElementsByClassName("form-input"));
// console.log(document.getElementsByClassName("form-label"));

// // Se trabaja con el id de los elementos, no con la clase
// console.log(document.getElementById(""));

// // Se trabaja con querySelector y querySelectorAll para acceder a los elementos del DOM
// console.log(document.querySelectorAll(".form-input"));
// console.log(document.querySelector(".form-input"));
// console.log(document.querySelector("input[type='email']"));


function iniciarSesion(){
let correo =document.querySelector("#correo").value;
let clave = document.querySelector("#clave").value;
if(correo == "n4xtor@gmail.com" && clave == "123456"){
    alert("Bienvenido al sistema...")
    window.location.href = "/pages/catalogo.html"
}   else{
        alert("Error de credenciales")
    }
}


let btn_login = document.querySelector("#btn-login"); 
let eventos = ["click", "dblclick", "mouseenter"]

btn_login.addEventListener(eventos[0], iniciarSesion)
//btn_login.addEventListener("click", iniciarSesion)