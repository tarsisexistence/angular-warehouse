import { ApplicationRef, NgModuleRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

export function bootstrapWithHmr(module: any, boot: () => Promise<NgModuleRef<any>>): any {
  let ngModule: NgModuleRef<any>;

  module['hot'].accept();

  module['hot'].dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map((c) => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);

    ngModule.destroy();

    makeVisible();
  });

  return boot().then((reference) => (ngModule = reference));
}
