const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    name: String!
  }

  type User {
    _id: ID!
    name: String
    book_saved: String
  }

  type Query {
    book: [Book]
    user(_id: String): [User]
  }

  type Mutation {
    createUser(tech1: String!, book: String!): User
    createSave(_id: String!, bookNum: Int!): User
  }
`;

module.exports = typeDefs;
