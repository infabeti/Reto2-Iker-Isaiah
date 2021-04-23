var usuariosRegistrados = [];
var contrasenyaUsuariosRegistrados = [];
var utiles = require("./utiles.js");

function registrarUsuario() {
	utiles.miPush(usuariosRegistrados, document.getElementById("usuario").value);
	utiles.miPush(usuariosRegistrados, document.getElementById("contrasenya").value);
}

function b(){
}

module.exports = {
	registrarUsuario:registrarUsuario,
	b:b
};