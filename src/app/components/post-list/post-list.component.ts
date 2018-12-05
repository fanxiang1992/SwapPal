import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {JQueryStyleEventEmitter} from 'rxjs/observable/FromEventObservable';

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
  postList: any[] =[];

  blender = {
    id: 6,
    title: "Blender for Swap",
    userName: "Anna",
    rate: 4,
    image: "blender.jpg",
    wishlist:["iphone", "airbed"]
  };


  constructor(private userService: UserService) { }

  ngOnInit() {

    this.postList = this.userService.getPostList();
    // if (this.userService.user && this.userService.user.email != "anna@husky.neu.edu") {
    //   this.postList.unshift(this.blender);
    // }
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

    UserService.anna.avgRate =
      (UserService.anna.avgRate * UserService.anna.numberOfRate + this.currentRate) / (UserService.anna.numberOfRate + 1);
    UserService.anna.numberOfRate++;
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

  getImagePath(post) {
    if (post.image[0].includes("http")) {
      return post.image[0];
    } else {
      return 'assets/images/'+post.image[0];
    }
  }

}
