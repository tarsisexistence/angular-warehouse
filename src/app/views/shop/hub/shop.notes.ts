import { Note, Root } from 'routeshub';

export interface ShopNotes extends Root {
  all: Note;
  category: Note;
}

export const SHOP_UNIT_KEY = Symbol();
