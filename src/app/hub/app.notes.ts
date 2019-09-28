import { Note } from 'routeshub';

export interface AppNotes {
  cart: Note;
  home: Note;
  shop: Note;
  location: Note;
  userCenter: Note;
  notFound: Note;
}

export const APP_UNIT_KEY = Symbol();
