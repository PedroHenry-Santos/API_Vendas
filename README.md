
# :dollar: :left_right_arrow: :gift: API de vendas

![Badge](https://img.shields.io/github/license/PedroHenry-Santos/Api_vendas?style=flat&label=LICENSE)
![Badge](https://img.shields.io/badge/NODE-v15.5.1-blue?style=flat&logo=node.js&link=https://nodejs.org/pt-br/)
![Badge](https://img.shields.io/badge/TYPESCRIPT-v4.2.3-blue?style=flat&logo=TypeScript&link=https://www.typescriptlang.org/pt/)
![Badge](https://img.shields.io/badge/EXPRESS-v4.17.1-blue?style=flat&logo=Express&link=https://expressjs.com/pt-br/)
![Badge](https://img.shields.io/badge/TYPEORM-v0.2.31-blue?style=?style=flat&link=https://typeorm.io/#/)
![Badge](https://img.shields.io/badge/POSTGRES-v8.5.1-blue?style=?style=flat&logo=PostgreSQL&link=https://www.postgresql.org/)
![Badge](https://img.shields.io/badge/DOCKER-v20.10.2-blue?style=flat&logo=Docker&link=https://www.docker.com/get-started)

# :page_with_curl: Índice

* [Sobre o projeto](#interrobang-sobre-o-projeto)
  - [Tecnologias utilizadas](#-tecnologias-utilizadas)
* [Executando a aplicação](#rocket-executando-a-aplicação)
* [Para contribuir](#mailbox-para-contribuir)
  - [Roteiro de funcionalidade da aplicação](#heavy_check_mark-roteiro-de-funcionalidade-da-aplicação)
  - [Histórico de atualizações](#clock10-histórico-de-atualizações)



# :interrobang: Sobre o projeto

Projeto de uma API Restful utilizando de vendas, com estoque de produtos, autenticação de usuário e processo de compra. Foi desenvolvido utilizando NodeJS com o Express, TypeORM para conexão com banco de dados, e Docker para criar uma imagem do banco de dados. Além de ferramentas com celebrate para validação de dados.

## 🧑‍💻 Tecnologias utilizadas

### :link: Ferramentas

* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [NodeJS](https://pt.wikipedia.org/wiki/Node.js)
* [TypeScript](https://www.typescriptlang.org/pt/)
* [Express](https://pt-br.reactjs.org/)
* [TypeORM](https://nextjs.org/docs/getting-started)
* [Docker](https://styled-components.com/docs)
* [Celebrate](https://styled-components.com/docs)

### :link: Padronização de código

* [Prettier](https://prettier.io/)
* [ESLint](https://eslint.org/)
* [EditorConfig](https://editorconfig.org/)

### :floppy_disk: Bando de dados

* [PostgreSQL](https://styled-components.com/docs)

# :rocket: Executando a aplicação

Primeiramente clone o repositório para sua maquina ou faça o 'download' em formato ZIP e descompacte. Para realizar a clonagem do repositório utilize o comando:

    git clone https://github.com/PedroHenry-Santos/Api_vendas.git

ou

    git clone git@github.com:PedroHenry-Santos/Api_vendas.git

Crie um banco de dados Postgres em sua maquina, onde os dados de conexão devem ser colocados em um arquivo criado com nome de ``ormconfig.json``, preencha utilizando ``ormconfig.example.json`` como modelo e caso queira [mais informações.](https://typeorm.io/#/connection) Para utilizar uma imagem do postgres através do [Docker](https://hub.docker.com/_/postgres), poderá utilizar o seguinte comando no console (P.S.: Tenha o Docker instalado):

    docker run --name [nome do DB] -e POSTGRES_PASSWORD=[Senha] -p 5432:5432 -d [Nome da imagem]

Caso queira verificar o funcionamento utilizar o comando ``docker ps``. Após basta instalar a dependência utilizando o gerenciador de pacote de sua preferência. Conforme abaixo:

    yarn install

ou

    npm install

# :mailbox: Para contribuir

Caso queira ajudar a implementar novas funcionalidade nessa aplicação, poderá seguir o **roteiro de funcionalidades** a seguir. Ou também poderá propor sua própria funcionalidade.<br/><br/>
Para isso basta seguir o [roteiro](https://github.com/PedroHenry-Santos/Api_vendas/blob/main/CONTRIBUTING.md) em CONTRIBUTING.

## :heavy_check_mark: Roteiro de funcionalidade da aplicação

Para um acompanhamento mais atualizado verifique a aba [Projeto](https://github.com/PedroHenry-Santos/Api_vendas/projects/1).

-   [x] Modulo de Produtos                                     (:warning: Pode sofrer modificações)
-   [ ] Modulo de Usuários                                     (:construction: Em desenvolvimento)
-   [ ] Autenticação                                            (:construction: Em desenvolvimento)
-   [ ] Gerenciamento de senhas                                (:construction: Em desenvolvimento)
-   [ ] Gerenciamento de perfis de usuarios                    (:construction: Em desenvolvimento)
-   [ ] Modulo de clientes                                     (:construction: Em desenvolvimento)
-   [ ] Modulo de compras                                      (:construction: Em desenvolvimento)

## :clock10: Histórico de atualizações

Para saber sobre as [versões](https://github.com/PedroHenry-Santos/Api_vendas/releases) deste código consulte o CHANGELOG detalhado.

# :lock: Licença

[MIT License](https://github.com/PedroHenry-Santos/Api_vendas/main/LICENCE.md) ® [Pedro Santos](https://github.com/PedroHenry-Santos)



