#!/bin/bash

# Atualizar os repositórios e instalar pacotes necessários
echo "Atualizando repositórios..."
sudo apt update -y
sudo apt upgrade -y

# Adicionar suporte a 32 bits (se o sistema for 64 bits)
echo "Adicionando suporte a 32 bits..."
sudo dpkg --add-architecture i386

# Baixar e adicionar a chave do repositório WineHQ
echo "Adicionando chave do repositório WineHQ..."
wget -nc https://dl.winehq.org/wine-builds/winehq.key
sudo apt-key add winehq.key

# Adicionar o repositório WineHQ para Debian
echo "Adicionando repositório do WineHQ..."
sudo apt-add-repository 'deb https://dl.winehq.org/wine-builds/debian/ bookworm main'

# Atualizar os repositórios após adição
echo "Atualizando repositórios novamente..."
sudo apt update -y

# Instalar dependências necessárias
echo "Instalando dependências recomendadas..."
sudo apt install -y apt-transport-https software-properties-common wget gnupg2

# Instalar WineHQ Stable
echo "Instalando Wine Stable..."
sudo apt install --install-recommends winehq-stable -y

# Confirmar instalação
echo "Wine instalado com sucesso!"
wine --version
