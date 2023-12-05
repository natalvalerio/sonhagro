function exportarParaPDF() {
	const principal = document.querySelector('.principal');

	window.print();
}	


function fx(numero, decimal) {
	return parseFloat(numero.toFixed(decimal));
}

function money(numero) {
	return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function alerta() {
	alert("Teste")
}  

function calcula() {
	var val_car, parcela, prazo, tip_lan_emb, lan_emb, tip_lan_pro, lan_pro, par_pag
	var pra_res, tax_men, tax_anu, por_tot_lan, val_tot_lan, nov_par, pra_res2, nov_pra, parcela2
	val_car     = numero(document.querySelector('#val_car').value)
	parcela     = numero(document.querySelector('#parcela').value)
	prazo       = numero(document.querySelector('#prazo').value)
	tip_lan_emb = document.querySelector('#tip_lan_emb').value
	lan_emb     = numero(document.querySelector('#lan_emb').value)
	tip_lan_pro = document.querySelector('#tip_lan_pro').value
	lan_pro     = numero(document.querySelector('#lan_pro').value)
	par_pag     = numero(document.querySelector('#par_pag').value)

	var VT = parcela * prazo
	var TX = VT / val_car
	var TM = fx((TX - 1) / prazo * 100 , 3)
	var TA = fx(TM * 12 , 2)       
	
	pra_res = prazo - par_pag
	tax_men = TM
	tax_anu = TA
	
	if (tip_lan_emb == "%") {
		document.getElementById('lan_emb').value=lan_emb+'%' 
		lan_emb = fx(lan_emb / 100 * val_car,2) 
	} else {
		document.getElementById('lan_emb').value=money(lan_emb) 
	}
	
	if (tip_lan_pro == "%") {
		document.getElementById('lan_pro').value=lan_pro+'%' 
		lan_pro = fx(lan_pro / 100 * val_car,2) 
	} else {
		document.getElementById('lan_pro').value=money(lan_pro) 
	}

	val_tot_lan = lan_emb + lan_pro
	por_tot_lan = fx(val_tot_lan / val_car * 100,2)

	var VP = fx((parcela * par_pag) + val_tot_lan,2)
	var VR = VT - VP

	nov_par = fx(VR / pra_res,2)
	pra_res2 = pra_res
	nov_pra = fx(VR / parcela,0)
	parcela2 = parcela

	
	document.getElementById('val_car').value=money(val_car)			
	document.getElementById('parcela').value=money(parcela)			
	//document.getElementById('').value=money()			
	//document.getElementById('').value=money()
	document.getElementById('tax_men').value=TM+'%'
	document.getElementById('tax_anu').value=TA+'%'
	document.getElementById('val_tot_lan').value=money(val_tot_lan)   
	document.getElementById('por_tot_lan').value=por_tot_lan+'%'
	document.getElementById('nov_par').value=money(nov_par) 					
	document.getElementById('pra_res2').value=pra_res2
	document.getElementById('nov_pra').value=nov_pra
	document.getElementById('parcela2').value=money(parcela2) 					
}


// menu de opções
function exibirPopup() {
  var menuPopup = document.getElementById("menuPopup");
  menuPopup.style.display = "block";
}

function fecharPopup() {
  var menuPopup = document.getElementById("menuPopup");
  menuPopup.style.display = "none";
}

function mul() {
	fecharPopup()

	var mult   =numero(prompt('Digite o fator multiplicador!'))
	var val_car=numero(document.getElementById('val_car').value)			
	var parcela=numero(document.getElementById('parcela').value)
	var lan_emb=numero(document.getElementById('lan_emb').value)
	var lan_pro=numero(document.getElementById('lan_pro').value)
	
	document.getElementById('val_car').value=val_car*mult			
	document.getElementById('parcela').value=parcela*mult
	document.getElementById('lan_emb').value=lan_emb
	document.getElementById('lan_pro').value=lan_pro
	calcula()
}

function dif() {
	fecharPopup()
	alert('Parcelas Diferentes')
}

function red() {
	fecharPopup()
	alert('Parcelas Reduzidas')
}
//------------------------


function numero(input) {
    var numero = input.replace(/[^\d,]/g, '');
    numero = numero.replace(',', '.');
    return Number(numero); 
}



function console() {
	console.log('Lance Emb '+lan_emb)
	console.log('Lance Pro '+lan_pro)		
	console.log('        VALOR CARTA: '+val_car)
	console.log('            PARCELA: '+parcela)
	console.log('              PRAZO: '+prazo)
	console.log('TIPO LANCE EMBUTIDO: '+tip_lan_emb)
	console.log(' TIPO LANCE PROPRIO: '+tip_lan_pro)
	console.log('     LANCE EMBUTIDO: '+lan_emb)
	console.log('      LANCE PROPRIO: '+lan_pro)

	console.log('   VALOR TOTAL: '+VT)
	console.log('          TAXA: '+TX)
	console.log('    VALOR PAGO: '+VP)
	console.log('VALOR RESTANTE: '+VR)
	console.log('   TAXA MENSAL: '+TM)
	console.log('    TAXA ANUAL: '+TA)

	console.log('PRAZO RESTANTE: '+pra_res)
	console.log('   TAXA MENSAL: '+tax_men)
	console.log('    TAXA ANUAL: '+tax_anu)
	console.log('LANCE EMBUTIDO: '+lan_emb)
	console.log(' LANCE PROPRIO: '+lan_pro)

	console.log('$ TOTAL DE LANCE: '+val_tot_lan)
	console.log('% TOTAL DE LANCE: '+por_tot_lan)
	console.log('NOVA PARCELA: '+nov_par)
	console.log('       PRAZO: '+pra_res2)
	console.log('  NOVO PRAZO: '+nov_pra)
	console.log('     PARCELA: '+parcela2)
}
