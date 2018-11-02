import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  yourPostList = [
    {
      id: 1,
      title: "Blender for Swap"
    },
    {
      id: 2,
      title: "Iphone 5"
    }];

  inTransactionPosts = [
    {
      id: 1,
      title: "Blender for Swap"
    },
    {
      id: 2,
      title: "Old desk"
    }
];

  historyPosts = [
    {
      id: 4,
      title: "HCI book",
      date: "10-16-2018"
    },
    {
      id: 5,
      title: "Head phone",
      date: "9-24-2018"
    }];

  wishlist = [
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
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  openReviewModal(){
    document.getElementById('#reviewModal');
  }


}
