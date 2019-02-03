import { createRoot, Slice } from 'routeshub';

import { appNotes, AppRoutes as R } from './app.note';

/**
 * Hub initialization
 *
 * Creates and contains
 * stateful root routes
 */
export const appSlice: Slice<R> = createRoot<R>(appNotes);
