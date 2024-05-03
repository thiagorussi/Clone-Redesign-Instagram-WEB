# Documentação do Front-end

<p align="center">
  <img src="https://github.com/thiagorussi/Clone-Redesign-Instagram-WEB/blob/main/pagehome.png"/>
  <br><br>
</p>

## Getting started

O projeto consiste no desenvolvimento da interface da plataforma do Broker de mensageria com a Meta

## Arquitetura inicial do Front :

É uma abordagem comum para desenvolver aplicativos da web usando React.js em conjunto
com a biblioteca de roteamento React Router Dom. 
Essa arquitetura é baseada no padrão de design de componentes e segue a ideia de dividir
o aplicativo em camadas para uma melhor organização e manutenção do código.
Aqui está uma explicação das camadas desta arquitetura:

- **Camada de Componentes:** Esta é a camada mais baixa da arquitetura, onde os diferentes
componentes do aplicativo são implementados. Cada componente React é
uma peça isolada de UI, responsável por uma única funcionalidade específica. Os
componentes podem ser reutilizados em várias partes do aplicativo, promovendo a modularidade e a reutilização do código.

- **Camada de Páginas:** A camada de páginas contém os componentes de nível superior
que representam as diferentes páginas ou rotas do aplicativo. Cada página pode conter
uma combinação de componentes menores e encapsula o conteúdo e a lógica relacionados
a essa página específica. As páginas geralmente são organizadas dentro do diretório **pages** .

- **Camada de Rotas:** A camada de rotas é responsável por definir as rotas do aplicativo
e mapear as URLs para os componentes de página correspondentes. Nesta camada,
geralmente usamos a biblioteca React Router Dom para configurar as rotas e navegação do aplicativo. As rotas são definidas dentro do diretório **routes** .

- **Camada de Estilos:** Esta camada inclui arquivos CSS ou outros arquivos de estilo que
são aplicados aos diferentes componentes do aplicativo. Os estilos podem ser globais,
aplicados a todo o aplicativo, ou específicos para componentes individuais.

Essas camadas ajudam a organizar o código de forma modular e escalável, tornando mais fácil
entender, modificar e estender o aplicativo ao longo do tempo. A separação de preocupações
entre os diferentes componentes e a clara definição de rotas e páginas facilitam a
colaboração em equipe e a manutenção do código em projetos React.

## Diretórios utilizados

- **./public:** Este diretório contém os recursos estáticos do projeto, como o arquivo HTML
principal **( index.html )**, imagens, fontes, etc. O conteúdo deste diretório é acessível publicamente e é onde o aplicativo React é iniciado.

- **./src:** Este diretório contém todos os arquivos de código-fonte do aplicativo React.

  - **./src/pages:** Este diretório geralmente contém os componentes de nível de página
do aplicativo. Cada arquivo neste diretório representa uma página ou rota diferente do aplicativo.

  - **./src/routes:** Este diretório geralmente contém as definições de rotas do aplicativo.
Aqui você pode configurar as rotas usando uma biblioteca de roteamento, como o React Router Dom.

  - **./src/theme:** Este diretório pode conter arquivos relacionados ao estilo e design do
aplicativo, como arquivos CSS, variáveis de estilo, etc.

  - **./src/components:** Este diretório contém os componentes reutilizáveis do aplicativo que
são usados em várias partes do aplicativo. Cada componente é geralmente responsável por uma única funcionalidade específica.

    - **./src/components/section:** Dentro do diretório de componentes, o diretório
**section** pode conter componentes que representam seções específicas de uma
página. Esses componentes podem encapsular conteúdo relacionado e ajudar a organizar o layout da página de forma mais granular.

- **./src/index.jsx:** Este é o ponto de entrada principal do aplicativo React, onde o
aplicativo é inicializado e renderizado na página HTML.

- **./src/index.css:** Este arquivo contém estilos globais que são aplicados em todo o aplicativo.

- **./src/app.jsx:** Este arquivo contém o componente principal do aplicativo, onde as
rotas são definidas e os diferentes componentes da página são renderizados com base na URL.

- **./src/app.css:** Este arquivo contém estilos específicos do componente App ou estilos globais adicionais para o aplicativo.

<p align="center">
  <img src="[https://github.com/thiagorussi/Clone-Redesign-Instagram-WEB/blob/main/caso%20de%20uso.png](https://github.com/thiagorussi/Clone-Redesign-Instagram-WEB/blob/main/estrutura%20pastas.png)"/>
  <br><br>
</p>



### Bibliotecas utilizadas:

- @emotion/react@11.11.4
- @emotion/styled@11.11.5
- @mui/icons-material@5.15.15
- @mui/material@5.15.15
- @types/react-dom@18.2.25
- @types/react@18.2.79
- @vitejs/plugin-react@4.2.1
- eslint-plugin-react-hooks@4.6.0
- eslint-plugin-react-refresh@0.4.6
- eslint-plugin-react@7.34.1
- eslint@8.57.0
- react-dom@18.2.0
- react-router-dom@6.22.3
- react@18.2.0
- vite@5.2.9


## Caso de Uso

<p align="center">
  <img src="https://github.com/thiagorussi/Clone-Redesign-Instagram-WEB/blob/main/caso%20de%20uso.png"/>
  <br><br>
</p>

## Tecnologias utilizadas

- ReactJS
- JavaScript
- HTML5 e CSS3
- Vite

## Subindo o projeto

- Clonar Repositório: `git clone https://gitlab.digitro.com.br/csi-servicos/broker-meta.git `
- Instalar dependências: `npm install`
- Rodar Aplicação: `npm run dev`
