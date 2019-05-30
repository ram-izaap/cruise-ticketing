import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{ 
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
    ) {

  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['']
    });
  }

  /**
   * login
   */
  public login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((resp) =>{
      console.log(resp);
      if (resp) {
        this.authService.setLoginStatus(true);
        this.route.navigate(['dashboard']);

      } else {
        alert('something went wrong..');
      }
      
    });
  }
}
