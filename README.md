# API Marketplace

Projeto de uma API de um Marketplace.
Projeto desenvolvido com o intuíto de aprender os conceitos de trabalho utilizando Nest.JS e Prisma
<br/>
Foi utilizado também autenticação, filtragem de buscas, documentação, criptografia e bancos de dados relacionais.

## Tecnologias utilizadas

<div style="display: inline_block"><br>
  <img align="center" alt="Carlos-NodeJS" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg">
  <img align="center" alt="Carlos=Typescript" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img align="center" alt="Carlos-Nest" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />
  <img align="center" alt="Carlos-Prisma" height="40" width="40" src="./src/images/prisma-4.svg">
  <img align="center" alt="Carlos-PostgreSQL" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg">


  </div>

## Pré-requisitos

**Node** com versão superior ou igual 16.17.1 - [Node Download](https://nodejs.org/pt-br/download/)<br>
**NPM** com versão superior ou igual 8.15.0 - [Npm Download](https://www.npmjs.com/package/download)<br>
**Nest.JS** com versão superior ou igual 8.2.6 - [Nest Download](https://docs.nestjs.com/)<br>
**PostgreSQL** com versão superior ou igual 8.2.6 - [PostgreSQL Download](https://www.postgresql.org/download/)<br>

## Instalação

Clone esse projeto em seu computador com o comando (Chave SSH necessária):

```bash
#!/bin/bash
$ git clone git@https://github.com/CarlosKohaute/M05-MarketPlace/tree/main/marketplace
```

Acesse a pasta do projeto:

```bash
#!/bin/bash
$ cd marketplace
```

Instale as dependências com o seguinte comando:

```bash
#!/bin/bash
$ npm install
```

## Execução

Após ter instalado as dependências, use o seguinte comando para rodar o projeto em um servidor local:

```bash
#!/bin/bash
$ npm run start:dev
```

Para conseguir trabalhar com o banco de dados você deverá criar um arquivo .env e adicionar uma url de conexão com seu Postgres local com a chave DATABASE_URL.

```md
DATABASE_URL= postgresql://postgres:***\*\***@localhost:5432/mydb?schema=public
```

## Funcionalidades

Para acessar a lista de endpoints e funcionalidades da aplicação, acesse nossa documentação do [Swagger](), lá você poderá testar todas as rotas.

Você também pode analisar nosso <a href="./db.pdf" download>Diagrama de Relacionamento de Entidades</a>

## Autor

- Carlos Andre Kohaute Junior

## Contribuição

Sinta-se a vontade para entrar em contato comigo caso tenha qualquer sugestão de melhoria no projeto

  <div>
  <a href="https://www.instagram.com/carloskohaute/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/carlos-kohaute-113a69229/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
    <a href = "mailto:carlos.kohaute.contato@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>

</div>

## Licença

- MIT License (MIT)

## Agradecimentos

Gostaria de agradecer aos professores Leonardo Fleck e Marcus Silva por todo apoio durante o desenvolvimento deste projeto.