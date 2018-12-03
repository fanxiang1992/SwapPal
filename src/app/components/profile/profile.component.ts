import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  postIndex: number;
  initialTag: string;
  firstTag: string;
  secondTag: string;
  profileRate: number = 5;
  numberOFRates: number = 1;

  newList: string[] =[];
  yourPostList = [];
  inTransactionPosts = [];
  historyPosts = [];
  wishlist = [];

  deletePost(i) {
    this.yourPostList.splice(i, 1);
  }

  cancelTransaction(i) {
    let myPost = this.inTransactionPosts[i];
    this.inTransactionPosts.splice(i, 1);
    myPost['userName'] = this.userService.user.name;
    myPost['email'] = this.userService.user.email;
    myPost['rate'] = this.userService.user.avgRate;
    myPost['swapperEmail'] = "";

    this.yourPostList.push(myPost);
  }

  completeTransaction(i) {
    let myPost = this.inTransactionPosts[i];
    this.inTransactionPosts.splice(i, 1);
    let myDate = new Date();
    if (myPost.swapper === 'ed') {
      LoginComponent.edward.pendingRate = true;
    }

    LoginComponent.edward.avgRate = (LoginComponent.edward.avgRate * LoginComponent.edward.numberOfRate + this.currentRate) / (LoginComponent.edward.numberOfRate + 1);
    LoginComponent.edward.numberOfRate++;
    this.historyPosts.push({
      id: myPost.id,
      title: myPost.title,
      swapper: myPost.swapper,
      date: (myDate.getMonth() + 1) + '-' + myDate.getDate() + '-' + myDate.getFullYear()
    });
  }


  constructor(private userService: UserService, private router: Router) {
    this.profileRate = this.userService.user.avgRate;
    this.numberOFRates = this.userService.user.numberOfRate;
    this.yourPostList = this.userService.user.postList || [];
    this.inTransactionPosts = this.userService.user.inTransactionPosts || [];
    this.historyPosts = this.userService.user.historyPosts || [];
    this.wishlist = this.userService.user.wishlist || [];
    console.log(this.userService.user);
  }



  ngOnInit() {
    this.initialTag = 'What you want?';
    this.firstTag = 'What you want?';
    this.secondTag = 'Others wish-list';
  }

  openReviewModal(){
    document.getElementById('#reviewModal');
  }


  addMore() {
    this.newList.push('newItem');
  }

  logout(){
    this.router.navigate(['login']);
  }

  sendInvitation(post) {
    post['swapper'] = post.swapperEmail.split('@')[0];
    this.yourPostList = this.yourPostList.filter(aPost => aPost.title != post.title);
    this.userService.user.postList = this.userService.user.postList.filter(aPost => aPost.title != post.title);
    this.inTransactionPosts.unshift(post);
  }

  updateIndex(i) {
    this.postIndex = i;
  }

  removeItem(k){
    this.newList.splice(k,1);
  }

  changeInitial(tagname){
    this.initialTag = tagname;

  }

  currentRate: number = 0;

  review(event, index) {
    console.log('rating: ' + index);
    this.currentRate = index;
  }

}
