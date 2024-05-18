function abrirMenu(){
    document.getElementById("menu").style.width = "250px";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("conteudo").style.marginLeft = "250px";
}

function fecharMenu(){
    document.getElementById("menu").style.width = "0px";
    document.getElementById("menu").style.display = "none";
    document.getElementById("conteudo").style.marginLeft = "";
}

function convert(id) {
    let decimalInput = document.getElementById("decimal");
    let hexadecimalInput = document.getElementById("hexadecimal");
    let binaryInput = document.getElementById("binary");
  
    if (id === "decimal") {
      let decimal = parseInt(decimalInput.value);
      if (!isNaN(decimal)){
        hexadecimalInput.value = decimal.toString(16);
        binaryInput.value = decimal.toString(2);
        }else{
            hexadecimalInput.value = "";
            binaryInput.value = "";
        }
      } else if (id === "hexadecimal") {
        let decimal = parseInt(hexadecimalInput.value, 16);
        if (!isNaN(decimal)){
        decimalInput.value = decimal;
        binaryInput.value = decimal.toString(2);
    } else{
        decimalInput.value = "";
        binaryInput.value = "";
    }
      } else if (id === "binary") {
        let decimal = parseInt(binaryInput.value, 2);
        if (!isNaN(decimal)){
        decimalInput.value = decimal;
        hexadecimalInput.value = decimal.toString(16);
        } else{
            decimalInput.value = "";
            hexadecimalInput.value = "";
        }
        }
    }