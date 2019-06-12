import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    "A simple hello example"
    hello: String
    "Get selected user on base of id"
    user(id: ID): User
    "Get all users"
    allUsers: [User!]
  }

  type User {
    id: ID!
    name: String
    surname: String
    username: String
    email: String
  }
`;
