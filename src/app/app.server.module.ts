import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { FlexLayoutServerModule } from '@angular/flex-layout/server';

import { AppModule } from '@app/app.module';
import { AppComponent } from '@app/app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule,
    FlexLayoutServerModule
  ],

  bootstrap: [AppComponent]
})
export class AppServerModule {
}