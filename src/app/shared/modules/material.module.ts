import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules = [MatIconModule, MatDialogModule, MatButtonModule, MatInputModule, MatTooltipModule];

@NgModule({
  exports: modules
})
export class MaterialModule {}
