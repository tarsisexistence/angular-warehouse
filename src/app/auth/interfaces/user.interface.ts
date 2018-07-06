export interface User extends Access {
  id: string;
  catchPhrase?: string;
}

export interface Access {
  email: string;
  password: string;
}
