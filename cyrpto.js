//4 function total needed
// var *object* = new *class*
var Crypto = function (text){
	// stores the string for use elsewhere
	this.text = text; 
};

Crypto.prototype.normalizePlaintext = function(){
	var norm = this.text.replace(/[^0-9a-zA-Z]/g, '');
	// replace(/[^0-9a-zA-Z]/g, ''): replaces all characters that are not digits and alpha characters.
	// can also do replace(/[\w]/g, ''). does the same thing as above but in a short hand version
	return norm.toLowerCase();
	// makes all capitalized letters in a string into lower case.
};

Crypto.prototype.size = function(){
	var space = this.text.replace(/\s/g, '');
	var count = space.length;
	var sqr = Math.sqrt(count);
	return Math.ceil(sqr);
};

Crypto.prototype.plaintextSegments = function(){
	var segments = [],
	    npt = this.normalizePlaintext(),
	    size = this.size();
	//99% of the time for loops will start with "var i = 0"
	for (var i = 0; i < npt.length; i += size){
		//add a string of characters to our array of segments
		segments.push(npt.substr(i,size));
	}
	//return an array of strings that represent the plain text segments
	return segments; 
};

Crypto.prototype.ciphertext = function(){
	var code = "",
		size = this.size(),
		segs = this.plaintextSegments();
	//loop through the columns
	for (var i = 0; i < size; i+= 1) {
		//loop through the rows
		for (var j = 0; j < segs.length; j += 1){
			code += segs[j].charAt(i);
		}
	}

	// return a string representing the coded message
	return code
};

module.exports = Crypto;
