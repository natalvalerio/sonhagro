#!/bin/bash

# Sair em caso de erro
set -e

# Atualizar pacotes
echo "Atualizando pacotes do sistema..."
sudo apt update -y && sudo apt upgrade -y

# Baixar os arquivos
echo "Baixando arquivos..."
wget "https://natalvalerio.github.io/sonhagro/deb/edge.zip" -O "edge.zip"
wget "https://natalvalerio.github.io/sonhagro/deb/edge.z01" -O "edge.z01"

# Verificar se os arquivos foram baixados
#if [[ ! -f "edge.zip" || ! -f "edge.z01" ]]; then
#  echo "Erro: Falha ao baixar os arquivos."
#  exit 1
#fi

# Descompactar o pacote edge.deb
echo "Descompactando edge.deb com 7z..."
7z x edge.zip

# Verificar se o arquivo .deb foi extraído
#if [[ ! -f "edge.deb" ]]; then
#  echo "Erro: O arquivo edge.deb não foi encontrado após a descompactação."
#  exit 1
#fi

# Instalar o pacote .deb
echo "Instalando o pacote edge.deb..."
sudo dpkg -i "edge.deb"

# Resolver dependências
echo "Resolvendo dependências..."
sudo apt install -f -y

# Limpeza
echo "Limpando arquivos temporários..."
rm -f edge.*

echo "Instalação concluída com sucesso!"
