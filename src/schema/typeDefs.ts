import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    hello: String
    user(id: ID): User
    allUsers: [User!]
  }

  type Mutation {
    createUser(input: createUserInput): User
    updateUserEmail(input: UpdateUserEmailInput): User
  }

  type Subscription {
    userEmailUpdated: userEmailUpdatedOutput
  }

  type userEmailUpdatedOutput {
    id: ID
    email: String
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

  input UpdateUserEmailInput {
    id: ID!
    email: String
  }
`;
