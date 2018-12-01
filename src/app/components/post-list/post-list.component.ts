import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {JQueryStyleEventEmitter} from 'rxjs/observable/FromEventObservable';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  initialTag: string;
  firstTag: string;
  secondTag: string;
  titleShow: boolean;

  blender = {
    id: 6,
    title: "Blender for Swap",
    userName: "Anna",
    rate: 4,
    image: "blender.jpg",
    wishlist:["iphone", "airbed"]
  };

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

  constructor(private userService: UserService) { }

  ngOnInit() {

    if (this.userService.user && this.userService.user.email != "anna@husky.neu.edu") {
      this.postList.unshift(this.blender);
    }
    this.initialTag = 'What you want?';
    this.firstTag = 'What you want?';
    this.secondTag = 'Others wish-list';
    this.titleShow = false;

    if (this.userService.user.pendingRate ) {
      // console.log(document.getElementById('reviewModal'));

      var dialog = document.getElementById('reviewModal');
      dialog.className += 'in';
      dialog.style.display = "block";
    }
  }

  currentRate: number = 0;
  review(event, index) {
    // console.log('rating: ' + index);
    this.currentRate = index;
  }

  completeTransaction() {

    LoginComponent.anna.avgRate =
      (LoginComponent.anna.avgRate * LoginComponent.anna.numberOfRate + this.currentRate) / (LoginComponent.anna.numberOfRate + 1);
    LoginComponent.anna.numberOfRate++;
    // console.log(document.getElementById('reviewModal'));

    var dialog = document.getElementById('reviewModal');
    dialog.className += 'in';
    dialog.style.display = "none";
    this.userService.user.pendingRate = false;

  }

  changeInitial(tagname){
    console.log(tagname);
    if(tagname === 'Others wish-list'){
      this.titleShow = true;
    }else{
      this.titleShow = false;
    }
    this.initialTag = tagname;
  }

}
