

<img src="https://i.imgur.com/GMyW3xS.png" width="300px" height="100px"/>

<h1 align="center"> Desafio Dexkit </h1>

<p align="justify"> Este desafio se trata de fazer uma aplicação React(utilizando TypeScript), de uma tela onde você poderá fazer transações ETH, integrando com uma carteira MetaMask. </p>


<img src="https://img.shields.io/badge/react-17.0.2-blue"/>  <img src="https://img.shields.io/badge/ethers-5.5.2-informational"/>  <img src="https://img.shields.io/badge/typescript-4.5.3-9cf"/>  <img src="https://img.shields.io/badge/%40mui%2Fmaterial-5.2.3-blue"/>

<h2>Como funciona a aplicação?</h2>

Primeiramente, você deverá possuir a MetaMask logada em uma conta para poder acessar a aplicação, caso contrário, aparecerá uma tela estática com uma mensagem solicitando que você conecte a uma conta MetaMask (a própria aplicação abre a extensão para logar em sua conta MetaMask). <br>

Após logado, você terá acesso a página de envio de ETH, nesta página, terá seu código da carteira e quantidade de ETH que a carteira possui, logo abaixo você poderá selecionar a carteira da pessoa que você deseja enviar ETH e a quantidade.<br>

Após selecionar dados válidos, você será direcionado para uma página de aguardo (enquanto a transação ocorre), e então você é direcionado para uma página que mostra que sua transação foi feita com sucesso, e um botão para ver a transação que foi feita, com o remetente, o destinatário, o código da transação e a quantidade de ETH enviada.<br>

A aplicação possui um tratamento de erros, se você, por exemplo, colocar uma carteira inválida, você será direcionado para uma página de erro com o nome do erro que ocorreu.

<h2>Tecnologias Utilizadas</h2>

<!--ts-->
   * React:heavy_check_mark:
   * Typescript:heavy_check_mark:
   * Material UI:heavy_check_mark:
   * Ethers JS:heavy_check_mark:
   * MetaMask:heavy_check_mark:
   * Web3 (Rede Ethereum) 	:heavy_check_mark:
   
<!--te-->
<h2>Como as tecnologias foram utilizadas?</h2>

A aplicação foi feita com React e Typescript, o design das páginas foram feitos a partir do MUI(Material UI), utilizando ao máximo sua documentação. E a integração com a rede Ethereum foi feita a partir da biblioteca "Ethers JS", junto com a extensão MetaMask, utilizando sua carteira.

<h2>Pré-requisitos</h2>


Antes de começar, você vai precisar ter instalado em sua máquina algum gerenciador de pacotes, seja o [Npm](https://www.npmjs.com) ou o [Yarn](https://yarnpkg.com).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<!--te-->
### Instalação

```bash
# Clone este repositório
$ git clone https://github.com/valentimcanejo/desafio-dexkit.git

# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-dexkit

# Use um destes comandos para instalar as dependências
$ npm install 
ou
$ yarn install

# Use um destes comandos para iniciar a aplicação
$ npm start 
ou
$ yarn start
# O servidor inciará na porta:3000
```
