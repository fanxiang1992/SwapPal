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
        id: 4,
        title: "Blender for Swap",
        swapperEmail: "",
        image: ["blender.jpg", "blender2.jpg", "blender3.jpg", "blender4.jpg", "blender5.jpg"],
        description: "I bought this blender last year. It has five program settings —Smoothies, Hot Soups, Dips & Spreads, Frozen Desserts and Self-Cleaning. It automatically adjust times and speeds for the container selected and stop the blender when done. You can find the specs of the blender here. https://www.amazon.com/Magic-Bullet-Blender-Small-Silver/dp/B012T634SM/ref=cm_cr_arp_d_product_top?ie=UTF8. The images are from Amazon. I used the blender 3-5 times ever since I bought it. It's practically almost new.",
        wishlist:["iphone", "airbed"]
      },
      {
        id: 5,
        title: "Iphone 5",
        swapperEmail: "",
        image: ["iphone5.jpg"],
        wishlist:["bag"]
      }
    ],
    inTransactionPosts: [
      {
        id: 98,
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
        id: 6,
        title: "Awesome Matress",
        swapperEmail: "",
        image: ["matress.jpg"],
        wishlist:["towerfan"]
      }
    ],
    inTransactionPosts: [
      {
        id: 99,
        title: "EarPhone",
        swapper: "Jerry",
        image:["earphone.jpeg"],
        wishList: ["sunglasses"]
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
      } else if (userEmail == 'ed@husky.neu.edu') {
        this.userService.user = LoginComponent.edward;
      } else {
        this.userService.user = {
          email: userEmail,
          name: userEmail.split('@')[0],
          numberOfRate: 0,
          avgRate: 0
        }
      }
    } else {
      this.userService.user = { email: "", name: "" };
    }
  }
}
