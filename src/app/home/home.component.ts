import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  myForm:FormGroup;
  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      info: this.fb.array([])
    })
  }

  get info(): any {
    return this.myForm.controls['info'];
  }

  add() {
    const infoForm = this.fb.group({
      name: ['', Validators.required],
      skills: [1, Validators.required]
    });
    this.info.push(infoForm);
  }

  delete(i: number) {
    this.info.removeAt(i);
  }

  submit() {
    console.log(this.myForm.value);
  }
}
