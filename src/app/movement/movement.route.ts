import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValidationPage } from './pages';

const routes: Routes = [
  { path: '', component: ValidationPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovementRoutingModule { }