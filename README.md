# :package: ITS PAY
por João Pedro Lage

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

### Tópicos

- [Descrição do projeto](#books-descrição-do-projeto)

- [Stacks utilizadas](#books-stacks-utilizadas)

- [Abrir e rodar o projeto](#%EF%B8%8F-abrir-e-rodar-o-projeto)

# :books: Descrição do Projeto

O desafio consiste em criar uma loja virtual simples.

O que foi realizado:
- [x] Setup do projeto com arquitetura de software.
- [x] Tipagem de todos arquivos.
- [X] Responsividade da aplicação para dispositivos movéis.
- [X] Componentização das partes de cada tela do projeto.

O que foi pensado para o projeto:

Página inicial:
- [X] Listagem de categorias de produtos
- [X] Listagem produtos

Página de produto:
- [X] Carousel de imagens
- [X] Detalhes do produto

Carrinho de compras:
- [X] Atualizar a quantidade de um produto no carrinho;
- [X] Excluir um item do carrinho;
- [X] Mensagem de carrinho vazio;
- [X] Valor total, somando os preços de todos os itens no carrinho;
- [X] Botão para a finalização do pedido;

Pontos importantes:
- Usabilidade: O projeto foi desenvolvido com foco na usabilidade, com uma interface amigável, simples e intuitiva.
- Criatividade: Fiz todo o projeto do zero e tive como base o app do AliExpress.
- Código limpo e organização: O código está limpo, organizado e comentado, facilitando a leitura e a manutenção.
- Conventional Commits: foram adicionados commits com a convenção padrão internacional, mantendo clareza e simplicidade.
- Documentação do projeto (readme): O arquivo readme.md contém todas as informações necessárias para executar o projeto.
- Performance: O projeto foi otimizado para ter um bom desempenho.

# :books: Stacks utilizadas

### Front-end
- [ReactJs](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Context](https://pt-br.react.dev/learn/scaling-up-with-reducer-and-context)


# Etapa mais desafiadora

- Fazer o app rodar como esperado no app do Expo dentro dos smartphones, o app apresentou falha em funcionar com o React Context, sendo assim foi possivel apenas testar a aplicação via web utilizando o modo desenvolvedor para dispositivos móveis
  * Inclusive recomendo para o tester da aplicação fazer o mesmo, abrir o endereço: "http://localhost:8081", abrir o modo desenvolvedor, trocar a tela para dispositivos móveis para assim ter a melhor experiência da aplicação
- Utilizar o TypeScript com excelência e tipar corretamente para assim melhorar a manutenibilidade e ter facilidade para implentar novas features.
- Garantir que todas as funções estão se comunicando com coerência e gerando os resultados esperados.
- Correção de bugs ao longo do desenvolvimento através de diversos testes debugando todas as páginas.



# 🛠️ Abrir e rodar o projeto

1. Clone o repositório
  * `git clone git@github.com:JoaoPedroLage/Begins_itspay.git`
  * Entre na pasta do repositório que você acabou de clonar

2. Instale as dependências e inicialize
  * Instale as dependências:
    * `yarn install / npm install`
  * Inicialize o projeto:
   * `yarn start / npm start`
