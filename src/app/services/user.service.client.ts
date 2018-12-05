import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';


// injecting service into module
@Injectable()

export class UserService {
  user: any = {name: ""};
  userId: any;

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
        description: "Recently replaced battery for this phone, and just upgrade to iOS 12. Work like a charm.",
        wishlist:["bag"]
      }
    ],
    inTransactionPosts: [
      {
        id: 98,
        title: "EarPhone",
        image: ["earphone.jpeg"],
        swapper: "Jerry",
        description: "Like new condition",
        wishlist: ["sunglasses"]
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
        description: "It may not look good, but it's bed bug free. Better than what you will get from Allston Chrismas.",
        wishlist:["towerfan"]
      }
    ],
    inTransactionPosts: [],
    historyPosts: [],
    wishlist: []
  };

  postList = [
    {
      id: 1,
      title: "Google Pixel",
      userName: "Julian",
      email: "julian@husky.neu.edu",
      rate: 5,
      image: ["google-pixel.jpg", "google-pixel2.jpeg"],
      description: "Shows significant signs of use, heavy scratches on display and body. SIM card NOT included. Unlocked phones will work with most GSM SIM Cards, please check with your Carrier to ensure compatibility. You will receive the listed phone, and non-OEM compatible charger. Nothing else will be included unless specifically listed in our listing. Clean IMEI, 100% fully functional. Stock PHOTOS: You will receive the listed phone in the condition as described above.",
      wishlist:["desktop", "kindle"]
    },
    {
      id: 2,
      title: "Air Jordon 1",
      userName: "James",
      email: "james@husky.neu.edu",
      rate: 4,
      image: ["aj1.jpg"],
      description: "New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached.",
      wishlist:["blender"]
    },
    {
      id: 3,
      title: "50 year's desk",
      userName: "Elsa",
      email: "elsa@husky.neu.edu",
      rate: 3,
      image: ["desk.png"],
      description: "As you can see, it's old, but functional. It will stand firm and do what a desk suppose to do.",
      wishlist: ["airbed"]
    }
  ];

  constructor(private _http: Http,
              private router: Router,
              public af:  AngularFireAuth,
              private db: AngularFireDatabase,
              private http: HttpClient) { }

              register(registerForm: any) {

    console.log(registerForm.value.username);
                  return this.af.auth.createUserWithEmailAndPassword(registerForm.value.username, registerForm.value.password)
                    .then((success) => {
                      const user: any = firebase.auth().currentUser;
                      this.userId = user.uid;
                      return success;
                    }).catch((error : any) => {
                      return null;
                    });
              }

              login( loginForm: any){
                  return this.af.auth.signInWithEmailAndPassword(loginForm.value.username, loginForm.value.password).then((success)=>{
                    return success;
                  }).catch((error) =>{
                    return null;
                  });
              }


              getPostList(){
                let totalList : any = this.postList.concat();
                UserService.anna.postList.forEach(function(post) {
                  post['userName'] = UserService.anna.name;
                  post['rate'] =  UserService.anna.avgRate;
                  post['email'] = UserService.anna.email;
                  totalList.push(post);
                })
                UserService.edward.postList.forEach(function(post) {
                  post['userName'] = UserService.edward.name;
                  post['rate'] =  UserService.edward.avgRate;
                  post['email'] = UserService.edward.email;
                  totalList.push(post);
                })
                if (this.user.name != UserService.anna.name && this.user.name != UserService.edward.name && this.user.postList) {
                  let name = this.user.name;
                  let rate = this.user.avgRate;
                  this.user.postList.forEach(function(post) {
                    post['userName'] = name;
                    post['rate'] = rate;
                    totalList.push(post);
                  })
                }
                return totalList;
              }
}
