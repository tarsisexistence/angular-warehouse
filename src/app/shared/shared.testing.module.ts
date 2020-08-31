import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialModule } from './modules/material.module';

const sharedModules = [BrowserAnimationsModule, RouterTestingModule, MaterialModule];

@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules]
})
export class SharedTestingModule {}
