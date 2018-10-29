import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

import { setupNgProfiler } from '~helpers/profiler';

export const hmrBootstrap = (
  module: any,
  bootstrap: () => Promise<NgModuleRef<any>>
): void => {
  let ngModule: NgModuleRef<any>;

  module.hot.accept();
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(
      (c: any) => c.location.nativeElement
    );
    const makeVisible = createNewHosts(elements);

    ngModule.destroy();
    makeVisible();
  });

  bootstrap().then((reference: any) => {
    ngModule = reference;
    setupNgProfiler(reference);
  });
};
