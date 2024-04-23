import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CardComponent, GlobalFormComponent } from './components';

@NgModule({
  declarations: [
    CardComponent,
    GlobalFormComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    CardComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
