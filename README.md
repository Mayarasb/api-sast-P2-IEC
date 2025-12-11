# 🚀 API SAST – P2 IEC  
Sistema de Cadastro de Usuários e Organizações  

Este projeto implementa uma **API RESTful completa**, com **CI/CD**, **Docker**, **Deploy via Render**, **Swagger**, **Gitflow** e **análise SonarCloud**, conforme exigido na P2 de Engenharia de Software.

---

## 📌 Tecnologias Utilizadas
- Node.js + Express  
- MySQL (Render)  
- Sequelize ORM  
- Swagger (OpenAPI)  
- Docker + Docker Hub  
- GitHub Actions (CI/CD)  
- SonarCloud (SAST)  
- Gitflow  
- Render Web Service  

---


## /api-docs

Gerada automaticamente com `swagger-ui-express` e `swagger-jsdoc`.



---

## 🔐 SAST – SonarCloud

O projeto possui análise estática automatizada com:

- SonarCloud  
- Execução a cada push  
- Identificação de bugs, code smells e vulnerabilidades  
- Quality Gate configurado




---

## 🔧 Padrões Utilizados

### ✔ Gitflow  
Branches utilizadas:
- main  
- develop  
- feature/*  


## 🐳 Docker – Build da Imagem

O projeto contém um Dockerfile funcional:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

##  📦 Docker Hub

As imagens são publicadas no repositório:

link: https://hub.docker.com/repository/docker/mayarasb/api-sast-p2-iec/general


## 🔄 CI/CD – GitHub Actions

O pipeline está configurado com:

### ✔ CI

Checkout do repositório

Instalação de dependências

Execução de testes

Análise SonarCloud

Cálculo automático de versão (semver)

Build da imagem Docker

### ✔ CD

Login no Docker Hub

Push da imagem versionada

Push da tag latest

Criação de release/tag no GitHub

Deploy no Render utilizando a imagem recém-gerada

## 🌐 Deploy – Render

O deploy é realizado através de:

Web Service utilizando Docker Image

## ▶️ Como rodar localmente
### Sem Docker:
```
npm install
npm start
```

### Com Docker:
```
docker build -t api-sast .
docker run -p 3000:3000 api-sast
```


