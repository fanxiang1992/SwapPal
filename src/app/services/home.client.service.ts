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

export class HomeService {
  user: any;
  data: any;

  constructor(private _http: Http,
  private router: Router,
  public af:  AngularFireAuth,
  private db: AngularFireDatabase,
  private http: HttpClient) { }


}

