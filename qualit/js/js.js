const cliente = localStorage.getItem('cliente');
const usuario = localStorage.getItem('usuario');
if (!usuario) {
      window.location.href = 'index.html'; // Redireciona para index.html
}


//--------------------------------------------------------------------------
function updateDateTime() {
    const now = new Date()
    const dateTimeString = now.toLocaleString() + ` - [CLIENTE: ${cliente}] - [USUÁRIO: ${usuario}]` 
    document.getElementById("dateTime").textContent = dateTimeString
}

setInterval(updateDateTime, 1000)

//--------------------------------------------------------------------------
function Pesquisar() {
	const termo = document.getElementById("Pesquisar").value.toLowerCase();
	const linhas = document.querySelectorAll("tbody tr");
	
	linhas.forEach(linha => {
		const colunas = linha.querySelectorAll("td");
		let encontrou = false;
	
		colunas.forEach((coluna, index) => {
			if (index !== colunas.length - 1) { // Ignora a última coluna (AÇÕES)
				let texto = "";
	
				// Verifica se a coluna contém um input ou select
				if (coluna.querySelector("input")) {
					texto = coluna.querySelector("input").value.toLowerCase();
				} else if (coluna.querySelector("select")) {
					texto = coluna.querySelector("select").value.toLowerCase();
				} else {
					texto = coluna.textContent.toLowerCase();
				}
	
				if (texto.includes(termo)) {
					encontrou = true;
				}
			}
		});
	
		if (encontrou) {
			linha.style.display = "";
		} else {
			linha.style.display = "none";
		}
	})
}

//--------------------------------------------------------------------------
//require('dotenv').config()
//const apiNome = process.env.API_NOME
//alert(apiNome)