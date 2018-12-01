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
  globalErrorMsg: string;

  public static anna = {
    id: 1,
    email: "anna@husky.neu.edu",
    numberOfRate: 1,
    avgRate: 4,
    pendingRate:false,
    name: "Anna",
    postList: [
      {
        id: 1,
        title: "Blender for Swap",
        swapperEmail: ""
      },
      {
        id: 2,
        title: "Iphone 5",
        swapperEmail: ""
      }
    ],
    inTransactionPosts: [
      {
        id: 1,
        title: "EarPhone",
        swapper: "Jerry"
      }
    ],
    historyPosts: [
      {
        id: 4,
        title: "HCI book",
        date: "10-16-2018",
        swapper: "Jack"
      },
      {
        id: 5,
        title: "Head phone",
        date: "9-24-2018",
        swapper: "Bobby"
      }
    ],
    wishlist: [
      {
        id: 5,
        title: "Chair",
      },
      {
        id: 6,
        title: "Table",
      },
      {
        id: 3,
        title: "Lamp",
      }
    ]
  };

  public static edward =  {
    id: 2,
    email: "ed@husky.neu.edu",
    numberOfRate: 1,
    avgRate: 3,
    pendingRate:false,
    name: "Edward",
    postList: [
      {
        id: 1,
        title: "Awesome Matress",
        swapperEmail: ""
      }
    ],
    inTransactionPosts: [
      {
        id: 1,
        title: "EarPhone",
        swapper: "Jerry"
      }
    ],
    historyPosts: [],
    wishlist: []
  };

  ngOnInit() {
  }

  login(loginForm){
    console.log('register form',loginForm);
    if(!loginForm.valid){
      this.globalErrorMsg = 'Please enter the required fields';
    }else{
      console.log('username',loginForm);
      this.userService.login(loginForm).then((res:any) =>{
        if(res == null){
          this.globalErrorMsg = 'Incorrect username/password';
        }else{
          this.setupUser();
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

  setupUser() {
    let currentUser : any = firebase.auth().currentUser;
    if (currentUser) {
      console.log(currentUser);
      let userEmail:string = currentUser.email;
      if (userEmail == 'anna@husky.neu.edu') {
        this.userService.user = LoginComponent.anna;
      } else {
        this.userService.user = LoginComponent.edward;
      }
    } else {
      this.userService.user = { email: "", name: "" };
    }
  }
}
