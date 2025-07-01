import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  }from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from 'src/app/shared/interfaces/eperson';


@Component({
  selector: 'app-eperson-reactive-form',
  imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './eperson-reactive-form.html',
  styleUrl: './eperson-reactive-form.css'
})
export class EpersonReactiveForm {

  form = new FormGroup({
    givenName: new FormControl('' ,Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(18, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email:new FormControl('',[Validators.required, Validators.email]),
    education: new FormControl('', Validators.required)
  });

  onSubmit(data:any) {
    console.log("Data", data);
    console.log("givenName>>", this.form.controls['givenName'].value);
    this.form.controls["surName"].setValue("Paplakis");
    console.log(this.form.value)
  }
  onSetValue() {
    this.form.setValue({
      givenName:"Kostas",
      surName:"lakakis",
      age: 32,
      email:"kostakis@aueb.gr",
      education:"Bachelor's degree"
    })
  }
}
