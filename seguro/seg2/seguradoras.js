// Array com os ramos de seguros
const ramosSeguros = [
    'Automóvel 🚘',
    'Caminhão 🚛',
    'Motociclieta 🏍️',
    'Empresarial 🏭',
    'Residencial 🏠',
    'Vida 🖤',
    'Condomínio 🏢',
    'Rural 🚜',
    'Outros 💼'
];

// Array com as seguradoras e seus ramos de atuação
const seguradoras = [
    { seguradora: 'AIG', ramos: ['', '1', '', '1', '', '', '', '1', '1'] },
    { seguradora: 'AKAD', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'ALLIANZ', ramos: ['1', '1', '1', '1', '1', '1', '1', '1', '1'] },
    { seguradora: 'ARGO', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'AXA', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'BERKLEY', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'BRADESCO', ramos: ['1', '1', '1', '1', '1', '1', '1', '', ''] },
    { seguradora: 'CHUBB', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'ESSOR', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'EXCELSIOR', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'EZZE', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'FAIRFAX', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'FATOR', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'HDI', ramos: ['1', '1', '1', '1', '1', '', '1', '', ''] },
    { seguradora: 'KOVR', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'LIBERTY', ramos: ['1', '1', '', '1', '1', '1', '', '', ''] },
    { seguradora: 'MAG', ramos: ['', '', '', '', '', '1', '', '', ''] },
    { seguradora: 'MAPFRE', ramos: ['1', '1', '1', '1', '1', '1', '', '1', ''] },
    { seguradora: 'METLIFE', ramos: ['', '', '', '', '', '1', '', '', ''] },
    { seguradora: 'NEWE', ramos: ['', '', '', '', '', '', '', '', '1'] },
    { seguradora: 'PORTO SEGURO', ramos: ['1', '1', '1', '1', '1', '1', '1', '1', ''] },
    { seguradora: 'POTTENCIAL', ramos: ['', '', '', '1', '1', '', '', '', '1'] },
    { seguradora: 'PRUDENTIAL', ramos: ['', '', '', '', '', '1', '', '', ''] },
    { seguradora: 'SANCOR', ramos: ['1', '', '', '1', '', '', '', '', ''] },
    { seguradora: 'SOMBRERO', ramos: ['', '', '', '', '', '', '','', '', '1'] },
    { seguradora: 'SUHAI', ramos: ['1', '1', '1', '', '', '', '', '', ''] },
    { seguradora: 'SULAMERICA', ramos: ['', '', '', '', '', '1', '', '', ''] },
    { seguradora: 'SURA', ramos: ['', '', '', '', '1', '', '', '', ''] },
    { seguradora: 'SWISSRE', ramos: ['', '', '', '', '', '', '', '1', ''] },
    { seguradora: 'TOKIO MARINE', ramos: ['1', '1', '1', '1', '1', '1', '1', '', ''] },
    { seguradora: 'ZURICH', ramos: ['1', '1', '1', '1', '1', '1', '', '', ''] }
];

// Função para gerar os arrays de seguradoras para cada ramo
function gerarArraysSeguradorasPorRamo() {
    const arraysSeguradorasPorRamo = {};

    // Itera sobre os ramos de seguros
    ramosSeguros.forEach(ramo => {
        // Cria um array vazio para o ramo atual
        arraysSeguradorasPorRamo[ramo] = [];
        // Itera sobre as seguradoras
        seguradoras.forEach(seguradora => {
            // Verifica se a seguradora atua no ramo atual
            if (seguradora.ramos[ramosSeguros.indexOf(ramo)] !== '') {
                // Adiciona a seguradora ao array do ramo atual
                arraysSeguradorasPorRamo[ramo].push(seguradora.seguradora);
            }
        });
    });

    return arraysSeguradorasPorRamo;
}

// Função para gerar o HTML dinamicamente
function gerarHTML() {
    const arraysSeguradorasPorRamo = gerarArraysSeguradorasPorRamo();

    let html = '<table><thead><tr>';
    // Adiciona os cabeçalhos dos ramos
    ramosSeguros.forEach(ramo => {
        html += `<th>${ramo}</th>`;
    });
    html += '</tr></thead><tbody>';
    // Adiciona as linhas com os dados das seguradoras
    seguradoras.forEach(seguradora => {
        html += '<tr>';
        seguradora.ramos.forEach(ramo => {
            html += `<td>${ramo}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody></table>';
    return html;
}


/*
// Função para gerar o HTML dinamicamente
function gerarHTML() {
    let html = '<table><thead><tr>';
    // Adiciona os cabeçalhos dos ramos
    ramosSeguros.forEach(ramo => {
        html += `<th>${ramo}</th>`;
    });
    html += '</tr></thead><tbody>';
    // Adiciona as linhas com os dados das seguradoras
    seguradoras.forEach(seguradora => {
        html += '<tr>';
        seguradora.ramos.forEach(ramo => {
            html += `<td>${ramo}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody></table>';
    return html;
}
*/


/*
// Função para gerar o HTML dinamicamente
function gerarHTML() {
    let html = '<table><thead><tr><th>SEGURADORA</th>';
    // Adiciona os cabeçalhos dos ramos
    ramosSeguros.forEach(ramo => {
        html += `<th>${ramo}</th>`;
    });
    html += '</tr></thead><tbody>';
    // Adiciona as linhas com os dados das seguradoras
    seguradoras.forEach(seguradora => {
        html += '<tr>';
        html += `<td>${seguradora.seguradora}</td>`;
        seguradora.ramos.forEach(ramo => {
            html += `<td>${ramo}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody></table>';
    return html;
}
*/
