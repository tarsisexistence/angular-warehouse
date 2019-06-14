import { Note, Root } from 'routeshub';

export interface ShopNotes extends Root {
  all: Note;
  category: Note;
}

export const SHOP_HUB_KEY = Symbol();
