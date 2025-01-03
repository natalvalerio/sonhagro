#!/bin/bash

# Sair em caso de erro
set -e

# URLs dos arquivos
URL_ZIP="https://natalvalerio.github.io/sonhagro/deb/edge.zip"
URL_Z01="https://natalvalerio.github.io/sonhagro/deb/edge.z01"

# Nome dos arquivos locais
FILE_ZIP="edge.zip"
FILE_Z01="edge.z01"
OUTPUT_DEB="edge.deb"

# Baixar os arquivos
echo "Baixando arquivos..."
wget -q "$URL_ZIP" -O "$FILE_ZIP"
wget -q "$URL_Z01" -O "$FILE_Z01"

# Verificar se os arquivos foram baixados
if [[ ! -f "$FILE_ZIP" || ! -f "$FILE_Z01" ]]; then
  echo "Erro: Falha ao baixar os arquivos."
  exit 1
fi

# Combinar os arquivos zip divididos
echo "Unindo arquivos zip..."
cat "$FILE_Z01" "$FILE_ZIP" > combined.zip

# Descompactar o pacote edge.deb
echo "Descompactando edge.deb..."
unzip -o combined.zip

# Verificar se o arquivo .deb foi extraído
if [[ ! -f "$OUTPUT_DEB" ]]; then
  echo "Erro: O arquivo edge.deb não foi encontrado após a descompactação."
  exit 1
fi

# atualizar tudo
sudo apt update -y && sudo apt upgrade -y

# Instalar o pacote .deb
echo "Instalando o pacote edge.deb..."
sudo dpkg -i "$OUTPUT_DEB"

# Resolver dependências
echo "Resolvendo dependências..."
sudo apt install -f -y

# Limpeza
echo "Limpando arquivos temporários..."
rm -f "$FILE_ZIP" "$FILE_Z01" combined.zip "$OUTPUT_DEB"

echo "Instalação concluída com sucesso!"
