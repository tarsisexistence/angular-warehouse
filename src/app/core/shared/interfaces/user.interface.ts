export interface User {
  id: string;
  email: string;
  catchPhrase?: string;
}

export interface Access {
  email: string;
  password: string;
}

export interface StorageUser {
  token: string;
}

export interface CatchPhraseConfig {
  id: string;
  catchPhrase: string;
}
