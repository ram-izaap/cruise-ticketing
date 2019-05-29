import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private authService: AuthService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        email: [''],
        password: ['']
      }
    );

    // setTimeout(() => {
      this.authService.getBookingFormValue().subscribe((bf: BookingFormInterface) => {
        this.loginForm.setValue(bf);
      });
      
    // }, 5000);
  }

  /**
   * login
   */
  public login() {

    console.log(this.loginForm.value);
    // this.authService.setLoginStatus(true);
    // this.route.navigate(['dashboard']);
  }
}

export interface BookingFormInterface {
  email: string;
  password: string;
}
