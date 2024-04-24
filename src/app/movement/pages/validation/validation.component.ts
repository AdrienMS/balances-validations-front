import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Subject } from 'rxjs';

import { ICheckpointForm, IMovementForm } from '../../interfaces';
import { Balance, Movement, Reason, ApiResponse } from '../../models';
import { MovementService } from '../../services';

@Component({
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.scss'
})
export class ValidationPage {
  public balancesGroup = this._fb.nonNullable.control<ICheckpointForm[]>([], [Validators.required, Validators.min(2)]);
  public movementsGroup = this._fb.nonNullable.control<IMovementForm[]>([], [Validators.required]);
  public validationForm = new FormGroup({
    balances: this.balancesGroup,
    movements: this.movementsGroup,
  });
  
  public addCheckpoint: Subject<void> = new Subject();
  public addMovement: Subject<void> = new Subject();

  public reasons?: Reason[];
  public isSuccess = false;

  constructor(
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _movementService: MovementService,
  ) {}

  public onAddCheckpoint() {
    this.addCheckpoint.next();
  }

  public onAddMovement() {
    this.addMovement.next();
  }

  public submit() {
    const balances: Partial<Balance>[] = this.balancesGroup.value.map(b => b.value);
    const movements: Partial<Movement>[] = this.movementsGroup.value.map(m => m.value);

    this._movementService.validation(balances, movements).subscribe({
      next: () => {
        this.reasons = undefined;
        this.isSuccess = true;
        this._openSnackBar('Validation success');
      },
      error: (e: HttpErrorResponse) => {
        this.isSuccess = false;
        this.reasons = (<ApiResponse>e.error).reasons;
        this._openSnackBar('Validation failed');
      },
    });
  }

  private _openSnackBar(message: string) {
    this._snackBar.open(message, undefined, { duration: 4000 });
  }
}
