import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GlobalFormComponent } from '@shared/components';

import { IMovementForm } from '../../interfaces';
import { Reason } from '../../models';

@Component({
  selector: 'movements',
  templateUrl: './movements.component.html',
  styleUrl: './movements.component.scss',
})
export class MovementsComponent extends GlobalFormComponent {
  @Input({required: true}) override formCtrl!: FormControl<IMovementForm[]>;
  @Input() reasons?: Reason[];

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
      if (reason.outRange?.id === id) error.push('Out of Range');
      reason.duplicate?.forEach(duplicate => {
        if (duplicate.id === id && !error.includes('Duplicated')) error.push('Duplicated');
      });
    });
    return error.length ? error : null;
  }
}
