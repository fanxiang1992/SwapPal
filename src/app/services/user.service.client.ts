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

  postList = [
    {
      id: 1,
      title: "Google Pixel",
      userName: "Julian",
      rate: 5,
      image: "google-pixel.jpg",
      wishlist:["desktop"]
    },
    {
      id: 2,
      title: "Air Jordon 1",
      userName: "James",
      rate: 4,
      image: "aj1.jpg",
      wishlist:["blender"]
    },
    {
      id: 3,
      title: "iPhone 5",
      userName: "Jobs",
      rate: 3.5,
      image: "iphone5.jpg",
      wishlist:["bag"]
    },
    {
      id: 4,
      title: "Awesome Matress",
      userName: "Edward",
      rate: 5,
      image: "matress.jpg",
      wishlist:["towerfan"]
    },
    {
      id: 5,
      title: "50 year's desk",
      userName: "Elsa",
      rate: 3,
      image: "desk.png",
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
                return this.postList;
              }
}
