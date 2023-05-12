import graphql from "graphql";
import _ from "lodash";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const books = [
  { name: "b1", genre: "g1", id: "1", authorId: "4" },
  { name: "b2", genre: "g2", id: "2", authorId: "5" },
  { name: "b3", genre: "g3", id: "3", authorId: "6" },
  { name: "b4", genre: "g3", id: "4", authorId: "5" },
  { name: "b5", genre: "g1", id: "5", authorId: "6" },
  { name: "b6", genre: "g4", id: "6", authorId: "6" },
];

const authors = [
  { name: "a1", age: 40, id: "4" },
  { name: "a2", age: 45, id: "5" },
  { name: "a3", age: 50, id: "6" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // return authors.find((author) => author.id === parent.authorId);
        return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db or any other resource
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      },
    },
  },
});

export const MyAppSchema = new GraphQLSchema({
  query: RootQuery,
});
