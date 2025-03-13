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
async function Excel() {
    try {
        const response = await fetch("https://natalvalerio.pythonanywhere.com/api/sql?sql=select * from qualit");
        const data = await response.json();

        if (!data || data.length === 0) {
            alert("Nenhum dado encontrado.");
            return;
        }

        // Criando um worksheet (aba do Excel)
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Dados");

        // Gerando o arquivo Excel
        XLSX.writeFile(workbook, "dados.xlsx");
    } catch (error) {
        console.error("Erro ao exportar:", error);
        alert("Erro ao buscar os dados.");
    }
}


//--------------------------------------------------------------------------
//require('dotenv').config()
//const apiNome = process.env.API_NOME
//alert(apiNome)