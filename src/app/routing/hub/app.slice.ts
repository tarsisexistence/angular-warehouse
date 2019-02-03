import { createRoot, Slice } from 'routeshub';

import { appNotes, AppNotes as R } from './app.notes';

/**
 * Hub initialization
 *
 * Creates and contains
 * stateful root routes
 */
export const appSlice: Slice<R> = createRoot<R>(appNotes);
