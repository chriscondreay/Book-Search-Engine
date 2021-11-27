const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    username: String!
  }

  type User {
    _id: ID!
    username: String
    book_saved: String
  }

  type Query {
    book: [Book]
    user(_id: String): [User]
  }

  type Mutation {
    createUser(username: String!, book: String!): User
    createSave(_id: String!, bookNum: Int!): User
  }
`;

module.exports = typeDefs;
