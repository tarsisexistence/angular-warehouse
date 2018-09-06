import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { appRouting } from '@app/app.routes';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    BrowserTransferStateModule,
    NoopAnimationsModule,
    appRouting,
    CoreModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
