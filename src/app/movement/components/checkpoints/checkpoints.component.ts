import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GlobalFormComponent } from '@shared/components';

import { ICheckpointForm } from '../../interfaces';

@Component({
  selector: 'checkpoints',
  templateUrl: './checkpoints.component.html',
  styles: [`.checkpoints--content { display: flex; flex-direction: column; border: 1px solid whitesmoke; padding: 20px 10px 10px 10px; }`]
})
export class CheckpointsComponent extends GlobalFormComponent {
  @Input({required: true}) override formCtrl!: FormControl<ICheckpointForm[]>;

  protected override _addGroup(): void {
    this.formCtrl.value.push(this._fb.group({
      balance: this._fb.nonNullable.control(0),
      date: this._fb.nonNullable.control(new Date())
    }));
  }
}
