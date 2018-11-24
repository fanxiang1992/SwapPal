import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService) { }

  errorMsg: string;
  globalErrorMsg: string;
  emailErrMsg: string;

  ngOnInit() {
  }

  register(registerForm){
    // var arr = registerForm.username.split("@");
    // if(arr[1]!== null && arr[1]!== "husky.neu.edu"){
    //   this.emailErrMsg = "Please user your husky email to register";
    // }
    if(!registerForm.valid){
      this.globalErrorMsg = 'Please enter the required fields';
    }else{
      console.log('username',registerForm);
      this.userService.register(registerForm).then((res:any) =>{
        if(res == null){
          this.globalErrorMsg = 'Registration failed or your account has been already registered';
        }else{
          this.router.navigate(['post-list']);
        }
      });
    }
  }
}
