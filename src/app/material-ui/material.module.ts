import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule } from '@angular/material';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';

const materials = [
  CommonModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
];

@NgModule({
  imports: [...materials],
  exports: [...materials],
  declarations: []
})
export class MaterialModule { }
