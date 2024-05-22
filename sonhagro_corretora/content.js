window.addEventListener('load', function() {
  // Espera a página carregar completamente
  setTimeout(function() {
	const loginField = document.getElementById('login');
	const passwordField = document.getElementById('senha');
	const loginButton = document.querySelector('button[type="submit"]'); 

    if (loginField && passwordField && loginButton) {
      loginField.value = 'NATALINO.VALERIO';
      passwordField.value = 'V@lerio123';
      loginButton.click();
    }
  }, 1000); // Espera 1 segundo para garantir que a página esteja completamente carregada
});
