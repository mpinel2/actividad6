import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      first_name: new FormControl("", [
        Validators.required,
      ]),
      last_name: new FormControl("", [
        Validators.required,
      ]),
      username: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9_]{5,255}$/)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      image: new FormControl("", [
        Validators.required
      ]),
    })
}


  getDataForm() {
    console.log(this.formModel.value)
  }

  checkControl(pControlName: string, pError: string): boolean {
    if (this.formModel.get(pControlName)?.hasError(pError) && this.formModel.get(pControlName)?.touched) {
      return true
    }
    return false
  }
}
