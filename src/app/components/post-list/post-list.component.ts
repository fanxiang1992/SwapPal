import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  currentRate: number = 0;

  open(event, index) {
    console.log('rating: ' + index);
    this.currentRate = index;
  }

}
