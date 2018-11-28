import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  initialTag: string;
  firstTag: string;
  secondTag: string;

  blender = {
    id: 6,
    title: "Blender for Swap",
    userName: "Anna",
    rate: 4,
    image: "blender.jpg",
    wishlist:["iphone"]
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
  }

  currentRate: number = 0;

  open(event, index) {
    console.log('rating: ' + index);
    this.currentRate = index;
  }

  changeInitial(tagname){
    this.initialTag = tagname;

  }

}
