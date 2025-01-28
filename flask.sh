#!/bin/bash

echo "Iniciando instalação das dependências..."

# Atualiza pacotes do sistema (se necessário)
#sudo apt update && sudo apt upgrade -y

# Instala o pip caso não esteja instalado
if ! command -v pip &> /dev/null; then
    echo "Pip não encontrado. Instalando..."
    sudo apt install python3-pip -y
fi

# Cria um ambiente virtual (se ainda não existir)
if [ ! -d "venv" ]; then
    echo "Criando ambiente virtual..."
    python3 -m venv venv
fi

# Ativa o ambiente virtual
source venv/bin/activate

# Instala as dependências
echo "Instalando pacotes necessários..."
pip install flask flask-session flask-cors werkzeug matplotlib sqlite3 csv datetime io base64

echo "Instalação concluída!"
