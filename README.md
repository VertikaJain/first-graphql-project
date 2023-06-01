# GraphQL for NodeJS

## Tools used

1. Visual Studio Code for NodeJS and ReactJS
2. Compass for MongoDB

## Query Example

`{
  authors {
    name
    age
    books {
      name
      genre
    }
  }
}`

## Mutation Example

`mutation {
  addBook(name: "coding skills", genre: "tech", authorId: "646f026c0a60750fa3592095") {
    name
    genre
    authorId
  }
}`

### Resource followed for this mini-project:

1. [Net Ninja series for GraphQL](https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=1)
2. [Apollo Client Doc - Queries](https://www.apollographql.com/docs/react/data/queries)
3. [Apollo Client Doc - Mutations](https://www.apollographql.com/docs/react/data/mutations)
