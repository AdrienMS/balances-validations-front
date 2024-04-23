import { FormGroup, FormControl } from "@angular/forms";

export interface IMovementForm extends FormGroup<{
    id: FormControl<number>;
    date: FormControl<Date>;
    wording: FormControl<string>;
    amount: FormControl<number>;
}> {}