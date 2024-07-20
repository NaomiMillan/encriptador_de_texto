
let textoOriginal = "";
let textoEncriptado = "";
let textoCopiado = "";

function encriptar(){
    limpiarVariables();
    textoOriginal = (document.getElementById('areaTexto1')).value;
    if(verificaciones(textoOriginal)){

        let longitud = textoOriginal.length;

        for (let i = 0; i < longitud; i++){
           let caracter = textoOriginal[i];
           if (caracter == 'a'){
               caracter = 'ai';
           } else if (caracter == 'e'){
               caracter = 'enter';
           } else if (caracter == 'i'){
               caracter = 'imes';
           } else if (caracter == 'o'){
               caracter = 'ober';
           } else if (caracter == 'u'){
               caracter = 'ufat';
           }
   
           textoEncriptado += caracter; 
        }
   
        let elementoTexto = document.getElementById('areaTexto2');
        elementoTexto.value = textoEncriptado;

    }
    
}

function desencriptar(){
    limpiarVariables();
    textoEncriptado = (document.getElementById('areaTexto1')).value;
    textoOriginal = textoEncriptado;

    if(verificaciones(textoEncriptado)){

        while(textoOriginal.includes('ai')){ textoOriginal = textoOriginal.replace('ai', 'a'); }
        while(textoOriginal.includes('enter')){ textoOriginal = textoOriginal.replace('enter', 'e'); }
        while(textoOriginal.includes('imes')){ textoOriginal = textoOriginal.replace('imes', 'i'); }
        while(textoOriginal.includes('ober')){ textoOriginal = textoOriginal.replace('ober', 'o'); }
        while(textoOriginal.includes('ufat')){ textoOriginal = textoOriginal.replace('ufat', 'u'); }
        
        let elementoTexto = document.getElementById('areaTexto2');
         elementoTexto.value = textoOriginal;

    }

}

function verificaciones(texto){

    let valido = true;
    let verificacionCaracteres = verificarCaracteres(texto);
     if(verificacionCaracteres){
        alert('El encriptador no funciona con carácteres especiales ni con mayúsculas');
        valido = false;
     }
     return valido;
     
}

function verificarCaracteres(texto){
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (!((caracter >= 'a' && caracter <= 'z') || caracter === ' ')) {
            return true; 
        }
    }
    return false; 
    
}

function limpiarVariables(){
    textoEncriptado = "";
    textoOriginal = "";

}

function copiar(){
    textoCopiado = (document.getElementById('areaTexto2')).value;

    let textarea = document.createElement('textarea');
    textarea.value = textoCopiado;
    document.body.appendChild(textarea);

    // Selecciona el texto en el textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    document.execCommand('copy');

    // Elimina el textarea temporal del documento
    document.body.removeChild(textarea);

    (document.getElementById('areaTexto2')).value = "";

}