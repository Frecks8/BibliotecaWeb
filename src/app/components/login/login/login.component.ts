import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public userForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ){}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name:['', Validators.required],
      password: ['', Validators.required]
    })
  }

  prueba(){
    console.log(this.userForm.value.name);
  }


}
