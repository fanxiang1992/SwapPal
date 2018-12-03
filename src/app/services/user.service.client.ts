import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {LoginComponent} from '../components/login/login.component';
import 'rxjs/Rx';


// injecting service into module
@Injectable()

export class UserService {
  user: any = {name: ""};
  userId: any;

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
                LoginComponent.anna.postList.forEach(function(post) {
                  post['userName'] = LoginComponent.anna.name;
                  post['rate'] =  LoginComponent.anna.avgRate;
                  post['email'] = LoginComponent.anna.email;
                  totalList.push(post);
                })
                LoginComponent.edward.postList.forEach(function(post) {
                  post['userName'] = LoginComponent.edward.name;
                  post['rate'] =  LoginComponent.edward.avgRate;
                  post['email'] = LoginComponent.edward.email;
                  totalList.push(post);
                })
                if (this.user.name != LoginComponent.anna.name && this.user.name != LoginComponent.edward.name && this.user.postList) {
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
