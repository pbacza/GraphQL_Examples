import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    "A simple hello example"
    hello: String
    """
    Get only user
    available in app
    """
    user: User
  }

  type User {
    id: ID!
    name: String
    surname: String
    username: String
    email: String
  }
`;
