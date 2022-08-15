function encriptarTexto(texto){

    cadenaTexto = [];
    var largoTexto = texto.length;
    
    
    for(var indiceTexto = 0; indiceTexto < largoTexto; indiceTexto++){
        cadenaTexto.push(texto.charAt(indiceTexto));
    }
    
    var mensajeOriginal = cadenaTexto.length;
    
    for(var i = 0; i < mensajeOriginal; i++){
        if(cadenaTexto[i] == 'e'){
            cadenaTexto.splice(i, 1, 'enter');
        }else if(cadenaTexto[i] == 'i'){
            cadenaTexto.splice(i, 1, 'imes');
        }else if(cadenaTexto[i] == 'a'){
            cadenaTexto.splice(i, 1, 'ai');
        }else if(cadenaTexto[i] == 'o'){
            cadenaTexto.splice(i, 1, 'ober');
        }else if(cadenaTexto[i] == 'u'){
            cadenaTexto.splice(i, 1, 'ufat');
        }
    }

   var textoEncriptado = "".concat(...cadenaTexto);
    
    console.log(textoEncriptado);
    var salidaText = document.querySelector("#msg");
    salidaText.value = textoEncriptado;
}

function desencriptarTexto(texto){
    
    var textoDesencriptado = texto.replace(/ai/g,'a');
    textoDesencriptado = textoDesencriptado.replace(/enter/g,'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/g,'i');
    textoDesencriptado = textoDesencriptado.replace(/ober/g,'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g,'u');

    console.log(textoDesencriptado);
    var salidaText = document.querySelector("#msg");
    salidaText.value = textoDesencriptado;
}

var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var entradaText = document.querySelector("#input-texto").value;
    encriptarTexto(entradaText);
});

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var entradaText = document.querySelector("#input-texto").value;
    desencriptarTexto(entradaText);
});

function copy() {
    var copiarTexto = document.querySelector("#msg");
    copiarTexto.select();
    document.execCommand("copy");
}  
document.querySelector("#btn-copy").addEventListener("click", copy);

function limpiar(input){
    input.value= "";
}

var botonLimpiarEntrada = document.querySelector("#btn-limpiarEntrada");
botonLimpiarEntrada.addEventListener("click",function(event){
    event.preventDefault();
    var entradaText = document.querySelector("#input-texto");
    limpiar(entradaText);
});

var botonLimpiarSalida = document.querySelector("#btn-limpiarSalida");
botonLimpiarSalida.addEventListener("click",function(event){
    event.preventDefault();
    var salidaText = document.querySelector("#msg");
    limpiar(salidaText);
});
