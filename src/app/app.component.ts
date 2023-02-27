import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'software';
  test = 'prueba';

  currencyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.currencyForm = this.formBuilder.group({
      from: '',
      to: '',
      amount: ''
    });
  }

  submit() {
    console.log(this.currencyForm.value);
  }
}
