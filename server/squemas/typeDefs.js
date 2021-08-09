const { gql } = require('apollo-server-exoress');

const typeDefs = gql`
type User {
    _id: ID!
    username; String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    _id: ID!
    title: String!
    description: String
    authors: [String]
    image: String
    link: String
}

input BookInput {
    bookId: String!
    title: String!
    description: String
    authors: [String]
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    user: [User]
  }


type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookDate: BookInput!): User
    removeBook(bookId: ID!): User
}`;

module.exports= typeDefs;