import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule } from '@angular/material';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list';

const materials = [
  CommonModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatListModule,
  MatGridListModule
];

@NgModule({
  imports: [...materials],
  exports: [...materials],
  declarations: []
})
export class MaterialModule { }
