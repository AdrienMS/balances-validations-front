import { Component, Input } from '@angular/core';

import { EReason } from '../../enums';
import { Movement, Reason } from '../../models';

@Component({
  selector: 'error-panel',
  templateUrl: './error-panel.component.html',
  styleUrl: './error-panel.component.scss'
})
export class ErrorPanelComponent {
  @Input({ required: true }) reasons!: Reason[];

  public get arrayTypes(): EReason[] {
    return Object.values(EReason);
  }

  public getReasonType(type: EReason): Reason[] {
    return this.reasons.filter(r => r.reason === type);
  }

  public getDuplicated(movements: Movement[] | undefined): string | undefined {
    if (movements && movements.length) {
      return movements.map((movement, index) => {
        return `Movement identifier ${movement.id}${index + 1 < movements.length ? ' with ' : ''}`;
      }).join();
    }
    return undefined;
  }

  public getOutRange(movement: Movement | undefined): string | undefined {
    return movement ? `Movement identifier : ${movement.id}` : undefined;
  }
}
