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
function populateRowQ(row, data = {}, nichos, situacoes, canais, status) {
    row.dataset.id = data.id || ""; // Armazena o ID da linha

    row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = data.nome || "";
    row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = data.contato|| "";
    row.appendChild(document.createElement("td")).appendChild(createSelect(nichos, data.nicho));
    row.appendChild(document.createElement("td")).appendChild(createSelect(situacoes, data.situacao));

    //row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = data.data || "";
    //row.lastChild.firstChild.type = "date";
    //row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = data.hora || "";
    //row.lastChild.firstChild.type = "time
	
	let dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.value = data.data || new Date().toISOString().split('T')[0];
    row.appendChild(document.createElement("td")).appendChild(dateInput);

    let timeInput = document.createElement("input");
    timeInput.type = "time";
    let now = new Date();
    timeInput.value = data.hora || now.toTimeString().slice(0, 5);
    row.appendChild(document.createElement("td")).appendChild(timeInput);
	
    row.appendChild(document.createElement("td")).appendChild(createSelect(canais, data.canal));
    row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = data.observacoes || "";
    row.appendChild(document.createElement("td")).appendChild(createSelect(status, data.status));

    // Botão Atualizar
    let updateBtn = document.createElement("span");
    updateBtn.textContent = "✅";
    updateBtn.onclick = () => ATUALIZARQ(row);
    row.appendChild(document.createElement("td")).appendChild(updateBtn);

    // Botão Excluir
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => EXCLUIRQ(row);
    row.lastChild.appendChild(deleteBtn);
}


//--------------------------------------------------------------------------
function NOVOQ(data = {}, nichos = [], situacoes = [], canais = [], status = []) {
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");
    populateRowQ(row, data, nichos, situacoes, canais, status);
    tbody.insertBefore(row, tbody.firstChild); // Insere a nova linha no topo
}



//--------------------------------------------------------------------------
async function SALVARQ() {
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
            fetchDataQ();
        }
    } catch (error) {
        alert("Erro ao salvar dados.");
        console.error("Erro ao salvar dados: ", error);
    }
}


//--------------------------------------------------------------------------
async function ATUALIZARQ(row) {
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
            fetchDataQ();
        }
    } catch (error) {
        alert("Erro ao atualizar dados.");
        console.error("Erro ao atualizar dados: ", error);
    }
}

//--------------------------------------------------------------------------
async function EXCLUIRQ(row) {
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
                fetchDataQ();
            }
        } catch (error) {
            alert("Erro ao excluir dados.");
            console.error("Erro ao excluir dados: ", error);
        }
    }
}

//--------------------------------------------------------------------------
async function fetchDataQ() {
    document.getElementById("loader").style.display = "flex"; 
    try {
        if (!cliente) {
            throw new Error("Variável 'cliente' não está definida!");
        }

        let query = `select * from qualit where cliente = "${cliente}"`;
        let response = await fetch(`https://natalvalerio.pythonanywhere.com/api/sql?sql=${query}`);
        let data = await response.json();

        // Buscar os arrays de categorias (nichos, situações, canais, status)
        let camposData = await campos(cliente);
        console.log("Dados do cliente:", camposData); // Debug

        let { nichos, situacoes, canais, status } = camposData;

        if (!Array.isArray(nichos) || !Array.isArray(situacoes) || !Array.isArray(canais) || !Array.isArray(status)) {
            throw new Error("Erro ao carregar campos: nichos, situações, canais ou status não são arrays.");
        }

        let tbody = document.querySelector("tbody");
        tbody.innerHTML = ""; 
        data.forEach(item => NOVOQ(item, nichos, situacoes, canais, status));
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
    document.getElementById("loader").style.display = "none"; 
}


//--------------------------------------------------------------------------
async function campos(cliente) {
    const url = `https://natalvalerio.pythonanywhere.com/api/sql?sql=select * from clientes where cliente="${cliente}"`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.length) {
            throw new Error("Cliente não encontrado ou sem dados disponíveis.");
        }

        const clienteData = data[0];

        return {
            nichos: clienteData.nichos ? ["", ...new Set(clienteData.nichos.split(",").map(n => n.trim()))] : [],
            situacoes: clienteData.situacoes ? ["", ...new Set(clienteData.situacoes.split(",").map(s => s.trim()))] : [],
            canais: clienteData.canais ? ["", ...new Set(clienteData.canais.split(",").map(c => c.trim()))] : [],
            status: clienteData.status ? ["", ...new Set(clienteData.status.split(",").map(st => st.trim()))] : []
        };
    } catch (error) {
        console.error("Erro ao buscar dados do cliente:", error);
        return { nichos: [], situacoes: [], canais: [], status: [] };
    }
}



//--------------------------------------------------------------------------
// const nichos    = ["LOJA", "FARMÁCIA", "SUPERMERCADO"];
// const situacoes = ["ATENDIMENTO", "PROSPECÇÃO"];
// const canais    = ["CHAT", "VOZ"];
// const status    = ["CHAMADA NÃO ATENDIDA", "CAIXA POSTAL", "CONTATO INCORRETO", "ATENDIMENTO EFETUADO", "PEDIDO CONCLUÍDO", "CATÁLOGO ENVIADO", "OUTROS"];


	//`https://natalvalerio.pythonanywhere.com/api/sql?sql=select * from clientes where cliente="${cliente}"`

    //var nichos = localStorage.getItem('nichos');
    // var situacoes = localStorage.getItem('situacoes');
    // var canais = localStorage.getItem('canais');
    // var status = localStorage.getItem('status');

	//var cliente1 = localStorage.getItem('cliente');


// Exemplo de uso:
//campos(cliente1).then(console.log);


window.onload = fetchDataQ;