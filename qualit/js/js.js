const cliente = localStorage.getItem('cliente');
const usuario = localStorage.getItem('usuario');

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
function createSelect(options, selectedValue = "") {
    let select = document.createElement("select");
    options.forEach(option => {
        let opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        if (option === selectedValue) {
            opt.selected = true;
        }
        select.appendChild(opt);
    });
    return select;
}

//--------------------------------------------------------------------------
//require('dotenv').config()
//const apiNome = process.env.API_NOME
//alert(apiNome)