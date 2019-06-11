import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
    user(id: ID): User
    allUsers: [User!]
  }

  type Mutation {
    createUser(input: createUserInput): User
  }

  type User {
    id: ID!
    name: String
    surname: String
    username: String
    email: String
  }

  input createUserInput {
    name: String!
    surname: String!
    email: String!
  }
`;
