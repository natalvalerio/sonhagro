const ramosSeguros = [
    'Automóvel 🚘',
    'Caminhão 🚛',
    'Motocicleta 🏍️',
    'Empresarial 🏭',
    'Residencial 🏠',
    'Vida ❤️',
    'Condomínio 🏢',
    'Rural 🚜',
    'Outros 💼'
];

const seguradoras = [
    { seguradora: 'AIG', ramos: ['', '1', '', '1', '', '', '', '1', '1'], link: 'https://www.aig.com.br' },
    { seguradora: 'AKAD', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.akad.com.br' },
    { seguradora: 'ALLIANZ', ramos: ['1', '1', '1', '1', '1', '1', '1', '1', '1'], link: 'https://www.allianz.com.br' },
    { seguradora: 'ARGO', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.argo.com.br' },
    { seguradora: 'AXA', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.axa.com.br' },
    { seguradora: 'BERKLEY', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.berkley.com.br' },
    { seguradora: 'BRADESCO', ramos: ['1', '1', '1', '1', '1', '1', '1', '', ''], link: 'https://www.bradescoseguros.com.br' },
    { seguradora: 'CHUBB', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.chubb.com.br' },
    { seguradora: 'ESSOR', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.essor.com.br' },
    { seguradora: 'EXCELSIOR', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.excelsior.com.br' },
    { seguradora: 'EZZE', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.ezze.com.br' },
    { seguradora: 'FAIRFAX', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.fairfax.com.br' },
    { seguradora: 'FATOR', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.fator.com.br' },
    { seguradora: 'HDI', ramos: ['1', '1', '1', '1', '1', '', '1', '', ''], link: 'https://www.hdi.com.br' },
    { seguradora: 'KOVR', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.kovr.com.br' },
    { seguradora: 'LIBERTY', ramos: ['1', '1', '', '1', '1', '1', '', '', ''], link: 'https://www.liberty.com.br' },
    { seguradora: 'MAG', ramos: ['', '', '', '', '', '1', '', '', ''], link: 'https://www.mag.com.br' },
    { seguradora: 'MAPFRE', ramos: ['1', '1', '1', '1', '1', '1', '', '1', ''], link: 'https://www.mapfre.com.br' },
    { seguradora: 'METLIFE', ramos: ['', '', '', '', '', '1', '', '', ''], link: 'https://www.metlife.com.br' },
    { seguradora: 'NEWE', ramos: ['', '', '', '', '', '', '', '', '1'], link: 'https://www.newe.com.br' },
    { seguradora: 'PORTO SEGURO', ramos: ['1', '1', '1', '1', '1', '1', '1', '1', ''], link: 'https://www.portoseguro.com.br' },
    { seguradora: 'POTTENCIAL', ramos: ['', '', '', '1', '1', '', '', '', '1'], link: 'https://www.pottencial.com.br' },
    { seguradora: 'PRUDENTIAL', ramos: ['', '', '', '', '', '1', '', '', ''], link: 'https://www.prudential.com.br' },
    { seguradora: 'SANCOR', ramos: ['1', '', '', '1', '', '', '', '', ''], link: 'https://www.sancor.com.br' },
    { seguradora: 'SOMBRERO', ramos: ['', '', '', '', '', '', '','', '1'], link: 'https://www.sombrero.com.br' },
    { seguradora: 'SUHAI', ramos: ['1', '1', '1', '', '', '', '', '', ''], link: 'https://www.suhai.com.br' },
    { seguradora: 'SULAMERICA', ramos: ['', '', '', '', '', '1', '', '', ''], link: 'https://www.sulamerica.com.br' },
    { seguradora: 'SURA', ramos: ['', '', '', '', '1', '', '', '', ''], link: 'https://www.sura.com.br' },
    { seguradora: 'SWISSRE', ramos: ['', '', '', '', '', '', '', '1', ''], link: 'https://www.swissre.com.br' },
    { seguradora: 'TOKIO MARINE', ramos: ['1', '1', '1', '1', '1', '1', '1', '', ''], link: 'https://www.tokiomarine.com.br' },
    { seguradora: 'ZURICH', ramos: ['1', '1', '1', '1', '1', '1', '', '', ''], link: 'https://www.zurich.com.br' }
];

document.addEventListener('DOMContentLoaded', () => {
    const menuHorizontal = document.getElementById('menu-horizontal');
    const menuVertical = document.getElementById('menu-vertical');

    ramosSeguros.forEach((ramo, index) => {
        const btn = document.createElement('button');
        btn.textContent = ramo;
        btn.addEventListener('click', () => {
            displaySeguradoras(index);
        });
        menuHorizontal.appendChild(btn);
    });

    function displaySeguradoras(index) {
        menuVertical.innerHTML = '';
        seguradoras.forEach(entry => {
            if (entry.ramos[index] === '1') {
                const link = document.createElement('a');
                link.href = entry.link;
                link.target = '_blank'; // Abre o link em uma nova aba
                link.textContent = entry.seguradora;
                link.classList.add('button-link'); // Adiciona classe para estilização
                
                const item = document.createElement('button');
                item.appendChild(link);
                menuVertical.appendChild(item);
            }
        });
        menuVertical.classList.remove('hidden');
    }
});

