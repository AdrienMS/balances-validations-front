import { Component, Input } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

import { Subject } from 'rxjs';

@Component({
  template: `Create a template for your extended component`,
})
export class GlobalFormComponent {
  @Input({required: true}) onAdd!: Subject<void>;
  @Input({required: true}) formCtrl!: FormControl<unknown[]>;
  @Input() reasons?: unknown[];

  constructor(protected _fb: FormBuilder) {}

  ngOnInit(): void {
    this._addGroup();
    this._listenParent();
  }

  public onDelete(index: number): void {
    this.formCtrl.value?.splice(index, 1);
  }

  protected _addGroup(): void {
    this.formCtrl.value.push(this._fb.group({}));
  }

  private _listenParent(): void {
    this.onAdd.subscribe(() => this._addGroup());
  }
}
