function Verificar() {
    var n1 = parseInt(document.getElementById("num1").value);
    var p1 = 12146
    var n2 = parseInt(document.getElementById("num2").value);
    var p2 = 1.92000
    var n3 = parseInt(document.getElementById("num3").value);
    var p3 = 75
	var acerto = 0


	if (n1 == p1) {  
    	acerto = acerto + 1}

    if (n2 == p2) {  
    	acerto = acerto + 1}

    if (n3 == p3) {  
    	acerto = acerto + 1}

    if (acerto == 3){
		alert("Parabéns, você acertou e será redirecionado para a página de nivél difícil")
        window.location.href = "index3.html";
    }
        
	else{
		alert("Alguma resposta errada, tente novamente")
	}

}