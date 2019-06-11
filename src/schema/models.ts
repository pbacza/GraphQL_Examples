export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
}

export interface UserInput {
  id: string;
}

export interface CreateUserInput {
  input: {
    name: string;
    surname: string;
    email: string;
  };
}
