#!/bin/bash

# Atualizar os repositórios
echo "Atualizando repositórios..."
sudo apt update -y

# Adicionar suporte a 32 bits
echo "Adicionando suporte a 32 bits..."
sudo dpkg --add-architecture i386

# Instalar o Wine32 pré-requisito
#echo "Instalando Wine32..."
#sudo apt install -y wine32:i386

# Criar diretório para chave GPG
echo "Criando diretório para armazenar chave GPG..."
sudo mkdir -pm755 /etc/apt/keyrings

# Baixar e adicionar a chave GPG do WineHQ
echo "Baixando e adicionando chave GPG do WineHQ..."
wget -O - https://dl.winehq.org/wine-builds/winehq.key | sudo gpg --dearmor -o /etc/apt/keyrings/winehq-archive.key

# Adicionar o repositório do WineHQ para Debian 12 (Bookworm)
echo "Adicionando repositório WineHQ..."
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/debian/dists/bookworm/winehq-bookworm.sources

# Atualizar os repositórios novamente
echo "Atualizando repositórios após adicionar WineHQ..."
sudo apt update -y

# Instalar WineHQ Stable
echo "Instalando WineHQ Stable..."
sudo apt install --install-recommends winehq-stable -y

# Confirmar instalação
echo "Wine instalado com sucesso!"
wine --version
