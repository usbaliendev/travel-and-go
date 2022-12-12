<h1 align=center>
<img src="https://assets.kplus.com.tr/themes/travelerb2b/img/backgrounds/default-k.jpg" />
</h1>

<div align="center">

![BADGE_LICENSE] ![BADGE_NODE_VERSION] ![BADGE_NPM_VERSION] ![BADGE_WEB_REACT] ![BADGE_SERVER_NODEJS] ![BADGE_TYPESCRIPT] ![BADGE_OPEN_SOURCE] ![BADGE_OPEN_ISSUES] ![BADGE_CLOSED_ISSUES] ![BADGE_STARS] ![BADGE_FORKS]

</div>

<h3 align="center">

🛫 Travel and Go é um projeto de site de booking com um dashboard para as operações CRUD, para nosso TCC  de Ciências da Computação **UniCEUB** desenvolvido pelos alunos do 8º Período **Angelo, Pedro, Laura, Jeff e Gabriel** utilizando as tecnologias ***MongoDB, Express, React, NodeJS, TypeScript, SASS***.

</h3>

![Banner]()

## **:rocket: OBJETIVO**

O projeto tem como finalidade o estudo de um projeto FULL STACK com framwork MERN. Sendo um site com intergração com DB, requests feitas com API, integradas e disparadas a partir de um dashboard de configuralção e manipulação de dados com CRUD e a atualização dinâmica e vizualização desses dados através de um site de booking desktop.
Focando em **estabelecer uma conexão** entre **cliente e site de booking**. Solucionando o problema de reserva de quartos para uma viagem em uma cidade e hoteis específicos.## **:white_check_mark: Todos os direitos reservados**

<!-- 
  ...
  Local Reservado para o GIF do projeto rodando.
  ...
-->

## **:computer: TECNOLOGIAS**


#### **Website** ([React][react] + [TypeScript][typescript])

  - **[React Router Dom][react_router_dom]**
  - **[React Icons][react_icons]**
  - **[Axios][axios]**
  - **[Leaflet][leaflet]**
  - **[React Leaflet][react_leaflet]**
  - **[React Dropzone][react_dropzone]**


  \* Veja o arquivo <kbd>[package.json](./sources/website/package.json)</kbd>

#### **Server** ([NodeJS][node] + [TypeScript][typescript])

  - **[Express][express]**
  - **[CORS][cors]**
  - **[KnexJS][knex]**
  - **[MONGODB][sqlite3]**
  - **[ts-node][tsnode]**
  - **[nodemon][nodemon]**
  - **[dotENV][dotenv]**

  \* Veja o arquivo <kbd>[package.json](./sources/server/package.json)</kbd>

#### **Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)** &rarr; **<kbd>[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)</kbd>**
- API: **[IBGE API][ibge_api]** &rarr; **<kbd>[API de UFs][ibge_api_ufs]</kbd>**, **<kbd>[API de Municípios][ibge_api_municipios]</kbd>** 
- Maps: **[Leaflet][leaflet]**
- Editor: **[Visual Studio Code][vscode]** &rarr; Extensions: **<kbd>[SQLite][vscode_sqlite_extension]</kbd>**
- Markdown: **[StackEdit][stackedit]**, **<kbd>[Markdown Emoji][markdown_emoji]</kbd>**
- Commit Conventional: **[Commitlint][commitlint]**
- Teste de API: **[Insomnia][insomnia]**
- Ícones: **[Feather Icons][feather_icons]**, **[Font Awesome][font_awesome]**
- Fontes: **[Ubuntu][font_ubuntu]**, **[Roboto][font_roboto]**


## **:wine_glass: COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, instale as dependências do **React e React Native (Expo)** de forma global, utilizando os comandos:

```sh
# React:
$ npm install create-react-app -g
```

Você precisa renomear o arquivo `.env-example` para `.env` e inserir as informações que condizem com o seu **host**:

```sh
$ mv .env-example .env
```

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **server**, no diretório do **website** e no diretório **mobile**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou
$ yarn
```

Exemplos:
```sh
# Instalando as dependências do dashboard admin:
$ cd ./admin
$ npm install

# Instalando as dependências da API:
$ cd ./api
$ npm install

# Instalando as dependências do website:
$ cd ./client
$ npm install
```

Veja os arquivos **`package.json`** do <kbd>[commitlint](./package.json)</kbd>, <kbd>[server](./sources/server/package.json)</kbd>, <kbd>[website](./sources/website/package.json)</kbd> e <kbd>[mobile](./sources/mobile/package.json)</kbd>.

### Utilizando o Dashboard Admin

```sh
# Abrindo o terminal no diretório do servidor:
$ cd ./admin

# Executando a aplicação em modo de desenvolvimento:
$ npm start
```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](./sources/server/package.json)</kbd> para saber quais scripts estão disponíveis.

### Utilizando a API

```sh
# Abrindo o terminal no diretório da API:
$ cd ./api

# Executando a API no modo de desenvolvimento:
$ npm start
```

### Utilizando o Website

```sh
# Abrindo o terminal no diretório do website:
$ cd ./client

# Executando o website no modo de desenvolvimento:
$ npm start
```

> Se o browser não abrir automaticamente, acesse: http://localhost:3000.

**\* Lembre de inserir no arquivo `.env` o IP exato que foi gerado pelo seu mobile após utilizar o comando `npm run start`.**

## **:star2: AGRADECIMENTOS**

<div align=center>

<table style="width:100%">
  <tr align=center>
    <th><strong>Travel and Go</strong></th>
    <th><strong>diego3g</strong></th>
  </tr>
  <tr align=center>
    <td>
      <a href="https://github.com/usbangelo">
        <img width="200" height="180" src="https://avatars.githubusercontent.com/u/50382278?v=4">
      </a>
    </td>
    <td>
      <a href="https://github.com/maykbrito">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981753-1de29b00-a8f7-11ea-93cf-23d2ff65fa5c.png">
      </a>
    </td>
  </tr>
</table>

</div>

## **:books: REFERÊNCIAS**

- [React + TypeScript Cheat Sheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [ReactJS](https://reactjs.org/docs/getting-started.html) | [ReactJS pt-BR](https://pt-br.reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [Express](https://expressjs.com/pt-br/)
- [Node](https://nodejs.org/en/)
- [Celebrate](https://github.com/arb/celebrate)
- [Joi](https://hapi.dev/module/joi/)

## **:page_with_curl: LICENÇA**

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório. 

<h3 align="center">
Feito com ❤️ por <a href="https://www.linkedin.com/in/mauricioromagnoli/">Angelo Soares Dorfey</a>
</h3>

<!-- Badges -->

[BADGE_CLOSED_ISSUES]: https://img.shields.io/github/issues-closed/x0n4d0/ecoleta?color=red

[BADGE_OPEN_ISSUES]: https://img.shields.io/github/issues/x0n4d0/ecoleta?color=green

[BADGE_LICENSE]: https://img.shields.io/github/license/x0n4d0/ecoleta

[BADGE_NODE_VERSION]: https://img.shields.io/badge/node-12.17.0-green

[BADGE_NPM_VERSION]: https://img.shields.io/badge/npm-6.14.4-red

[BADGE_WEB_REACT]: https://img.shields.io/badge/web-react-blue

[BADGE_MOBILE_REACT_NATIVE]: https://img.shields.io/badge/mobile-react%20native-blueviolet

[BADGE_SERVER_NODEJS]: https://img.shields.io/badge/server-nodejs-important

[BADGE_STARS]: https://img.shields.io/github/stars/x0n4d0/ecoleta?style=social

[BADGE_FORKS]: https://img.shields.io/github/forks/x0n4d0/ecoleta?style=social

[BADGE_TYPESCRIPT]: https://badges.frapsoft.com/typescript/code/typescript.png?v=101

[BADGE_OPEN_SOURCE]: https://badges.frapsoft.com/os/v1/open-source.png?v=103

<!-- Techs -->

[react]: https://reactjs.org/

[typescript]: https://www.typescriptlang.org/

[node]: https://nodejs.org/en/

[vscode]: https://code.visualstudio.com/

[stackedit]: https://stackedit.io

[markdown_emoji]: https://gist.github.com/rxaviers/7360908

[commitlint]: https://github.com/conventional-changelog/commitlint

[express]: https://expressjs.com/

[cors]: https://expressjs.com/en/resources/middleware/cors.html

[tsnode]: https://github.com/TypeStrong/ts-node

[insomnia]: https://insomnia.rest/

[react_router_dom]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom

[axios]: https://github.com/axios/axios

[dotenv]: https://github.com/motdotla/dotenv

[expo]: https://expo.io/

[expo_google_fonts]: https://github.com/expo/google-fonts

[react_navigation]: https://reactnavigation.org/

[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable
