# 🎬 Movie GraphQL Server

Um servidor GraphQL simples e moderno para consulta de dados de filmes, construído com Apollo Server e Node.js.

## 📋 Descrição

Este projeto é um servidor GraphQL que fornece uma API para consultar informações sobre filmes. O servidor se conecta a uma API externa (CodeFlix) para buscar dados de filmes e os disponibiliza através de uma interface GraphQL.

## ✨ Funcionalidades

- **Consulta de filmes**: Buscar todos os filmes disponíveis
- **Filme específico**: Buscar um filme por ID
- **Filmes em destaque**: Obter lista de filmes em destaque
- **Filtro por gênero**: Buscar filmes por gênero específico com limite opcional

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Apollo Server** - Servidor GraphQL
- **GraphQL** - Linguagem de consulta
- **node-fetch** - Cliente HTTP para requisições

## 📦 Estrutura do Projeto

```
movie-graphql-server/
├── index.js          # Ponto de entrada do servidor
├── resolvers.js      # Resolvers GraphQL
├── schema.graphql    # Schema GraphQL
├── package.json      # Dependências e scripts
└── README.md         # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd movie-graphql-server
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor:
```bash
node index.js
```

O servidor estará disponível em: `http://localhost:4000`

## 📚 Schema GraphQL

### Tipo Movie
```graphql
type Movie {
  id: ID!
  title: String!
  description: String!
  yearLaunched: String!
  link: String!
  castMembers: [String!]!
  genres: [String!]!
  thumbFileURL: String!
  bannerFileURL: String!
  videoFileURL: String!
  rating: String!
}
```

## 🔧 Configuração

O servidor está configurado para rodar na porta 4000 por padrão. Para alterar a porta, modifique o arquivo `index.js`:

```javascript
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }, // Altere a porta aqui
});
```

## 🌐 API Externa

O servidor se conecta à API externa: `https://codeflix-api.vercel.app`

## 📝 Exemplos de Uso

### Usando o Apollo Studio

1. Acesse `http://localhost:4000` no navegador
2. Use o Apollo Studio para testar as queries
3. Explore o schema e documentação automática

### Usando curl

```bash
# Buscar todos os filmes
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"query":"{ movies { id title description } }"}' \
  http://localhost:4000/graphql
```

## 👨‍💻 Autor

Desenvolvido como parte de um projeto de aprendizado de GraphQL com Apollo Server.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela! 