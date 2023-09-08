# Projeto Shopper

O Projeto Shopper é uma aplicação web desenvolvida para permitir que os usuários atualizem os preços de produtos em uma loja de comércio eletrônico de forma massiva, seguindo regras de negócios específicas. Esta aplicação é projetada para uso interno por equipes de Compras, Financeiro e Marketing.

## Funcionalidades

- Os usuários podem fazer upload de um arquivo CSV contendo códigos de produto e novos preços.
- O sistema valida as informações do arquivo CSV, incluindo a existência de campos necessários, a validade dos preços e a conformidade com as regras de negócios.
- As regras de negócios incluem:
  - Preço de venda não pode ser inferior ao custo do produto.
  - Reajuste de preço não pode ser maior nem menor do que 10% do preço atual do produto.
  - Produtos vendidos em pacotes têm os preços de seus componentes ajustados automaticamente para que a soma dos componentes seja igual ao preço do pacote.

## Tecnologias Utilizadas

- Node.js (Back-end)
- React.js (Front-end)
- MySQL (Banco de Dados)

## Execução Local

Para executar este projeto em sua máquina local, siga estas etapas:

### Pré-requisitos

- Node.js e npm instalados (você pode fazer o download em [nodejs.org](https://nodejs.org/))
- MySQL instalado e configurado

### Configuração do Banco de Dados

1. Crie um banco de dados MySQL chamado "shopper_db".

2. Configure as variáveis de ambiente para a conexão com o banco de dados. Crie um arquivo `.env` no diretório `backend` com o seguinte conteúdo:

   ```
   DB_HOST=seu-host-do-banco-de-dados
   DB_USER=seu-usuario-do-banco-de-dados
   DB_PASSWORD=sua-senha-do-banco-de-dados
   DB_DATABASE=shopper_db
   ```

### Configuração do Back-end

1. Navegue até o diretório `backend`:

   ```
   cd projeto-shopper/backend
   ```

2. Instale as dependências:

   ```
   npm install
   ```

3. Execute o servidor back-end:

   ```
   npm start
   ```

### Configuração do Front-end

1. Navegue até o diretório `frontend`:

   ```
   cd projeto-shopper/frontend
   ```

2. Instale as dependências:

   ```
   npm install
   ```

3. Execute o servidor front-end:

   ```
   npm start
   ```

4. Acesse a aplicação no seu navegador em http://localhost:3000.

## Uso

1. Faça o upload de um arquivo CSV contendo códigos de produtos e novos preços.
2. Clique no botão "Validar" para verificar a conformidade com as regras de negócios.
3. Após a validação bem-sucedida, o botão "Atualizar" será habilitado para atualizar os preços no banco de dados.
4. Acompanhe as mensagens de sucesso ou erros exibidas na interface.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar problemas ou solicitações de pull.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

