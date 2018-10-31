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
  user: any;
  userId: any;

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
}
