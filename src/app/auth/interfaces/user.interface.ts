export interface User extends Access {
  uid: string;
  catchPhrase?: string;
}

export interface Access {
  email: string;
  password: string;
}
