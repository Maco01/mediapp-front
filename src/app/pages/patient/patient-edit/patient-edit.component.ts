import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent {

  form: FormGroup;

  constructor(){

  }

  ngInit():void {
    this.form = new FormGroup({
      'idPatient' : new FormControl(0),
      'firstName' : new FormControl(''),
      'lastName' : new FormControl(''),
      'dni' : new FormControl(''),
      'address' : new FormControl(''),
      'phone' : new FormControl(''),
      'email' : new FormControl(''),
    });
  }

}
