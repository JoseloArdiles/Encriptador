const inputTexto = document.querySelector(".input-A")
const mensaje = document.querySelector(".mensaje")

function Bottonencriptar(){
    const TextoEncriptado = encriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = "";
}
//hola//

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll
            (matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada;
}


function Bottondesencriptar(){
    const TextoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll
            (matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptada;
}


function copiarT() {
    var copiarTexto = document.getElementById("mensaje1");
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copiarTexto.value);
}
