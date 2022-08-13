function encriptarTexto(texto){

    cadenaTexto = [];
    var largoTexto = texto.length;
    
    
    for(var indiceTexto = 0; indiceTexto < largoTexto; indiceTexto++){
        cadenaTexto.push(texto.charAt(indiceTexto));
    }
    
    var largoArray = cadenaTexto.length;
    
    for(var indiceArray = 0; indiceArray < largoArray; indiceArray++){
        if(cadenaTexto[indiceArray] == 'e'){
            cadenaTexto.splice(indiceArray, 1, 'enter');
        }else if(cadenaTexto[indiceArray] == 'i'){
            cadenaTexto.splice(indiceArray, 1, 'imes');
        }else if(cadenaTexto[indiceArray] == 'a'){
            cadenaTexto.splice(indiceArray, 1, 'ai');
        }else if(cadenaTexto[indiceArray] == 'o'){
            cadenaTexto.splice(indiceArray, 1, 'ober');
        }else if(cadenaTexto[indiceArray] == 'u'){
            cadenaTexto.splice(indiceArray, 1, 'ufat');
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
    var copyText = document.querySelector("#msg");
    copyText.select();
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
