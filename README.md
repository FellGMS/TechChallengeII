# 📚 TechChallengeII - Blogging Dinâmico

## 📝 Descrição

Este projeto é uma aplicação de blogging dinâmica criada para professores da rede pública de educação. A aplicação permite a criação, edição, visualização e exclusão de posts, além de busca de posts por palavras-chave.

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js, Express
- **Banco de Dados:** PostgreSQL
- **Containerização:** Docker
- **CI/CD:** GitHub Actions

## 📂 Estrutura de Diretórios

```
TechChallengeII/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── usuarioController.js
│   │   └── postagemController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── usuarioModel.js
│   │   └── postagemModel.js
│   ├── routes/
│   │   ├── usuarioRoutes.js
│   │   └── postagemRoutes.js
│   └── server.js
├── Dockerfile
├── docker-compose.yml
├── .env
├── .dockerignore
└── package.json
```

## 🚀 Configuração do Ambiente

### 📋 Pré-requisitos
- Node.js e npm instalados
- Docker e Docker Compose instalados

### 🛠️ Passo a Passo

1. **Clone o repositório do projeto:**
   ```bash
   git clone https://github.com/seu-usuario/TechChallengeII.git
   cd TechChallengeII
   ```

2. **Configure as variáveis de ambiente no arquivo `.env`:**
   ```plaintext
   JWT_SECRET=seu-segredo-aqui
   ```

3. **Suba os contêineres Docker:**
   ```bash
   docker-compose up --build
   ```

## 🔗 Endpoints da API

### 🧑‍🏫 Cadastro de Usuário

- **Endpoint:** `POST /api/usuarios/signup`
- **Body:**
  ```json
  {
    "nome": "Professor",
    "email": "professor@escola.com",
    "senha": "senha123"
  }
  ```

### 🔑 Login de Usuário

- **Endpoint:** `POST /api/usuarios/login`
- **Body:**
  ```json
  {
    "email": "professor@escola.com",
    "senha": "senha123"
  }
  ```

### ✍️ Criação de Postagem

- **Endpoint:** `POST /api/postagens`
- **Headers:**
  ```plaintext
  Authorization: Bearer {token}
  ```
- **Body:**
  ```json
  {
    "titulo": "Novo Post",
    "conteudo": "Conteúdo do post",
    "autor": "Professor"
  }
  ```

## 🤖 Configuração do GitHub Actions

Crie um arquivo `.github/workflows/ci-cd.yml` no repositório:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test

    - name: Build Docker image
      run: docker build -t techchallengeii-app .

    - name: Push Docker image
      run: docker push your-docker-repo/techchallengeii-app
```

## 📄 Atualizar Repositório GitHub

1. **Faça commit e push de todas as alterações:**
   ```bash
   git add .
   git commit -m "Atualizações finais e documentação"
   git push origin main
   ```
