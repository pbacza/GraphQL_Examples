import { User, userInput as UserInput } from "./models";
import { users } from "../fakeData";

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
  User: {
    username: (parent: User) => `${parent.surname[0]}${parent.name}`
  }
};
