<div align="center">

# Full Stack Week - FSW Food

Esse projeto foi desenvolvido na full stack week edição #4 e tem como intuito a criação de pedidos semelhante a plataforma do Ifood.

</div>

![preview img](/public/Capa.png)

## 📋 Pré-requisitos

Antes de baixar o projeto, é necessário ter as seguintes ferramentas instaladas em sua máquina:

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org/en/) ou [NVM](https://github.com/nvm-sh/nvm)
- Gerenciador de pacotes, como [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)
- [Docker](https://docs.docker.com/desktop/install/windows-install/)

Além disso, é recomendável utilizar um editor de código, como o [VSCode](https://code.visualstudio.com/) ou da sua preferência.

## 🔧 Rodando a aplicação localmente

#### Crie um arquivo .env seguindo a estrutura do .env.example:

```bash
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL= url_db
GOOGLE_CLIENT_ID = google_secret
GOOGLE_CLIENT_SECRET = google_secret
NEXTAUTH_SECRET = secret

```

#### Execute os seguintes comandos:

```bash

$ npm i

$ docker compose up -d

$ npx prisma db seed

$ npm run dev

```

#### Após isso acesse no seu navegador:

```bash
http://localhost:3000
```

## ✨ Executando o deploy da aplicação

#### Acesse no seu navegador a seguinte url:

```bash
https://fswfoods-hy34h02d0-talitaaraujodevs-projects.vercel.app
```

## 🎯 Tecnologias utilizadas

- **[Next.js](https://nextjs.org/)**
- **[Next Auth.js](https://next-auth.js.org/)**
- **[Node](https://nodejs.org/en/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Lucide](https://lucide.dev/)**
- **[Chadcn/ui](https://ui.shadcn.com/)**
- **[Prisma](https://www.prisma.io/)**
- **[Vercel](https://vercel.com/)**

### 👩🏽‍💻 Desenvolvido por Talita Araujo

<div align="left">
  <a href = "mailto:talitacumi.araujo@gmail.com"><img src="https://img.shields.io/badge/-Gmail-db4a39?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/talitaaraujodev" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
</div>
