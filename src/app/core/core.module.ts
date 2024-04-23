import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LayoutComponent } from './components';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,

    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [LayoutComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
