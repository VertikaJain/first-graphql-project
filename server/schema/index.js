import graphql from "graphql";
import _ from "lodash";

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const books = [
  { name: "b1", genre: "g1", id: "1" },
  { name: "b2", genre: "g2", id: "2" },
  { name: "b3", genre: "g3", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db or any other resource
        return _.find(books, { id: args.id });
      },
    },
  },
});

export const MyAppSchema = new GraphQLSchema({
  query: RootQuery,
});
