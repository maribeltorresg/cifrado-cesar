function cipher(message){
    //desplazamiento  33;
    var result = '';
    //Recorremos el string
    for(var i = 0; i < message.length; i++){
        //Declaramos una variable donde guardaremos el codigo ASCII
        var charCode = message.charCodeAt(i);
        //Declaramos una variable donde guardaremos el codigo ASCII aplicando la formula
        var newCode = (charCode - 65 + 33) % 26 + 65;
        //Ahora ya tenemos nuestro nuevo codigo ASCII --> 72
        var letter = String.fromCharCode(newCode);
        result += letter;
    }
    return result;
}
var message = prompt('Ingrese una frase');
alert(cipher(message));
 

// La formula para descifrar es (x - n) % 26
function decipher (string){
   
}