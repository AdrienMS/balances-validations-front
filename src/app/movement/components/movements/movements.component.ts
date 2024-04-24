import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GlobalFormComponent } from '@shared/components';

import { EReason } from '../../enums';
import { IMovementForm } from '../../interfaces';
import { Reason } from '../../models';

@Component({
  selector: 'movements',
  templateUrl: './movements.component.html',
  styleUrl: './movements.component.scss',
})
export class MovementsComponent extends GlobalFormComponent {
  @Input({required: true}) override formCtrl!: FormControl<IMovementForm[]>;
  @Input() override reasons?: Reason[];

  protected override _addGroup(): void {
    this.formCtrl.value.push(this._fb.group({
      id: this._fb.nonNullable.control(0),
      date: this._fb.nonNullable.control(new Date()),
      wording: this._fb.nonNullable.control(''),
      amount: this._fb.nonNullable.control(0),
    }));
  }

  public onError(id: number | undefined): string[] | null {
    if (id === undefined) return null;
    const error: string[] = [];
    this.reasons?.forEach(reason => {
      if (reason.outRange?.id === id && !error.includes('Out of Range')) error.push('Out of Range');
      reason.duplicate?.forEach(duplicate => {
        if (duplicate.id === id && !error.includes('Duplicated')) error.push('Duplicated');
      });
    });
    return error.length ? error : null;
  }
  

  public fieldOnError(index: number, name: 'id' | 'date' | 'wording' | 'amount'): string | null {
    let error: string | null = null;
    this.reasons?.forEach(reason => {
      if (reason.reason === EReason.PARAMETER) {
        const reasonParam: Pick<Required<Reason>, 'reason' | 'detail'> = reason as Required<Reason>;
        const value = reasonParam.detail.split(' ')[0].split('.');
        const object = value[0];
        const i = value[1];
        const field = value[2];
        if (object === 'movements' && parseInt(i) === index && field === name) {
          error = reasonParam.detail.split(' ').slice(1).join(' ');
        }
      }
    });
    return error;
  }
}
