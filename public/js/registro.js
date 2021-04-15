var usuariosRegistrados = [];
var contrasenyaUsuariosRegistrados = [];

function registrarUsuario() {
	usuariosRegistrados.push(document.getElementById("usuario").valueOf().value);
	contrasenyaUsuariosRegistrados.push(document.getElementById("contrasenya").valueOf().value);
}

function mostrarUsuario() {
	var miTextField = document.getElementById("comprobar").value;
	miTextField = usuariosRegistrados[0].value;
}