let originalToUpperCase = String.prototype.toUpperCase;

String.prototype.toUpperCase = function() {
    return "ESTO ESTA PROHIBIDO!!!";
}

console.log('hola'.toUpperCase());

String.prototype.toUpperCase = originalToUpperCase;

console.log('hola'.toUpperCase());