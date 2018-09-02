import 'hammerjs';
import {
  ApplicationRef,
  enableProdMode
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableDebugTools } from '@angular/platform-browser';

import { hmrBootstrap } from './main.hmr';
import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';

if (environment.production) {
  window.console.log = () => {
  };

  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (!environment.hmr) {
  bootstrap()
      .then(ref => {
        if (environment.production) {
          return;
        }

        const applicationRef = ref.injector.get(ApplicationRef);
        const appComponent = applicationRef.components[0];
        enableDebugTools(appComponent);
      })
      .catch(err => console.log(err));
} else {
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
    console.log('hmr is on');
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
}

// TODO: bootstrap on the server
// document.addEventListener('DOMContentLoaded', () => {
//   platformBrowserDynamic().bootstrapModule(AppModule)
//       .catch(err => console.log(err));
// });