const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
  type me {
    name: String!
    email: String!
    iat: Int!
    exp: Int!
  }
  type User {
    name: String!
    email: String!
  }
  type Login {
    name: String!
    email: String!
    password: String!
    token: String!
  }

  type Mutation {
      createVendor(name: String!, type: String!, address: String): Vendor!
      login(email: String!, password: String!): Login!
  }

  type Vendor {
      id: ID!
      name: String!
      type: String!
      address: String! 
  }

  type Query {
    me: me!
    users: [User]!
    vendors: [Vendor!]!
  }
`;

