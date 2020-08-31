import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from 'env/environment';
import { bootstrapWithHmr } from './main.hmr';
import { setupNgProfiler } from 'helpers/profiler';
import { AppModule } from 'app/app.module';

if (environment.production) {
  window.console.log = () => {};

  enableProdMode();
}

const isSSR = document.readyState === 'loading';

if (isSSR) {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}

export function bootstrapApp(): void {
  const boot: () => Promise<NgModuleRef<any>> = () => platformBrowserDynamic().bootstrapModule(AppModule);

  bootstrap(boot).then(setupNgProfiler).catch(console.error);
}

function bootstrap(boot: () => Promise<NgModuleRef<any>>): any {
  if (module['hot'] && environment.hmr) {
    return bootstrapWithHmr(module, boot);
  }

  return boot();
}
