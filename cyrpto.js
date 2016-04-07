//4 function total needed
// var *object* = new *class*
var Crypto = function (text){
	// stores the string for use elsewhere
	this.text = text; 
};

Crypto.prototype.normalizePlaintext = function(){
	var norm = this.text.replace(/[^0-9a-zA-Z]/g, '');
	// replace(/[^0-9a-zA-Z]/g, ''): replaces all characters that are not digits and alpha characters.
	return norm.toLowerCase();
	// makes all capitalized letters in a string into lower case.
};

Crypto.prototype.size = function(){
	var space = this.text.replace(/\s/g, '');
	var count = space.length;
	var sqr = Math.sqrt(count);
	return Math.ceil(sqr);
};

Cyrpto.prototype.plaintextSegments = function(){

};


module.exports = Crypto;
