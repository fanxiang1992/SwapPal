import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  blender = {
    id: 6,
    title: "Blender for Swap",
    userName: "Anna",
    rate: 4,
    image: "blender.jpg"
  };

  postList = [
    {
      id: 1,
      title: "Google Pixel",
      userName: "Julian",
      rate: 5,
      image: "google-pixel.jpg"
    },
    {
      id: 2,
      title: "Air Jordon 1",
      userName: "James",
      rate: 4,
      image: "aj1.jpg"
    },
    {
      id: 3,
      title: "iPhone 5",
      userName: "Jobs",
      rate: 3.5,
      image: "iphone5.jpg"
    },
    {
      id: 4,
      title: "Awesome Matress",
      userName: "Edward",
      rate: 5,
      image: "matress.jpg"
    },
    {
      id: 5,
      title: "50 year's desk",
      userName: "Elsa",
      rate: 3,
      image: "desk.png"
    }
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    let userEmail:string = this.userService.user;
    if (userEmail != 'anna@husky.neu.edu') {
      this.postList.unshift(this.blender);
    }
  }

  currentRate: number = 0;

  open(event, index) {
    console.log('rating: ' + index);
    this.currentRate = index;
  }

}
