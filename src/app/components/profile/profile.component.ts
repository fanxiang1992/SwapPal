import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  yourPostList = [
    {
      id: 1,
      title: "Blender for Swap",
      swapperEmail: ""
    },
    {
      id: 2,
      title: "Iphone 5",
      swapperEmail: ""
    }];

  inTransactionPosts = [
    {
      id: 1,
      title: "Blender for Swap2"
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

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  openReviewModal(){
    document.getElementById('#reviewModal');
  }

  sendInvitation(post) {
    this.yourPostList = this.yourPostList.filter(aPost => aPost.title != post.title);
    this.inTransactionPosts.unshift(post);
  }


}
