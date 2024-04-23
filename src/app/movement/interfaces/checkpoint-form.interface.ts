import { FormGroup, FormControl } from "@angular/forms";

export interface ICheckpointForm extends FormGroup<{
    balance: FormControl<number>;
    date: FormControl<Date>;
}> {}