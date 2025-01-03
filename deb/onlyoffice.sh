#!/bin/bash

# Sair em caso de erro
#set -e

# Atualizar pacotes
echo "Atualizando pacotes do sistema..."
sudo apt update -y && sudo apt upgrade -y

# Baixar os arquivos
echo "Baixando arquivos..."
wget "https://natalvalerio.github.io/sonhagro/deb/onlyoffice.zip" -O "onlyoffice.zip"
wget "https://natalvalerio.github.io/sonhagro/deb/onlyoffice.z01" -O "onlyoffice.z01"
wget "https://natalvalerio.github.io/sonhagro/deb/onlyoffice.z02" -O "onlyoffice.z02"


# Descompactar o pacote onlyoffice.deb
echo "Descompactando onlyoffice.deb com 7z..."
7z x onlyoffice.zip

# Instalar o pacote .deb
echo "Instalando o pacote onlyoffice.deb..."
sudo dpkg -i "onlyoffice-desktopeditors_amd64.deb"

# Resolver dependências
echo "Resolvendo dependências..."
sudo apt install -f -y

# Limpeza
echo "Limpando arquivos temporários..."
rm -f onlyoffice.*

echo "Instalação concluída com sucesso!"
