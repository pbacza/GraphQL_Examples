import { User, UserInput, CreateUserInput } from "./models";
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
    }
  },
  User: {
    username: (parent: User) => `${parent.surname[0]}${parent.name}`
  }
};
