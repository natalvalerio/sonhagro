const data = {
    "Automóvel 🚘": ["ALLIANZ", "BRADESCO", "HDI", "LIBERTY", "MAPFRE", "SANCOR", "SUHAI", "TOKIO MARINE", "ZURICH", "POTTENCIAL"],
    "Caminhão 🚛": ["ALLIANZ", "BRADESCO", "HDI", "LIBERTY", "MAPFRE", "SUHAI", "TOKIO MARINE", "ZURICH"],
    "Motocicleta 🏍️": ["ALLIANZ", "BRADESCO", "HDI", "MAPFRE", "SUHAI", "TOKIO MARINE", "ZURICH"],
    "Empresarial 🏭": ["AIG", "ALLIANZ", "BRADESCO", "HDI", "LIBERTY", "MAPFRE", "POTTENCIAL"],
    "Residencial 🏠": ["ALLIANZ", "BRADESCO", "HDI", "LIBERTY", "MAPFRE", "SANCOR", "METLIFE", "SULAMERICA"],
    "Vida 🖤": ["ALLIANZ", "BRADESCO", "LIBERTY", "MAPFRE", "TOKIO MARINE", "ZURICH"],
    "Condomínio 🏢": ["ALLIANZ", "BRADESCO", "HDI", "TOKIO MARINE"],
    "Rural 🚜": ["AIG", "ALLIANZ", "BRADESCO", "MAPFRE", "SWISSRE"],
    "Outros 💼": ["AKAD", "ARGO", "AXA", "BERKLEY", "CHUBB", "ESSOR", "EXCELSIOR", "EZZE", "FAIRFAX", "FATOR", "KOVR", "PORTO SEGURO", "POTTENCIAL", "PRUDENTIAL", "SOMBRERO"]
};

document.addEventListener('DOMContentLoaded', () => {
    const menuHorizontal = document.getElementById('menu-horizontal');
    const menuVertical = document.getElementById('menu-vertical');

    Object.keys(data).forEach(ramo => {
        const btn = document.createElement('button');
        btn.textContent = ramo;
        btn.addEventListener('click', () => {
            displaySeguradoras(data[ramo]);
        });
        menuHorizontal.appendChild(btn);
    });

    function displaySeguradoras(seguradoras) {
        menuVertical.innerHTML = '';
        seguradoras.forEach(seguradora => {
            const item = document.createElement('div');
            item.textContent = seguradora;
            menuVertical.appendChild(item);
        });
        menuVertical.classList.remove('hidden');
    }
});
