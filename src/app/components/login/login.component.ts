import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService) { }

  errorMsg: string;
  emailEnteredFlag: string;
  resetErrorMsg: string;

  ngOnInit() {
  }

  login(loginForm){
    console.log('register form',loginForm);
    if(!loginForm.valid){
      this.errorMsg = 'Please enter the required fields';
    }else{
      console.log('username',loginForm);
      this.userService.login(loginForm).then((res:any) =>{
        if(res == null){
          this.errorMsg = 'Incorrect username/password';
        }else{
          this.userService.user = res.email;
          this.router.navigate(['post-list']);
        }
      });
    }
  }

  resetPassword(resetForm){
    if(resetForm.valid) {
      this.emailEnteredFlag = 'An email has been sent with the reset password link';
      return firebase.auth().sendPasswordResetEmail(resetForm.value.resetEmail).then((success) => {
        console.log('email sent');
        document.getElementById('resetModelClose').click();
      }).catch((error) => {
        console.log('email not sent');
      });
    }else{
      this.resetErrorMsg = 'Please enter a valid email';
    }
  }
}
