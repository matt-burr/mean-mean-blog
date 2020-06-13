import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public email: string;
  public password: string;

  constructor() {}

  ngOnInit(): void {}

  login() {
    console.log(this.email, this.password);
  }
}
