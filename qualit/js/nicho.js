//--------------------------------------------------------------------------

function populateRow(row, data = {}) {
    row.dataset.id = data.id || ""; // Armazena o ID da linha

    row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = data.nicho' || "";
	
    // Botão Atualizar
    let updateBtn = document.createElement("span");
    updateBtn.textContent = "✅";
    updateBtn.onclick = () => ATUALIZAR(row);
    row.appendChild(document.createElement("td")).appendChild(updateBtn);

    // Botão Excluir
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => EXCLUIR(row);
    row.lastChild.appendChild(deleteBtn);
}


//--------------------------------------------------------------------------
function NOVO(data = {}) {
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");
    populateRow(row, data);
    tbody.insertBefore(row, tbody.firstChild); // Insere a nova linha no topo
}

//--------------------------------------------------------------------------
async function fetchData() {
    try {
        let query = `select * from nichos`
        let response = await fetch(`https://natalvalerio.pythonanywhere.com/api/sql?sql=${query}`);
        let data = await response.json();
        let tbody = document.querySelector("tbody");
        tbody.innerHTML = ""; 
        data.forEach(item => NOVO(item));
    } catch (error) {
        console.error("Erro ao buscar dados: ", error);
    }
}


//--------------------------------------------------------------------------
async function SALVAR() {
    let tbody = document.querySelector("tbody");
    let firstRow = tbody.rows[0]; // Captura a primeira linha
    let data = {};

    firstRow.querySelectorAll("td").forEach((td, index) => {
        if (index === 0) data.nome = td.querySelector("input").value;
        if (index === 1) data.contato = td.querySelector("input").value;
        if (index === 2) data.nicho = td.querySelector("select").value;
        if (index === 3) data.situacao = td.querySelector("select").value;
        if (index === 4) data.data = td.querySelector("input").value;
        if (index === 5) data.hora = td.querySelector("input").value;
        if (index === 6) data.canal = td.querySelector("select").value;
        if (index === 7) data.observacoes = td.querySelector("input").value;
        if (index === 8) data.status = td.querySelector("select").value;
    });


	//const cliente = localStorage.getItem('cliente');
    let sqlQuery = `insert into qualit (nome, contato, nicho, situacao, data, hora, canal, observacoes, status, cliente) values ('${data.nome}', '${data.contato}', '${data.nicho}', '${data.situacao}', '${data.data}', '${data.hora}', '${data.canal}', '${data.observacoes}', '${data.status}', '${cliente}')`;
    let encodedQuery = encodeURIComponent(sqlQuery);

    try {
        let response = await fetch(`https://natalvalerio.pythonanywhere.com/api/sql?sql=${encodedQuery}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            alert("Erro ao salvar dados!");
            console.error("Erro:", response.status, response.statusText);
        } else {
            alert("Dados salvos com sucesso!");
            fetchData();
        }
    } catch (error) {
        alert("Erro ao salvar dados.");
        console.error("Erro ao salvar dados: ", error);
    }
}


//--------------------------------------------------------------------------
async function ATUALIZAR(row) {
    let id = row.dataset.id;
    if (!id) {
        alert("Não é possível atualizar uma linha sem ID.");
        return;
    }

    let data = {};
    row.querySelectorAll("td").forEach((td, index) => {
        if (index === 0) data.nome = td.querySelector("input").value;
        if (index === 1) data.contato = td.querySelector("input").value;
        if (index === 2) data.nicho = td.querySelector("select").value;
        if (index === 3) data.situacao = td.querySelector("select").value;
        if (index === 4) data.data = td.querySelector("input").value;
        if (index === 5) data.hora = td.querySelector("input").value;
        if (index === 6) data.canal = td.querySelector("select").value;
        if (index === 7) data.observacoes = td.querySelector("input").value;
        if (index === 8) data.status = td.querySelector("select").value;
    });

	//alert(cliente)
    let sqlQuery = `update qualit set nome='${data.nome}', contato='${data.contato}', nicho='${data.nicho}', situacao='${data.situacao}', data='${data.data}', hora='${data.hora}', canal='${data.canal}', observacoes='${data.observacoes}', status='${data.status}', cliente='${cliente}' where id=${id}`;
    let encodedQuery = encodeURIComponent(sqlQuery);

    try {
        let response = await fetch(`https://natalvalerio.pythonanywhere.com/api/sql?sql=${encodedQuery}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            alert("Erro ao atualizar dados!");
            console.error("Erro:", response.status, response.statusText);
        } else {
            alert("Dados atualizados com sucesso!");
            fetchData();
        }
    } catch (error) {
        alert("Erro ao atualizar dados.");
        console.error("Erro ao atualizar dados: ", error);
    }
}

//--------------------------------------------------------------------------
async function EXCLUIR(row) {
    let id = row.dataset.id;
    if (!id) {
        alert("Não é possível excluir uma linha sem ID.");
        return;
    }

    let sqlQuery = `delete from qualit where id=${id}`;
    let encodedQuery = encodeURIComponent(sqlQuery);

    if (confirm("Tem certeza de que deseja excluir esta linha?")) {
        try {
            let response = await fetch(`https://natalvalerio.pythonanywhere.com/api/sql?sql=${encodedQuery}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                alert("Erro ao excluir dados!");
                console.error("Erro:", response.status, response.statusText);
            } else {
                alert("Dados excluídos com sucesso!");
                fetchData();
            }
        } catch (error) {
            alert("Erro ao excluir dados.");
            console.error("Erro ao excluir dados: ", error);
        }
    }
}



//--------------------------------------------------------------------------
const nichos    = [" ", "LOJA", "FARMÁCIA", "SUPERMERCADO"];
const situacoes = [" ", "ATENDIMENTO", "PROSPECÇÃO"];
const canais    = [" ", "CHAT", "VOZ"];
const status    = [" ", "CHAMADA NÃO ATENDIDA", "CAIXA POSTAL", "CONTATO INCORRETO", "ATENDIMENTO EFETUADO", "PEDIDO CONCLUÍDO", "CATÁLOGO ENVIADO", "OUTROS"];


window.onload = fetchData;

//--------------------------------------------------------------------------
//require('dotenv').config()
//const apiNome = process.env.API_NOME
//alert(apiNome)