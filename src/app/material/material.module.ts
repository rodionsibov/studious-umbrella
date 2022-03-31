import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

const MaterialComponents = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
