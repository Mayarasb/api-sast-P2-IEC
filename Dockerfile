# Usa Node LTS em versão pequena e leve
FROM node:20-alpine

# Define diretório dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o restante do projeto
COPY . .

# Expõe a porta usada pelo servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
