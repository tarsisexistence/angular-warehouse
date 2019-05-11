import { createRoot, Slice } from 'routeshub';

import { appNotes, AppNotes as R } from './app.notes';

export const appSlice: Slice<R> = createRoot<R>(appNotes);
