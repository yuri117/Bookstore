# Bookstore - Projeto de Loja Online da disciplina SCC0219 - Introdução ao Desenvolvimento Web

# Identificação do Grupo

|        **Nome**         | **nUSP** |
|:-----------------------:|:--------:|
| Felipi Yuri Santos      | 11917292 |
| Vinicius Carneiro Macedo|          |
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

Crie uma funcionalidade específica para seu aplicativo. No nosso projeto, usaremos um sistema de fidelidade chamado coins. Que são moedas ganhadas a cada x compras. O financeiro que será responsável pela decisão de quantos R$ gastos valem cada moeda (exemplo R$ 100 = 50 moedas).

OBS.: O sistema deve fornecer requisitos de acessibilidade e fornecer boa usabilidade. O sistema deve ser responsivo, o que significa que deve concluir as tarefas atribuídas dentro de um tempo razoável.

---------------------------------------------------------------------------------------------
### 1.3 Resumo das funcionalidades

1. Clientes e administradores logam em suas páginas através de um login.html
2. Adminstradores conseguem alterar seus próprios dados
3. Clientes podem alterar seus dados
4. Administradores conseguem atualizar as bases de dados dos produtos em estoque (valor, descrição, preço, etc)
5. Clientes e administradores podem fazer logout e utilizar o site no modo deslogado
6. Sistema conta com um sistema de fidelidade baseado em coins ganhadas a partir de compras acumuladas
7. O cliente consegue adicionar e remover vários produtos de seu carrinho. Além de visualizar o subtotal da compra.
8. Se o cliente estiver logado e deseje prosseguir com sua compra, ele seguirá para a página de finalização da compra.

------------------------------------------------------------------------------------------------------------------

# 2. Descrição do Projeto

Os mockups para nossa Bookstore foram preparados em [MockFlow](https://www.mockflow.com/). Contamos com um diagrama de navegação que conta com todas as páginas HTML que consistirão do projeto, e, acompanhado a isso, link HTML para visualização dessas telas mockups.


# 3. Comentários sobre o código

Para o Milestone 1, ainda não temos nada funcional pronto. Apenas UI e algumas páginas HTML/CSS pensadas do ponto de vista do front-end. 
  
# 4. Plano de Teste

> Text describing the tests that will be performed. If an automatic test tool/framework is used (ex: Selenium, JUnit, Spock), the code for the tests can be used.
  
# 5. Resultados dos Testes
> Text describing the test results. If an automatic test tool/framework is used, its output can be used.
  
# 6. Procedimentos para execução
> A step-by-step guide to run your code. You should start telling how to install whatever software you need, then how to download/build your program, and finally how to set up the environment to run it. Imagine that someone installing will just follow these commands (nothing more).
  
# 7. Problemas
> List any major problems you had.
  
# 8. Comentários Adicionais
> Any comments you wish to add.
