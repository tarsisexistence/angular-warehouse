import 'hammerjs';
import {
  enableProdMode,
  NgModuleRef
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '!app/app.module';
import { environment } from '!env/environment';
import { hmrBootstrap } from './main.hmr';
import { setupNgProfiler } from './profiler';

if (environment.production) {
  window.console.log = () => {
  };

  enableProdMode();
}

const bootstrap: () => Promise<NgModuleRef<any>> = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

if (environment.hmr && module['hot']) {
  hmrBootstrap(module, bootstrap);
} else {
  bootstrap()
      .then((reference) => setupNgProfiler(reference))
      .catch(err => console.log(err));
}

// TODO: bootstrap on the server
// document.addEventListener('DOMContentLoaded', () => {
//   platformBrowserDynamic().bootstrapModule(AppModule)
//       .catch(err => console.log(err));
// });