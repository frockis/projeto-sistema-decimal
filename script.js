function abrirMenu(){
    document.getElementById("menu").style.width = "250px";
    document.getElementById("conteudo").style.marginLeft = "250px";
}

function fecharMenu(){
    document.getElementById("menu").style.width = "0px";
    document.getElementById("conteudo").style.marginLeft = "0px";
}
function conversorBin(){
var binario = document.getElementById("bin-input");
var decimal = parseInt(binario, 2);
console.log(decimal);
}
function conversorHexa(){
var hexadecimal = document.getElementById("hexa-input");
var decimal = parseInt(hexadecimal, 16);
console.log(decimal);
}