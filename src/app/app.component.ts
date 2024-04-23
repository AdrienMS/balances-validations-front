import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CoreModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
