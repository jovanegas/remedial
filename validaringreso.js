function login(){

	var clientes = [{"usuario":"admin", "password":"123","usuario":"jose","password":"asdf"}] //usuario es el que va en x.usuario y password el de x.password
    console.log(clientes)
    
    var sw= false
    var mascota= document.getElementById('usuario').value
    var password= document.getElementById('password').value

	clientes.forEach(function(x){
		if (x.usuario==mascota && x.password==password){
			location.href='pagprincipal.html'

			sw = true

		}
	
	
})

if (sw==false){
	alert("el usuario o la contraseña son incorrectos")
}
}