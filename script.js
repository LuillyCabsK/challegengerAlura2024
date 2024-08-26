
function encriptar() {
    var texto = document.getElementById ("txtEncrip").value.toLowerCase();
    var txtCifrado = texto.replace (/e/igm, "enter");
    var txtCifrado = txtCifrado.replace (/o/igm, "ober");
    var txtCifrado = txtCifrado.replace (/i/igm, "imes");
    var txtCifrado = txtCifrado.replace (/a/igm, "ai");
    var txtCifrado = txtCifrado.replace (/u/igm, "ufat");

    document.getElementById("astoraSolareBloqueDer").style.display = 'None';
    document.getElementById("texto").style.display = 'None';
    document.getElementById("textoBase").innerHTML = txtCifrado;
    document.getElementById("button_copiar").style.display = "inline";
    document.getElementById("copy").style.display= 'inherit';

    mensaje.value = txtCifrado;
    textArea.value = "";
}

function desencriptar() {
    var texto = document.getElementById ("txtEncrip").value.toLowerCase();
    var txtCifrado = texto.replace (/enter/igm, "e");
    var txtCifrado = txtCifrado.replace (/ober/igm, "o");
    var txtCifrado = txtCifrado.replace (/imes/igm, "i");
    var txtCifrado = txtCifrado.replace (/ai/igm, "a");
    var txtCifrado = txtCifrado.replace (/ufat/igm, "u");

    document.getElementById("astoraSolareBloqueDer").style.display  = 'None';
    document.getElementById("texto").style.display  = 'None';
    document.getElementById("textoBase").innerHTML = txtCifrado;
    document.getElementById("button_copiar").style.display = "inline";
    document.getElementById("copy").style.display= 'inherit';


}

function copy() {
    // Obtener el texto que se va a copiar
    var texto = document.getElementById("textoBase").innerText;

    // Verificar si la API de portapapeles está disponible
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto)
            .then(function() {
                alert("Texto copiado al portapapeles");
            })
            .catch(function(err) {
                console.error("Error al copiar el texto: ", err);
            });
    } else {
        console.error("La API de portapapeles no es compatible en este navegador.");
    }
}

