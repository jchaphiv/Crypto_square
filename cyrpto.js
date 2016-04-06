//4 function total needed
// var *object* = new *class*
var Crypto = function (text){
	// stores the string for use elsewhere
	this.text = text; 
};

Crypto.prototype.normalizePlaintext = function(){
	return this.text.replace(/[^0-9a-zA-Z]/g, ''); 
// replace(/[^0-9a-zA-Z]/g, ''): replaces all characters that are not digits and alpha characters
	return this.text.toLowerCase();
};

module.exports = Crypto;



