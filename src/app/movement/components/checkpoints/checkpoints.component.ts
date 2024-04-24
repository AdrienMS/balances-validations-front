import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GlobalFormComponent } from '@shared/components';

import { EReason } from '../../enums';
import { ICheckpointForm } from '../../interfaces';
import { Reason } from '../../models';

@Component({
  selector: 'checkpoints',
  templateUrl: './checkpoints.component.html',
  styleUrl: './checkpoints.component.scss'
})
export class CheckpointsComponent extends GlobalFormComponent {
  @Input({required: true}) override formCtrl!: FormControl<ICheckpointForm[]>;
  @Input() override reasons?: Reason[];

  protected override _addGroup(): void {
    this.formCtrl.value.push(this._fb.group({
      balance: this._fb.nonNullable.control(0),
      date: this._fb.nonNullable.control(new Date())
    }));
  }

  public fieldOnError(index: number, name: 'balance' | 'date'): string | null {
    let error: string | null = null;
    this.reasons?.forEach(reason => {
      if (reason.reason === EReason.PARAMETER) {
        const reasonParam: Pick<Required<Reason>, 'reason' | 'detail'> = reason as Required<Reason>;
        const value = reasonParam.detail.split(' ')[0].split('.');
        const object = value[0];
        const i = value[1];
        const field = value[2];
        if (object === 'balances' && parseInt(i) === index && field === name) {
          error = reasonParam.detail.split(' ').slice(1).join(' ');
        }
      }
    });
    return error;
  }
}
