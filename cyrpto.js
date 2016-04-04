//4 function total needed
// var *object* = new *class*
var Crypto = function (text){
	// stores the string for use elsewhere
	var crypto = {

	}
	this.text = text; 
};

Crypto.prototype.normalizePlaintext = function(){
		crypto.replace(/#/g, '');
	return this.text;
};

module.exports = Crypto; 
