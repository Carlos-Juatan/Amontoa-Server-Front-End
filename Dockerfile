# Utilizar uma imagem base Node.js (ajuste a versão conforme necessário)
FROM node:18-alpine

# Criar o diretório de trabalho
WORKDIR /urs/amontoa/frontend

# Copiar o package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

EXPOSE  8000

# Copiar o restante do código para o container
COPY . .

# Definir o comando para iniciar a aplicação
CMD ["npm", "start"]