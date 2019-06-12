import { User, UserInput, CreateUserInput } from "./models";
import { users } from "../fakeData";
import { PubSub } from "apollo-server-express";

const pubsub = new PubSub();
const TRIGGER_NAME = "userEmailUpdated";

export const resolvers = {
  Query: {
    hello: () => "Skyrt",
    user: (root: any, args: UserInput) => {
      return users.find(user => user.id === args.id);
    },
    allUsers: () => {
      return users;
    }
  },
  Mutation: {
    createUser: (root: any, args: CreateUserInput) => {
      const { name, surname, email } = args.input;

      const newUser = {
        id: "5",
        name: name,
        surname: surname,
        email: email
      } as User;

      users.push(newUser);

      return newUser;
    },
    updateUserEmail: (root: any, args: any) => {
      const user = users.find(user => user.id === args.input.id);
      if (user) {
        user.email = args.input.email;

        pubsub.publish(TRIGGER_NAME, {
          userEmailUpdated: { id: user.id, email: user.email }
        });

        return user;
      }
    }
  },
  Subscription: {
    userEmailUpdated: {
      subscribe: () => pubsub.asyncIterator(TRIGGER_NAME)
    }
  },
  User: {
    username: (parent: User) => `${parent.surname[0]}${parent.name}`
  }
};
