# Aula Gama GraphQL
Aplicação com CRUD em GraphQL. Exibe em uma página web simples os nomes e e-mails dos usuários cadastrados em um arquivo JSON que simula um banco, com a possibilidade de editá-los.

## Motivação
Projeto criado a partir das aulas de [GraphQL](https://graphql.org/) do programa Hiring Coders da [Gama Academy](https://gama.academy/) em parceria com a [VTEX](https://vtex.com/br-pt/).

## Como usar?

### Clone o projeto
`git clone https://github.com/felipefadul/aula-gama-graphql.git`

### Entre na pasta do projeto
`cd aula-gama-graphql`

### Instale o [pnpm](https://www.npmjs.com/package/pnpm)
Caso não tenha instalado, instale:
`pnpm i -g pnpm`

### Execute
```
pnpm install --filter @dev-demands/server
pnpm install --filter @dev-demands/web
pnpm run dev --filter @dev-demands/server
pnpm run start --filter @dev-demands/web
```

O app irá rodar em modo de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no seu browser.

Para acessar a interface do GraphQL, acesse [http://localhost:8000/graphql](http://localhost:8000/graphql).

## Autor
- [Felipe Fadul](https://linkedin.com/in/felipefadul)

## Licença
- [MIT License](LICENSE)

## Créditos
- [Vitor Cavalcanti](https://github.com/VitorLuizC)
