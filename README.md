### Boas vindas ao repositório do projeto TrybeTunes!

# Habilidades
Neste projeto, verificamos se voce é capaz de:

  * Fazer requisições e consumir dados vindos de uma `API`;

  * Utilizar os ciclos de vida de um componente React;

  * Utilizar a função `setState` de forma a garantir que um determinado código só é executado após o estado ser atualizado

  * Utilizar o componente `BrowserRouter` corretamente;

  * Criar rotas, mapeando o caminho da URL com o componente correspondente, via `Route`;

  * Utilizar o `Switch` do `React Router`

  * Usar o componente `Redirect` pra redirecionar para uma rota específica;

  * Criar links de navegação na aplicação com o componente `Link`;

---

# Entregáveis

## O que deverá ser desenvolvido

Neste projeto você irá criar o TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Essa aplicação será capaz de:

  - Fazer login;
  - Pesquisar por uma banda ou artista;
  - Listar os álbuns disponíveis dessa banda ou artista;
  - Visualizar as músicas de um álbum selecionado;
  - Reproduzir uma prévia das músicas deste álbum;
  - Favoritar e desfavoritar músicas;
  - Ver a lista de músicas favoritas;
  - Ver o perfil da pessoa logada;
  - Editar o perfil da pessoa logada;


### Protótipo do projeto
Você pode acessar um protótipo no link abaixo:

https://www.figma.com/file/BDQgAJvOe4KNUjmrYh5t68/TrybeTunes-Figma

## Desenvolvimento

Nos últimos projetos, por mais que o app tenha sido desenvolvido utilizando múltiplos componentes, o que é uma boa prática, todas as funcionalidades eram acessadas ao mesmo tempo, no mesmo lugar, utilizando apenas uma URL (`localhost:3000`, normalmente). A medida que seus apps se tornarem maiores e mais complexos, isso se tornará inviável. Desta vez, as funcionalidades do app serão agrupadas e organizadas em rotas.

Outra diferença importante neste projeto em relação aos anteriores é que você irá consumir e enviar dados para APIs para pesquisar a banda ou artista, recuperar as músicas de cada álbum e salvar as músicas favoritas, além de editar as informações da pessoa logada. Dessa forma, você terá que lidar com requisições assíncronas e promises. Também deverá fazer uso dos métodos de ciclo de vida (lifecycle methods) e de estados para controlar o que é renderizado por seus componentes dependendo do momento em que as requisições se encontram.


### O que será verificado

- Será validado se é feita a requisição para `getUser` para recuperar as informações da pessoa logada;

- Será validado se o formulário é renderizado já preenchido com as informações da pessoa logada;

- Será validado se é possível alterar os valores dos campos;

- Será validado se o botão `salvar` é habilitado somente se todos os campos estiverem válidos;

- Será validado se as informações são enviadas usando a API `updateUser`;

- Será validado se após salvar as informações a pessoa é redirecionada para a página de exibição de perfil.

---

## Observação:
 Os arquivos que foram criados e ou modificados estao no caminho src/components e src/pages além de App.js na raiz de src. Demais estruturas foram incluidos na construção do projeto pela instituição de ensino.

 Conforme politica do curso foram removidos arquivos internos para fins de teste e outros que infrigem a politica.
