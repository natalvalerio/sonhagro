@echo off
echo ----------------------------------------------
echo Puxando os dados remotos do repositorio
echo ----------------------------------------------
git pull
echo ----------------------------------------------
echo Adicionando arquivos ao repositorio remoto
echo ----------------------------------------------
git add .
echo ----------------------------------------------
echo Fazendo a confirmacao das alteracoes 
echo no repositorio remoto
echo ----------------------------------------------
git commit -m "site"
echo ----------------------------------------------
echo Empurrando alteracoes para o repositorio remoto
echo ----------------------------------------------
git push
echo ----------------------------------------------
echo Aguarde tecle alogo para sair ou aguarde...
echo ----------------------------------------------
timeout /nobreak /t 8 >nul