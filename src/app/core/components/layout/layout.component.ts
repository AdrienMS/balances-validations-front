import { Component } from '@angular/core';

@Component({
  selector: 'layout',
  template: `
    <header class="layout">
      <mat-toolbar class="layout--toolbar">
        <button mat-icon-button class="layout--menu">
          <mat-icon>menu</mat-icon>
        </button>
        <img src="assets/img/logo.png" alt="logo" class="layout--logo">
        <span>Balances validations</span>
      </mat-toolbar>
    </header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ['.layout--logo { height: 70%; }', '.container { width: 90vw; margin: 0 auto; }']
})
export class LayoutComponent {}
