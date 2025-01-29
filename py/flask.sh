#!/bin/bash

echo "🚀 Iniciando instalação das dependências..."

# Verifica e instala o pip
if ! command -v pip &> /dev/null; then
    echo "⚠️ Pip não encontrado. Instalando..."
    sudo apt install python3-pip -y
fi

# Cria e ativa o ambiente virtual
if [ ! -d "venv" ]; then
    echo "🛠️ Criando ambiente virtual..."
    python3 -m venv venv
fi

echo "🔧 Ativando ambiente virtual..."
source venv/bin/activate

# Instala pacotes necessários
echo "📦 Instalando pacotes..."
pip install flask flask-session flask-cors werkzeug matplotlib

# Finaliza o script
echo "✅ Instalação concluída! Saindo..."
exit
