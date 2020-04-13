var tamanho = document.getElementById("tamanho");
var descTamanho = document.getElementById("descTamanho");
var board = document.getElementById("board");

descTamanho.innerHTML = tamanho.value;
criaCelulas(5);

tamanho.oninput = function() {
	descTamanho.innerHTML = this.value;
	criaCelulas(this.value);
}

function criaCelulas(x) {
	board.innerHTML = "";
	console.log("cria " + x + " celulas");
	for (i=0; i<x; i++) {
		var linha = document.createElement('tr');
		for (j=0; j<x; j++) {
			var coluna = document.createElement('td');
			linha.appendChild(coluna)
		}
		console.log("linha " + i)
		board.appendChild(linha);
	}
}