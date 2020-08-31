import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'app/app.component';
import { CoreModule } from 'core/core.module';

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'app-root' }), CoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
