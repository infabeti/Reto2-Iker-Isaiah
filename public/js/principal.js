var usuariosRegistrados = [];
var contrasenyaUsuariosRegistrados = [];
var utiles = require("./utiles.js");

function registrarUsuario() {
	utiles.miPush(usuariosRegistrados, document.getElementById("usuario"));
	utiles.miPush(usuariosRegistrados, document.getElementById("contrasenya"));
}

function b(){
}

module.exports = {
	registrarUsuario:registrarUsuario,
	b:b
};