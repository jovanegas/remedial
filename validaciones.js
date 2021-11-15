const formulario = document.getElementById('formulario');// con esto se comunica con el grupo form de index.
const inputs = document.querySelectorAll('#formulario input'); //arreglo de todos los inputs en el form del index, el numeral es porque es un id al que queremos nombrar

var clientes =[]
function agregarClientes(){

var mascota= document.getElementById('usuario').value
var cliente= document.getElementById('nombre').value
var password= document.getElementById('password').value
var email= document.getElementById('email').value
var telefono= document.getElementById('telefono').value

var cliente = {"nombreMascota":mascota,"nombreCliente":cliente,"contraseña":password, "correo":email, "numTelefono":telefono}
clientes.push(cliente)
console.log(clientes)
}           

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo, entre 4 y 16 caracteres
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos. entre 1 y 40 caracteres
	password: /^.{4,12}$/, // 4 a 12 digitos.
	password2: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,// letras,numeros,arroba,etc.
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	email: false,
	telefono: false,


}
const validarFormulario = (e) => {
	switch (e.target.name){ // este evento con switch permite que el programa pueda determinar a cual campo se le esta realziando la validacion a traves de los names que tienen los inputs
        case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');  
        break;

        case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');  
        break;

        case "password":
			validarCampo(expresiones.password, e.target, 'password'); 
		
		break;

        case "password2":
			validarPassword2();
        break;

        case "email":
			validarCampo(expresiones.email, e.target, 'email');  
        break;

        case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');  
        break;

    }	
}


const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto'); //este class list va en el estillos.css
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto'); //este class list va en el estillos.css
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto'); //este class list va en el estillos.css
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto'); //este class list va en el estillos.css
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}

}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto'); //este class list va en el estillos.css
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto'); //este class list va en el estillos.css
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		
	} else {

		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto'); //este class list va en el estillos.css
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto'); //este class list va en el estillos.css
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); // del const validarFormulario si presiona una tecla y la sulta para validar validar
    
    input.addEventListener('blur', validarFormulario); // si da click fuera de uno de los campos para validar
            
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if (campos.usuario && campos.nombre && campos.password && campos.email && campos.telefono && terminos.checked){
		agregarClientes();
		
		formulario.reset();
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() =>{
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		},4000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono)=>{
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

//funcion para logearse

