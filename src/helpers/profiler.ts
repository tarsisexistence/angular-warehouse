import { enableDebugTools } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core';

export const setupNgProfiler = (reference: any) => {
  const applicationRef = reference.injector.get(ApplicationRef);
  const appComponent = applicationRef.components[0];
  enableDebugTools(appComponent);
};
