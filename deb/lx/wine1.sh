#!/bin/bash

# Atualizar o sistema
echo "Atualizando repositórios..."
sudo apt update -y
sudo apt upgrade -y

# Adicionar a arquitetura de 32 bits
echo "Adicionando suporte a 32 bits..."
sudo dpkg --add-architecture i386

# Baixar e adicionar a chave de repositório do Wine
echo "Baixando a chave do repositório Wine..."
sudo mkdir -pm755 /etc/apt/keyrings
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key

# Adicionar repositório do Wine
echo "Adicionando repositório do Wine..."
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/ubuntu/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources

# Atualizar repositórios novamente
echo "Atualizando repositórios novamente..."
sudo apt update -y

# Instalar o Wine (stable)
echo "Instalando o Wine Stable..."
sudo apt install --install-recommends winehq-stable -y

# Finalizar com confirmação
echo "Wine instalado com sucesso!"
wine --version
