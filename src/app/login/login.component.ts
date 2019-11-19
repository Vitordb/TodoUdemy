import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= 'vitordb'
  password= ''
  errorMessage= 'Invalid credentials'
  invalidLogin= false


handleLogin() {

  if(this.username ==="vitordb" && this.password === '1234'){
    
    this.invalidLogin = false;
  } else {

    this.invalidLogin = true;
  }
}

  constructor() { }

  ngOnInit() {
  }

}
