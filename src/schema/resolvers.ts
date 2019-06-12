import { User } from "./models";

export const resolvers = {
  Query: {
    hello: () => "Skyrt",
    user: () => {
      return {
        id: "1",
        name: "Phil",
        surname: "Collins",
        email: "phil@collins.com"
      } as User;
    }
  },
  User: {
    username: (parent: User) => `${parent.surname[0]}${parent.name}`
  }
};
