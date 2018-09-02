import {
  NgModuleRef,
  ApplicationRef
} from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';
import { setupNgProfiler } from './profiler';

export const hmrBootstrap = (
    module: any,
    bootstrap: () => Promise<NgModuleRef<any>>
) => {
  let ngModule: NgModuleRef<any>;

  module.hot.accept();

  bootstrap().then((reference: any) => {
    ngModule = reference;

    setupNgProfiler(reference);
  });

  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};
