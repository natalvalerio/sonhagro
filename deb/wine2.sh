#!/bin/bash

# Atualizar repositórios e instalar dependências
echo "Atualizando repositórios..."
sudo apt update -y
sudo apt upgrade -y

# Baixar e instalar as dependências necessárias
echo "Baixando dependências libfaudio0..."
wget https://download.opensuse.org/repositories/Emulators:/Wine:/Debian/xUbuntu_18.04/amd64/libfaudio0_19.07-0~bionic_amd64.deb
wget https://download.opensuse.org/repositories/Emulators:/Wine:/Debian/xUbuntu_18.04/i386/libfaudio0_19.07-0~bionic_i386.deb

# Instalar as dependências
echo "Instalando dependências libfaudio0..."
sudo dpkg -i libfaudio0_19.07-0~bionic_amd64.deb libfaudio0_19.07-0~bionic_i386.deb

# Caso haja erros de dependências, rodar o comando de correção
echo "Corrigindo dependências, caso necessário..."
sudo apt --fix-broken install -y

# Adicionar suporte a 32 bits (se o sistema for de 64 bits)
echo "Adicionando suporte a 32 bits..."
sudo dpkg --add-architecture i386

# Baixar e adicionar a chave do repositório do Wine
echo "Baixando e adicionando a chave do WineHQ..."
wget -nc https://dl.winehq.org/wine-builds/winehq.key
sudo apt-key add winehq.key

# Adicionar o repositório WineHQ (para sistemas baseados no Ubuntu 18.04)
echo "Adicionando repositório WineHQ..."
sudo apt-add-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ bionic main'

# Atualizar novamente os repositórios
echo "Atualizando repositórios novamente..."
sudo apt update -y

# Escolher qual versão do Wine instalar (Stable, Development ou Staging)
echo "Escolha a versão do Wine para instalar:"
echo "1. Stable"
echo "2. Development"
echo "3. Staging"
read -p "Digite o número da versão desejada: " version_choice

case $version_choice in
  1)
    echo "Instalando Wine Stable..."
    sudo apt install --install-recommends winehq-stable -y
    ;;
  2)
    echo "Instalando Wine Development..."
    sudo apt install --install-recommends winehq-devel -y
    ;;
  3)
    echo "Instalando Wine Staging..."
    sudo apt install --install-recommends winehq-staging -y
    ;;
  *)
    echo "Opção inválida. Instalando Wine Stable por padrão."
    sudo apt install --install-recommends winehq-stable -y
    ;;
esac

# Confirmar instalação
echo "Wine instalado com sucesso!"
wine --version
