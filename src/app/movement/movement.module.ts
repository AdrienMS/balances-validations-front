import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '@shared/shared.module';

import {
  CheckpointsComponent,
  MovementsComponent
} from './components';
import { ValidationPage } from './pages';

import { MovementRoutingModule } from './movement.route';
import { ErrorPanelComponent } from './components/error-panel/error-panel.component';

@NgModule({
  declarations: [
    // PAGES
    ValidationPage,

    // Components
    CheckpointsComponent,
    MovementsComponent,
    ErrorPanelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatSnackBarModule,

    SharedModule,

    MovementRoutingModule,
  ],
})
export class MovementModule { }
