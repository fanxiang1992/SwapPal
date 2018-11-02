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
      title: "Old desk"
    }];

  historyPosts = [
    {
      id: 1,
      title: "HCI book",
      date: "10-16-2018"
    }];

  wishlist = [
    {
      id: 1,
      title: "Chair",
    },
    {
      id: 2,
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

}
