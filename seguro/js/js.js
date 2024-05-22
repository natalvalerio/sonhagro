const ramosSeguros = [
    'AUTOMÓVEL   🚘',
    'CAMINHÃO    🚛',
    'MOTOCICLETA 🏍️',
    'EMPRESARIAL 🏭',
    'RESIDENCIAL 🏠',
    'VIDA        ❤️',
    'CONDOMÍNIO  🏢',
    'RURAL       🚜',
    'OUTROS      💼'
];

const seguradoras = [
//                                         🚘   🚛   🏍   🏭   🏠   ❤   🏢   🚜   💼	
    { seguradora: 'ALLIANZ     ', ramos: ['1', '1', '1', '1', '1', '1', '1', '1', '1'], ativo: '1', link: 'https://www.allianz.com.br'     },
    { seguradora: 'HDI         ', ramos: ['1', '1', '1', '1', '1', ' ', '1', ' ', ' '], ativo: '1', link: 'https://www.hdi.com.br/hdidigital/'         },
    { seguradora: 'LIBERTY     ', ramos: ['1', '1', ' ', '1', '1', '1', ' ', ' ', ' '], ativo: '1', link: 'https://www.liberty.com.br'     },
    { seguradora: 'MAPFRE      ', ramos: ['1', '1', '1', '1', '1', '1', ' ', '1', ' '], ativo: '1', link: 'https://www.mapfre.com.br'      },
    { seguradora: 'POTTENCIAL  ', ramos: [' ', ' ', ' ', '1', '1', ' ', ' ', ' ', '1'], ativo: '1', link: 'https://www.pottencial.com.br'  },
    { seguradora: 'SULAMERICA  ', ramos: [' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' '], ativo: '1', link: 'https://www.sulamerica.com.br'  },
    { seguradora: 'SUHAI       ', ramos: ['1', '1', '1', ' ', ' ', ' ', ' ', ' ', ' '], ativo: '1', link: 'https://www.suhai.com.br'       },
    { seguradora: 'TOKIO MARINE', ramos: ['1', '1', '1', '1', '1', '1', '1', ' ', ' '], ativo: '1', link: 'https://www.tokiomarine.com.br' },
    { seguradora: 'AIG         ', ramos: [' ', '1', ' ', '1', ' ', ' ', ' ', '1', '1'], ativo: '0', link: '.' },
    { seguradora: 'AKAD        ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'ARGO        ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'AXA         ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'BERKLEY     ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'BRADESCO    ', ramos: ['1', '1', '1', '1', '1', '1', '1', ' ', ' '], ativo: '0', link: '.' },
    { seguradora: 'CHUBB       ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'ESSOR       ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'EXCELSIOR   ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'EZZE        ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'FAIRFAX     ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'FATOR       ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'KOVR        ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'MAG         ', ramos: [' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' '], ativo: '0', link: '.' },
    { seguradora: 'METLIFE     ', ramos: [' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' '], ativo: '0', link: '.' },
    { seguradora: 'NEWE        ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'PORTO SEGURO', ramos: ['1', '1', '1', '1', '1', '1', '1', '1', ' '], ativo: '0', link: '.' },
    { seguradora: 'PRUDENTIAL  ', ramos: [' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' '], ativo: '0', link: '.' },
    { seguradora: 'SANCOR      ', ramos: ['1', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' '], ativo: '0', link: '.' },
    { seguradora: 'SOMBRERO    ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'], ativo: '0', link: '.' },
    { seguradora: 'SURA        ', ramos: [' ', ' ', ' ', ' ', '1', ' ', ' ', ' ', ' '], ativo: '0', link: '.' },
    { seguradora: 'SWISSRE     ', ramos: [' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' '], ativo: '0', link: '.' },
    { seguradora: 'ZURICH      ', ramos: ['1', '1', '1', '1', '1', '1', ' ', ' ', ' '], ativo: '0', link: '.' }
];

document.addEventListener('DOMContentLoaded', () => {
    const menuHorizontal = document.getElementById('menu-horizontal');
    const menuVertical = document.getElementById('menu-vertical');
	let activeButton = null; // Definindo a variável aqui

    ramosSeguros.forEach((ramo, index) => {
        const btn = document.createElement('button');
        btn.textContent = ramo;
        btn.addEventListener('click', () => {
            displaySeguradoras(index);
		    if (activeButton) {
                activeButton.classList.remove('active');
            }
            btn.classList.add('active');
            activeButton = btn;	
			
        });
        menuHorizontal.appendChild(btn);
    });

    function displaySeguradoras(index) {
        menuVertical.innerHTML = '';
        seguradoras.forEach(entry => {
          //if (entry.ramos[index] === '1') {
			if (entry.ramos[index] === '1' && entry.ativo === '1') {	
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