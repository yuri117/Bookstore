# Bookstore - Project Report

# Identificação do Grupo

|        **Nome**         | **nUSP** |
|:-----------------------:|:--------:|
| Felipi Yuri Santos      | 11917292 |
| Vinicius Carneiro Macedo| 11915752 |
| Yuri Fernandes Pereira  | 13730127 |


# 1. Requisitos 

### 1.1 Sobre

Uma livraria nos contratou para desenvolvermos a versão online de sua loja de livros. Nesta loja, a empresa pretende anunciar livros de diversas categorias (romance, ação, drama, aventura, etc) para que seus clientes possam comprá-los e recebê-los em suas residências. Logo, cabe a nós desenvolver uma aplicação Web para esta loja. A aplicação conta com dois tipos de usuários: os clientes da loja, que acessam o sistema para comprar livros, e os administradores, que serão responsáveis por gerenciar o estoque dos produtos e os cadastros dos usuários.

### 1.2 Funcionalidades (checklist do projeto)


> 1 - O sistema deve ter 2 tipos de usuários: _Clientes_ e _Administradores_.

Os **administradores** são responsáveis por registrar/gerenciar administradores, clientes e produtos/serviços fornecidos. O aplicativo já vem com uma conta admin com senha admin.

**Clientes** são usuários que acessam o sistema para comprar produtos/serviços.

O **registro p/ admin** inclui, pelo menos: nome, id, telefone, email.

O **registro** de cada **cliente** inclui, pelo menos: nome, id, morada, telefone, email

Os **registros** de **produtos**/serviços incluem, no mínimo: nome, id, foto, descrição, preço, quantidade (em estoque), quantidade vendida.


> 2 - Venda de produtos (ou serviços)

Os produtos são selecionados, sua quantidade escolhida e são incluídos em um carrinho. Os produtos são adquiridos com um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendido é subtraída da quantidade em estoque e somada à quantidade vendida. Os carrinhos são esvaziados apenas no pagamento ou pelos clientes.

> 3 - Gerenciamento de produtos/serviços

Os administradores podem criar/atualizar/ler/excluir (crud) novos produtos e serviços. Por exemplo, eles podem alterar a quantidade de estoque.

> 4 - Sua funcionalidade

"Crie uma funcionalidade específica para seu aplicativo": no nosso projeto, usaremos um sistema de fidelidade dos clientes batizado de "BookPoints". Trata-se se pontos recompensados ao cliente à medida que ele conclua novas compras. A cada R$ 20,00 em compras, o cliente recebe 1 BookPoint. Cada 1 BookPoint vale R$ 1,00 de desconto em compras futuras.

OBS.: O sistema deve fornecer requisitos de acessibilidade e fornecer boa usabilidade. O sistema deve ser responsivo, o que significa que deve concluir as tarefas atribuídas dentro de um tempo razoável.

---------------------------------------------------------------------------------------------
### 1.3 Resumo das funcionalidades

1. Clientes e administradores logam em suas páginas através de um login.html
2. Adminstradores conseguem alterar seus próprios dados
3. Clientes podem alterar seus dados
4. Administradores conseguem atualizar as bases de dados dos produtos em estoque (quantidade, descrição, preço, etc).
5. Clientes e administradores podem fazer logout e utilizar o site no modo deslogado.
6. Sistema conta com um sistema de fidelidade baseado em pontos recompensados a partir de compras concluídas.
7. O cliente consegue adicionar e remover vários produtos de seu carrinho. Além de visualizar o subtotal da compra.
8. Se o cliente estiver logado e desejar prosseguir com sua compra, ele seguirá para a página de finalização da compra.

------------------------------------------------------------------------------------------------------------------

# 2. Descrição do Projeto

Os mockups para nossa Bookstore foram preparados na plataforma MockFlow. A versão gratuita da plataforma só permite a criação de no máximo 3 webpages por usuário, então utilizamos vários usuários para criar todos os mockups do sistema:

[Home, Login, Info Produto](https://wireframepro.mockflow.com/view/index_grupo23#/page/52b53b8fd7d541758d7ba391033f0833)

[Sobre, Nossas Lojas, Fale Conosco](https://wireframepro.mockflow.com/view/MX0CdFZXHh#/page/842f8bfc4eb341e5aef19766ff51493c)

[Cadastro, Compra1, Compra2](https://wireframepro.mockflow.com/view/MwbK7lM4fpb#/page/967fa83b35354956b209198a3febb233)

[Compra3, Compra4, Usuário](https://wireframepro.mockflow.com/view/MswpYyhJfpb#/page/ccbd5328dca0457bbbcd9a6ea0cebabf)

Além disso, contamos com um diagrama de navegação que conta com todas as páginas HTML que consistirão do projeto, e, acompanhado a isso, um link para visualização dos mockups das respectivas páginas.


### 2.1 Visão geral

Iremos explicar detalhadamente cada seção do diagrama de navegação. Essa imagem está no formato vetorial .svg, isso significa que você pode abri-la livremente e conseguirá dar zoom nela sem que haja perda na qualidade da imagem.

O diagrama completo, que contém links para a visualizção das telas (mockups para as UIs do webapp) pode ser acessado pelo link: https://lucid.app/lucidchart/81437ac7-f0bd-459f-996d-ff14941ca206/edit?viewport_loc=-156%2C252%2C2219%2C1061%2C0_0&invitationId=inv_913eef89-52ff-46ef-bd46-5a367316fad5

![Bookstore Flow-white](https://user-images.githubusercontent.com/38444497/236654522-6646019f-e090-4187-862d-fbc059fc717b.svg)


### 2.2 Seção "Meta"

Essa trecho da navegação é referente àquela parte do site que é voltada só para separar e fornecer ao usuário informações relevantes sobre a loja em si. Não possuem nenhuma funcionalidade específica em termos de backend.

![Seção Meta](https://user-images.githubusercontent.com/38444497/236654356-efcb57cf-d37a-4fec-addd-4e1b28815b89.png)

### 2.3 Seção cadastro/login

![Cadastro e login](https://user-images.githubusercontent.com/38444497/236654383-543b8683-f57f-499a-8726-23004c5bdfa0.png)

### 2.4 Seção do administrador

![Admin](https://user-images.githubusercontent.com/38444497/236654404-7392f79e-224f-4de7-8162-1af7838c0d7c.png)


### 2.5 Seção dos produtos

![Produtos/Índice](https://user-images.githubusercontent.com/38444497/236654445-5d7c4fab-4196-4b02-a864-dee49eb1a555.png)


### 2.6 Seção prosseguindo com a compra

Esse trecho está relacionado com a seção dos produtos mas só é possível acessá-lo caso o usuário esteja logado. Por falar nisso, um usuário logado é capaz de alterar seus dados cadastrais.

![Usuário/compra](https://user-images.githubusercontent.com/38444497/236654493-08341033-d35b-4d6a-b0e6-bee7a1470e35.png)



# 3. Comentários sobre o código

Para o Milestone 1, ainda não temos nada funcional pronto (em termos de backend utilizando javascript). Apenas UI e algumas páginas HTML/CSS pensadas do ponto de vista do front-end. 

Foi implementado um menu "sanduíche" no cabecalho das paginas, conforme o grupo aprendeu no vídeo sobre CSS.

Encontramos muita dificuldade na elaboração do footer das paginas, pretendemos deixá-lo 100% responsivo para as proximas Milestones ou entao implementar um footer mais simples.
  
# 4. Plano de Teste

Como plano de testes desenvolvemos 3 tipos:
- Realizar compra podendo excluir ou editar produtos, filtrando eles também.
- Tentar realizar uma compra passando mais do que o máximo permitido em estoque.
- entrar em um usuário admin (user: admin, senha:admin) e editar um livro.
- entrar em um usuário admin (user: admin, senha:admin) e cadastrar um livro.
- entrar em um usuário admin (user: admin, senha:admin) e tornar outro user admin.
  
# 5. Resultados dos Testes

Espera-se que em todos os testes não ocorram erros e o usuário tenha uma boa usabilidade da plataforma
  
# 6. Procedimentos para execução

Após clonar o repositório para sua máquina local, execute os seguintes comandos:
1. Abra o terminal e acesse o diretório: cd frontend .react
2. Abra o terminal e acesse o diretório: cd .react
3. digite: npm install
4. digite: npm run dev

PROCEDIMENTOS PARA O SERVIDOR BACKEND USANDO NODE.JS
0. Abra um novo terminal
1. cd backend
2. digite: npm install
3. digite: npm run dev
4. o servidor estará funcionando na porta 4242 (leia os logs no console!!)
  
# 7. Problemas

No planejamento inicial definido na Milestone 1, a funcionalidade extra do projeto seria um sistema de cashback por meio do uso de "BookPoints", mas devido à dificuldade de implementação optamos por alterar a funcionalidade extra para um sistema de busca.

Por enquanto o usuário consegue forçar uma compra com um número maior que a quantidade em estoque mas ajustaremos isso para o Milestone 3.

Acreditamos que não há problemas no Milestone 3
  
# 8. Comentários Adicionais
> Any comments you wish to add.
