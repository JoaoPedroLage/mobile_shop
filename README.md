# :package: ITS PAY
por João Lage

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

### Tópicos

- [Descrição do projeto](#books-descrição-do-projeto)

- [Stacks utilizadas](#books-stacks-utilizadas)

- [Abrir e rodar o projeto](#%EF%B8%8F-abrir-e-rodar-o-projeto)

# :books: Descrição do Projeto

O projeto consiste em um app para criar o cadastro de contas bancárias pessoais.

O que foi realizado:
- [x] Uso do framework Next.js para ter:
   * Agilidade de desenvolvimento através da divisão do código.
   * Otimizado para tráfego orgânico e com ótima experiência ao usuário.
   * Carregamento acelerado.
- [x] Setup do projeto com arquitetura de software.
- [x] Dockerizar aplicação.
- [x] Tipagem de todos arquivos.
- [x] Adicionar linter ao projeto.
- [x] Deploy cloud na Vercel.
- [X] Responsividade da aplicação para dispositivos movéis e desktop.
- [X] Componentização das partes de cada tela do projeto.

O que foi pensado para o projeto:
- [X] Tela Inicial: A tela inicial deverá listar todas as contas bancárias cadastradas na aplicação.
- [X] No topo da tela inicial deverá possuir um botão para cadastrar uma nova conta bancária. Ao clicar neste botão o usuário deverá ser direcionado para __Tela de Listagem __
- [X] As contas cadastradas deverão ser exibidas abaixo do botão de cadastrar nova conta e ficarão armazenadas no local storage do dispositivo. O cadastro das contas serão realizadas conforme as funcionalidades descritas abaixo.
- [X] Se não existir conta cadastrada deverá exibir uma mensagem de que não existe conta cadastrada logo abaixo ao botão de cadastro de nova conta do topo da tela.

- [X] Tela de Listagem: Apresentar um tela de listagem de todos os bancos para que seja selecionado um banco para o cadastro.
- [x] Para listagem de todos os bancos deverá ser utilizada a api pública: https://brasilapi.com.br/api/banks/v1.
- [x] No topo da tela de listagem, deverá existir um campo com um botão para consulta do banco pelo código do banco. Este campo receberá o código do banco e ao clicar no botão irá apresentar apenas o banco consultado na tela de listagem. Para consultar o banco através do código deverá ser utilizada a api pública: https://brasilapi.com.br/api/banks/v1/{code}.
- [x] Ao clicar em um banco da tela de listagem o usuário deverá ser redirecionado para a para __Tela de Cadastro __.

   Tela de Cadastro: Cadastro da conta.
- [x] Nesta tela deverá exibir todas as informações do banco retornadas pela api.
- [x] Abaixo das informações do banco deverá existir dois campos para o usuário informar a agencia e conta de cadastro.
- [x] Abaixo dos campos deverá possuir um botão para cadastrar a conta.
- [x] O cadastro da conta deverá ser armazenado no local storage do dispositivo - Armazenar (Codigo do Banco, Agencia e Conta).


# :books: Stacks utilizadas

### Front-end
- [ReactJs](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)


# Etapa mais desafiadora

- Utilizar o TypeScript com excelência e tipar corretamente para assim melhorar a manutenibilidade e ter facilidade para implentar novas features.
- Garantir que todas as funções estão se comunicando com coerência e gerando os resultados esperados.
- Utilizar corretamente o inifinite scroller e corrigir todos os bugs decorrentes ao longo do desenvolvimento da aplicação.
- Correção de bugs ao longo do desenvolvimento através de diversos testes utilizando cada rota da aplicação.



# 🛠️ Abrir e rodar o projeto

1. Clone o repositório
  * `git clone git@github.com:JoaoPedroLage/Begins_itspay.git`
  * Entre na pasta do repositório que você acabou de clonar

2. Instale as dependências e inicialize
  * Instale as dependências:
    * `yarn install / npm install`
  * Inicialize o projeto:
   * `yarn start / npm start`
