const miIndex = require('../js/principal.js');
const sinon = require('sinon');
const jsdom = require('jsdom');
const utiles = require('../js/utiles.js');
const JSDOM = jsdom.JSDOM;
const window = new JSDOM().window;
const document = new JSDOM("").window;

global.document = document;
global.document.getElementById = sinon.stub();
global.document.getElementById.withArgs("usuario").returns("Usuario1");
global.document.getElementById.withArgs("contrasenya").returns("contrasenya1");
sinon.stub(utiles, 'miPush');



describe("Test registrarUsuario", function() {
	it("test spec", function() {
		const res = miIndex.registrarUsuario();
		
		sinon.assert.calledTwice(utiles.miPush);
		sinon.assert.match(utiles.miPush.getCall(0).lastArg,"Usuario1");
		sinon.assert.match(utiles.miPush.getCall(1).lastArg,"contrasenya1");
	})
})