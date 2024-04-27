//-------PDF------------
//	const principal = document.querySelector('.principal');
function exportarParaPDF() {
	window.print();
	return
}	

//----------CALCULO--------------
function calcula() {
	var val_car, parcela, prazo, tip_lan_emb, lan_emb, tip_lan_pro, lan_pro, par_pag
	var pra_res, tax_men, tax_anu, por_tot_lan, val_tot_lan, nov_par, pra_res2, nov_pra, parcela2
	var parcela_dois, prazo_dois
	val_car     = numero(document.querySelector('#val_car').value)
	parcela     = numero(document.querySelector('#parcela').value)
	prazo       = numero(document.querySelector('#prazo').value)
	tip_lan_emb = document.querySelector('#tip_lan_emb').value
	lan_emb     = numero(document.querySelector('#lan_emb').value)
	tip_lan_pro = document.querySelector('#tip_lan_pro').value
	lan_pro     = numero(document.querySelector('#lan_pro').value)
	par_pag     = numero(document.querySelector('#par_pag').value)
	parcela_dois= numero(document.querySelector('#parcela_dois').value)
	prazo_dois  = numero(document.querySelector('#prazo_dois').value)

	var prazo_T = prazo + prazo_dois
	var VT2 = parcela_dois * prazo_dois
	var VT  = (parcela * prazo) + VT2
	var parcela_M = VT / prazo_T 
	var TX  = VT / val_car
	var TM  = fx((TX - 1) / prazo_T * 100 , 3)
	var TA  = fx(TM * 12 , 2)       
	
	pra_res = prazo_T - par_pag
	tax_men = TM
	tax_anu = TA
	
	if (tip_lan_emb == "%") {
		document.getElementById('lan_emb').value=lan_emb+'%' 
		lan_emb = fx(lan_emb / 100 * val_car ,2) 
	} else {
		document.getElementById('lan_emb').value=money(lan_emb) 
	}
	
	if (tip_lan_pro == "%") {
		document.getElementById('lan_pro').value=lan_pro+'%' 
		lan_pro = fx(lan_pro / 100 * val_car ,2) 
	} else {
		document.getElementById('lan_pro').value=money(lan_pro) 
	}

	val_tot_lan = lan_emb + lan_pro
	por_tot_lan = fx(val_tot_lan / val_car * 100 ,2)

	var VP = fx((parcela * par_pag) + val_tot_lan,2)
	var VR = VT - VP

	nov_par = fx(VR / pra_res ,2)
	pra_res2 = pra_res
	nov_pra = fx(VR / parcela,0)
	parcela2 = parcela

	// -------Financiamento----
	var resultado, VF, PGM 
	resultado = Financiamento(val_car, prazo_T, 1.25); // VP = val_car, P = prazo_T, T = 1.25%
	VF = resultado.VF
	PGM = resultado.PGM

	document.getElementById('val_car').value=money(val_car)			
	document.getElementById('parcela').value=money(parcela)			
	document.getElementById('parcela_dois').value=money(parcela_dois)			
	document.getElementById('tax_men').value=TM+'%'
	document.getElementById('tax_anu').value=TA+'%'
	document.getElementById('val_tot_lan').value=money(val_tot_lan)   
	document.getElementById('por_tot_lan').value=por_tot_lan+'%'
	document.getElementById('nov_par').value=money(nov_par) 					
	document.getElementById('pra_res2').value=pra_res2
	document.getElementById('nov_pra').value=nov_pra
	document.getElementById('parcela2').value=money(parcela2) 
	document.getElementById('consorcio').value=money(VT) 
	document.getElementById('financiamento').value=money(VF)
	document.getElementById('TC').value=TM+'%'
	document.getElementById('TF').value="1.25%"
	document.getElementById('PC').value=money(parcela_M)
	document.getElementById('PF').value=money(PGM)
	return
}

//------MENU DE OPÇÕES-------------------
function exibirPopup() {
  var menuPopup = document.getElementById("menuPopup");
  menuPopup.style.display = "block";
}

//-------FECHAR MENU--------------------
function fecharPopup() {
  var menuPopup = document.getElementById("menuPopup");
  menuPopup.style.display = "none";
}

//-----------MULTIPLICA CARTAS-----------
function mul() {
	fecharPopup()
	var mult   =numero(prompt('Digite o fator multiplicador!'))
	var val_car=numero(document.getElementById('val_car').value)			
	var parcela=numero(document.getElementById('parcela').value)
	var parcela_dois=numero(document.getElementById('parcela_dois').value)
	var lan_emb=numero(document.getElementById('lan_emb').value)
	var lan_pro=numero(document.getElementById('lan_pro').value)
	
	//------ADICIONADO---------
	tip_lan_emb = document.querySelector('#tip_lan_emb').value
	lan_emb     = numero(document.querySelector('#lan_emb').value)
	tip_lan_pro = document.querySelector('#tip_lan_pro').value
	lan_pro     = numero(document.querySelector('#lan_pro').value)
		
	if (tip_lan_emb == "%") {
		document.getElementById('lan_emb').value=lan_emb+'%' 
		lan_emb = fx(lan_emb / 100 * val_car ,2) 
	} else {
		document.getElementById('lan_emb').value=money(lan_emb*mult) 
	}
	
	if (tip_lan_pro == "%") {
		document.getElementById('lan_pro').value=lan_pro+'%' 
		lan_pro = fx(lan_pro / 100 * val_car ,2) 
	} else {
		document.getElementById('lan_pro').value=money(lan_pro*mult) 
	}
	//---------------------------
	
	document.getElementById('val_car').value=  fx(val_car*mult ,2) 			
	document.getElementById('parcela').value=  fx(parcela*mult ,2) 
	document.getElementById('parcela_dois').value=  fx(parcela_dois*mult ,2) 
	//document.getElementById('lan_emb').value=lan_emb
	//document.getElementById('lan_pro').value=lan_pro
	calcula()
	return
}

//---------------PARCELAS DIFERENTES-----------
function dif() {
	fecharPopup()
	var adicional = document.getElementById("adicional");
	adicional.style.display = "block";
	return 
}

//-------------FECHAR COMPARAÇÃO-------------------------
function fechardif() {
	var adicional = document.getElementById("adicional");
	adicional.style.display = "none";
	return 	
}

//-----------PARCELAS REDUZIDAS-----------------
function red() {
	fecharPopup()
	alert('Parcelas Reduzidas')
	return 
}

//-----------COMPARAR FINANCIAMENTO-----------
function exibirComp() {
	fecharPopup()
	var comparativo = document.getElementById("comparativo");
	comparativo.style.display = "block";
	return 	
}

//-------------FECHAR COMPARAÇÃO-------------------------
function fecharComp() {
	var comparativo = document.getElementById("comparativo");
	comparativo.style.display = "none";
	return 	
}

//function numero(numero) {
function numero(numero1) {
    // Remove caracteres não numéricos
    numero1 = numero1.replace(/[^\d,.]/g, '')
    // Remove todos os pontos exceto o último
    numero1 = numero1.replace(/\.(?=.*\.)/g, '')
    // Substitui vírgulas por pontos
    numero1 = numero1.replace(',', '.')
    // Remove todos os caracteres não numéricos, exceto o último ponto
    numero1 = numero1.replace(/[^0-9.]/g, '')
    // Remove múltiplos pontos depois do primeiro
    numero1 = numero1.replace(/\.(?=.*\.)/g, '')
    return parseFloat(numero1) 
}

//------------FIXA CASAS DECIMAIS(QUANTAS FOREM DEFINIDAS)----------------
function fx(numero2, decimal) {
    //if (!isNaN(numero2)) {
	numero2 = parseFloat(numero2)
	numero2 = numero2.toFixed(decimal)
	//console.log(typeof numero2)
    return parseFloat(numero2) 
}


//------------TRANSFORMA EM VALOR MOTETÁRIO---------------------------
function money(numero3) {
	//console.log(typeof numero3);
	return numero3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

//---------RESPONSIVO--------------------
function tam() {
  var tamanhoDiv = document.getElementById("tamanho");
  var largura = window.innerWidth;

  if (largura >= 1024) {
    tamanhoDiv.textContent = "Desktop";
	tamanhoDiv.innerHTML = '<img width="50px" src="img/desktop.png" alt="Desktop">';
  } else if (largura >= 600) {
   	tamanhoDiv.innerHTML = '<img width="30px" src="img/tablet.png" alt="Tablet">';
  } else {
	tamanhoDiv.innerHTML = '<img width="10px" src="img/cel.png" alt="Celular">';
  }
  return
}

//---------RESPONSIVO--------------------
function determinarTamanhoDispositivo() {
  var larguraJanela = window.innerWidth;
  var valorCartaLabel = document.querySelector('label[for="val_car"]');
  var valorParcelaLabel = document.querySelector('label[for="parcela"]');
  var valorPrazoLabel = document.querySelector('label[for="prazo"]');
  var valorPar_pagLabel = document.querySelector('label[for="par_pag"]');
  var valorPrazo_doisLabel = document.querySelector('label[for="prazo_dois"]');
  var valorParcela_doisLabel = document.querySelector('label[for="parcela_dois"]');

  var valorFinanciamentoLabel = document.querySelector('label[for="financiamento"]');  
  var valorTFLabel = document.querySelector('label[for="TF"]');  
  var valorPFLabel = document.querySelector('label[for="PF"]');
  
  if (larguraJanela >= 1024) {
    valorCartaLabel.textContent = "Valor da Carta [R$]";
	valorParcelaLabel.textContent = "Valor da Parcela [R$]";
	valorPrazoLabel.textContent = "Prazo [Meses]";
	valorPar_pagLabel.textContent = "Nº Parcelas Pagas [Meses]";
	valorPrazo_doisLabel.textContent = "Prazo Restante [Meses]";
	valorParcela_doisLabel.textContent = "Valor Parcela Restante [R$]";

	valorFinanciamentoLabel.textContent = "TOTAL FINANCIAMENTO [R$]";
	valorTFLabel.textContent = "TAXA FINANCIAMENTO [% MÊS]";
	valorPFLabel.textContent = "PARCELA FINANCIAMENTO [R$]";
  } else if (larguraJanela >= 600) {
    valorCartaLabel.textContent = "Valor da Carta [R$]";
	valorParcelaLabel.textContent = "Parcela [R$]";
	valorPrazoLabel.textContent = "Prazo [M]";
	valorPar_pagLabel.textContent = "Nº Parc. Pagas [M]";
	valorPrazo_doisLabel.textContent = "Prazo Restante [M]";
	valorParcela_doisLabel.textContent = "Val. Parc. Restante [R$]";

	valorFinanciamentoLabel.textContent = "TOT. FINANCIAMENTO [R$]";
	valorTFLabel.textContent = "TX. FINANCIAMENTO [% MÊS]";
	valorPFLabel.textContent = "PARC. FINANCIAMENTO [R$]";
  } else {
    valorCartaLabel.textContent = "CARTA [R$]";
	valorParcelaLabel.textContent = "PARCELA [R$]";
	valorPrazoLabel.textContent = "PRAZO [M]";
	valorPar_pagLabel.textContent = "Nº P. PAGAS [M]";
	valorPrazo_doisLabel.textContent = "PRAZO RESTANTE [M]";
	valorParcela_doisLabel.textContent = "PARCELA RESTANTE [R$]";

	valorFinanciamentoLabel.textContent = "TOT. FINANC. [R$]";
	valorTFLabel.textContent = "TX. FINANC. [% MÊS]";
	valorPFLabel.textContent = "PARC. FINANC. [R$]";
  }
	atualizarTexto();
	return
}


//---------CORRIGE [R$ ou %]--------------------
function atualizarTexto() {
    var lan_emb_label = document.querySelector('#label_lan_emb');
	var tip_lan_emb = document.querySelector('#tip_lan_emb').value
	var tip_lan_pro = document.querySelector('#tip_lan_pro').value
	var valorLan_embLabel = document.querySelector('label[for="lan_emb"]');
	var valorLan_proLabel = document.querySelector('label[for="lan_pro"]');

    if (tip_lan_emb === "R$") {
        valorLan_embLabel.textContent = "LANCE EMBUTIDO [R$]";
    } else if (tip_lan_emb === "%") {
        valorLan_embLabel.textContent = "LANCE EMBUTIDO [%]";
    }
	
	if (tip_lan_pro === "R$") {
        valorLan_proLabel.textContent = "LANCE PROPRIO [R$]";
    } else if (tip_lan_pro === "%") {
        valorLan_proLabel.textContent = "LANCE PROPRIO [%]";
    }
	return
}

//-------------------------------------------------------------
function Financiamento(VP, P, T) {
    // Converte a taxa de porcentagem para decimal
    var taxaDecimal = T / 100;
    
    // Calcula o pagamento mensal usando a fórmula de amortização
    var PGM = VP * taxaDecimal / (1 - Math.pow(1 + taxaDecimal, -P));

    // Calcula o valor futuro (total)
    var VF = PGM * P;

    // Retorna o pagamento mensal (PGM) e o valor futuro (VF)
    return { PGM: PGM, VF: VF };
}
