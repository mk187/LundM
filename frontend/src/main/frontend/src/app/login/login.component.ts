import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  login() {
    console.log(this.email, this.password);
  }

}
